// Database types matching Supabase schema
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type League = 'bronze' | 'silver' | 'gold' | 'diamond' | 'master'
export type Difficulty = 'easy' | 'medium' | 'hard'

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          total_points: number
          elo_rating: number
          league: League
          is_public: boolean
          show_stats: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          total_points?: number
          elo_rating?: number
          league?: League
          is_public?: boolean
          show_stats?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          total_points?: number
          elo_rating?: number
          league?: League
          is_public?: boolean
          show_stats?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      topics: {
        Row: {
          id: string
          title_en: string
          title_fr: string
          weight: number
          icon: string
          description: string | null
          difficulty_multiplier: number
          created_at: string
        }
        Insert: {
          id: string
          title_en: string
          title_fr: string
          weight: number
          icon: string
          description?: string | null
          difficulty_multiplier?: number
          created_at?: string
        }
        Update: {
          id?: string
          title_en?: string
          title_fr?: string
          weight?: number
          icon?: string
          description?: string | null
          difficulty_multiplier?: number
          created_at?: string
        }
      }
      user_topic_progress: {
        Row: {
          id: string
          user_id: string
          topic_id: string
          questions_attempted: number
          questions_correct: number
          total_time_spent: number
          points_earned: number
          last_practiced_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          topic_id: string
          questions_attempted?: number
          questions_correct?: number
          total_time_spent?: number
          points_earned?: number
          last_practiced_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          topic_id?: string
          questions_attempted?: number
          questions_correct?: number
          total_time_spent?: number
          points_earned?: number
          last_practiced_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      question_history: {
        Row: {
          id: string
          user_id: string
          topic_id: string
          question_text: string
          user_answer: string
          correct_answer: string
          is_correct: boolean
          time_taken: number | null
          difficulty: Difficulty | null
          points_earned: number
          answered_at: string
        }
        Insert: {
          id?: string
          user_id: string
          topic_id: string
          question_text: string
          user_answer: string
          correct_answer: string
          is_correct: boolean
          time_taken?: number | null
          difficulty?: Difficulty | null
          points_earned?: number
          answered_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          topic_id?: string
          question_text?: string
          user_answer?: string
          correct_answer?: string
          is_correct?: boolean
          time_taken?: number | null
          difficulty?: Difficulty | null
          points_earned?: number
          answered_at?: string
        }
      }
      exam_simulations: {
        Row: {
          id: string
          user_id: string
          total_questions: number
          correct_answers: number
          score_percentage: number
          time_taken: number
          topic_breakdown: Json
          points_earned: number
          completed_at: string
        }
        Insert: {
          id?: string
          user_id: string
          total_questions: number
          correct_answers: number
          score_percentage: number
          time_taken: number
          topic_breakdown: Json
          points_earned?: number
          completed_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          total_questions?: number
          correct_answers?: number
          score_percentage?: number
          time_taken?: number
          topic_breakdown?: Json
          points_earned?: number
          completed_at?: string
        }
      }
    }
    Views: {
      leaderboard_global: {
        Row: {
          id: string
          username: string
          full_name: string | null
          avatar_url: string | null
          total_points: number
          elo_rating: number
          league: League
          is_public: boolean
          rank: number
        }
      }
      leaderboard_by_topic: {
        Row: {
          topic_id: string
          user_id: string
          username: string
          full_name: string | null
          avatar_url: string | null
          league: League
          is_public: boolean
          points_earned: number
          questions_correct: number
          questions_attempted: number
          success_rate: number
          rank: number
        }
      }
    }
    Functions: {
      calculate_points: {
        Args: {
          p_is_correct: boolean
          p_topic_difficulty: number
          p_time_taken: number
          p_max_time?: number
        }
        Returns: number
      }
      update_elo_rating: {
        Args: {
          p_user_id: string
          p_is_correct: boolean
          p_topic_difficulty?: number
        }
        Returns: number
      }
      get_user_rank: {
        Args: {
          p_user_id: string
        }
        Returns: number
      }
      get_user_topic_rank: {
        Args: {
          p_user_id: string
          p_topic_id: string
        }
        Returns: number
      }
      refresh_leaderboards: {
        Args: Record<string, never>
        Returns: void
      }
    }
  }
}
