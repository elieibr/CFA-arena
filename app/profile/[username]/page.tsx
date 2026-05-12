import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import { curriculum, getLeagueColor, getLeagueEmoji } from '@/data/curriculum'
import { Trophy, TrendingUp, Award, Share2, ExternalLink } from 'lucide-react'
import ShareProfileButton from './ShareProfileButton'

export default async function PublicProfilePage({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params
  const supabase = await createClient()

  // Get profile by username
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .single()

  if (!profile || !profile.is_public) {
    notFound()
  }

  // Get user rank
  const { data: rank } = await supabase.rpc('get_user_rank', {
    p_user_id: profile.id,
  })

  // Get user progress per topic
  const { data: topicProgress } = await supabase
    .from('user_topic_progress')
    .select('*')
    .eq('user_id', profile.id)

  const progressMap = new Map(
    topicProgress?.map(p => [p.topic_id, p]) || []
  )

  // Calculate total stats
  const totalQuestions = topicProgress?.reduce((sum, p) => sum + p.questions_attempted, 0) || 0
  const totalCorrect = topicProgress?.reduce((sum, p) => sum + p.questions_correct, 0) || 0
  const overallSuccessRate = totalQuestions > 0 ? ((totalCorrect / totalQuestions) * 100).toFixed(0) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className={`bg-gradient-to-br ${getLeagueColor(profile.league)} text-white`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-6xl border-4 border-white/30">
                {profile.avatar_url ? (
                  <img
                    src={profile.avatar_url}
                    alt={profile.username}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span>{profile.username[0].toUpperCase()}</span>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 text-4xl">
                {getLeagueEmoji(profile.league)}
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">
                {profile.full_name || profile.username}
              </h1>
              <p className="text-xl opacity-90 mb-4">@{profile.username}</p>
              {profile.bio && (
                <p className="text-lg opacity-80 max-w-2xl">{profile.bio}</p>
              )}
            </div>

            {/* Share Button */}
            <ShareProfileButton username={profile.username} />
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-purple-600" />
              <h3 className="text-sm font-medium text-gray-600">Rang Global</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">#{rank || 'N/A'}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm font-medium text-gray-600">ELO</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">{profile.elo_rating}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-yellow-600" />
              <h3 className="text-sm font-medium text-gray-600">Points</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {profile.total_points.toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-green-600" />
              <h3 className="text-sm font-medium text-gray-600">Réussite</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">{overallSuccessRate}%</p>
          </div>
        </div>

        {/* League Badge */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-8">
          <div className="flex items-center gap-4">
            <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${getLeagueColor(profile.league)} flex items-center justify-center text-4xl`}>
              {getLeagueEmoji(profile.league)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 capitalize mb-1">
                Ligue {profile.league}
              </h2>
              <p className="text-gray-600">
                {profile.league === 'master' && 'Top joueur d\'élite'}
                {profile.league === 'diamond' && 'Excellence confirmée'}
                {profile.league === 'gold' && 'Performance solide'}
                {profile.league === 'silver' && 'Progression constante'}
                {profile.league === 'bronze' && 'Début prometteur'}
              </p>
            </div>
          </div>
        </div>

        {/* Progress by Topic */}
        {profile.show_stats && (
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Progression par matière</h2>
            <div className="space-y-4">
              {curriculum.map(topic => {
                const progress = progressMap.get(topic.id)
                if (!progress || progress.questions_attempted === 0) return null

                const successRate = ((progress.questions_correct / progress.questions_attempted) * 100).toFixed(0)

                return (
                  <div
                    key={topic.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{topic.titleFr}</h3>
                        <p className="text-sm text-gray-500">{topic.titleEn}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          Number(successRate) >= 70
                            ? 'bg-green-100 text-green-700'
                            : Number(successRate) >= 50
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {successRate}%
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Questions</p>
                        <p className="font-semibold text-gray-900">{progress.questions_attempted}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Correctes</p>
                        <p className="font-semibold text-green-600">{progress.questions_correct}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Points</p>
                        <p className="font-semibold text-yellow-600">
                          {progress.points_earned.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                        style={{
                          width: `${Math.min((progress.questions_attempted / 50) * 100, 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
