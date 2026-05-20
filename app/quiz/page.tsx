'use client'

import { useState, useEffect, Suspense } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { curriculum } from '@/data/curriculum'
import { ethicsQuestions } from '@/data/questions/ethics'
import { ethicsAdvancedQuestions } from '@/data/questions/ethics-advanced'
import { quantQuestions } from '@/data/questions/quant'
import { quantAdvancedQuestions } from '@/data/questions/quant-advanced'
import { economicsQuestions } from '@/data/questions/economics'
import { economicsAdvancedQuestions } from '@/data/questions/economics-advanced'
import { fraQuestions } from '@/data/questions/fra'
import { fraAdvancedQuestions } from '@/data/questions/fra-advanced'
import { corporateFinanceAdvancedQuestions } from '@/data/questions/corporate-finance-advanced'
import { equityAdvancedQuestions } from '@/data/questions/equity-advanced'
import { fixedIncomeAdvancedQuestions } from '@/data/questions/fixed-income-advanced'
import { derivativesAdvancedQuestions } from '@/data/questions/derivatives-advanced'
import { alternativeInvestmentsAdvancedQuestions } from '@/data/questions/alternative-investments-advanced'
import { portfolioManagementAdvancedQuestions } from '@/data/questions/portfolio-management-advanced'
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

function QuizContent() {
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
    console.log('=== loadQuiz START ===')
    console.log('Topic ID from URL:', topicId)
    setLoading(true)

    const { data: { user } } = await supabase.auth.getUser()
    console.log('User:', user?.id)

    if (!user) {
      console.log('No user, redirecting to login')
      router.push('/login')
      return
    }
    setUserId(user.id)

    // Map topic ID to question sets
    const questionMap: { [key: string]: Question[] } = {
      'ethical-standards': [...ethicsQuestions, ...ethicsAdvancedQuestions],
      'quantitative-methods': [...quantQuestions, ...quantAdvancedQuestions],
      'economics': [...economicsQuestions, ...economicsAdvancedQuestions],
      'financial-statement-analysis': [...fraQuestions, ...fraAdvancedQuestions],
      'corporate-issuers': corporateFinanceAdvancedQuestions,
      'equity-investments': equityAdvancedQuestions,
      'fixed-income': fixedIncomeAdvancedQuestions,
      'derivatives': derivativesAdvancedQuestions,
      'alternative-investments': alternativeInvestmentsAdvancedQuestions,
      'portfolio-management': portfolioManagementAdvancedQuestions
    }

    const topicQuestions = questionMap[topicId || ''] || []

    if (topicQuestions.length > 0) {
      // Show all questions in order
      setQuestions(topicQuestions)

      // Load saved progress
      const { data: progressData } = await supabase
        .from('user_topic_progress')
        .select('current_question_index')
        .eq('user_id', user.id)
        .eq('topic_id', topicId)
        .single()

      if (progressData && progressData.current_question_index > 0) {
        console.log('Resuming from question index:', progressData.current_question_index)
        setCurrentQuestionIndex(progressData.current_question_index)
      }

      setLoading(false)
      console.log('=== loadQuiz END: Loaded', topicQuestions.length, 'questions for', topicId, '===')
      return
    }

    // Fallback: try database for other topics
    console.log('No local questions, trying database...')
    let query = supabase
      .from('questions')
      .select('*')
      .limit(10)

    if (topicId) {
      query = query.eq('topic_id', topicId)
    }

    const { data } = await query

    if (data && data.length > 0) {
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
    console.log('=== saveAnswer START ===')
    console.log('userId:', userId)
    console.log('isCorrect:', isCorrect)

    if (!userId) {
      console.log('❌ No userId, aborting saveAnswer')
      return
    }

    const currentQuestion = questions[currentQuestionIndex]
    const pointsEarned = isCorrect ? (100 * currentQuestion.difficulty + Math.floor(100 * currentQuestion.difficulty * 0.5 * (timeLeft / 90))) : 0

    console.log('Question:', currentQuestion.id, currentQuestion.topic_id)
    console.log('Points earned:', pointsEarned)

    // Save to question_history
    console.log('📝 Inserting into question_history...')
    const { data: historyData, error: historyError } = await supabase.from('question_history').insert({
      user_id: userId,
      topic_id: currentQuestion.topic_id,
      question_text: currentQuestion.question_text,
      user_answer: selectedAnswer || 'TIMEOUT',
      correct_answer: currentQuestion.correct_answer,
      is_correct: isCorrect,
      time_taken: 90 - timeLeft,
      difficulty: currentQuestion.difficulty === 1 ? 'easy' : currentQuestion.difficulty === 2 ? 'medium' : 'hard',
      points_earned: pointsEarned
    }).select()

    if (historyError) {
      console.error('❌ Error inserting question_history:', historyError)
    } else {
      console.log('✅ question_history inserted:', historyData)
    }

    // Update user profile total_points
    if (isCorrect) {
      console.log('📊 Updating profile total_points...')
      const { data: currentProfile, error: profileSelectError } = await supabase
        .from('profiles')
        .select('total_points')
        .eq('id', userId)
        .single()

      if (profileSelectError) {
        console.error('❌ Error selecting profile:', profileSelectError)
      } else {
        console.log('Current profile total_points:', currentProfile?.total_points)

        const newTotal = (currentProfile?.total_points || 0) + pointsEarned
        console.log('New total will be:', newTotal)

        const { data: updateData, error: profileUpdateError } = await supabase
          .from('profiles')
          .update({
            total_points: newTotal
          })
          .eq('id', userId)
          .select()

        if (profileUpdateError) {
          console.error('❌ Error updating profile:', profileUpdateError)
        } else {
          console.log('✅ Profile updated:', updateData)
        }
      }
    }

    // Update user_topic_progress
    console.log('📈 Checking user_topic_progress...')
    const { data: existingProgress, error: progressSelectError } = await supabase
      .from('user_topic_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('topic_id', currentQuestion.topic_id)
      .single()

    if (progressSelectError && progressSelectError.code !== 'PGRST116') {
      console.error('❌ Error selecting progress:', progressSelectError)
    }

    if (existingProgress) {
      console.log('Updating existing progress:', existingProgress)
      const { data: progressData, error: progressUpdateError } = await supabase
        .from('user_topic_progress')
        .update({
          questions_attempted: existingProgress.questions_attempted + 1,
          questions_correct: existingProgress.questions_correct + (isCorrect ? 1 : 0),
          current_question_index: currentQuestionIndex,
          last_practiced_at: new Date().toISOString()
        })
        .eq('user_id', userId)
        .eq('topic_id', currentQuestion.topic_id)
        .select()

      if (progressUpdateError) {
        console.error('❌ Error updating progress:', progressUpdateError)
      } else {
        console.log('✅ Progress updated:', progressData)
      }
    } else {
      console.log('Creating new progress record')
      const { data: progressData, error: progressInsertError } = await supabase.from('user_topic_progress').insert({
        user_id: userId,
        topic_id: currentQuestion.topic_id,
        questions_attempted: 1,
        questions_correct: isCorrect ? 1 : 0,
        current_question_index: currentQuestionIndex
      }).select()

      if (progressInsertError) {
        console.error('❌ Error inserting progress:', progressInsertError)
      } else {
        console.log('✅ Progress created:', progressData)
      }
    }

    // If incorrect, add to spaced repetition
    if (!isCorrect) {
      console.log('📚 Adding to spaced_repetition_cards...')
      const { error: srError } = await supabase.from('spaced_repetition_cards').insert({
        user_id: userId,
        topic_id: currentQuestion.topic_id,
        question_text: currentQuestion.question_text,
        question_data: {
          id: currentQuestion.id,
          question_text: currentQuestion.question_text,
          option_a: currentQuestion.option_a,
          option_b: currentQuestion.option_b,
          option_c: currentQuestion.option_c,
          correct_answer: currentQuestion.correct_answer,
          explanation: currentQuestion.explanation,
          difficulty: currentQuestion.difficulty
        },
        difficulty: currentQuestion.difficulty === 1 ? 'easy' : currentQuestion.difficulty === 2 ? 'medium' : 'hard',
        next_review_date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      })

      if (srError) {
        console.error('❌ Error inserting spaced_repetition:', srError)
      } else {
        console.log('✅ Spaced repetition card created')
      }
    }

    console.log('=== saveAnswer END ===')
  }

  function handleNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
      setTimeLeft(90)
    } else {
      // Quiz finished - force reload dashboard with timestamp
      router.push(`/dashboard?refresh=${Date.now()}`)
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
    <div className="page">
      {/* Quiz Header */}
      <section className="quiz-header">
        <div className="wrap">
          <div className="quiz-header-top">
            <div>
              <h1 className="quiz-title">{topic?.titleFr || 'Quiz'}</h1>
              <p className="quiz-sub">
                Question {currentQuestionIndex + 1} sur {questions.length}
              </p>
            </div>
            <div className="quiz-stats">
              <div className="stat-pill stat-blue">
                <Clock className="w-5 h-5" />
                <span>{timeLeft}s</span>
              </div>
              <div className="stat-pill stat-green">
                <Trophy className="w-5 h-5" />
                <span>{score.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className="progress-bar-lg">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </section>

      {/* Question */}
      <section className="quiz-content">
        <div className="wrap" style={{ maxWidth: '960px' }}>
          <div className="question-card">
            {/* Difficulty & Points */}
            <div className="question-meta">
              <div className="difficulty-dots">
                <span>Difficulté:</span>
                <div className="dots">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="dot"
                      style={{
                        background: i < currentQuestion.difficulty ? 'var(--acc-amber)' : 'var(--line-soft)'
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="points-possible">
                Points possibles: {100 * currentQuestion.difficulty + Math.floor(100 * currentQuestion.difficulty * 0.5 * (timeLeft / 90))}
              </div>
            </div>

            {/* Question Text */}
            <h2 className="question-text">
              {currentQuestion.question_text}
            </h2>

            {/* Answer Options */}
            <div className="options">
              {['A', 'B', 'C'].map((option) => {
                const optionText = currentQuestion[`option_${option.toLowerCase()}` as keyof Question] as string
                const isSelected = selectedAnswer === option
                const isCorrect = option === currentQuestion.correct_answer

                let className = 'option'
                if (isAnswered) {
                  if (isCorrect) className += ' option-correct'
                  else if (isSelected && !isCorrect) className += ' option-wrong'
                } else if (isSelected) {
                  className += ' option-selected'
                }

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={isAnswered}
                    className={className}
                  >
                    <div className="option-letter">{option}</div>
                    <div className="option-text">{optionText}</div>
                    {isAnswered && isCorrect && (
                      <CheckCircle className="option-icon" style={{ color: 'var(--acc-green)' }} />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="option-icon" style={{ color: 'oklch(0.78 0.14 25)' }} />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Explanation */}
            {isAnswered && (
              <div className="explanation">
                <h3>Explication:</h3>
                <p>{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Next Button */}
            {isAnswered && (
              <button
                onClick={handleNextQuestion}
                className="btn btn-primary btn-lg"
              >
                {currentQuestionIndex < questions.length - 1 ? 'Question Suivante →' : 'Terminer le Quiz'}
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}


export default function QuizPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-2xl">Chargement...</div></div>}>
      <QuizContent />
    </Suspense>
  )
}
