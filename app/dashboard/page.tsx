'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { curriculum } from '@/data/curriculum'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [profile, setProfile] = useState<any>(null)
  const [topicProgress, setTopicProgress] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    loadData()

    // Reload data when window gets focus (after returning from quiz)
    const handleFocus = () => {
      loadData()
    }
    window.addEventListener('focus', handleFocus)
    return () => window.removeEventListener('focus', handleFocus)
  }, [])

  async function loadData() {
    console.log('=== Dashboard loadData START ===')
    setLoading(true)

    // Get current user
    const { data: { user } } = await supabase.auth.getUser()
    console.log('User:', user?.id)
    if (!user) {
      console.log('No user, redirecting to login')
      router.push('/login')
      return
    }

    // Get user profile
    console.log('📊 Fetching profile...')
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (profileError) {
      console.error('❌ Error fetching profile:', profileError)
    } else {
      console.log('✅ Profile loaded:', profileData)
    }

    setProfile(profileData)

    // Get topic progress
    console.log('📈 Fetching topic progress...')
    const { data: progressData, error: progressError } = await supabase
      .from('user_topic_progress')
      .select('*')
      .eq('user_id', user.id)

    if (progressError) {
      console.error('❌ Error fetching progress:', progressError)
    } else {
      console.log('✅ Progress loaded:', progressData)
    }

    setTopicProgress(progressData || [])
    setLoading(false)
    console.log('=== Dashboard loadData END ===')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Chargement...</div>
      </div>
    )
  }

  // Calculate global stats
  const totalQuestions = topicProgress.reduce((sum, t) => sum + t.questions_attempted, 0)
  const totalCorrect = topicProgress.reduce((sum, t) => sum + t.questions_correct, 0)
  const totalPoints = profile?.total_points || 0

  // Success rate
  const successRate = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0

  // Map topic to color (from CFA_Prep.html)
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

  // Get difficulty level
  const getDifficultyLevel = (topic: any) => {
    if (topic.difficultyMultiplier >= 1.3) return { level: 'adv', label: 'Advanced' }
    if (topic.difficultyMultiplier >= 1.1) return { level: 'int', label: 'Intermediate' }
    return { level: 'beg', label: 'Beginner' }
  }

  // Get status text
  const getStatusText = (pct: number) => {
    if (pct === 0) return 'Pas démarré'
    if (pct > 80) return 'Quasi maîtrisé'
    if (pct > 50) return 'En progression'
    return 'À renforcer'
  }

  // Copy profile URL to clipboard
  const handleShareProfile = async () => {
    if (!profile?.username) return

    const profileUrl = `https://cfa-arena.vercel.app/profile/${profile.username}`

    try {
      await navigator.clipboard.writeText(profileUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            {/* Left: Main Content */}
            <div>
              <div className="eyebrow">Session · CharterPath</div>
              <h1 className="hero-title">
                Préparez le<br />
                CFA Level 1 avec <em>l'intelligence</em><br />
                d'une <span className="accent-amber">IA dédiée</span>.
              </h1>
              <p className="hero-sub">
                Plan d'étude adaptatif, questions ciblées sur vos points faibles, et révision espacée calibrée pour l'examen. 10 matières, un objectif.
              </p>
              <div className="hero-cta">
                <a href="#subjects" className="btn btn-primary">
                  Continuer la session <span className="btn-arrow"></span>
                </a>
                <a href="/exam" className="btn btn-ghost">
                  Voir le plan d'étude
                </a>
              </div>
            </div>

            {/* Right: Progress Card */}
            <div className="progress-card">
              <div className="pc-head">
                <span className="pc-title">Progression globale</span>
                <span className="pc-date">{new Date().toLocaleDateString('fr-FR')}</span>
              </div>
              <div className="pc-big">
                <div className="pc-percent">{successRate.toFixed(0)}<span className="pct-sym">%</span></div>
                <div className="pc-delta">+ 0% / 7j</div>
              </div>
              <div className="pc-label">{totalCorrect} / {totalQuestions || 1540} concepts maîtrisés</div>
              <div className="pc-bar">
                <div className="pc-bar-fill" style={{ width: `${Math.min(successRate, 100)}%` }}></div>
              </div>
              <div className="pc-meta">
                <div className="pc-meta-item">
                  <div className="label">Heures</div>
                  <div className="value">0<span style={{ color: 'var(--fg-3)', fontSize: '13px' }}>h</span></div>
                </div>
                <div className="pc-meta-item">
                  <div className="label">Précision</div>
                  <div className="value">{successRate.toFixed(0)}%</div>
                </div>
                <div className="pc-meta-item">
                  <div className="label">Streak</div>
                  <div className="value">{profile?.current_streak || 0}<span style={{ color: 'var(--fg-3)', fontSize: '13px' }}>j</span></div>
                </div>
              </div>

              {/* Share Profile Button (only if public) */}
              {profile?.is_public !== false && profile?.username && (
                <button
                  onClick={handleShareProfile}
                  style={{
                    width: '100%',
                    marginTop: '16px',
                    padding: '10px 16px',
                    background: copied ? 'oklch(0.78 0.16 180 / 0.12)' : 'var(--bg-0)',
                    border: '1px solid var(--line)',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: copied ? 'var(--acc)' : 'var(--fg-1)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    if (!copied) {
                      e.currentTarget.style.borderColor = 'var(--line-strong)'
                      e.currentTarget.style.background = 'var(--bg-1)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!copied) {
                      e.currentTarget.style.borderColor = 'var(--line)'
                      e.currentTarget.style.background = 'var(--bg-0)'
                    }
                  }}
                >
                  {copied ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8l3 3 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M10 2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="2" y="2" width="8" height="8" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Share my profile</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="block" id="subjects">
        <div className="wrap">
          <div className="block-head">
            <div className="left">
              <h2>10 matières · pondération CFA Institute</h2>
              <p>Cliquez une carte pour réviser. Les pondérations reflètent le poids de chaque matière à l'examen.</p>
            </div>
          </div>

          <div className="subjects-grid">
            {curriculum.map((topic) => {
              const progress = topicProgress.find((p) => p.topic_id === topic.id)
              const attempted = progress?.questions_attempted || 0
              const correct = progress?.questions_correct || 0
              const pct = attempted > 0 ? (correct / attempted) * 100 : 0
              const difficulty = getDifficultyLevel(topic)

              return (
                <div
                  key={topic.id}
                  className="subj"
                  onClick={() => router.push(`/quiz?topic=${topic.id}`)}
                  style={{ '--subj-color': getTopicColor(topic.id) } as React.CSSProperties}
                >
                  <div className="subj-row1">
                    <div className="subj-icon">
                      <svg viewBox="0 0 16 16" dangerouslySetInnerHTML={{ __html: getTopicIcon(topic.id) }} />
                    </div>
                    <div className="subj-weight">{(topic.weight * 100).toFixed(0)}%</div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <h3 className="subj-name">{topic.titleEn}</h3>
                    </div>
                    <div className="subj-readings">{topic.titleFr}</div>
                  </div>
                  <div className="subj-progress">
                    <div className="subj-prog-row">
                      <span className="subj-pct">{pct.toFixed(0)}<span className="sym">%</span></span>
                      <span className={`badge badge-${difficulty.level}`}>{difficulty.label}</span>
                    </div>
                    <div className="subj-bar">
                      <div className="subj-bar-fill" style={{ width: `${Math.min(pct, 100)}%` }}></div>
                    </div>
                  </div>
                  <div className="subj-foot">
                    <span style={{ fontSize: '12px', color: 'var(--fg-3)', fontFamily: 'var(--font-mono)' }}>
                      {getStatusText(pct)}
                    </span>
                    <span className="subj-cta">Réviser <span className="arr"></span></span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
