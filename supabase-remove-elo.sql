-- =====================================================
-- Remove ELO system from CFA Arena
-- Keep only simple points system
-- =====================================================

-- Drop ELO-related triggers and functions
DROP TRIGGER IF EXISTS profiles_update_league ON profiles;
DROP FUNCTION IF EXISTS update_league_on_elo_change();
DROP FUNCTION IF EXISTS update_elo_rating(UUID, BOOLEAN, DECIMAL);
DROP FUNCTION IF EXISTS determine_league(INTEGER);

-- Drop and recreate materialized views without ELO
DROP MATERIALIZED VIEW IF EXISTS leaderboard_global CASCADE;
DROP MATERIALIZED VIEW IF EXISTS leaderboard_by_topic CASCADE;

-- Remove ELO column from profiles, keep league based on points
ALTER TABLE profiles DROP COLUMN IF EXISTS elo_rating;

-- Update league determination to be based on points instead of ELO
CREATE OR REPLACE FUNCTION determine_league_by_points(p_points INTEGER)
RETURNS TEXT AS $$
BEGIN
  IF p_points >= 10000 THEN
    RETURN 'master';
  ELSIF p_points >= 5000 THEN
    RETURN 'diamond';
  ELSIF p_points >= 2500 THEN
    RETURN 'gold';
  ELSIF p_points >= 1000 THEN
    RETURN 'silver';
  ELSE
    RETURN 'bronze';
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update league when points change
CREATE OR REPLACE FUNCTION update_league_on_points_change()
RETURNS TRIGGER AS $$
BEGIN
  NEW.league := determine_league_by_points(NEW.total_points);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER profiles_update_league_by_points
  BEFORE UPDATE OF total_points ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_league_on_points_change();

-- Recreate leaderboard_global without ELO
CREATE MATERIALIZED VIEW leaderboard_global AS
SELECT
  p.id,
  p.username,
  p.full_name,
  p.avatar_url,
  p.total_points,
  p.league,
  p.is_public,
  ROW_NUMBER() OVER (ORDER BY p.total_points DESC) as rank
FROM profiles p
WHERE p.is_public = true
ORDER BY p.total_points DESC;

CREATE UNIQUE INDEX idx_leaderboard_global_id ON leaderboard_global(id);
CREATE INDEX idx_leaderboard_global_rank ON leaderboard_global(rank);

-- Recreate leaderboard_by_topic without ELO
CREATE MATERIALIZED VIEW leaderboard_by_topic AS
SELECT
  utp.topic_id,
  p.id as user_id,
  p.username,
  p.full_name,
  p.avatar_url,
  p.league,
  p.is_public,
  utp.points_earned,
  utp.questions_correct,
  utp.questions_attempted,
  CASE
    WHEN utp.questions_attempted > 0
    THEN ROUND((utp.questions_correct::DECIMAL / utp.questions_attempted * 100), 2)
    ELSE 0
  END as success_rate,
  ROW_NUMBER() OVER (
    PARTITION BY utp.topic_id
    ORDER BY utp.points_earned DESC, utp.questions_correct DESC
  ) as rank
FROM user_topic_progress utp
JOIN profiles p ON utp.user_id = p.id
WHERE p.is_public = true AND utp.questions_attempted > 0
ORDER BY utp.topic_id, utp.points_earned DESC;

CREATE INDEX idx_leaderboard_topic_topic_id ON leaderboard_by_topic(topic_id);
CREATE INDEX idx_leaderboard_topic_rank ON leaderboard_by_topic(topic_id, rank);

-- Drop old ELO index
DROP INDEX IF EXISTS idx_profiles_elo_rating;

-- Update existing users' leagues based on points
UPDATE profiles SET league = determine_league_by_points(total_points);
