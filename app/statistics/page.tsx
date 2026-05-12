'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { curriculum } from '@/data/curriculum'
import { TrendingUp, Target, Clock, Calendar, Award, BarChart3 } from 'lucide-react'
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
        <div className="text-2xl">Chargement des statistiques...</div>
      </div>
    )
  }

  // Calculate overall stats
  const totalQuestions = topicProgress.reduce((sum, t) => sum + t.questions_attempted, 0)
  const totalCorrect = topicProgress.reduce((sum, t) => sum + t.questions_correct, 0)
  const overallAccuracy = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0

  // Calculate daily activity (last 7 days)
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (6 - i))
    return date.toISOString().split('T')[0]
  })

  const dailyActivity = last7Days.map((date) => {
    const count = questionHistory.filter((q) => q.created_at.startsWith(date)).length
    return { date, count }
  })

  // Calculate streak
  let currentStreak = 0
  const today = new Date().toISOString().split('T')[0]
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <BarChart3 className="w-8 h-8 text-blue-600" />
            Statistiques Détaillées
          </h1>
          <p className="text-gray-600 mt-1">Analysez votre progression et vos performances</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-6 h-6 text-blue-600" />
              <h3 className="text-sm font-medium text-gray-600">Taux de Réussite</h3>
            </div>
            <div className="text-3xl font-bold text-gray-900">{overallAccuracy.toFixed(1)}%</div>
            <p className="text-sm text-gray-500 mt-1">{totalCorrect} / {totalQuestions} correctes</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h3 className="text-sm font-medium text-gray-600">Série Actuelle</h3>
            </div>
            <div className="text-3xl font-bold text-gray-900">{currentStreak} jours</div>
            <p className="text-sm text-gray-500 mt-1">Continuez comme ça! 🔥</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-purple-600" />
              <h3 className="text-sm font-medium text-gray-600">Temps Moyen</h3>
            </div>
            <div className="text-3xl font-bold text-gray-900">{avgTimePerQuestion.toFixed(0)}s</div>
            <p className="text-sm text-gray-500 mt-1">par question</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-6 h-6 text-yellow-600" />
              <h3 className="text-sm font-medium text-gray-600">Points Totaux</h3>
            </div>
            <div className="text-3xl font-bold text-gray-900">{profile?.total_points?.toLocaleString() || 0}</div>
            <p className="text-sm text-gray-500 mt-1">Ligue: {profile?.league || 'Bronze'}</p>
          </div>
        </div>

        {/* Activity Chart */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-600" />
            Activité des 7 Derniers Jours
          </h2>
          <div className="flex items-end justify-between gap-2 h-48">
            {dailyActivity.map((day, index) => {
              const maxCount = Math.max(...dailyActivity.map((d) => d.count), 1)
              const height = (day.count / maxCount) * 100
              const dayName = new Date(day.date).toLocaleDateString('fr-FR', { weekday: 'short' })

              return (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex items-end justify-center h-40">
                    <div
                      className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all hover:from-blue-700 hover:to-blue-500"
                      style={{ height: `${height}%`, minHeight: day.count > 0 ? '8px' : '0px' }}
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-medium text-gray-600">{dayName}</div>
                    <div className="text-sm font-bold text-gray-900">{day.count}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Topic Performance */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Performance par Matière</h2>
          <div className="space-y-4">
            {curriculum.map((topic) => {
              const progress = topicProgress.find((p) => p.topic_id === topic.id)
              const attempted = progress?.questions_attempted || 0
              const correct = progress?.questions_correct || 0
              const accuracy = attempted > 0 ? (correct / attempted) * 100 : 0
              const topicPoints = progress?.points_earned || 0

              return (
                <div key={topic.id} className="border-b border-gray-100 pb-4 last:border-0">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
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
                      <div>
                        <h3 className="font-semibold text-gray-900">{topic.titleFr}</h3>
                        <p className="text-sm text-gray-500">{topic.titleEn}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{topicPoints.toLocaleString()} pts</div>
                      <div className="text-sm text-gray-600">{attempted} questions</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-xs text-gray-600">Précision</div>
                      <div className={`text-lg font-bold ${accuracy >= 70 ? 'text-green-600' : 'text-orange-600'}`}>
                        {accuracy.toFixed(1)}%
                      </div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-xs text-gray-600">Correctes</div>
                      <div className="text-lg font-bold text-gray-900">{correct}</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-xs text-gray-600">Poids</div>
                      <div className="text-lg font-bold text-gray-900">{(topic.weight * 100).toFixed(0)}%</div>
                    </div>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        accuracy >= 70 ? 'bg-green-500' : accuracy >= 50 ? 'bg-yellow-500' : 'bg-orange-500'
                      }`}
                      style={{ width: `${Math.min(accuracy, 100)}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Exam History */}
        {examHistory.length > 0 && (
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Historique des Examens Blancs</h2>
            <div className="space-y-3">
              {examHistory.map((exam, index) => {
                const isPassing = exam.score >= 70
                const date = new Date(exam.created_at).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })

                return (
                  <div
                    key={exam.id}
                    className={`p-4 rounded-lg border-2 ${
                      isPassing ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-gray-900">
                          Examen #{examHistory.length - index}
                        </div>
                        <div className="text-sm text-gray-600">{date}</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${isPassing ? 'text-green-600' : 'text-orange-600'}`}>
                          {exam.score.toFixed(1)}%
                        </div>
                        <div className="text-sm text-gray-600">
                          {exam.correct_answers} / {exam.total_questions}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Temps</div>
                        <div className="font-semibold text-gray-900">
                          {Math.floor(exam.time_taken / 60)} min
                        </div>
                      </div>
                      <div>
                        {isPassing ? (
                          <div className="text-2xl">✅</div>
                        ) : (
                          <div className="text-2xl">⚠️</div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Recommendations */}
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">💡 Recommandations</h2>
          <ul className="space-y-2">
            {overallAccuracy < 70 && (
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-gray-700">
                  Votre taux de réussite global est de {overallAccuracy.toFixed(1)}%. Continuez à pratiquer pour atteindre 70%!
                </span>
              </li>
            )}
            {currentStreak === 0 && (
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-gray-700">
                  Créez une habitude d'étude quotidienne pour améliorer votre rétention.
                </span>
              </li>
            )}
            {topicProgress.filter((p) => {
              const accuracy = p.questions_attempted > 0 ? (p.questions_correct / p.questions_attempted) * 100 : 0
              return accuracy < 50
            }).length > 0 && (
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-gray-700">
                  Concentrez-vous sur les matières où votre précision est inférieure à 50%.
                </span>
              </li>
            )}
            {avgTimePerQuestion > 120 && (
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-gray-700">
                  Votre temps moyen par question est de {avgTimePerQuestion.toFixed(0)}s. Essayez de viser 90s pour l'examen.
                </span>
              </li>
            )}
            {examHistory.length === 0 && (
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-gray-700">
                  Passez un examen blanc pour évaluer votre niveau global.
                </span>
              </li>
            )}
          </ul>
        </div>
      </main>
    </div>
  )
}
