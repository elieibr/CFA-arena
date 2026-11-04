'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { createBrowserClient } from '@supabase/ssr'
import { curriculum } from '@/data/curriculum'
import { useRouter } from 'next/navigation'

// Ligne de la table spaced_repetition_cards (voir supabase-schema.sql)
interface ReviewCard {
  id: string
  topic_id: string
  question_text: string
  question_data: {
    question_text?: string
    option_a: string
    option_b: string
    option_c: string
    correct_answer: string
    explanation?: string
  }
  review_count: number
  next_review_date: string
}

// Intervalles (en jours) selon le nombre de révisions réussies d'affilée
const INTERVALS = [1, 3, 7, 14, 30]
const intervalFor = (count: number) => INTERVALS[Math.min(Math.max(count, 0), INTERVALS.length - 1)]

const wrapStyle = { maxWidth: '760px', margin: '0 auto', padding: '48px 24px 64px' } as const
const eyebrow = {
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: 'var(--fg-3)',
} as const

export default function ReviewPage() {
  const [cards, setCards] = useState<ReviewCard[]>([])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [reviewed, setReviewed] = useState(0)

  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    loadReviewCards()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function loadReviewCards() {
    setLoading(true)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }

    // Cartes à réviser : next_review_date <= maintenant
    const { data, error } = await supabase
      .from('spaced_repetition_cards')
      .select('id, topic_id, question_text, question_data, review_count, next_review_date')
      .eq('user_id', user.id)
      .lte('next_review_date', new Date().toISOString())
      .order('next_review_date', { ascending: true })

    if (error) console.error('Review cards load failed:', error)
    setCards((data as ReviewCard[]) || [])
    setLoading(false)
  }

  function handleAnswerSelect(answer: string) {
    if (showAnswer) return
    setSelectedAnswer(answer)
    setShowAnswer(true)
  }

  // rating: 'again' = raté, 'hard' = difficile, 'good' = bien
  async function handleRating(rating: 'again' | 'hard' | 'good') {
    const card = cards[currentCardIndex]
    if (!card || saving) return
    setSaving(true)

    const count = card.review_count || 0
    const newCount = rating === 'again' ? 0 : rating === 'good' ? count + 1 : count
    const days = rating === 'again' ? 1 : intervalFor(newCount)
    const next = new Date()
    next.setDate(next.getDate() + days)

    const { error } = await supabase
      .from('spaced_repetition_cards')
      .update({
        review_count: newCount,
        next_review_date: next.toISOString(),
        last_reviewed_at: new Date().toISOString(),
      })
      .eq('id', card.id)

    if (error) console.error('Review card update failed:', error)

    setSaving(false)
    setReviewed((r) => r + 1)

    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setShowAnswer(false)
      setSelectedAnswer(null)
    } else {
      router.push('/dashboard')
    }
  }

  if (loading) {
    return (
      <div style={{ ...wrapStyle, textAlign: 'center', color: 'var(--fg-2)' }}>
        Chargement des cartes de révision…
      </div>
    )
  }

  if (cards.length === 0) {
    return (
      <div style={wrapStyle}>
        <div style={{ ...eyebrow, marginBottom: '12px' }}>Révision espacée</div>
        <h1 style={{ fontSize: 'clamp(30px, 8vw, 40px)', fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '16px' }}>
          Aucune carte à réviser
        </h1>
        <p style={{ color: 'var(--fg-2)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
          Les questions auxquelles vous répondez de travers sont ajoutées ici pour être revues au bon moment.
          Continuez à vous entraîner pour alimenter vos révisions.
        </p>
        <Link href="/dashboard" className="btn btn-primary">
          Retour au tableau de bord
        </Link>
      </div>
    )
  }

  const card = cards[currentCardIndex]
  const q = card.question_data
  const questionText = q.question_text || card.question_text
  const topic = curriculum.find((t) => t.id === card.topic_id)
  const progress = ((currentCardIndex + 1) / cards.length) * 100
  const count = card.review_count || 0

  const ratings: { key: 'again' | 'hard' | 'good'; label: string; days: number }[] = [
    { key: 'again', label: 'Raté', days: 1 },
    { key: 'hard', label: 'Difficile', days: intervalFor(count) },
    { key: 'good', label: 'Bien', days: intervalFor(count + 1) },
  ]

  return (
    <div style={wrapStyle}>
      <div style={{ ...eyebrow, marginBottom: '12px' }}>
        Révision espacée · {topic?.titleFr || 'Quiz'}
      </div>
      <h1 style={{ fontSize: 'clamp(28px, 7vw, 36px)', fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '24px' }}>
        Carte {currentCardIndex + 1} sur {cards.length}
      </h1>

      <div style={{ height: '4px', background: 'var(--bg-2)', borderRadius: '2px', overflow: 'hidden', marginBottom: '32px' }}>
        <div style={{ width: `${progress}%`, height: '100%', background: 'var(--acc)', transition: 'width 0.3s ease' }} />
      </div>

      <div style={{ background: 'var(--bg-1)', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px' }}>
        <p className="qstem" style={{ marginBottom: '24px' }}>{questionText}</p>

        <div className="choices">
          {['A', 'B', 'C'].map((letter) => {
            const text = q[`option_${letter.toLowerCase()}` as 'option_a' | 'option_b' | 'option_c']
            const isSelected = selectedAnswer === letter
            const isCorrect = letter === q.correct_answer

            let className = 'choice'
            if (showAnswer) {
              if (isCorrect) className += ' correct'
              else if (isSelected) className += ' wrong'
              className += ' disabled'
            } else if (isSelected) {
              className += ' selected'
            }

            return (
              <button key={letter} onClick={() => handleAnswerSelect(letter)} disabled={showAnswer} className={className}>
                <div className="choice-letter">{letter}</div>
                <div className="choice-text">{text}</div>
              </button>
            )
          })}
        </div>

        {showAnswer && (
          <>
            {q.explanation && (
              <div style={{ marginTop: '24px', padding: '16px 20px', background: 'var(--bg-0)', border: '1px solid var(--line)', borderLeft: '3px solid var(--acc)', borderRadius: '8px' }}>
                <div style={{ ...eyebrow, marginBottom: '8px' }}>Explication</div>
                <p style={{ color: 'var(--fg-1)', fontSize: '15px', lineHeight: 1.6 }}>{q.explanation}</p>
              </div>
            )}

            <div style={{ marginTop: '24px' }}>
              <div style={{ ...eyebrow, marginBottom: '12px' }}>Comment l&apos;avez-vous trouvée ?</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
                {ratings.map((r) => (
                  <button
                    key={r.key}
                    onClick={() => handleRating(r.key)}
                    disabled={saving}
                    className="btn btn-ghost"
                    style={{ flexDirection: 'column', alignItems: 'center', gap: '2px', minHeight: '56px' }}
                  >
                    <span>{r.label}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-3)' }}>
                      revue dans {r.days} j
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <div style={{ ...eyebrow, marginTop: '16px', textAlign: 'right' }}>{reviewed} révisée{reviewed > 1 ? 's' : ''}</div>
    </div>
  )
}
