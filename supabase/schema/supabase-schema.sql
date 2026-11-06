-- =====================================================
-- CFA ARENA - Complete Supabase Schema
-- Multi-user gamified CFA Level 1 platform
-- =====================================================

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =====================================================
-- USERS & PROFILES
-- =====================================================

-- Extended user profiles (linked to auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,

  -- Gamification
  total_points INTEGER DEFAULT 0,
  elo_rating INTEGER DEFAULT 1200,
  league TEXT DEFAULT 'bronze' CHECK (league IN ('bronze', 'silver', 'gold', 'diamond', 'master')),

  -- Public profile settings
  is_public BOOLEAN DEFAULT true,
  show_stats BOOLEAN DEFAULT true,

  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  -- Constraints
  CONSTRAINT username_length CHECK (char_length(username) >= 3 AND char_length(username) <= 30)
);

-- Profile update trigger
CREATE OR REPLACE FUNCTION update_profile_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_profile_updated_at();

-- =====================================================
-- CFA CURRICULUM
-- =====================================================

-- Topics (main subjects)
CREATE TABLE topics (
  id TEXT PRIMARY KEY,
  title_en TEXT NOT NULL,
  title_fr TEXT NOT NULL,
  weight DECIMAL(3,2) NOT NULL,
  icon TEXT NOT NULL,
  description TEXT,
  difficulty_multiplier DECIMAL(3,2) DEFAULT 1.0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- PROGRESS & ACHIEVEMENTS
-- =====================================================

-- User progress per topic
CREATE TABLE user_topic_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  topic_id TEXT NOT NULL REFERENCES topics(id) ON DELETE CASCADE,

  -- Stats
  questions_attempted INTEGER DEFAULT 0,
  questions_correct INTEGER DEFAULT 0,
  total_time_spent INTEGER DEFAULT 0, -- en secondes

  -- Points
  points_earned INTEGER DEFAULT 0,

  -- Timestamps
  last_practiced_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE(user_id, topic_id)
);

CREATE INDEX idx_user_topic_progress_user ON user_topic_progress(user_id);
CREATE INDEX idx_user_topic_progress_topic ON user_topic_progress(topic_id);

-- Question history (all answered questions)
CREATE TABLE question_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  topic_id TEXT NOT NULL REFERENCES topics(id) ON DELETE CASCADE,

  -- Question data
  question_text TEXT NOT NULL,
  user_answer TEXT NOT NULL,
  correct_answer TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,

  -- Context
  time_taken INTEGER, -- en secondes
  difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'hard')),

  -- Points earned for this question
  points_earned INTEGER DEFAULT 0,

  -- Timestamp
  answered_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_question_history_user ON question_history(user_id);
CREATE INDEX idx_question_history_topic ON question_history(topic_id);
CREATE INDEX idx_question_history_answered_at ON question_history(answered_at DESC);

-- Spaced repetition cards
CREATE TABLE spaced_repetition_cards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  topic_id TEXT NOT NULL REFERENCES topics(id) ON DELETE CASCADE,

  -- Question data (stored for offline review)
  question_text TEXT NOT NULL,
  question_data JSONB NOT NULL, -- Full question object

  -- Spaced repetition algorithm
  difficulty TEXT NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
  next_review_date TIMESTAMPTZ NOT NULL,
  review_count INTEGER DEFAULT 0,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_reviewed_at TIMESTAMPTZ
);

CREATE INDEX idx_spaced_rep_user ON spaced_repetition_cards(user_id);
CREATE INDEX idx_spaced_rep_next_review ON spaced_repetition_cards(next_review_date);

-- Exam simulations
CREATE TABLE exam_simulations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,

  -- Results
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL,
  score_percentage DECIMAL(5,2) NOT NULL,

  -- Time
  time_taken INTEGER NOT NULL, -- en secondes

  -- Breakdown by topic (JSONB for flexibility)
  topic_breakdown JSONB NOT NULL,

  -- Points earned
  points_earned INTEGER DEFAULT 0,

  -- Timestamp
  completed_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_exam_simulations_user ON exam_simulations(user_id);
CREATE INDEX idx_exam_simulations_completed ON exam_simulations(completed_at DESC);

-- =====================================================
-- LEADERBOARDS & RANKINGS
-- =====================================================

-- Global leaderboard (materialized view for performance)
CREATE MATERIALIZED VIEW leaderboard_global AS
SELECT
  p.id,
  p.username,
  p.full_name,
  p.avatar_url,
  p.total_points,
  p.elo_rating,
  p.league,
  p.is_public,
  ROW_NUMBER() OVER (ORDER BY p.total_points DESC, p.elo_rating DESC) as rank
FROM profiles p
WHERE p.is_public = true
ORDER BY p.total_points DESC, p.elo_rating DESC;

CREATE UNIQUE INDEX idx_leaderboard_global_id ON leaderboard_global(id);
CREATE INDEX idx_leaderboard_global_rank ON leaderboard_global(rank);

-- Topic leaderboards (materialized view)
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

-- Function to refresh leaderboards
CREATE OR REPLACE FUNCTION refresh_leaderboards()
RETURNS void AS $$
BEGIN
  REFRESH MATERIALIZED VIEW CONCURRENTLY leaderboard_global;
  REFRESH MATERIALIZED VIEW CONCURRENTLY leaderboard_by_topic;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- POINTS & ELO CALCULATION
-- =====================================================

-- Function to calculate points earned for a question
CREATE OR REPLACE FUNCTION calculate_points(
  p_is_correct BOOLEAN,
  p_topic_difficulty DECIMAL,
  p_time_taken INTEGER,
  p_max_time INTEGER DEFAULT 90
)
RETURNS INTEGER AS $$
DECLARE
  base_points INTEGER;
  time_bonus INTEGER;
  total_points INTEGER;
BEGIN
  -- Base points for correct answer
  IF NOT p_is_correct THEN
    RETURN 0;
  END IF;

  -- Base points: 100 * difficulty multiplier
  base_points := (100 * p_topic_difficulty)::INTEGER;

  -- Time bonus: up to 50% more points for fast answers
  IF p_time_taken <= p_max_time * 0.25 THEN
    time_bonus := (base_points * 0.5)::INTEGER;
  ELSIF p_time_taken <= p_max_time * 0.5 THEN
    time_bonus := (base_points * 0.3)::INTEGER;
  ELSIF p_time_taken <= p_max_time * 0.75 THEN
    time_bonus := (base_points * 0.1)::INTEGER;
  ELSE
    time_bonus := 0;
  END IF;

  total_points := base_points + time_bonus;

  RETURN total_points;
END;
$$ LANGUAGE plpgsql;

-- Function to update ELO rating after a question
CREATE OR REPLACE FUNCTION update_elo_rating(
  p_user_id UUID,
  p_is_correct BOOLEAN,
  p_topic_difficulty DECIMAL DEFAULT 1.0
)
RETURNS INTEGER AS $$
DECLARE
  current_elo INTEGER;
  expected_score DECIMAL;
  actual_score DECIMAL;
  elo_change INTEGER;
  k_factor INTEGER := 32;
  new_elo INTEGER;
BEGIN
  -- Get current ELO
  SELECT elo_rating INTO current_elo FROM profiles WHERE id = p_user_id;

  -- Expected score based on difficulty
  expected_score := 1.0 / (1.0 + POWER(10, ((p_topic_difficulty * 200 - current_elo) / 400.0)));

  -- Actual score (1 for correct, 0 for incorrect)
  actual_score := CASE WHEN p_is_correct THEN 1.0 ELSE 0.0 END;

  -- Calculate ELO change
  elo_change := (k_factor * (actual_score - expected_score))::INTEGER;
  new_elo := current_elo + elo_change;

  -- Ensure ELO doesn't go below 0
  IF new_elo < 0 THEN
    new_elo := 0;
  END IF;

  -- Update user ELO
  UPDATE profiles SET elo_rating = new_elo WHERE id = p_user_id;

  RETURN new_elo;
END;
$$ LANGUAGE plpgsql;

-- Function to determine league based on ELO
CREATE OR REPLACE FUNCTION determine_league(p_elo INTEGER)
RETURNS TEXT AS $$
BEGIN
  IF p_elo >= 2000 THEN
    RETURN 'master';
  ELSIF p_elo >= 1600 THEN
    RETURN 'diamond';
  ELSIF p_elo >= 1400 THEN
    RETURN 'gold';
  ELSIF p_elo >= 1200 THEN
    RETURN 'silver';
  ELSE
    RETURN 'bronze';
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update league when ELO changes
CREATE OR REPLACE FUNCTION update_league_on_elo_change()
RETURNS TRIGGER AS $$
BEGIN
  NEW.league := determine_league(NEW.elo_rating);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER profiles_update_league
  BEFORE UPDATE OF elo_rating ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_league_on_elo_change();

-- =====================================================
-- API KEY STORAGE (encrypted)
-- =====================================================

CREATE TABLE user_api_keys (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,

  -- Encrypted API key
  encrypted_key TEXT NOT NULL,

  -- Metadata
  provider TEXT NOT NULL DEFAULT 'anthropic',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_used_at TIMESTAMPTZ,

  UNIQUE(user_id, provider)
);

CREATE INDEX idx_user_api_keys_user ON user_api_keys(user_id);

-- =====================================================
-- ROW LEVEL SECURITY (RLS)
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_topic_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE spaced_repetition_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_simulations ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_api_keys ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (is_public = true);

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- User topic progress policies
CREATE POLICY "Users can view own progress"
  ON user_topic_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON user_topic_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_topic_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- Question history policies
CREATE POLICY "Users can view own question history"
  ON question_history FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own question history"
  ON question_history FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Spaced repetition policies
CREATE POLICY "Users can manage own spaced repetition cards"
  ON spaced_repetition_cards FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Exam simulations policies
CREATE POLICY "Users can view own exam simulations"
  ON exam_simulations FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own exam simulations"
  ON exam_simulations FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- API keys policies (most restrictive)
CREATE POLICY "Users can manage own API keys"
  ON user_api_keys FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Topics are readable by everyone (no RLS needed, public data)
-- No RLS on topics table

-- =====================================================
-- FUNCTIONS FOR APPLICATION USE
-- =====================================================

-- Function to get user rank
CREATE OR REPLACE FUNCTION get_user_rank(p_user_id UUID)
RETURNS INTEGER AS $$
DECLARE
  user_rank INTEGER;
BEGIN
  SELECT rank INTO user_rank
  FROM leaderboard_global
  WHERE id = p_user_id;

  RETURN COALESCE(user_rank, 0);
END;
$$ LANGUAGE plpgsql;

-- Function to get user topic rank
CREATE OR REPLACE FUNCTION get_user_topic_rank(p_user_id UUID, p_topic_id TEXT)
RETURNS INTEGER AS $$
DECLARE
  user_rank INTEGER;
BEGIN
  SELECT rank INTO user_rank
  FROM leaderboard_by_topic
  WHERE user_id = p_user_id AND topic_id = p_topic_id;

  RETURN COALESCE(user_rank, 0);
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================

CREATE INDEX idx_profiles_username ON profiles(username);
CREATE INDEX idx_profiles_league ON profiles(league);
CREATE INDEX idx_profiles_total_points ON profiles(total_points DESC);
CREATE INDEX idx_profiles_elo_rating ON profiles(elo_rating DESC);

-- =====================================================
-- SEED DATA - CFA Topics
-- =====================================================

INSERT INTO topics (id, title_en, title_fr, weight, icon, difficulty_multiplier) VALUES
('quantitative-methods', 'Quantitative Methods', 'Méthodes quantitatives', 0.10, 'Calculator', 1.2),
('economics', 'Economics', 'Économie', 0.10, 'TrendingUp', 1.0),
('financial-statement-analysis', 'Financial Statement Analysis', 'Analyse des états financiers', 0.13, 'FileText', 1.3),
('corporate-issuers', 'Corporate Issuers', 'Émetteurs corporate', 0.08, 'Building', 1.1),
('equity-investments', 'Equity Investments', 'Investissements actions', 0.11, 'LineChart', 1.2),
('fixed-income', 'Fixed Income', 'Titres à revenu fixe', 0.11, 'DollarSign', 1.3),
('derivatives', 'Derivatives', 'Produits dérivés', 0.05, 'GitBranch', 1.5),
('alternative-investments', 'Alternative Investments', 'Investissements alternatifs', 0.07, 'Briefcase', 1.4),
('portfolio-management', 'Portfolio Management', 'Gestion de portefeuille', 0.07, 'PieChart', 1.2),
('ethical-standards', 'Ethical and Professional Standards', 'Éthique et standards professionnels', 0.15, 'Scale', 0.8);

-- =====================================================
-- SCHEDULED JOBS (requires pg_cron extension)
-- =====================================================

-- Refresh leaderboards every 5 minutes
-- SELECT cron.schedule('refresh-leaderboards', '*/5 * * * *', 'SELECT refresh_leaderboards();');

-- Note: pg_cron needs to be enabled in Supabase dashboard
