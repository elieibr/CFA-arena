-- Add current_question_index to user_topic_progress table
ALTER TABLE user_topic_progress
ADD COLUMN IF NOT EXISTS current_question_index INTEGER DEFAULT 0;

-- Add comment
COMMENT ON COLUMN user_topic_progress.current_question_index IS 'Index of the last answered question (0-based) for resuming progress';
