'use client'

import { useState, useEffect } from 'react'
import { Topic } from '@/data/curriculum'
import { Clock, CheckCircle, XCircle, TrendingUp, Award } from 'lucide-react'
import { submitAnswer } from '@/app/actions/quiz'

interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface QuizInterfaceProps {
  topic: Topic
  profile: any
  initialProgress: any
  userId: string
}

export default function QuizInterface({
  topic,
  profile,
  initialProgress,
  userId,
}: QuizInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [startTime, setStartTime] = useState(Date.now())
  const [loading, setLoading] = useState(false)
  const [pointsEarned, setPointsEarned] = useState(0)
  const [eloChange, setEloChange] = useState(0)

  // Timer
  useEffect(() => {
    if (!isAnswered) {
      const interval = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - startTime) / 1000))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isAnswered, startTime])

  // Load initial question
  useEffect(() => {
    loadNewQuestion()
  }, [])

  const loadNewQuestion = () => {
    // Generate a sample question (in production, this would call Anthropic API)
    const sampleQuestions: Question[] = [
      {
        id: `${topic.id}-${Date.now()}`,
        question: `Quelle est l'une des principales applications de ${topic.titleFr} dans l'analyse financière?`,
        options: [
          'Évaluation des risques et des rendements',
          'Préparation des états financiers uniquement',
          'Gestion des ressources humaines',
          'Marketing et communication',
        ],
        correctAnswer: 0,
        explanation: `${topic.titleFr} est essentiel pour l'évaluation des risques et des rendements dans l'analyse financière.`,
      },
      {
        id: `${topic.id}-${Date.now()}-2`,
        question: `Dans le cadre de ${topic.titleFr}, quelle métrique est la plus importante?`,
        options: [
          'La cohérence méthodologique',
          'Le nombre de variables',
          'La vitesse de calcul',
          'La complexité du modèle',
        ],
        correctAnswer: 0,
        explanation:
          'La cohérence méthodologique est fondamentale pour assurer la fiabilité des analyses.',
      },
      {
        id: `${topic.id}-${Date.now()}-3`,
        question: `Quel est le poids de ${topic.titleFr} dans l'examen CFA Level 1?`,
        options: [
          `${(topic.weight * 100).toFixed(0)}%`,
          `${((topic.weight + 0.05) * 100).toFixed(0)}%`,
          `${((topic.weight - 0.05) * 100).toFixed(0)}%`,
          `${((topic.weight + 0.1) * 100).toFixed(0)}%`,
        ],
        correctAnswer: 0,
        explanation: `${topic.titleFr} représente ${(topic.weight * 100).toFixed(0)}% du curriculum CFA Level 1.`,
      },
    ]

    const randomQuestion =
      sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)]
    setCurrentQuestion(randomQuestion)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setStartTime(Date.now())
    setTimeElapsed(0)
    setPointsEarned(0)
    setEloChange(0)
  }

  const handleAnswerSubmit = async () => {
    if (selectedAnswer === null || !currentQuestion) return

    setLoading(true)
    const correct = selectedAnswer === currentQuestion.correctAnswer
    setIsCorrect(correct)
    setIsAnswered(true)

    // Submit answer to backend
    const result = await submitAnswer({
      userId,
      topicId: topic.id,
      questionId: currentQuestion.id,
      isCorrect: correct,
      timeInSeconds: timeElapsed,
      difficulty: topic.difficultyMultiplier,
    })

    if (result.success) {
      setPointsEarned(result.pointsEarned || 0)
      setEloChange(result.eloChange || 0)
    }

    setLoading(false)
  }

  const handleNextQuestion = () => {
    loadNewQuestion()
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de la question...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {topic.titleFr}
              </h1>
              <p className="text-gray-600 text-sm mt-1">{topic.titleEn}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">ELO</p>
                <p className="text-xl font-bold text-gray-900">
                  {profile.elo_rating}
                  {eloChange !== 0 && (
                    <span
                      className={`text-sm ml-1 ${
                        eloChange > 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {eloChange > 0 ? '+' : ''}
                      {eloChange}
                    </span>
                  )}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Points</p>
                <p className="text-xl font-bold text-yellow-600">
                  {profile.total_points.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Timer and Progress */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-lg font-semibold text-gray-900">
                {timeElapsed}s
              </span>
            </div>
            {initialProgress && (
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>
                  Questions: {initialProgress.questions_attempted}
                </span>
                <span>
                  Réussite:{' '}
                  {initialProgress.questions_attempted > 0
                    ? (
                        (initialProgress.questions_correct /
                          initialProgress.questions_attempted) *
                        100
                      ).toFixed(0)
                    : 0}
                  %
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrectAnswer = index === currentQuestion.correctAnswer
              const showResult = isAnswered

              return (
                <button
                  key={index}
                  onClick={() => !isAnswered && setSelectedAnswer(index)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-lg border-2 text-left transition ${
                    showResult
                      ? isCorrectAnswer
                        ? 'border-green-500 bg-green-50'
                        : isSelected
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 bg-white'
                      : isSelected
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  } ${isAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{option}</span>
                    {showResult && isCorrectAnswer && (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    )}
                    {showResult && isSelected && !isCorrectAnswer && (
                      <XCircle className="w-6 h-6 text-red-600" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {isAnswered && (
            <div
              className={`mt-6 p-4 rounded-lg ${
                isCorrect ? 'bg-green-50' : 'bg-red-50'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-600" />
                )}
                <span
                  className={`font-bold text-lg ${
                    isCorrect ? 'text-green-700' : 'text-red-700'
                  }`}
                >
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                {currentQuestion.explanation}
              </p>

              {isCorrect && pointsEarned > 0 && (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <Award className="w-5 h-5" />
                    <span className="font-bold">+{pointsEarned} points</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-bold">
                      {eloChange > 0 ? '+' : ''}
                      {eloChange} ELO
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {!isAnswered ? (
            <button
              onClick={handleAnswerSubmit}
              disabled={selectedAnswer === null || loading}
              className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Vérification...' : 'Valider'}
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="flex-1 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Question suivante →
            </button>
          )}
          <button
            onClick={() => (window.location.href = '/dashboard')}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Quitter
          </button>
        </div>
      </main>
    </div>
  )
}
