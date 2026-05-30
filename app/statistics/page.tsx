'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { curriculum } from '@/data/curriculum'
import { useRouter } from 'next/navigation'

export default function StatisticsPage() {
  const [profile, setProfile] = useState<any>(null)
  const [topicProgress, setTopicProgress] = useState<any[]>([])
  const [questionHistory, setQuestionHistory] = useState<any[]>([])
  const [examHistory, setExamHistory] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    loadStatistics()
  }, [])

  async function loadStatistics() {
    setLoading(true)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }

    // Get user profile
    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    setProfile(profileData)

    // Get topic progress
    const { data: progressData } = await supabase
      .from('user_topic_progress')
      .select('*')
      .eq('user_id', user.id)

    setTopicProgress(progressData || [])

    // Get question history (last 30 days)
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const { data: historyData } = await supabase
      .from('question_history')
      .select('*')
      .eq('user_id', user.id)
      .gte('created_at', thirtyDaysAgo.toISOString())
      .order('created_at', { ascending: true })

    setQuestionHistory(historyData || [])

    // Get exam history
    const { data: examData } = await supabase
      .from('exam_simulations')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(5)

    setExamHistory(examData || [])

    setLoading(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Chargement...</div>
      </div>
    )
  }

  // Calculate overall stats
  const totalQuestions = topicProgress.reduce((sum, t) => sum + t.questions_attempted, 0)
  const totalCorrect = topicProgress.reduce((sum, t) => sum + t.questions_correct, 0)
  const overallAccuracy = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0

  // Calculate streak
  let currentStreak = 0
  const uniqueDates = [...new Set(questionHistory.map((q) => q.created_at.split('T')[0]))].sort().reverse()

  for (let i = 0; i < uniqueDates.length; i++) {
    const expectedDate = new Date()
    expectedDate.setDate(expectedDate.getDate() - i)
    const expectedDateStr = expectedDate.toISOString().split('T')[0]

    if (uniqueDates[i] === expectedDateStr) {
      currentStreak++
    } else {
      break
    }
  }

  // Average time per question
  const totalTime = questionHistory.reduce((sum, q) => sum + (q.time_taken || 0), 0)
  const avgTimePerQuestion = questionHistory.length > 0 ? totalTime / questionHistory.length : 0

  // Topic icon helper (from dashboard)
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

  // Topic code helper
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
    return codeMap[topicId] || ''
  }

  // Topic color helper
  const getTopicColor = (topicId: string) => {
    const colorMap: { [key: string]: string } = {
      'quantitative-methods': 'oklch(0.78 0.16 145)',
      'economics': 'oklch(0.74 0.10 255)',
      'financial-statement-analysis': 'oklch(0.78 0.14 75)',
      'corporate-issuers': 'oklch(0.78 0.16 145)',
      'equity-investments': 'oklch(0.74 0.10 255)',
      'fixed-income': 'oklch(0.78 0.14 75)',
      'derivatives': 'oklch(0.78 0.16 145)',
      'alternative-investments': 'oklch(0.74 0.10 255)',
      'portfolio-management': 'oklch(0.78 0.14 75)',
      'ethical-standards': 'oklch(0.78 0.16 145)'
    }
    return colorMap[topicId] || 'oklch(0.78 0.16 145)'
  }

  // Get difficulty level
  const getDifficultyLevel = (topic: any) => {
    if (topic.difficultyMultiplier >= 1.3) return { level: 'adv', label: 'Advanced' }
    if (topic.difficultyMultiplier >= 1.1) return { level: 'int', label: 'Intermediate' }
    return { level: 'beg', label: 'Beginner' }
  }

  return (
    <div className="page">
      {/* Header */}
      <section className="block" style={{ paddingTop: '48px', paddingBottom: '32px' }}>
        <div className="wrap" style={{ maxWidth: '1120px' }}>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>
            30 derniers jours · Mis à jour en temps réel
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: 500, letterSpacing: '-0.02em', margin: 0 }}>
            Statistiques
          </h1>
        </div>
      </section>

      {/* 4 Metric Cards */}
      <section className="block" style={{ paddingTop: 0, paddingBottom: '32px' }}>
        <div className="wrap" style={{ maxWidth: '1120px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
            {/* Questions résolues */}
            <div className="stat-row" style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <div className="stat-meta">
                <div className="stat-icon">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 14V2m0 12h12M5 11l3-3 3 2 3-4"/>
                  </svg>
                </div>
                <div>
                  <div className="stat-name">Questions résolues</div>
                  <div className="stat-num">{totalQuestions}</div>
                </div>
              </div>
            </div>

            {/* Taux de réussite */}
            <div className="stat-row" style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <div className="stat-meta">
                <div className="stat-icon">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="8" cy="8" r="6"/>
                    <path d="M8 4v4l2.5 1.5"/>
                  </svg>
                </div>
                <div>
                  <div className="stat-name">Taux de réussite</div>
                  <div
                    className="stat-num"
                    style={{
                      color: overallAccuracy < 50
                        ? 'var(--acc-amber)'
                        : overallAccuracy >= 70
                        ? 'var(--acc)'
                        : 'var(--fg-0)'
                    }}
                  >
                    {overallAccuracy.toFixed(0)}<span className="sm">%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Temps moyen */}
            <div className="stat-row" style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <div className="stat-meta">
                <div className="stat-icon">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="8" cy="8" r="6"/>
                    <path d="M8 4v4l3 2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="stat-name">Temps moyen</div>
                  <div className="stat-num">{avgTimePerQuestion.toFixed(0)}<span className="sm">s</span></div>
                </div>
              </div>
            </div>

            {/* Série actuelle */}
            <div className="stat-row" style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <div className="stat-meta">
                <div className="stat-icon">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 13h12M3 13V8l3-2 3 3 4-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="stat-name">Série actuelle</div>
                  <div className="stat-num">{currentStreak}<span className="sm">j</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance par matière */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: '1120px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '24px' }}>
            Performance par matière
          </h2>
          <div style={{ display: 'grid', gap: '14px' }}>
            {curriculum.map((topic) => {
              const progress = topicProgress.find((p) => p.topic_id === topic.id)
              const attempted = progress?.questions_attempted || 0
              const correct = progress?.questions_correct || 0
              const accuracy = attempted > 0 ? (correct / attempted) * 100 : 0
              const topicPoints = progress?.points_earned || 0
              const difficulty = getDifficultyLevel(topic)

              return (
                <div
                  key={topic.id}
                  style={{
                    background: 'var(--bg-1)',
                    border: '1px solid var(--line-soft)',
                    borderRadius: 'var(--radius)',
                    padding: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}
                >
                  {/* Top row: icon + code + name + badge */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', flex: 1 }}>
                      <div className="stat-icon">
                        <svg viewBox="0 0 16 16" dangerouslySetInnerHTML={{ __html: getTopicIcon(topic.id) }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '12px',
                              color: 'var(--fg-3)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em'
                            }}
                          >
                            {getTopicCode(topic.id)}
                          </span>
                          <h3 style={{ fontSize: '16px', fontWeight: 500, margin: 0, letterSpacing: '-0.01em' }}>
                            {topic.titleEn}
                          </h3>
                        </div>
                        <div
                          style={{
                            fontSize: '12px',
                            color: 'var(--fg-2)',
                            fontFamily: 'var(--font-mono)',
                            marginTop: '4px'
                          }}
                        >
                          {topic.titleFr}
                        </div>
                      </div>
                    </div>
                    <span className={`badge badge-${difficulty.level}`}>{difficulty.label}</span>
                  </div>

                  {/* 3 stat rows */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                    <div>
                      <div className="stat-name">Précision</div>
                      <div
                        className="stat-num"
                        style={{
                          fontSize: '18px',
                          color: accuracy < 50
                            ? 'var(--acc-amber)'
                            : accuracy >= 70
                            ? 'var(--acc)'
                            : 'var(--fg-0)'
                        }}
                      >
                        {accuracy.toFixed(0)}<span className="sm">%</span>
                      </div>
                    </div>
                    <div>
                      <div className="stat-name">Questions</div>
                      <div className="stat-num" style={{ fontSize: '18px' }}>{attempted}</div>
                    </div>
                    <div>
                      <div className="stat-name">Points</div>
                      <div className="stat-num" style={{ fontSize: '18px' }}>{topicPoints}</div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div style={{ height: '4px', background: 'var(--bg-0)', borderRadius: '99px', overflow: 'hidden' }}>
                    <div
                      style={{
                        height: '100%',
                        width: `${Math.min(accuracy, 100)}%`,
                        background: getTopicColor(topic.id),
                        borderRadius: '99px',
                        transition: 'width 0.6s ease'
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recommandations */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: '1120px' }}>
          <div
            style={{
              background: 'var(--bg-1)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              padding: '28px'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--acc-amber)',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  background: 'var(--acc-amber)',
                  borderRadius: '50%',
                  boxShadow: '0 0 8px var(--acc-amber)',
                  animation: 'pulse 2s ease-in-out infinite'
                }}
              ></span>
              Recommandations
            </div>
            <h3
              style={{
                fontSize: '22px',
                fontWeight: 400,
                letterSpacing: '-0.025em',
                margin: '0 0 16px',
                lineHeight: 1.3
              }}
            >
              Points à améliorer pour <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>progresser</em>.
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {overallAccuracy < 70 && (
                <li style={{ color: 'var(--fg-2)', fontSize: '14px', lineHeight: 1.5 }}>
                  Votre taux de réussite global est de {overallAccuracy.toFixed(1)}%. Continuez à pratiquer pour atteindre 70%.
                </li>
              )}
              {currentStreak === 0 && (
                <li style={{ color: 'var(--fg-2)', fontSize: '14px', lineHeight: 1.5 }}>
                  Créez une habitude d'étude quotidienne pour améliorer votre rétention.
                </li>
              )}
              {topicProgress.filter((p) => {
                const accuracy = p.questions_attempted > 0 ? (p.questions_correct / p.questions_attempted) * 100 : 0
                return accuracy < 50 && p.questions_attempted > 0
              }).length > 0 && (
                <li style={{ color: 'var(--fg-2)', fontSize: '14px', lineHeight: 1.5 }}>
                  Concentrez-vous sur les matières où votre précision est inférieure à 50%.
                </li>
              )}
              {avgTimePerQuestion > 120 && (
                <li style={{ color: 'var(--fg-2)', fontSize: '14px', lineHeight: 1.5 }}>
                  Votre temps moyen par question est de {avgTimePerQuestion.toFixed(0)}s. Essayez de viser 90s pour l'examen.
                </li>
              )}
              {examHistory.length === 0 && (
                <li style={{ color: 'var(--fg-2)', fontSize: '14px', lineHeight: 1.5 }}>
                  Passez un examen blanc pour évaluer votre niveau global.
                </li>
              )}
              {overallAccuracy >= 70 && currentStreak > 0 && avgTimePerQuestion <= 120 && (
                <li style={{ color: 'var(--fg-2)', fontSize: '14px', lineHeight: 1.5 }}>
                  Excellente performance ! Continuez à maintenir cette cadence.
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
