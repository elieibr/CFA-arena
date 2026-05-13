'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { curriculum } from '@/data/curriculum'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [profile, setProfile] = useState<any>(null)
  const [topicProgress, setTopicProgress] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
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

  // Success rate (not progression - we don't have total questions available)
  const successRate = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            {/* Left: Main Content */}
            <div className="hero-content">
              <div className="eyebrow">
                <span className="pulse"></span>
                Préparation CFA Level 1
              </div>
              <h1 className="hero-title">
                Maîtrisez le <em>CFA</em> avec un entraînement <em>adaptatif</em>
              </h1>
              <p className="hero-sub">
                Questions ciblées sur vos points faibles, révision espacée calibrée, et simulations d'examen réalistes.
              </p>
              <div className="hero-cta">
                <a href="#subjects" className="btn btn-primary">
                  Commencer l'entraînement →
                </a>
                <a href="/exam" className="btn btn-ghost">
                  Examen blanc
                </a>
              </div>
            </div>

            {/* Right: Progress Card */}
            <div className="progress-card" style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--fg-2)', fontSize: '13px' }}>Taux de réussite</span>
                <span style={{ color: 'var(--fg-0)', fontSize: '15px', fontWeight: 500 }}>{successRate.toFixed(0)}%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--fg-2)', fontSize: '13px' }}>Questions</span>
                <span style={{ color: 'var(--fg-0)', fontSize: '15px', fontWeight: 500 }}>{totalCorrect}/{totalQuestions}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--fg-2)', fontSize: '13px' }}>Points</span>
                <span style={{ color: 'var(--acc-green)', fontSize: '15px', fontWeight: 600 }}>{totalPoints.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className="subjects">
        <div className="wrap">
          <h2 className="section-title">Les 10 Matières CFA Level 1</h2>
          <div className="subjects-grid">
            {curriculum.map((topic) => {
              const progress = topicProgress.find((p) => p.topic_id === topic.id)
              const attempted = progress?.questions_attempted || 0
              const correct = progress?.questions_correct || 0
              const successRate = attempted > 0 ? (correct / attempted) * 100 : 0

              // Map topic to color
              const colorMap: { [key: string]: string } = {
                'quant': 'var(--acc-green)',
                'econ': 'var(--acc-blue)',
                'fi': 'var(--acc-amber)',
                'corp': 'var(--acc-green)',
                'equity': 'var(--acc-blue)',
                'derivatives': 'var(--acc-amber)',
                'alts': 'var(--acc-green)',
                'pm': 'var(--acc-blue)',
                'fsa': 'var(--acc-amber)',
                'ethics': 'var(--acc-green)'
              }

              // Map difficulty
              const getDifficulty = () => {
                if (topic.difficultyMultiplier >= 1.3) return 'adv'
                if (topic.difficultyMultiplier >= 1.1) return 'int'
                return 'beg'
              }

              return (
                <div
                  key={topic.id}
                  className="subj"
                  onClick={() => router.push(`/quiz?topic=${topic.id}`)}
                  style={{ '--subj-color': colorMap[topic.id] || 'var(--acc-green)' } as React.CSSProperties}
                >
                  <div className="subj-top">
                    <div>
                      <h3 className="subj-title">{topic.titleFr}</h3>
                      <p className="subj-en">{topic.titleEn}</p>
                    </div>
                    <div className="subj-icon">
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
                  </div>
                  <p className="subj-desc">{topic.description}</p>
                  <div className="subj-meta">
                    <div className="meta-row">
                      <span>Poids exam</span>
                      <strong>{(topic.weight * 100).toFixed(0)}%</strong>
                    </div>
                    <div className="meta-row">
                      <span>Questions</span>
                      <strong>{correct}/{attempted}</strong>
                    </div>
                    <div className="meta-row">
                      <span>Réussite</span>
                      <strong>{successRate.toFixed(1)}%</strong>
                    </div>
                  </div>
                  <div className="subj-foot">
                    <span className={`badge badge-${getDifficulty()}`}>
                      {getDifficulty() === 'beg' && 'Débutant'}
                      {getDifficulty() === 'int' && 'Intermédiaire'}
                      {getDifficulty() === 'adv' && 'Avancé'}
                    </span>
                    <div className="progress-bar-sm">
                      <div
                        className="progress-fill"
                        style={{ width: `${Math.min(successRate, 100)}%` }}
                      />
                    </div>
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
