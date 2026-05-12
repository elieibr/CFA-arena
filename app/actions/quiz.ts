'use server'

import { createClient } from '@/lib/supabase/server'

interface SubmitAnswerParams {
  userId: string
  topicId: string
  questionId: string
  isCorrect: boolean
  timeInSeconds: number
  difficulty: number
}

export async function submitAnswer(params: SubmitAnswerParams) {
  const { userId, topicId, questionId, isCorrect, timeInSeconds, difficulty } =
    params

  const supabase = await createClient()

  try {
    // Calculate points using the database function
    const maxTime = 90 // 90 seconds max time
    const { data: pointsData } = await supabase.rpc('calculate_points', {
      p_is_correct: isCorrect,
      p_topic_difficulty: difficulty,
      p_time_taken: timeInSeconds,
      p_max_time: maxTime,
    })

    const pointsEarned = pointsData || 0

    // Get current user profile for ELO calculation
    const { data: profile } = await supabase
      .from('profiles')
      .select('elo_rating')
      .eq('id', userId)
      .single()

    if (!profile) {
      return { success: false, error: 'Profile not found' }
    }

    const currentElo = profile.elo_rating

    // Calculate expected score for ELO (simplified: 0.5 for same difficulty)
    const expectedScore = 0.5
    const actualScore = isCorrect ? 1 : 0

    // Update ELO rating using the database function
    const { data: eloData } = await supabase.rpc('update_elo_rating', {
      p_user_id: userId,
      p_actual_score: actualScore,
      p_expected_score: expectedScore,
      p_k_factor: 32,
    })

    const newElo = eloData || currentElo
    const eloChange = newElo - currentElo

    // Record question history
    await supabase.from('question_history').insert({
      user_id: userId,
      topic_id: topicId,
      question_id: questionId,
      is_correct: isCorrect,
      time_taken: timeInSeconds,
      points_earned: pointsEarned,
      elo_change: eloChange,
    })

    // Update or create user topic progress
    const { data: existingProgress } = await supabase
      .from('user_topic_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('topic_id', topicId)
      .single()

    if (existingProgress) {
      // Update existing progress
      await supabase
        .from('user_topic_progress')
        .update({
          questions_attempted: existingProgress.questions_attempted + 1,
          questions_correct: isCorrect
            ? existingProgress.questions_correct + 1
            : existingProgress.questions_correct,
          points_earned: existingProgress.points_earned + pointsEarned,
          last_attempted_at: new Date().toISOString(),
        })
        .eq('user_id', userId)
        .eq('topic_id', topicId)
    } else {
      // Create new progress
      await supabase.from('user_topic_progress').insert({
        user_id: userId,
        topic_id: topicId,
        questions_attempted: 1,
        questions_correct: isCorrect ? 1 : 0,
        points_earned: pointsEarned,
      })
    }

    // Update user total points
    await supabase.rpc('increment', {
      row_id: userId,
      x: pointsEarned,
    })

    return {
      success: true,
      pointsEarned,
      eloChange,
      newElo,
    }
  } catch (error) {
    console.error('Error submitting answer:', error)
    return { success: false, error: 'Failed to submit answer' }
  }
}
