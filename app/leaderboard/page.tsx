'use client'

import { useState, useEffect, Suspense } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { curriculum } from '@/data/curriculum'
import { useRouter, useSearchParams } from 'next/navigation'

function LeaderboardContent() {
  const [leaderboardData, setLeaderboardData] = useState<any[]>([])
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const searchParams = useSearchParams()

  const topic = searchParams.get('topic') || ''
  const league = searchParams.get('league') || ''

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    loadData()
  }, [topic, league])

  async function loadData() {
    setLoading(true)

    // Get current user
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }

    // Get user profile
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    setCurrentUser(profile)

    // Get leaderboard data
    if (topic) {
      const { data } = await supabase
        .from('leaderboard_by_topic')
        .select('*')
        .eq('topic_id', topic)
        .limit(100)
      setLeaderboardData(data || [])
    } else {
      const { data } = await supabase
        .from('leaderboard_global')
        .select('*')
        .limit(100)
      setLeaderboardData(data || [])
    }

    setLoading(false)
  }

  const selectedTopic = topic ? curriculum.find((t) => t.id === topic) : null

  function handleTopicChange(value: string) {
    const params = new URLSearchParams()
    if (value) params.set('topic', value)
    if (league) params.set('league', league)
    router.push(`/leaderboard${params.toString() ? '?' + params.toString() : ''}`)
  }

  function handleLeagueChange(value: string) {
    const params = new URLSearchParams()
    if (topic) params.set('topic', topic)
    if (value) params.set('league', value)
    router.push(`/leaderboard${params.toString() ? '?' + params.toString() : ''}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Chargement...</div>
      </div>
    )
  }

  // Get current week display
  const now = new Date()
  const day = now.getDate()
  const month = now.toLocaleDateString('fr-FR', { month: 'long' })

  return (
    <div className="page">
      {/* Header */}
      <section className="block" style={{ paddingTop: '48px', paddingBottom: '32px' }}>
        <div className="wrap" style={{ maxWidth: '1120px' }}>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>
            Mis à jour en temps réel · Semaine du {day} {month}
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: 500, letterSpacing: '-0.02em', margin: 0 }}>
            Classement {selectedTopic && `: ${selectedTopic.titleFr}`}
          </h1>
        </div>
      </section>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: '1120px' }}>
          {/* Filters */}
          <div
            style={{
              background: 'var(--bg-1)',
              border: '1px solid var(--line-soft)',
              borderRadius: 'var(--radius)',
              padding: '20px 24px',
              marginBottom: '32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px'
            }}
          >
            {/* Topic filter */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--fg-3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '8px'
                }}
              >
                Filtrer par matière
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  value={topic}
                  onChange={(e) => handleTopicChange(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'var(--bg-1)',
                    border: '1px solid var(--line)',
                    borderRadius: '8px',
                    padding: '8px 36px 8px 12px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    color: 'var(--fg-1)',
                    appearance: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--bg-2)'
                    e.currentTarget.style.borderColor = 'var(--line)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-1)'
                    e.currentTarget.style.borderColor = 'var(--line)'
                  }}
                >
                  <option value="">Global</option>
                  {curriculum.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.titleFr}
                    </option>
                  ))}
                </select>
                {/* Custom chevron */}
                <div
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: 'var(--fg-3)'
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* League filter */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--fg-3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '8px'
                }}
              >
                Filtrer par ligue
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  value={league}
                  onChange={(e) => handleLeagueChange(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'var(--bg-1)',
                    border: '1px solid var(--line)',
                    borderRadius: '8px',
                    padding: '8px 36px 8px 12px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    color: 'var(--fg-1)',
                    appearance: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--bg-2)'
                    e.currentTarget.style.borderColor = 'var(--line)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-1)'
                    e.currentTarget.style.borderColor = 'var(--line)'
                  }}
                >
                  <option value="">Toutes les ligues</option>
                  <option value="bronze">Bronze</option>
                  <option value="silver">Silver</option>
                  <option value="gold">Gold</option>
                  <option value="diamond">Diamond</option>
                  <option value="master">Master</option>
                </select>
                {/* Custom chevron */}
                <div
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: 'var(--fg-3)'
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard Table */}
          <div
            style={{
              background: 'var(--bg-1)',
              border: '1px solid var(--line-soft)',
              borderRadius: 'var(--radius)',
              padding: '0',
              overflow: 'hidden'
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr
                  style={{
                    borderBottom: '1px solid var(--line-soft)',
                    background: 'var(--bg-0)'
                  }}
                >
                  <th
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--fg-3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontWeight: 500,
                      padding: '14px 24px',
                      textAlign: 'left'
                    }}
                  >
                    Rang
                  </th>
                  <th
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--fg-3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontWeight: 500,
                      padding: '14px 24px',
                      textAlign: 'left'
                    }}
                  >
                    Joueur
                  </th>
                  <th
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--fg-3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontWeight: 500,
                      padding: '14px 24px',
                      textAlign: 'left'
                    }}
                  >
                    Ligue
                  </th>
                  <th
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--fg-3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontWeight: 500,
                      padding: '14px 24px',
                      textAlign: 'right'
                    }}
                  >
                    Points
                  </th>
                  <th
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--fg-3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontWeight: 500,
                      padding: '14px 24px',
                      textAlign: 'right'
                    }}
                  >
                    Questions
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((entry, index) => {
                  const rankNumber = index + 1
                  const isCurrentUser = currentUser && entry.user_id === currentUser.id

                  // Rank colors: 1st = amber, 2nd = fg-1, 3rd = fg-2
                  const rankColor =
                    rankNumber === 1
                      ? 'var(--acc-amber)'
                      : rankNumber === 2
                      ? 'var(--fg-1)'
                      : rankNumber === 3
                      ? 'var(--fg-2)'
                      : 'var(--fg-3)'

                  return (
                    <tr
                      key={entry.user_id}
                      style={{
                        borderBottom: '1px solid var(--line-soft)'
                      }}
                    >
                      <td style={{ padding: '14px 24px' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '14px',
                            color: isCurrentUser ? 'var(--acc)' : rankColor
                          }}
                        >
                          #{rankNumber}
                        </span>
                      </td>
                      <td style={{ padding: '14px 24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span
                            style={{
                              fontSize: '14px',
                              fontWeight: 500,
                              color: isCurrentUser ? 'var(--acc)' : 'var(--fg-1)'
                            }}
                          >
                            {entry.username}
                          </span>
                          {isCurrentUser && (
                            <span
                              style={{
                                fontSize: '11px',
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--acc)',
                                background: 'oklch(0.78 0.16 180 / 0.12)',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                              }}
                            >
                              Vous
                            </span>
                          )}
                        </div>
                      </td>
                      <td style={{ padding: '14px 24px' }}>
                        <span
                          style={{
                            fontSize: '13px',
                            color: 'var(--fg-2)',
                            textTransform: 'capitalize'
                          }}
                        >
                          {entry.league}
                        </span>
                      </td>
                      <td style={{ padding: '14px 24px', textAlign: 'right' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '14px',
                            fontWeight: 500,
                            color: 'var(--fg-0)'
                          }}
                        >
                          {entry.total_points?.toLocaleString() || entry.points_earned?.toLocaleString() || 0}
                        </span>
                      </td>
                      <td style={{ padding: '14px 24px', textAlign: 'right' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '13px',
                            color: 'var(--fg-2)'
                          }}
                        >
                          {entry.questions_correct || 0}/{entry.questions_attempted || 0}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            {leaderboardData.length === 0 && (
              <div
                style={{
                  textAlign: 'center',
                  padding: '48px 24px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--fg-3)'
                }}
              >
                Aucun résultat
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default function LeaderboardPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-2xl">Chargement...</div></div>}>
      <LeaderboardContent />
    </Suspense>
  )
}
