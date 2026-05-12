'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { curriculum } from '@/data/curriculum'
import { Clock, CheckCircle, XCircle, Trophy, Target } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

interface Question {
  id: string
  topic_id: string
  question_text: string
  option_a: string
  option_b: string
  option_c: string
  correct_answer: string
  explanation: string
  difficulty: number
}

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(90) // 90 seconds per question
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)

  const router = useRouter()
  const searchParams = useSearchParams()
  const topicId = searchParams.get('topic')

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    loadQuiz()
  }, [topicId])

  useEffect(() => {
    if (!isAnswered && questions.length > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTimeUp()
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [currentQuestionIndex, isAnswered, questions])

  async function loadQuiz() {
    setLoading(true)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }
    setUserId(user.id)

    // Get 10 random questions for the topic
    let query = supabase
      .from('questions')
      .select('*')
      .limit(10)

    if (topicId) {
      query = query.eq('topic_id', topicId)
    }

    const { data } = await query

    if (data && data.length > 0) {
      // Shuffle questions
      const shuffled = [...data].sort(() => Math.random() - 0.5)
      setQuestions(shuffled)
    }

    setLoading(false)
  }

  function handleTimeUp() {
    setIsAnswered(true)
    setSelectedAnswer(null)
    saveAnswer(false)
  }

  async function handleAnswerSelect(answer: string) {
    if (isAnswered) return

    setSelectedAnswer(answer)
    setIsAnswered(true)

    const currentQuestion = questions[currentQuestionIndex]
    const isCorrect = answer === currentQuestion.correct_answer

    if (isCorrect) {
      // Calculate points: base 100 × difficulty + time bonus (up to 50%)
      const basePoints = 100 * currentQuestion.difficulty
      const timeBonus = Math.floor(basePoints * 0.5 * (timeLeft / 90))
      const totalPoints = basePoints + timeBonus

      setScore(score + totalPoints)
    }

    await saveAnswer(isCorrect)
  }

  async function saveAnswer(isCorrect: boolean) {
    if (!userId) return

    const currentQuestion = questions[currentQuestionIndex]

    // Save to question_history
    await supabase.from('question_history').insert({
      user_id: userId,
      question_id: currentQuestion.id,
      topic_id: currentQuestion.topic_id,
      is_correct: isCorrect,
      time_taken: 90 - timeLeft,
      points_earned: isCorrect ? (100 * currentQuestion.difficulty + Math.floor(100 * currentQuestion.difficulty * 0.5 * (timeLeft / 90))) : 0
    })

    // Update user_topic_progress
    const { data: existingProgress } = await supabase
      .from('user_topic_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('topic_id', currentQuestion.topic_id)
      .single()

    if (existingProgress) {
      await supabase
        .from('user_topic_progress')
        .update({
          questions_attempted: existingProgress.questions_attempted + 1,
          questions_correct: existingProgress.questions_correct + (isCorrect ? 1 : 0),
          last_practiced_at: new Date().toISOString()
        })
        .eq('user_id', userId)
        .eq('topic_id', currentQuestion.topic_id)
    } else {
      await supabase.from('user_topic_progress').insert({
        user_id: userId,
        topic_id: currentQuestion.topic_id,
        questions_attempted: 1,
        questions_correct: isCorrect ? 1 : 0
      })
    }

    // If incorrect, add to spaced repetition
    if (!isCorrect) {
      await supabase.from('spaced_repetition_cards').insert({
        user_id: userId,
        question_id: currentQuestion.id,
        topic_id: currentQuestion.topic_id,
        interval: 1,
        ease_factor: 2.5,
        next_review: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      })
    }
  }

  function handleNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
      setTimeLeft(90)
    } else {
      // Quiz finished
      router.push('/dashboard')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Chargement du quiz...</div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gray-600 mb-4">Aucune question disponible pour cette matière</p>
          <button
            onClick={() => router.push('/dashboard')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retour au Dashboard
          </button>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  const topic = curriculum.find((t) => t.id === currentQuestion.topic_id)
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{topic?.titleFr || 'Quiz'}</h1>
              <p className="text-sm text-gray-600">
                Question {currentQuestionIndex + 1} sur {questions.length}
              </p>
            </div>

            <div className="flex gap-4">
              {/* Timer */}
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${timeLeft <= 10 ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                <Clock className="w-5 h-5" />
                <span className="font-bold text-lg">{timeLeft}s</span>
              </div>

              {/* Score */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-100 text-yellow-700">
                <Trophy className="w-5 h-5" />
                <span className="font-bold text-lg">{score.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Question */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          {/* Difficulty Badge */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Difficulté:</span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i < currentQuestion.difficulty ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Points possibles: {100 * currentQuestion.difficulty + Math.floor(100 * currentQuestion.difficulty * 0.5 * (timeLeft / 90))}
            </div>
          </div>

          {/* Question Text */}
          <h2 className="text-xl font-bold text-gray-900 mb-8">
            {currentQuestion.question_text}
          </h2>

          {/* Answer Options */}
          <div className="space-y-4 mb-8">
            {['A', 'B', 'C'].map((option) => {
              const optionText = currentQuestion[`option_${option.toLowerCase()}` as keyof Question] as string
              const isSelected = selectedAnswer === option
              const isCorrect = option === currentQuestion.correct_answer

              let bgColor = 'bg-gray-50 hover:bg-gray-100 border-gray-300'
              if (isAnswered) {
                if (isCorrect) {
                  bgColor = 'bg-green-100 border-green-500'
                } else if (isSelected && !isCorrect) {
                  bgColor = 'bg-red-100 border-red-500'
                }
              } else if (isSelected) {
                bgColor = 'bg-blue-100 border-blue-500'
              }

              return (
                <button
                  key={option}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-lg border-2 transition ${bgColor} ${
                    isAnswered ? 'cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center font-bold">
                      {option}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900">{optionText}</p>
                    </div>
                    {isAnswered && isCorrect && (
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Explanation */}
          {isAnswered && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 className="font-bold text-blue-900 mb-2">Explication:</h3>
              <p className="text-blue-800">{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <button
              onClick={handleNextQuestion}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Question Suivante' : 'Terminer le Quiz'}
            </button>
          )}
        </div>
      </main>
    </div>
  )
}
