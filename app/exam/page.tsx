'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { curriculum } from '@/data/curriculum'
import { Clock, CheckCircle, XCircle, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

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

interface Answer {
  questionIndex: number
  selectedAnswer: string | null
  isCorrect?: boolean
}

export default function ExamPage() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [timeLeft, setTimeLeft] = useState(4.5 * 60 * 60) // 4.5 hours in seconds
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)
  const [examStarted, setExamStarted] = useState(false)
  const [examFinished, setExamFinished] = useState(false)
  const [score, setScore] = useState(0)

  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    loadExam()
  }, [])

  useEffect(() => {
    if (examStarted && !examFinished) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleFinishExam()
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [examStarted, examFinished])

  async function loadExam() {
    setLoading(true)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }
    setUserId(user.id)

    // Get 180 questions distributed by topic weight
    const allQuestions: Question[] = []

    for (const topic of curriculum) {
      const count = Math.round(180 * topic.weight)
      const { data } = await supabase
        .from('questions')
        .select('*')
        .eq('topic_id', topic.id)
        .limit(count)

      if (data) {
        allQuestions.push(...data)
      }
    }

    // Shuffle questions
    const shuffled = allQuestions.sort(() => Math.random() - 0.5).slice(0, 180)
    setQuestions(shuffled)

    // Initialize answers array
    setAnswers(shuffled.map((_, index) => ({ questionIndex: index, selectedAnswer: null })))

    setLoading(false)
  }

  function handleStartExam() {
    setExamStarted(true)
  }

  function handleAnswerSelect(answer: string) {
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = {
      ...newAnswers[currentQuestionIndex],
      selectedAnswer: answer
    }
    setAnswers(newAnswers)
  }

  function handlePreviousQuestion() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  function handleNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  function handleJumpToQuestion(index: number) {
    setCurrentQuestionIndex(index)
  }

  async function handleFinishExam() {
    setExamFinished(true)

    // Calculate score
    let correctCount = 0
    const updatedAnswers = answers.map((answer, index) => {
      const question = questions[index]
      const isCorrect = answer.selectedAnswer === question.correct_answer
      if (isCorrect) correctCount++
      return { ...answer, isCorrect }
    })

    setAnswers(updatedAnswers)
    setScore((correctCount / questions.length) * 100)

    // Save exam result to database
    if (userId) {
      await supabase.from('exam_simulations').insert({
        user_id: userId,
        total_questions: questions.length,
        correct_answers: correctCount,
        score: (correctCount / questions.length) * 100,
        time_taken: (4.5 * 60 * 60) - timeLeft
      })
    }
  }

  function formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Chargement de l'examen...</div>
      </div>
    )
  }

  // Start screen
  if (!examStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl p-12 shadow-lg">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              📝 Examen Blanc CFA Level 1
            </h1>

            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="font-bold text-blue-900 mb-2">Informations:</h3>
                <ul className="list-disc list-inside text-blue-800 space-y-1">
                  <li>180 questions à choix multiples (A, B, C)</li>
                  <li>Durée: 4 heures 30 minutes</li>
                  <li>Questions réparties selon les poids officiels CFA</li>
                  <li>Score de passage: 70%</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h3 className="font-bold text-yellow-900 mb-2">⚠️ Conditions d'examen:</h3>
                <ul className="list-disc list-inside text-yellow-800 space-y-1">
                  <li>Une fois démarré, le chronomètre ne peut pas être mis en pause</li>
                  <li>Vous pouvez naviguer librement entre les questions</li>
                  <li>Les questions non répondues seront comptées comme incorrectes</li>
                  <li>Révisez vos réponses avant de terminer</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {curriculum.map((topic) => (
                  <div key={topic.id} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-1">
                      {topic.icon === 'Calculator' && '🔢'}
                      {topic.icon === 'TrendingUp' && '📈'}
                      {topic.icon === 'FileText' && '📄'}
                      {topic.icon === 'Building' && '🏢'}
                      {topic.icon === 'LineChart' && '📊'}
                      {topic.icon === 'DollarSign' && '💵'}
                      {topic.icon === 'GitBranch' && '🔀'}
                      {topic.icon === 'Briefcase' && '💼'}
                      {topic.icon === 'PieChart' && '🥧'}
                      {topic.icon === 'Scale' && '⚖️'}
                    </div>
                    <div className="text-xs text-gray-600">{(topic.weight * 100).toFixed(0)}%</div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleStartExam}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-bold text-xl hover:from-purple-700 hover:to-purple-800 transition"
            >
              Démarrer l'Examen
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Results screen
  if (examFinished) {
    const correctCount = answers.filter((a) => a.isCorrect).length
    const isPassing = score >= 70

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl p-12 shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {isPassing ? '🎉 Félicitations!' : '📚 Continuez vos efforts!'}
              </h1>
              <div className={`text-6xl font-bold mb-4 ${isPassing ? 'text-green-600' : 'text-orange-600'}`}>
                {score.toFixed(1)}%
              </div>
              <p className="text-xl text-gray-600">
                {correctCount} / {questions.length} réponses correctes
              </p>
              {isPassing ? (
                <p className="text-lg text-green-600 font-semibold mt-2">
                  ✅ Score de passage atteint (70%)
                </p>
              ) : (
                <p className="text-lg text-orange-600 font-semibold mt-2">
                  ⚠️ Score de passage: 70%
                </p>
              )}
            </div>

            {/* Topic breakdown */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Résultats par matière</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {curriculum.map((topic) => {
                  const topicQuestions = questions.filter((q) => q.topic_id === topic.id)
                  const topicAnswers = topicQuestions.map((q) => {
                    const index = questions.indexOf(q)
                    return answers[index]
                  })
                  const topicCorrect = topicAnswers.filter((a) => a.isCorrect).length
                  const topicScore = topicQuestions.length > 0 ? (topicCorrect / topicQuestions.length) * 100 : 0

                  return (
                    <div key={topic.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-gray-900">{topic.titleFr}</h3>
                        <span className={`font-bold ${topicScore >= 70 ? 'text-green-600' : 'text-orange-600'}`}>
                          {topicScore.toFixed(0)}%
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{topicCorrect} / {topicQuestions.length}</span>
                        <span>{(topic.weight * 100).toFixed(0)}% de l'examen</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
                        <div
                          className={`h-full ${topicScore >= 70 ? 'bg-green-500' : 'bg-orange-500'} transition-all`}
                          style={{ width: `${topicScore}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={() => router.push('/dashboard')}
                className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold hover:from-blue-700 hover:to-blue-800 transition"
              >
                Retour au Dashboard
              </button>
              <button
                onClick={() => window.location.reload()}
                className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-bold hover:from-purple-700 hover:to-purple-800 transition"
              >
                Nouvel Examen
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Exam interface
  const currentQuestion = questions[currentQuestionIndex]
  const currentAnswer = answers[currentQuestionIndex]
  const answeredCount = answers.filter((a) => a.selectedAnswer !== null).length
  const topic = curriculum.find((t) => t.id === currentQuestion.topic_id)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Examen Blanc CFA Level 1</h1>
              <p className="text-sm text-gray-600">
                Question {currentQuestionIndex + 1} sur {questions.length}
              </p>
            </div>

            <div className="flex gap-4">
              {/* Timer */}
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                timeLeft <= 600 ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
              }`}>
                <Clock className="w-5 h-5" />
                <span className="font-bold text-lg">{formatTime(timeLeft)}</span>
              </div>

              {/* Progress */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-bold">{answeredCount}/{questions.length}</span>
              </div>

              {/* Finish Button */}
              <button
                onClick={handleFinishExam}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-bold hover:from-purple-700 hover:to-purple-800 transition"
              >
                Terminer
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question navigator */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-3">Navigation</h3>
              <div className="grid grid-cols-6 gap-2 max-h-96 overflow-y-auto">
                {questions.map((_, index) => {
                  const answer = answers[index]
                  const isCurrent = index === currentQuestionIndex
                  const isAnswered = answer.selectedAnswer !== null

                  return (
                    <button
                      key={index}
                      onClick={() => handleJumpToQuestion(index)}
                      className={`w-10 h-10 rounded-lg font-bold text-sm transition ${
                        isCurrent
                          ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                          : isAnswered
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {index + 1}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Question */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              {/* Topic badge */}
              <div className="flex justify-between items-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                  <span>{topic?.titleFr}</span>
                </div>
                <div className="text-sm text-gray-500">
                  Question {currentQuestionIndex + 1} / {questions.length}
                </div>
              </div>

              {/* Question text */}
              <h2 className="text-xl font-bold text-gray-900 mb-8">
                {currentQuestion.question_text}
              </h2>

              {/* Answer options */}
              <div className="space-y-4 mb-8">
                {['A', 'B', 'C'].map((option) => {
                  const optionText = currentQuestion[`option_${option.toLowerCase()}` as keyof Question] as string
                  const isSelected = currentAnswer.selectedAnswer === option

                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswerSelect(option)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition ${
                        isSelected
                          ? 'bg-blue-100 border-blue-500'
                          : 'bg-gray-50 hover:bg-gray-100 border-gray-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${
                          isSelected ? 'bg-blue-500 text-white border-blue-500' : 'bg-white border-gray-300'
                        }`}>
                          {option}
                        </div>
                        <p className="text-gray-900 flex-1">{optionText}</p>
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
                    currentQuestionIndex === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Précédent
                </button>

                <button
                  onClick={handleNextQuestion}
                  disabled={currentQuestionIndex === questions.length - 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
                    currentQuestionIndex === questions.length - 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Suivant
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
