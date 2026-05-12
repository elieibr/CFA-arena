import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getTopicById } from '@/data/curriculum'
import QuizInterface from './QuizInterface'

export default async function QuizPage({
  params,
}: {
  params: Promise<{ topicId: string }>
}) {
  const { topicId } = await params
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const topic = getTopicById(topicId)
  if (!topic) {
    redirect('/dashboard')
  }

  // Get user profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  // Get user progress for this topic
  const { data: progress } = await supabase
    .from('user_topic_progress')
    .select('*')
    .eq('user_id', user.id)
    .eq('topic_id', topicId)
    .single()

  return (
    <QuizInterface
      topic={topic}
      profile={profile}
      initialProgress={progress}
      userId={user.id}
    />
  )
}
