'use client'

import { useState, useEffect, Suspense } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { curriculum, getLeagueColor, getLeagueEmoji } from '@/data/curriculum'
import { Trophy, Medal, Crown } from 'lucide-react'
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

  return (
    <div className="page">
      {/* Header */}
      <section className="leaderboard-header">
        <div className="wrap">
          <h1 className="leaderboard-title">
            <Trophy className="w-8 h-8" style={{ color: 'var(--acc-amber)' }} />
            Classement {selectedTopic && `: ${selectedTopic.titleFr}`}
          </h1>
        </div>
      </section>

      <section style={{ padding: '48px 0' }}>
        <div className="wrap">
          {/* Filters */}
          <div className="filters-card">
            <div className="filters-grid">
              <div className="filter-group">
                <label>Filtrer par matière</label>
                <select
                  value={topic}
                  onChange={(e) => handleTopicChange(e.target.value)}
                >
                  <option value="">Global</option>
                  {curriculum.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.titleFr}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>Filtrer par ligue</label>
                <select
                  value={league}
                  onChange={(e) => handleLeagueChange(e.target.value)}
                >
                  <option value="">Toutes les ligues</option>
                  <option value="bronze">🥉 Bronze</option>
                  <option value="silver">🥈 Silver</option>
                  <option value="gold">🥇 Gold</option>
                  <option value="diamond">💎 Diamond</option>
                  <option value="master">👑 Master</option>
                </select>
              </div>
            </div>
          </div>

          {/* Leaderboard Table */}
          <div className="leaderboard-table">
            <table>
              <thead>
                <tr>
                  <th>Rang</th>
                  <th>Joueur</th>
                  <th>Ligue</th>
                  <th>Points</th>
                  <th>Questions</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((entry, index) => {
                  const rankNumber = index + 1
                  const isCurrentUser = currentUser && entry.user_id === currentUser.id

                  return (
                    <tr
                      key={entry.user_id}
                      className={isCurrentUser ? 'current-user' : ''}
                    >
                      <td>
                        <div className="rank-cell">
                          {rankNumber === 1 && <Crown className="w-6 h-6" style={{ color: 'var(--acc-amber)' }} />}
                          {rankNumber === 2 && <Medal className="w-6 h-6" style={{ color: 'var(--fg-3)' }} />}
                          {rankNumber === 3 && <Medal className="w-6 h-6" style={{ color: 'var(--acc-amber)' }} />}
                          <span className="rank-number">#{rankNumber}</span>
                        </div>
                      </td>
                      <td>
                        <div className="player-name">
                          {entry.username}
                          {isCurrentUser && (
                            <span className="you-badge">Vous</span>
                          )}
                        </div>
                      </td>
                      <td>
                        <div className={`league-badge bg-gradient-to-br ${getLeagueColor(entry.league)} text-white`}>
                          <span>{getLeagueEmoji(entry.league)}</span>
                          <span>{entry.league}</span>
                        </div>
                      </td>
                      <td>
                        <span className="points-value">
                          {entry.total_points?.toLocaleString() || entry.points_earned?.toLocaleString() || 0}
                        </span>
                      </td>
                      <td>
                        <span className="questions-value">
                          {entry.questions_correct || 0}/{entry.questions_attempted || 0}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            {leaderboardData.length === 0 && (
              <div className="text-center py-12">
                <Trophy className="w-16 h-16" style={{ color: 'var(--fg-3)', margin: '0 auto 16px' }} />
                <p style={{ color: 'var(--fg-2)', fontSize: '1.125rem' }}>Aucun joueur dans ce classement</p>
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
