'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { curriculum, getLeagueColor, getLeagueEmoji } from '@/data/curriculum'
import { Trophy, Target, TrendingUp, BookOpen } from 'lucide-react'
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
  }, [])

  async function loadData() {
    setLoading(true)

    // Get current user
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
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Chargement...</div>
      </div>
    )
  }

  // Calculate global progress
  const totalQuestions = topicProgress.reduce((sum, t) => sum + t.questions_attempted, 0)
  const totalCorrect = topicProgress.reduce((sum, t) => sum + t.questions_correct, 0)
  const globalSuccessRate = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header with user stats */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Bienvenue, {profile?.username || 'Challenger'}! 👋
              </h1>
              <p className="text-gray-600 mt-1">
                Continuez votre progression vers le CFA Level 1
              </p>
            </div>

            <div className="flex gap-4">
              {/* League Badge */}
              <div className={`px-6 py-3 rounded-xl bg-gradient-to-br ${getLeagueColor(profile?.league || 'bronze')} text-white shadow-lg`}>
                <div className="text-sm font-medium opacity-90">Ligue</div>
                <div className="text-2xl font-bold flex items-center gap-2">
                  <span>{getLeagueEmoji(profile?.league || 'bronze')}</span>
                  <span className="capitalize">{profile?.league || 'Bronze'}</span>
                </div>
              </div>

              {/* Total Points */}
              <div className="px-6 py-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg">
                <div className="text-sm font-medium opacity-90">Points Totaux</div>
                <div className="text-2xl font-bold flex items-center gap-2">
                  <Trophy className="w-6 h-6" />
                  {profile?.total_points?.toLocaleString() || 0}
                </div>
              </div>

              {/* Questions Answered */}
              <div className="px-6 py-3 rounded-xl bg-gradient-to-br from-green-500 to-green-700 text-white shadow-lg">
                <div className="text-sm font-medium opacity-90">Questions</div>
                <div className="text-2xl font-bold flex items-center gap-2">
                  <Target className="w-6 h-6" />
                  {totalQuestions}
                </div>
              </div>
            </div>
          </div>

          {/* Global Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Progression Globale</span>
              <span className="text-sm font-bold text-blue-600">
                {totalQuestions} questions • {globalSuccessRate.toFixed(1)}% réussite
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500"
                style={{ width: `${Math.min(globalSuccessRate, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Topics Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Les 10 Matières CFA Level 1
          </h2>
          <p className="text-gray-600 mt-1">
            Cliquez sur une matière pour commencer un quiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curriculum.map((topic) => {
            const progress = topicProgress.find((p) => p.topic_id === topic.id)
            const attempted = progress?.questions_attempted || 0
            const correct = progress?.questions_correct || 0
            const successRate = attempted > 0 ? (correct / attempted) * 100 : 0

            return (
              <div
                key={topic.id}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-xl hover:border-blue-300 transition cursor-pointer"
                onClick={() => router.push(`/quiz?topic=${topic.id}`)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {topic.titleFr}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{topic.titleEn}</p>
                  </div>
                  <div className="text-2xl">
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

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {topic.description}
                </p>

                {/* Topic Stats */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Poids exam:</span>
                    <span className="font-semibold text-gray-900">{(topic.weight * 100).toFixed(0)}%</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Points gagnés:</span>
                    <span className="font-semibold text-blue-600">{progress?.points_earned?.toLocaleString() || 0}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Questions:</span>
                    <span className="font-semibold text-gray-900">
                      {correct}/{attempted}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">Taux de réussite</span>
                      <span className="font-bold text-green-600">
                        {successRate.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500"
                        style={{ width: `${Math.min(successRate, 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Difficulty Indicator */}
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                    <span className="text-xs text-gray-500">Difficulté:</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < topic.difficultyMultiplier * 3
                              ? 'bg-orange-500'
                              : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={() => router.push('/exam')}
            className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <div className="text-3xl mb-2">📝</div>
            <h3 className="text-xl font-bold mb-2">Examen Blanc</h3>
            <p className="text-sm opacity-90">180 questions • 4h30</p>
          </button>

          <button
            onClick={() => router.push('/review')}
            className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <div className="text-3xl mb-2">🧠</div>
            <h3 className="text-xl font-bold mb-2">Révision Espacée</h3>
            <p className="text-sm opacity-90">Questions à revoir</p>
          </button>

          <button
            onClick={() => router.push('/statistics')}
            className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <div className="text-3xl mb-2">📊</div>
            <h3 className="text-xl font-bold mb-2">Statistiques</h3>
            <p className="text-sm opacity-90">Analyse détaillée</p>
          </button>
        </div>
      </main>
    </div>
  )
}
