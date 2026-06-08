'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { curriculum } from '@/data/curriculum'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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

// Topic icons (SVG paths from CFA_Prep.html)
const getTopicIcon = (topicId: string) => {
  const iconMap: { [key: string]: string } = {
    'quantitative-methods': '<path d="M3 14h10M3 11l3-4 3 2 4-6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    'economics': '<path d="M2 13h12M4 13V8m3 5V5m3 8V9m3 4V3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
    'financial-statement-analysis': '<rect x="3" y="2" width="10" height="12" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M5 5h6M5 8h6M5 11h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    'corporate-issuers': '<path d="M2 14h12M4 14V6l4-3 4 3v8M7 10h2M7 13h2" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    'equity-investments': '<path d="M8 2v12M3 7l5-5 5 5M3 11l5 3 5-3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    'fixed-income': '<path d="M2 8c2-3 4-3 6 0s4 3 6 0" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="8" cy="8" r="0.8" fill="currentColor"/>',
    'derivatives': '<path d="M3 13L13 3M3 3l3 3M10 10l3 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
    'alternative-investments': '<path d="M8 2L2 6v6l6 4 6-4V6z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M2 6l6 4 6-4M8 10v6" stroke="currentColor" stroke-width="1.5" fill="none"/>',
    'portfolio-management': '<circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 2v6l4 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    'ethical-standards': '<path d="M8 2L3 4v4c0 3 2 5 5 6 3-1 5-3 5-6V4z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M6 8l1.5 1.5L10 7" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
  }
  return iconMap[topicId] || iconMap['ethical-standards']
}

const getTopicCode = (topicId: string) => {
  const codeMap: { [key: string]: string } = {
    'quantitative-methods': 'QM',
    'economics': 'EC',
    'financial-statement-analysis': 'FSA',
    'corporate-issuers': 'CI',
    'equity-investments': 'EQ',
    'fixed-income': 'FI',
    'derivatives': 'DV',
    'alternative-investments': 'AI',
    'portfolio-management': 'PM',
    'ethical-standards': 'ES'
  }
  return codeMap[topicId] || 'XX'
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
      <div className="page">
        <section className="block">
          <div className="wrap" style={{ maxWidth: '960px' }}>
            <div className="eyebrow" style={{ marginBottom: '24px' }}>
              180 questions · 4h30 · Score de passage 70%
            </div>

            <h1 style={{ fontSize: '28px', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '48px' }}>
              Examen Blanc CFA Level 1
            </h1>

            {/* Info card */}
            <div style={{
              background: 'var(--bg-1)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              padding: '28px',
              marginBottom: '24px'
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '16px', color: 'var(--fg-0)' }}>
                Informations
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--fg-1)', fontSize: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M8 3v10" strokeLinecap="round"/>
                  </svg>
                  180 questions à choix multiples (A, B, C)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--fg-1)', fontSize: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="8" cy="8" r="6"/>
                    <path d="M8 4v4l2.5 1.5" strokeLinecap="round"/>
                  </svg>
                  Durée: 4 heures 30 minutes
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--fg-1)', fontSize: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 13h12M4 13V8m3 5V5m3 8V9m3 4V3" strokeLinecap="round"/>
                  </svg>
                  Questions réparties selon les poids officiels CFA
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--fg-1)', fontSize: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 1l2 4 4 .5-3 3 1 4-4-2-4 2 1-4-3-3 4-.5z"/>
                  </svg>
                  Score de passage: 70%
                </li>
              </ul>
            </div>

            {/* Conditions card */}
            <div style={{
              background: 'var(--bg-1)',
              border: '1px solid var(--line)',
              borderLeft: '2px solid var(--acc-amber)',
              borderRadius: 'var(--radius)',
              padding: '28px',
              marginBottom: '36px',
              position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--acc-amber)'
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  background: 'var(--acc-amber)',
                  borderRadius: '50%',
                  boxShadow: '0 0 8px var(--acc-amber)'
                }}></span>
                Conditions d'examen
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ color: 'var(--fg-2)', fontSize: '14px', lineHeight: '1.5' }}>
                  • Une fois démarré, le chronomètre ne peut pas être mis en pause
                </li>
                <li style={{ color: 'var(--fg-2)', fontSize: '14px', lineHeight: '1.5' }}>
                  • Vous pouvez naviguer librement entre les questions
                </li>
                <li style={{ color: 'var(--fg-2)', fontSize: '14px', lineHeight: '1.5' }}>
                  • Les questions non répondues seront comptées comme incorrectes
                </li>
                <li style={{ color: 'var(--fg-2)', fontSize: '14px', lineHeight: '1.5' }}>
                  • Révisez vos réponses avant de terminer
                </li>
              </ul>
            </div>

            {/* Topics grid */}
            <div style={{ marginBottom: '48px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '16px', color: 'var(--fg-0)' }}>
                Répartition par matière
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                gap: '12px'
              }}>
                {curriculum.map((topic) => (
                  <div
                    key={topic.id}
                    style={{
                      background: 'var(--bg-1)',
                      border: '1px solid var(--line-soft)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'var(--bg-0)',
                      border: '1px solid var(--line)',
                      display: 'grid',
                      placeItems: 'center',
                      color: 'var(--fg-1)'
                    }}>
                      <svg viewBox="0 0 16 16" width="16" height="16" dangerouslySetInnerHTML={{ __html: getTopicIcon(topic.id) }} />
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--fg-3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em'
                    }}>
                      {getTopicCode(topic.id)}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '16px',
                      fontWeight: 500,
                      color: 'var(--fg-0)'
                    }}>
                      {(topic.weight * 100).toFixed(0)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Start button */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button onClick={handleStartExam} className="btn btn-primary">
                Démarrer l'Examen
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Results screen
  if (examFinished) {
    const correctCount = answers.filter((a) => a.isCorrect).length
    const isPassing = score >= 70

    return (
      <div className="page">
        <section className="block">
          <div className="wrap" style={{ maxWidth: '960px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h1 style={{ fontSize: '28px', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                {isPassing ? 'Félicitations!' : 'Continuez vos efforts!'}
              </h1>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '56px',
                fontWeight: 500,
                color: isPassing ? 'var(--acc)' : 'var(--acc-amber)',
                marginBottom: '12px'
              }}>
                {score.toFixed(1)}%
              </div>
              <p style={{ fontSize: '16px', color: 'var(--fg-2)' }}>
                {correctCount} / {questions.length} réponses correctes
              </p>
              <p style={{
                fontSize: '14px',
                color: isPassing ? 'var(--acc)' : 'var(--acc-amber)',
                fontWeight: 500,
                marginTop: '12px'
              }}>
                {isPassing ? '✅ Score de passage atteint (70%)' : '⚠️ Score de passage: 70%'}
              </p>
            </div>

            {/* Topic breakdown */}
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '24px' }}>
                Résultats par matière
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                {curriculum.map((topic) => {
                  const topicQuestions = questions.filter((q) => q.topic_id === topic.id)
                  const topicAnswers = topicQuestions.map((q) => {
                    const index = questions.indexOf(q)
                    return answers[index]
                  })
                  const topicCorrect = topicAnswers.filter((a) => a.isCorrect).length
                  const topicScore = topicQuestions.length > 0 ? (topicCorrect / topicQuestions.length) * 100 : 0

                  return (
                    <div
                      key={topic.id}
                      style={{
                        background: 'var(--bg-1)',
                        border: '1px solid var(--line-soft)',
                        borderRadius: 'var(--radius)',
                        padding: '20px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--fg-0)' }}>
                          {topic.titleFr}
                        </h3>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '18px',
                          fontWeight: 500,
                          color: topicScore >= 70 ? 'var(--acc)' : 'var(--acc-amber)'
                        }}>
                          {topicScore.toFixed(0)}%
                        </span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--fg-3)', marginBottom: '8px' }}>
                        <span>{topicCorrect} / {topicQuestions.length}</span>
                        <span>{(topic.weight * 100).toFixed(0)}% de l'examen</span>
                      </div>
                      <div style={{
                        width: '100%',
                        height: '4px',
                        background: 'var(--bg-0)',
                        borderRadius: '99px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${topicScore}%`,
                          height: '100%',
                          background: topicScore >= 70 ? 'var(--acc)' : 'var(--acc-amber)',
                          borderRadius: '99px',
                          transition: 'width 0.6s ease'
                        }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <button onClick={() => router.push('/dashboard')} className="btn btn-ghost">
                Retour au Dashboard
              </button>
              <button onClick={() => window.location.reload()} className="btn btn-primary">
                Nouvel Examen
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Exam interface
  const currentQuestion = questions[currentQuestionIndex]
  const currentAnswer = answers[currentQuestionIndex]
  const answeredCount = answers.filter((a) => a.selectedAnswer !== null).length
  const topic = curriculum.find((t) => t.id === currentQuestion.topic_id)

  return (
    <div style={{ background: 'var(--bg-0)' }}>
      {/* Header */}
      <header style={{
        background: 'var(--bg-1)',
        borderBottom: '1px solid var(--line-soft)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div className="wrap">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 0'
          }}>
            <div>
              <h1 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '4px' }}>
                Examen Blanc CFA Level 1
              </h1>
              <p style={{ fontSize: '13px', color: 'var(--fg-3)', fontFamily: 'var(--font-mono)' }}>
                Question {currentQuestionIndex + 1} / {questions.length}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {/* Timer */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                borderRadius: '8px',
                background: timeLeft <= 600 ? 'oklch(0.78 0.14 25 / 0.10)' : 'var(--bg-2)',
                border: `1px solid ${timeLeft <= 600 ? 'oklch(0.78 0.14 25 / 0.25)' : 'var(--line)'}`,
                color: timeLeft <= 600 ? 'var(--danger)' : 'var(--fg-1)',
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                fontWeight: 500
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="8" cy="8" r="6"/>
                  <path d="M8 4v4l2.5 1.5" strokeLinecap="round"/>
                </svg>
                {formatTime(timeLeft)}
              </div>

              {/* Progress */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                borderRadius: '8px',
                background: 'oklch(0.78 0.16 145 / 0.10)',
                border: '1px solid oklch(0.78 0.16 145 / 0.25)',
                color: 'oklch(0.78 0.16 145)',
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                fontWeight: 500
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l3 3 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {answeredCount}/{questions.length}
              </div>

              {/* Finish Button */}
              <button onClick={handleFinishExam} className="btn btn-primary" style={{ padding: '8px 16px' }}>
                Terminer
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="wrap" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '24px' }}>
          {/* Question navigator */}
          <div>
            <div style={{
              background: 'var(--bg-1)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              padding: '16px',
              position: 'sticky',
              top: '100px'
            }}>
              <h3 style={{ fontSize: '13px', fontWeight: 500, marginBottom: '12px', fontFamily: 'var(--font-mono)', color: 'var(--fg-2)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Navigation
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '6px', maxHeight: '480px', overflowY: 'auto' }}>
                {questions.map((_, index) => {
                  const answer = answers[index]
                  const isCurrent = index === currentQuestionIndex
                  const isAnswered = answer.selectedAnswer !== null

                  return (
                    <button
                      key={index}
                      onClick={() => handleJumpToQuestion(index)}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        fontWeight: 500,
                        border: isCurrent ? '2px solid var(--acc)' : '1px solid var(--line)',
                        background: isAnswered ? 'oklch(0.78 0.16 145 / 0.10)' : 'var(--bg-0)',
                        color: isAnswered ? 'oklch(0.78 0.16 145)' : 'var(--fg-2)',
                        cursor: 'pointer',
                        transition: 'all 0.15s'
                      }}
                    >
                      {index + 1}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Question */}
          <div style={{
            background: 'var(--bg-1)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius)',
            padding: '32px'
          }}>
            {/* Topic badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: '8px',
                background: 'var(--bg-2)',
                border: '1px solid var(--line)',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--fg-1)'
              }}>
                {topic?.titleFr}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--fg-3)' }}>
                Question {currentQuestionIndex + 1} / {questions.length}
              </div>
            </div>

            {/* Question text */}
            <h2 style={{ fontSize: '19px', fontWeight: 400, color: 'var(--fg-0)', marginBottom: '32px', lineHeight: '1.55' }}>
              {currentQuestion.question_text}
            </h2>

            {/* Answer options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
              {['A', 'B', 'C'].map((option) => {
                const optionText = currentQuestion[`option_${option.toLowerCase()}` as keyof Question] as string
                const isSelected = currentAnswer.selectedAnswer === option

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(option)}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '36px 1fr',
                      alignItems: 'center',
                      padding: '16px 18px',
                      background: isSelected ? 'oklch(0.78 0.16 180 / 0.06)' : 'var(--bg-2)',
                      border: `1px solid ${isSelected ? 'var(--acc)' : 'var(--line)'}`,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.12s',
                      gap: '16px',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: isSelected ? 'var(--acc)' : 'var(--fg-2)',
                      width: '28px',
                      height: '28px',
                      border: `1px solid ${isSelected ? 'var(--acc)' : 'var(--line-strong)'}`,
                      display: 'grid',
                      placeItems: 'center',
                      background: isSelected ? 'var(--acc-bg)' : 'var(--bg-1)'
                    }}>
                      {option}
                    </div>
                    <div style={{ fontSize: '14.5px', color: 'var(--fg-0)', lineHeight: '1.4' }}>
                      {optionText}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Navigation buttons */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '24px',
              borderTop: '1px solid var(--line-soft)'
            }}>
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="btn btn-ghost"
                style={{
                  opacity: currentQuestionIndex === 0 ? 0.4 : 1,
                  cursor: currentQuestionIndex === 0 ? 'not-allowed' : 'pointer'
                }}
              >
                <ChevronLeft className="w-4 h-4" />
                Précédent
              </button>

              <button
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === questions.length - 1}
                className="btn btn-primary"
                style={{
                  opacity: currentQuestionIndex === questions.length - 1 ? 0.4 : 1,
                  cursor: currentQuestionIndex === questions.length - 1 ? 'not-allowed' : 'pointer'
                }}
              >
                Suivant
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
