'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { curriculum } from '@/data/curriculum'
import { Brain, CheckCircle, XCircle, RotateCcw, Calendar } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface ReviewCard {
  id: string
  question_id: string
  topic_id: string
  interval: number
  ease_factor: number
  next_review: string
  repetitions: number
  question: {
    question_text: string
    option_a: string
    option_b: string
    option_c: string
    correct_answer: string
    explanation: string
  }
}

export default function ReviewPage() {
  const [cards, setCards] = useState<ReviewCard[]>([])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)
  const [stats, setStats] = useState({ due: 0, reviewed: 0, remaining: 0 })

  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    loadReviewCards()
  }, [])

  async function loadReviewCards() {
    setLoading(true)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }
    setUserId(user.id)

    // Get cards due for review (next_review <= now)
    const { data: cardsData } = await supabase
      .from('spaced_repetition_cards')
      .select(`
        *,
        question:questions(*)
      `)
      .eq('user_id', user.id)
      .lte('next_review', new Date().toISOString())
      .order('next_review', { ascending: true })

    if (cardsData) {
      setCards(cardsData as any)
      setStats({
        due: cardsData.length,
        reviewed: 0,
        remaining: cardsData.length
      })
    }

    setLoading(false)
  }

  async function handleAnswerSelect(answer: string) {
    setSelectedAnswer(answer)
    setShowAnswer(true)
  }

  // SM-2 Algorithm for spaced repetition
  async function handleQuality(quality: number) {
    // quality: 0-5 (0=total blackout, 5=perfect response)
    if (!userId || !cards[currentCardIndex]) return

    const card = cards[currentCardIndex]
    let newEaseFactor = card.ease_factor
    let newInterval = card.interval
    let newRepetitions = card.repetitions

    if (quality >= 3) {
      // Correct answer
      if (newRepetitions === 0) {
        newInterval = 1
      } else if (newRepetitions === 1) {
        newInterval = 6
      } else {
        newInterval = Math.round(newInterval * newEaseFactor)
      }
      newRepetitions += 1
    } else {
      // Incorrect answer - reset
      newRepetitions = 0
      newInterval = 1
    }

    // Update ease factor
    newEaseFactor = newEaseFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    if (newEaseFactor < 1.3) newEaseFactor = 1.3

    const nextReview = new Date()
    nextReview.setDate(nextReview.getDate() + newInterval)

    // Update card in database
    await supabase
      .from('spaced_repetition_cards')
      .update({
        interval: newInterval,
        ease_factor: newEaseFactor,
        repetitions: newRepetitions,
        next_review: nextReview.toISOString(),
        last_reviewed: new Date().toISOString()
      })
      .eq('id', card.id)

    // Move to next card
    setStats({
      ...stats,
      reviewed: stats.reviewed + 1,
      remaining: stats.remaining - 1
    })

    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setShowAnswer(false)
      setSelectedAnswer(null)
    } else {
      // Review session complete
      router.push('/dashboard')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Chargement des cartes de révision...</div>
      </div>
    )
  }

  if (cards.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl p-12 shadow-lg text-center">
            <Brain className="w-24 h-24 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              🎉 Aucune carte à réviser!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Toutes vos révisions sont à jour. Continuez à pratiquer pour ajouter de nouvelles cartes.
            </p>
            <button
              onClick={() => router.push('/dashboard')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition"
            >
              Retour au Dashboard
            </button>
          </div>
        </div>
      </div>
    )
  }

  const currentCard = cards[currentCardIndex]
  const question = currentCard.question
  const topic = curriculum.find((t) => t.id === currentCard.topic_id)
  const progress = ((currentCardIndex + 1) / cards.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Brain className="w-6 h-6 text-purple-600" />
                Révision Espacée
              </h1>
              <p className="text-sm text-gray-600">{topic?.titleFr || 'Quiz'}</p>
            </div>

            <div className="flex gap-4">
              {/* Stats */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 text-blue-700">
                <Calendar className="w-5 h-5" />
                <span className="font-bold">{stats.remaining} restantes</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-bold">{stats.reviewed} révisées</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Progression</span>
              <span className="font-bold text-gray-900">
                {currentCardIndex + 1}/{cards.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Card */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          {/* Card Info */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                Intervalle actuel: <span className="font-bold text-purple-600">{currentCard.interval} jour(s)</span>
              </div>
              <div className="text-sm text-gray-600">
                Répétitions: <span className="font-bold text-purple-600">{currentCard.repetitions}</span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Facilité: <span className="font-bold text-purple-600">{currentCard.ease_factor.toFixed(2)}</span>
            </div>
          </div>

          {/* Question */}
          <h2 className="text-xl font-bold text-gray-900 mb-8">
            {question.question_text}
          </h2>

          {/* Answer Options */}
          <div className="space-y-4 mb-8">
            {['A', 'B', 'C'].map((option) => {
              const optionText = question[`option_${option.toLowerCase()}` as keyof typeof question] as string
              const isSelected = selectedAnswer === option
              const isCorrect = option === question.correct_answer

              let bgColor = 'bg-gray-50 hover:bg-gray-100 border-gray-300'
              if (showAnswer) {
                if (isCorrect) {
                  bgColor = 'bg-green-100 border-green-500'
                } else if (isSelected && !isCorrect) {
                  bgColor = 'bg-red-100 border-red-500'
                }
              } else if (isSelected) {
                bgColor = 'bg-blue-100 border-blue-500'
              }

              return (
                <button
                  key={option}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={showAnswer}
                  className={`w-full text-left p-4 rounded-lg border-2 transition ${bgColor} ${
                    showAnswer ? 'cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center font-bold">
                      {option}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900">{optionText}</p>
                    </div>
                    {showAnswer && isCorrect && (
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    )}
                    {showAnswer && isSelected && !isCorrect && (
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Explanation */}
          {showAnswer && (
            <>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h3 className="font-bold text-blue-900 mb-2">Explication:</h3>
                <p className="text-blue-800">{question.explanation}</p>
              </div>

              {/* Quality Rating Buttons */}
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 mb-3">Comment avez-vous trouvé cette question?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button
                    onClick={() => handleQuality(0)}
                    className="px-4 py-3 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-medium transition"
                  >
                    😰 Blackout<br/>
                    <span className="text-xs">+1 jour</span>
                  </button>
                  <button
                    onClick={() => handleQuality(3)}
                    className="px-4 py-3 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg font-medium transition"
                  >
                    😐 Difficile<br/>
                    <span className="text-xs">+1 jour</span>
                  </button>
                  <button
                    onClick={() => handleQuality(4)}
                    className="px-4 py-3 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg font-medium transition"
                  >
                    🙂 Bien<br/>
                    <span className="text-xs">+{currentCard.repetitions === 0 ? 1 : currentCard.repetitions === 1 ? 6 : Math.round(currentCard.interval * currentCard.ease_factor)} jours</span>
                  </button>
                  <button
                    onClick={() => handleQuality(5)}
                    className="px-4 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg font-medium transition"
                  >
                    😎 Facile<br/>
                    <span className="text-xs">+{currentCard.repetitions === 0 ? 1 : currentCard.repetitions === 1 ? 6 : Math.round(currentCard.interval * (currentCard.ease_factor + 0.1))} jours</span>
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Show Answer Button */}
          {!showAnswer && !selectedAnswer && (
            <button
              onClick={() => setShowAnswer(true)}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Voir la Réponse
            </button>
          )}
        </div>
      </main>
    </div>
  )
}
