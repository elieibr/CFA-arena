import { createClient } from '@supabase/supabase-js'
import { curriculum } from '@/data/curriculum'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Public client for server-side rendering (no auth required)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface PageProps {
  params: Promise<{
    username: string
  }>
}

function getLeague(points: number): { name: string; color: string } {
  if (points >= 50000) return { name: 'Master', color: 'oklch(0.74 0.18 300)' }
  if (points >= 25000) return { name: 'Diamond', color: 'oklch(0.74 0.16 210)' }
  if (points >= 10000) return { name: 'Gold', color: 'oklch(0.78 0.14 75)' }
  if (points >= 5000) return { name: 'Silver', color: 'oklch(0.68 0.02 255)' }
  return { name: 'Bronze', color: 'oklch(0.58 0.12 45)' }
}

function getBadges(points: number, successRate: number, streak: number) {
  const badges = []

  if (points >= 10000) badges.push({ label: 'High Achiever', icon: '🏆' })
  if (successRate >= 90) badges.push({ label: 'Precision Master', icon: '🎯' })
  if (successRate >= 70) badges.push({ label: 'CFA Ready', icon: '✓' })
  if (streak >= 30) badges.push({ label: '30-Day Streak', icon: '🔥' })
  if (streak >= 7) badges.push({ label: '7-Day Streak', icon: '⚡' })

  return badges
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { username } = await params

  // Fetch user profile for metadata
  const { data: profile } = await supabase
    .from('profiles')
    .select('total_points, username')
    .eq('username', username)
    .single()

  if (!profile) {
    return {
      title: 'Profile Not Found — CharterPath',
      description: 'This profile could not be found.'
    }
  }

  // Calculate global rank
  const { data: allProfiles } = await supabase
    .from('profiles')
    .select('total_points')
    .order('total_points', { ascending: false })

  const globalRank = (allProfiles?.findIndex(p => p.total_points <= profile.total_points) ?? -1) + 1

  const profileUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://charterpath.vercel.app'}/profile/${username}`
  const title = `${username} — CharterPath CFA Level 1`
  const description = `Rank #${globalRank} · Score ${profile.total_points.toLocaleString()} · CFA Level 1 preparation`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: profileUrl,
      type: 'profile',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    }
  }
}

export default async function ProfilePage({ params }: PageProps) {
  const { username } = await params

  // Fetch user profile
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .single()

  if (profileError || !profile) {
    notFound()
  }

  // Check if profile is private
  if (profile.is_public === false) {
    return (
      <div className="page">
        <div
          style={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '20px',
            padding: '24px'
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'var(--bg-1)',
              border: '1px solid var(--line)',
              borderRadius: '12px',
              display: 'grid',
              placeItems: 'center',
              fontSize: '32px'
            }}
          >
            🔒
          </div>
          <div style={{ textAlign: 'center' }}>
            <h1
              style={{
                fontSize: '28px',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                margin: '0 0 8px',
                color: 'var(--fg-0)'
              }}
            >
              Profil privé
            </h1>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--fg-2)',
                margin: 0,
                lineHeight: 1.5
              }}
            >
              Ce profil est privé et n'est pas accessible publiquement.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Fetch global rank
  const { data: allProfiles } = await supabase
    .from('profiles')
    .select('total_points')
    .order('total_points', { ascending: false })

  const globalRank = (allProfiles?.findIndex(p => p.total_points <= profile.total_points) ?? -1) + 1

  // Fetch topic progress
  const { data: topicProgress } = await supabase
    .from('user_topic_progress')
    .select('topic_id, questions_attempted, questions_correct')
    .eq('user_id', profile.id)

  // Calculate global stats from topicProgress
  const totalQuestions = topicProgress?.reduce((sum, t) => sum + (t.questions_attempted || 0), 0) || 0
  const totalCorrect = topicProgress?.reduce((sum, t) => sum + (t.questions_correct || 0), 0) || 0
  const successRate = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  // Fetch question history stats (for points per topic)
  const { data: questionHistory } = await supabase
    .from('question_history')
    .select('is_correct, topic_id, points_earned')
    .eq('user_id', profile.id)

  // Calculate points per topic from question history
  const pointsByTopic = questionHistory?.reduce((acc, item) => {
    acc[item.topic_id] = (acc[item.topic_id] || 0) + (item.points_earned || 0)
    return acc
  }, {} as Record<string, number>) || {}

  const league = getLeague(profile.total_points)
  const badges = getBadges(profile.total_points, successRate, profile.current_streak || 0)
  const memberSince = new Date(profile.created_at).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })

  return (
    <div className="page">
      {/* Radial glow background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '600px',
          background: 'radial-gradient(circle at 50% 0%, oklch(0.78 0.16 180 / 0.12), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Header */}
      <section style={{ paddingTop: '72px', paddingBottom: '48px', position: 'relative', zIndex: 1 }}>
        <div className="wrap" style={{ maxWidth: '840px' }}>
          {/* User Info */}
          <div style={{ marginBottom: '32px' }}>
            {/* Username */}
            <h1
              style={{
                fontSize: '40px',
                fontWeight: 400,
                letterSpacing: '-0.025em',
                margin: '0 0 12px',
                lineHeight: 1.2,
                color: 'var(--fg-0)'
              }}
            >
              {profile.username}
            </h1>

            {/* Metadata row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--fg-2)',
                marginBottom: '20px'
              }}
            >
              <div>Membre depuis {memberSince}</div>
              <div style={{ color: 'var(--line)' }}>·</div>
              <div style={{ color: league.color }}>{league.name} League</div>
              <div style={{ color: 'var(--line)' }}>·</div>
              <div>Rang #{globalRank}</div>
            </div>

            {/* Bio */}
            {profile.bio && (
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--fg-1)',
                  lineHeight: 1.6,
                  margin: '0 0 24px',
                  maxWidth: '600px'
                }}
              >
                {profile.bio}
              </p>
            )}

            {/* Badges */}
            {badges.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 12px',
                      background: 'oklch(0.78 0.16 180 / 0.12)',
                      border: '1px solid oklch(0.78 0.16 180 / 0.3)',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'var(--acc)'
                    }}
                  >
                    <span style={{ fontSize: '14px' }}>{badge.icon}</span>
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Stats Strip (4 metrics) */}
          <div
            style={{
              background: 'var(--bg-1)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              overflow: 'hidden'
            }}
          >
            {/* Global Rank */}
            <div
              style={{
                padding: '36px 32px',
                borderRight: '1px solid var(--line)',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '38px',
                  fontWeight: 500,
                  letterSpacing: '-0.03em',
                  color: 'var(--acc)',
                  lineHeight: 1,
                  marginBottom: '8px'
                }}
              >
                #{globalRank}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10.5px',
                  color: 'var(--fg-2)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Rang global
              </div>
            </div>

            {/* Total Points */}
            <div
              style={{
                padding: '36px 32px',
                borderRight: '1px solid var(--line)',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '38px',
                  fontWeight: 500,
                  letterSpacing: '-0.03em',
                  color: 'var(--fg-0)',
                  lineHeight: 1,
                  marginBottom: '8px'
                }}
              >
                {profile.total_points.toLocaleString()}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10.5px',
                  color: 'var(--fg-2)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Points totaux
              </div>
            </div>

            {/* Success Rate */}
            <div
              style={{
                padding: '36px 32px',
                borderRight: '1px solid var(--line)',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '38px',
                  fontWeight: 500,
                  letterSpacing: '-0.03em',
                  color: successRate >= 70 ? 'var(--acc)' : successRate >= 50 ? 'var(--acc-amber)' : 'var(--fg-0)',
                  lineHeight: 1,
                  marginBottom: '8px'
                }}
              >
                {successRate}%
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10.5px',
                  color: 'var(--fg-2)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Taux de réussite
              </div>
            </div>

            {/* Questions Answered */}
            <div
              style={{
                padding: '36px 32px',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '38px',
                  fontWeight: 500,
                  letterSpacing: '-0.03em',
                  color: 'var(--fg-0)',
                  lineHeight: 1,
                  marginBottom: '8px'
                }}
              >
                {totalQuestions}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10.5px',
                  color: 'var(--fg-2)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Questions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topic Progress */}
      <section style={{ paddingTop: '48px', paddingBottom: '96px', position: 'relative', zIndex: 1 }}>
        <div className="wrap" style={{ maxWidth: '840px' }}>
          {/* Section Title */}
          <h2
            style={{
              fontSize: '28px',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              margin: '0 0 24px',
              color: 'var(--fg-0)'
            }}
          >
            Progression par matière
          </h2>

          {/* Topic rows in single card */}
          <div
            style={{
              background: 'var(--bg-1)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              overflow: 'hidden'
            }}
          >
            {curriculum.map((topic, index) => {
              const progress = topicProgress?.find(p => p.topic_id === topic.id)
              const points = pointsByTopic[topic.id] || 0
              const questionsAttempted = progress?.questions_attempted || 0
              const questionsCorrect = progress?.questions_correct || 0
              const topicSuccessRate = questionsAttempted > 0
                ? Math.round((questionsCorrect / questionsAttempted) * 100)
                : 0

              return (
                <div
                  key={topic.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '18px 24px',
                    borderBottom: index < curriculum.length - 1 ? '1px solid var(--line-soft)' : 'none'
                  }}
                >
                  {/* Left: Icon + Name */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
                    {/* Icon placeholder */}
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        background: 'var(--bg-0)',
                        border: '1px solid var(--line)',
                        borderRadius: '7px',
                        display: 'grid',
                        placeItems: 'center',
                        flexShrink: 0,
                        fontSize: '16px'
                      }}
                    >
                      📊
                    </div>

                    {/* Topic name + code */}
                    <div>
                      <div
                        style={{
                          fontSize: '13px',
                          color: 'var(--fg-2)',
                          fontFamily: 'var(--font-mono)',
                          marginBottom: '2px'
                        }}
                      >
                        {topic.code}
                      </div>
                      <div
                        style={{
                          fontSize: '14px',
                          fontWeight: 500,
                          color: 'var(--fg-1)'
                        }}
                      >
                        {topic.titleFr}
                      </div>
                    </div>
                  </div>

                  {/* Right: Stats */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    {/* Questions count */}
                    <div style={{ textAlign: 'right', minWidth: '80px' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '18px',
                          fontWeight: 500,
                          color: 'var(--fg-0)',
                          lineHeight: 1,
                          marginBottom: '4px'
                        }}
                      >
                        {questionsAttempted}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          color: 'var(--fg-3)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em'
                        }}
                      >
                        Questions
                      </div>
                    </div>

                    {/* Success rate */}
                    <div style={{ textAlign: 'right', minWidth: '60px' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '18px',
                          fontWeight: 500,
                          color: topicSuccessRate >= 70 ? 'var(--acc)' : topicSuccessRate >= 50 ? 'var(--acc-amber)' : 'var(--fg-0)',
                          lineHeight: 1,
                          marginBottom: '4px'
                        }}
                      >
                        {topicSuccessRate}%
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          color: 'var(--fg-3)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em'
                        }}
                      >
                        Précision
                      </div>
                    </div>

                    {/* Points */}
                    <div style={{ textAlign: 'right', minWidth: '80px' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '18px',
                          fontWeight: 500,
                          color: 'var(--fg-0)',
                          lineHeight: 1,
                          marginBottom: '4px'
                        }}
                      >
                        {points.toLocaleString()}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          color: 'var(--fg-3)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em'
                        }}
                      >
                        Points
                      </div>
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
