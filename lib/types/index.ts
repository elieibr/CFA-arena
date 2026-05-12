export * from './database'

// Application types
export interface CFAQuestion {
  question: string
  optionA: string
  optionB: string
  optionC: string
  optionD: string
  correctAnswer: 'A' | 'B' | 'C' | 'D'
  explanation: string
  detailedExplanation?: string
  topic: string
  difficulty?: 'easy' | 'medium' | 'hard'
}

export interface UserProfile {
  id: string
  username: string
  fullName: string | null
  avatarUrl: string | null
  bio: string | null
  totalPoints: number
  eloRating: number
  league: 'bronze' | 'silver' | 'gold' | 'diamond' | 'master'
  isPublic: boolean
  showStats: boolean
  rank?: number
}

export interface TopicProgress {
  topicId: string
  questionsAttempted: number
  questionsCorrect: number
  totalTimeSpent: number
  pointsEarned: number
  successRate: number
  rank?: number
}

export interface LeaderboardEntry {
  id: string
  username: string
  fullName: string | null
  avatarUrl: string | null
  totalPoints: number
  eloRating: number
  league: 'bronze' | 'silver' | 'gold' | 'diamond' | 'master'
  rank: number
}

export interface TopicLeaderboardEntry extends LeaderboardEntry {
  topicId: string
  pointsEarned: number
  questionsCorrect: number
  questionsAttempted: number
  successRate: number
}
