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

interface ShuffledQuestion extends Question {
  shuffledOptions: { letter: string; text: string }[]
  shuffledCorrectAnswer: string
}

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Shuffle answer options for a question
function shuffleQuestionOptions(question: Question): ShuffledQuestion {
  const options = [
    { letter: 'A', text: question.option_a },
    { letter: 'B', text: question.option_b },
    { letter: 'C', text: question.option_c }
  ]

  const shuffledOptions = shuffleArray(options)

  // Find new letter for correct answer
  const correctOptionText = question[`option_${question.correct_answer.toLowerCase()}` as keyof Question] as string
  const newCorrectLetter = shuffledOptions.find(opt => opt.text === correctOptionText)?.letter || 'A'

  return {
    ...question,
    shuffledOptions,
    shuffledCorrectAnswer: newCorrectLetter
  }
}

function QuizContent() {
  const [questions, setQuestions] = useState<ShuffledQuestion[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(90) // 90 seconds per question
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)
  const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0 })
  const [topicComplete, setTopicComplete] = useState(false)

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

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isAnswered) {
        if (e.key === 'Enter') {
          handleNextQuestion()
        }
        return
      }

      if (e.key === '1') {
        handleAnswerSelect('A')
      } else if (e.key === '2') {
        handleAnswerSelect('B')
      } else if (e.key === '3') {
        handleAnswerSelect('C')
      } else if (e.key === 'Enter' && selectedAnswer) {
        // Already selected, confirm
        setIsAnswered(true)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isAnswered, selectedAnswer, currentQuestionIndex, questions])

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

    // Map topic ID to question sets - load ALL questions
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

    const allQuestions = questionMap[topicId || ''] || []

    if (allQuestions.length > 0) {
      // Load saved progress and stats
      const { data: progressData, error: progressError } = await supabase
        .from('user_topic_progress')
        .select('current_question_index, questions_attempted, questions_correct')
        .eq('user_id', user.id)
        .eq('topic_id', topicId)
        .maybeSingle()

      console.log('progressData:', progressData)
      console.log('progressError:', progressError)
      console.log('user.id:', user.id)
      console.log('topicId:', topicId)

      // Shuffle answer options for all questions
      const shuffledQuestions = allQuestions.map(q => shuffleQuestionOptions(q))

      // Set all questions and resume from saved index
      setQuestions(shuffledQuestions)
      setCurrentQuestionIndex(progressData?.current_question_index || 0)

      // Restore session stats from saved progress
      const questionsCorrect = progressData?.questions_correct || 0
      const questionsAttempted = progressData?.questions_attempted || 0
      const questionsIncorrect = questionsAttempted - questionsCorrect

      setSessionStats({
        correct: questionsCorrect,
        incorrect: questionsIncorrect
      })

      setLoading(false)
      return
    }

    setLoading(false)
  }

  function handleTimeUp() {
    setIsAnswered(true)
    setSelectedAnswer(null)
    setSessionStats(prev => ({ ...prev, incorrect: prev.incorrect + 1 }))
    saveAnswer(false)
  }

  async function handleAnswerSelect(answer: string) {
    if (isAnswered) return

    setSelectedAnswer(answer)
    setIsAnswered(true)

    const currentQuestion = questions[currentQuestionIndex]
    const isCorrect = answer === currentQuestion.shuffledCorrectAnswer

    if (isCorrect) {
      const basePoints = 100 * currentQuestion.difficulty
      const timeBonus = Math.floor(basePoints * 0.5 * (timeLeft / 90))
      const totalPoints = basePoints + timeBonus

      setScore(score + totalPoints)
      setSessionStats(prev => ({ ...prev, correct: prev.correct + 1 }))
    } else {
      setSessionStats(prev => ({ ...prev, incorrect: prev.incorrect + 1 }))
    }

    await saveAnswer(isCorrect)
  }

  async function saveAnswer(isCorrect: boolean) {
    if (!userId) return

    const currentQuestion = questions[currentQuestionIndex]
    const pointsEarned = isCorrect ? (100 * currentQuestion.difficulty + Math.floor(100 * currentQuestion.difficulty * 0.5 * (timeLeft / 90))) : 0

    // Save to question_history
    await supabase.from('question_history').insert({
      user_id: userId,
      topic_id: currentQuestion.topic_id,
      question_text: currentQuestion.question_text,
      user_answer: selectedAnswer || 'TIMEOUT',
      correct_answer: currentQuestion.correct_answer,
      is_correct: isCorrect,
      time_taken: 90 - timeLeft,
      difficulty: currentQuestion.difficulty === 1 ? 'easy' : currentQuestion.difficulty === 2 ? 'medium' : 'hard',
      points_earned: pointsEarned
    })

    // Update user profile total_points
    if (isCorrect) {
      const { data: currentProfile } = await supabase
        .from('profiles')
        .select('total_points')
        .eq('id', userId)
        .single()

      const newTotal = (currentProfile?.total_points || 0) + pointsEarned

      await supabase
        .from('profiles')
        .update({ total_points: newTotal })
        .eq('id', userId)
    }

    // Update user_topic_progress - save next question index
    const { data: existingProgress } = await supabase
      .from('user_topic_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('topic_id', currentQuestion.topic_id)
      .maybeSingle()

    const nextQuestionIndex = currentQuestionIndex + 1

    if (existingProgress) {
      await supabase
        .from('user_topic_progress')
        .update({
          questions_attempted: existingProgress.questions_attempted + 1,
          questions_correct: existingProgress.questions_correct + (isCorrect ? 1 : 0),
          current_question_index: nextQuestionIndex,
          last_practiced_at: new Date().toISOString()
        })
        .eq('user_id', userId)
        .eq('topic_id', currentQuestion.topic_id)
    } else {
      await supabase.from('user_topic_progress').insert({
        user_id: userId,
        topic_id: currentQuestion.topic_id,
        questions_attempted: 1,
        questions_correct: isCorrect ? 1 : 0,
        current_question_index: nextQuestionIndex
      })
    }

    // If incorrect, add to spaced repetition
    if (!isCorrect) {
      await supabase.from('spaced_repetition_cards').insert({
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
    }
  }

  function handleNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
      setTimeLeft(90)
    } else {
      // Topic complete - last question reached
      setTopicComplete(true)
    }
  }

  async function handleRestartTopic() {
    if (userId && topicId) {
      // Reset progress to 0
      await supabase
        .from('user_topic_progress')
        .update({ current_question_index: 0 })
        .eq('user_id', userId)
        .eq('topic_id', topicId)
    }

    // Reload quiz from beginning
    setTopicComplete(false)
    setCurrentQuestionIndex(0)
    setSessionStats({ correct: 0, incorrect: 0 })
    setScore(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setTimeLeft(90)
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
          <p className="text-2xl mb-4" style={{ color: 'var(--fg-2)' }}>Aucune question disponible pour cette matière</p>
          <button
            onClick={() => router.push('/dashboard')}
            className="btn btn-primary"
          >
            Retour au Dashboard
          </button>
        </div>
      </div>
    )
  }

  // Topic complete screen
  if (topicComplete) {
    const topic = curriculum.find((t) => t.id === topicId)

    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-0)' }}>
        <div style={{ maxWidth: '540px', width: '100%', padding: '24px', textAlign: 'center' }}>
          <div style={{ fontSize: '64px', marginBottom: '24px' }}>🎯</div>
          <h1 style={{ fontSize: '32px', fontWeight: 600, color: 'var(--fg-0)', marginBottom: '12px' }}>
            Topic complété !
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--fg-2)', marginBottom: '40px' }}>
            Vous avez terminé toutes les {questions.length} questions de {topic?.titleEn}
          </p>

          {/* Stats */}
          <div style={{
            background: 'var(--bg-1)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius)',
            padding: '32px',
            marginBottom: '32px'
          }}>
            <div style={{ fontSize: '48px', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--acc)', marginBottom: '8px' }}>
              {sessionStats.correct}/{sessionStats.correct + sessionStats.incorrect}
            </div>
            <div style={{ fontSize: '13px', color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Bonnes réponses
            </div>
            <div style={{ marginTop: '24px', fontSize: '15px', color: 'var(--fg-2)' }}>
              Score: <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg-0)' }}>{score.toLocaleString()} pts</span>
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button onClick={handleRestartTopic} className="btn btn-primary" style={{ width: '100%' }}>
              Recommencer depuis le début
            </button>
            <button
              onClick={() => router.push('/dashboard')}
              className="btn btn-ghost"
              style={{ width: '100%' }}
            >
              Retour aux matières
            </button>
          </div>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  const topic = curriculum.find((t) => t.id === currentQuestion.topic_id)
  const isTimerUrgent = timeLeft < 30
  const totalAttempted = sessionStats.correct + sessionStats.incorrect
  const successRate = totalAttempted > 0 ? Math.round((sessionStats.correct / totalAttempted) * 100) : 0

  return (
    <div className="quiz-wrap">
      {/* Status strip */}
      <div className="quiz-status">
        <div className="qs-cell">
          <div className="l">MATIÈRE</div>
          <div className="v">
            <span className="acc">{topic?.titleEn?.split(' ')[0] || 'Quiz'}</span>
          </div>
        </div>
        <div className="qs-cell">
          <div className="l">QUESTION</div>
          <div className="v">{currentQuestionIndex + 1} / {questions.length}</div>
        </div>
        <div className="qs-cell">
          <div className="l">PRÉCISION</div>
          <div className="v">
            {sessionStats.correct} / {totalAttempted} · <span className="acc">{successRate}%</span>
          </div>
        </div>
        <div className={`qs-cell timer ${isTimerUrgent ? 'urgent' : ''}`}>
          <div className="l">CHRONO QUESTION</div>
          <div className="v">
            {String(Math.floor(timeLeft / 60)).padStart(2, '0')}:{String(timeLeft % 60).padStart(2, '0')}
            <span style={{ fontSize: '12px', color: 'var(--fg-3)' }}> / 01:30</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="qprog-wrap">
        <div className="qprog-head">
          <span>PROGRESSION</span>
          <span className="right">
            <span><span className="acc">●</span> {sessionStats.correct} CORRECTES</span>
            <span><span className="dn">●</span> {sessionStats.incorrect} INCORRECTES</span>
            <span><span style={{ color: 'var(--fg-2)' }}>●</span> {questions.length - totalAttempted} RESTANTES</span>
          </span>
        </div>
      </div>

      {/* Question card */}
      <div className="qcard">
        <div className="qhead">
          <div className="qhead-left">
            <span className="qhead-id">Q-{String(currentQuestionIndex + 1).padStart(2, '0')} · {currentQuestion.id}</span>
            <span className="tag">CFA-LIKE</span>
          </div>
          <div className="qhead-left">
            <span className="diff">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < currentQuestion.difficulty ? 'on' : ''}></span>
              ))}
            </span>
            <span className="diff-label">
              DIFFICULTÉ · {currentQuestion.difficulty === 1 ? 'FACILE' : currentQuestion.difficulty === 2 ? 'MOYEN' : 'DIFFICILE'}
            </span>
          </div>
        </div>

        <div className="qbody">
          <div className="qsection">
            {topic?.titleEn?.toUpperCase() || 'QUIZ'}
          </div>

          <p className="qstem">
            {currentQuestion.question_text}
          </p>

          <div className="choices">
            {currentQuestion.shuffledOptions.map((option, idx) => {
              const isSelected = selectedAnswer === option.letter
              const isCorrect = option.letter === currentQuestion.shuffledCorrectAnswer

              let className = 'choice'
              if (isAnswered) {
                if (isCorrect) className += ' correct'
                else if (isSelected && !isCorrect) className += ' wrong'
                className += ' disabled'
              } else if (isSelected) {
                className += ' selected'
              }

              return (
                <button
                  key={option.letter}
                  onClick={() => handleAnswerSelect(option.letter)}
                  disabled={isAnswered}
                  className={className}
                >
                  <div className="choice-letter">{option.letter}</div>
                  <div className="choice-text">{option.text}</div>
                  {!isAnswered && <div className="choice-key">{idx + 1}</div>}
                </button>
              )
            })}
          </div>
        </div>

        <div className="qfoot">
          <div className="qfoot-left">
            <button className="btn btn-ghost btn-sm btn-mono">⚑ SIGNALER</button>
          </div>
          <div className="qfoot-right">
            <span className="qfoot-hint">Choisir : <kbd>1</kbd><kbd>2</kbd><kbd>3</kbd> · Valider : <kbd>↵</kbd></span>
            {isAnswered && (
              <button className="btn btn-primary btn-mono" onClick={handleNextQuestion}>
                {currentQuestionIndex < questions.length - 1 ? 'QUESTION SUIVANTE ▸' : 'TERMINER ▸'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Feedback panel */}
      {isAnswered && (
        <div className={`feedback ${selectedAnswer !== currentQuestion.shuffledCorrectAnswer ? 'wrong' : ''}`}>
          <div className="fb-head">
            <div className="fb-head-left">
              {selectedAnswer === currentQuestion.shuffledCorrectAnswer ? (
                <svg viewBox="0 0 16 16" width="16" height="16" fill="var(--acc)">
                  <path d="M3 8l3 3 7-7-1.4-1.4L6 8.2 4.4 6.6z"/>
                </svg>
              ) : (
                <svg viewBox="0 0 16 16" width="16" height="16" fill="var(--danger)">
                  <path d="M13.5 2.5L8 8 2.5 2.5 2 3l5.5 5.5L2 14l.5.5L8 9l5.5 5.5.5-.5L8.5 8.5 14 3z"/>
                </svg>
              )}
              <span className="fb-verdict">
                {selectedAnswer === currentQuestion.shuffledCorrectAnswer ? 'BONNE RÉPONSE' : 'INCORRECT'} · {currentQuestion.shuffledCorrectAnswer}
              </span>
              <span className="tag mono">{90 - timeLeft}s</span>
            </div>
            <div className="fb-xp">
              {selectedAnswer === currentQuestion.shuffledCorrectAnswer
                ? `+ ${100 * currentQuestion.difficulty + Math.floor(100 * currentQuestion.difficulty * 0.5 * (timeLeft / 90))} XP`
                : '+ 0 XP'}
            </div>
          </div>
          <div className="fb-body">
            <div className="fb-section">
              <div className="fb-label">EXPLICATION</div>
              <p className="fb-text">
                {currentQuestion.explanation}
              </p>
            </div>

            <div className="fb-stats">
              <div>
                <div className="v">{successRate}%</div>
                <div className="l">PRÉCISION</div>
              </div>
              <div>
                <div className="v">{90 - timeLeft}s</div>
                <div className="l">TEMPS ÉCOULÉ</div>
              </div>
              <div>
                <div className="v">{currentQuestion.difficulty} / 5</div>
                <div className="l">DIFFICULTÉ</div>
              </div>
              <div>
                <div className="v">{currentQuestionIndex + 1} / {questions.length}</div>
                <div className="l">PROGRESSION</div>
              </div>
            </div>
          </div>
        </div>
      )}
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
