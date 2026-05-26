import { createClient } from '@supabase/supabase-js'
import { curriculum } from '@/data/curriculum'
import { Trophy, Target, TrendingUp, Award, Share2, Copy, CheckCircle } from 'lucide-react'
import { notFound } from 'next/navigation'
import ShareButtons from './ShareButtons'

// Public client for server-side rendering (no auth required)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface PageProps {
  params: {
    username: string
  }
}

function getLeague(points: number): { name: string; color: string; emoji: string } {
  if (points >= 50000) return { name: 'Master', color: 'from-purple-500 to-pink-600', emoji: '👑' }
  if (points >= 25000) return { name: 'Diamond', color: 'from-cyan-400 to-blue-600', emoji: '💎' }
  if (points >= 10000) return { name: 'Gold', color: 'from-yellow-400 to-yellow-600', emoji: '🥇' }
  if (points >= 5000) return { name: 'Silver', color: 'from-gray-300 to-gray-500', emoji: '🥈' }
  return { name: 'Bronze', color: 'from-amber-600 to-amber-800', emoji: '🥉' }
}

function getInitials(username: string): string {
  const parts = username.split(/[\s_-]+/)
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }
  return username.slice(0, 2).toUpperCase()
}

export default async function ProfilePage({ params }: PageProps) {
  const { username } = params

  // Fetch user profile
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .single()

  if (profileError || !profile) {
    notFound()
  }

  // Fetch global rank
  const { data: allProfiles } = await supabase
    .from('profiles')
    .select('total_points')
    .order('total_points', { ascending: false })

  const globalRank = allProfiles?.findIndex(p => p.total_points <= profile.total_points) ?? 0

  // Fetch question history stats
  const { data: questionHistory } = await supabase
    .from('question_history')
    .select('is_correct')
    .eq('user_id', profile.id)

  const totalQuestions = questionHistory?.length ?? 0
  const correctQuestions = questionHistory?.filter(q => q.is_correct).length ?? 0
  const successRate = totalQuestions > 0 ? Math.round((correctQuestions / totalQuestions) * 100) : 0

  // Fetch topic progress
  const { data: topicProgress } = await supabase
    .from('user_topic_progress')
    .select('*')
    .eq('user_id', profile.id)

  // Calculate points per topic from question history
  const { data: topicPoints } = await supabase
    .from('question_history')
    .select('topic_id, points_earned')
    .eq('user_id', profile.id)

  const pointsByTopic = topicPoints?.reduce((acc, item) => {
    acc[item.topic_id] = (acc[item.topic_id] || 0) + (item.points_earned || 0)
    return acc
  }, {} as Record<string, number>) || {}

  const league = getLeague(profile.total_points)
  const initials = getInitials(profile.username)

  // Build shareable URL
  const profileUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://cfa-arena.vercel.app'}/profile/${username}`

  return (
    <div className="page">
      {/* Header */}
      <section style={{ background: 'var(--bg-soft)', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="wrap" style={{ maxWidth: '960px', paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
            {/* Avatar */}
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${league.color})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'white',
                flexShrink: 0
              }}
            >
              {initials}
            </div>

            {/* User Info */}
            <div style={{ flex: 1 }}>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {profile.username}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    background: `linear-gradient(135deg, ${league.color})`,
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>{league.emoji}</span>
                  <span>{league.name}</span>
                </div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    background: 'var(--acc-green)',
                    color: 'white',
                    borderRadius: '0.5rem',
                    fontWeight: 'bold'
                  }}
                >
                  <Trophy className="w-5 h-5" />
                  <span>{profile.total_points.toLocaleString()} points</span>
                </div>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <ShareButtons
            profileUrl={profileUrl}
            username={profile.username}
            globalRank={globalRank + 1}
          />
        </div>
      </section>

      {/* Global Stats */}
      <section style={{ padding: '3rem 0' }}>
        <div className="wrap" style={{ maxWidth: '960px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Statistiques Globales
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {/* Global Rank */}
            <div
              style={{
                background: 'var(--bg-soft)',
                border: '1px solid var(--line-soft)',
                borderRadius: '1rem',
                padding: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <Award style={{ width: '1.5rem', height: '1.5rem', color: 'var(--acc-blue)' }} />
                <span style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}>Rang Global</span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--acc-blue)' }}>
                #{globalRank + 1}
              </div>
            </div>

            {/* Questions Answered */}
            <div
              style={{
                background: 'var(--bg-soft)',
                border: '1px solid var(--line-soft)',
                borderRadius: '1rem',
                padding: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <Target style={{ width: '1.5rem', height: '1.5rem', color: 'var(--acc-purple)' }} />
                <span style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}>Questions Répondues</span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-1)' }}>
                {totalQuestions}
              </div>
            </div>

            {/* Success Rate */}
            <div
              style={{
                background: 'var(--bg-soft)',
                border: '1px solid var(--line-soft)',
                borderRadius: '1rem',
                padding: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <TrendingUp style={{ width: '1.5rem', height: '1.5rem', color: 'var(--acc-green)' }} />
                <span style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}>Taux de Réussite</span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--acc-green)' }}>
                {successRate}%
              </div>
            </div>

            {/* Current Streak */}
            <div
              style={{
                background: 'var(--bg-soft)',
                border: '1px solid var(--line-soft)',
                borderRadius: '1rem',
                padding: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <Trophy style={{ width: '1.5rem', height: '1.5rem', color: 'var(--acc-amber)' }} />
                <span style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}>Streak Actuel</span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--acc-amber)' }}>
                {profile.current_streak || 0} jours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topic Progress */}
      <section style={{ padding: '3rem 0', background: 'var(--bg-soft)' }}>
        <div className="wrap" style={{ maxWidth: '960px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Progression par Matière
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {curriculum.map((topic) => {
              const progress = topicProgress?.find(p => p.topic_id === topic.id)
              const points = pointsByTopic[topic.id] || 0
              const questionsAttempted = progress?.questions_attempted || 0
              const questionsCorrect = progress?.questions_correct || 0
              const successRate = questionsAttempted > 0
                ? Math.round((questionsCorrect / questionsAttempted) * 100)
                : 0

              return (
                <div
                  key={topic.id}
                  style={{
                    background: 'var(--bg-1)',
                    border: '1px solid var(--line-soft)',
                    borderRadius: '1rem',
                    padding: '1.5rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                        {topic.titleFr}
                      </h3>
                      <p style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}>
                        {questionsAttempted} questions • {successRate}% de réussite
                      </p>
                    </div>
                    <div
                      style={{
                        padding: '0.5rem 1rem',
                        background: 'var(--acc-green)',
                        color: 'white',
                        borderRadius: '0.5rem',
                        fontWeight: 'bold'
                      }}
                    >
                      {points.toLocaleString()} pts
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div
                    style={{
                      width: '100%',
                      height: '0.75rem',
                      background: 'var(--line-soft)',
                      borderRadius: '9999px',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        width: `${Math.min(successRate, 100)}%`,
                        height: '100%',
                        background: 'var(--acc-green)',
                        borderRadius: '9999px',
                        transition: 'width 0.3s ease'
                      }}
                    />
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
