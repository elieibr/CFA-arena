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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Trophy className="w-8 h-8 text-yellow-500" />
            Classement {selectedTopic && `: ${selectedTopic.titleFr}`}
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filtrer par matière
              </label>
              <select
                value={topic}
                onChange={(e) => handleTopicChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Global</option>
                {curriculum.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.titleFr}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filtrer par ligue
              </label>
              <select
                value={league}
                onChange={(e) => handleLeagueChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rang</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Joueur</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Ligue</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Points</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Questions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leaderboardData.map((entry, index) => {
                  const rankNumber = index + 1
                  const isCurrentUser = currentUser && entry.user_id === currentUser.id

                  return (
                    <tr
                      key={entry.user_id}
                      className={`${isCurrentUser ? 'bg-blue-50' : 'hover:bg-gray-50'} transition`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {rankNumber === 1 && <Crown className="w-6 h-6 text-yellow-500" />}
                          {rankNumber === 2 && <Medal className="w-6 h-6 text-gray-400" />}
                          {rankNumber === 3 && <Medal className="w-6 h-6 text-amber-600" />}
                          <span className="text-lg font-bold text-gray-900">#{rankNumber}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-900">
                          {entry.username}
                          {isCurrentUser && (
                            <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                              Vous
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-br ${getLeagueColor(entry.league)} text-white font-medium`}>
                          <span>{getLeagueEmoji(entry.league)}</span>
                          <span className="capitalize">{entry.league}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-lg font-bold text-blue-600">
                          {entry.total_points?.toLocaleString() || entry.points_earned?.toLocaleString() || 0}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-lg font-semibold text-gray-700">
                          {entry.questions_correct || 0}/{entry.questions_attempted || 0}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {leaderboardData.length === 0 && (
            <div className="text-center py-12">
              <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Aucun joueur dans ce classement</p>
            </div>
          )}
        </div>
      </main>
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
