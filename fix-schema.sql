-- =====================================================
-- FIX SCHEMA SQL - CFA Arena
-- Corrects schema issues and creates user profile
-- =====================================================

-- ============================================
-- 1. Create user profile
-- ============================================

-- Insert profile for user (using actual schema columns)
INSERT INTO profiles (id, username, full_name, total_points, is_public, show_stats, created_at, updated_at)
VALUES (
    '23d76275-e68b-4927-a7a1-b6358ca96903'::uuid,
    'elie.ibrahim',
    'Elie Ibrahim',
    0,
    true,
    true,
    NOW(),
    NOW()
)
ON CONFLICT (id) DO UPDATE SET
    full_name = EXCLUDED.full_name,
    updated_at = NOW();

-- ============================================
-- 2. Verify the profile was created
-- ============================================

SELECT
    id,
    username,
    full_name,
    total_points,
    elo_rating,
    league,
    created_at
FROM profiles
WHERE id = '23d76275-e68b-4927-a7a1-b6358ca96903'::uuid;

-- ============================================
-- 3. Verify all table structures
-- ============================================

-- Check profiles columns
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'profiles'
AND table_schema = 'public'
ORDER BY ordinal_position;

-- Check question_history columns
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'question_history'
AND table_schema = 'public'
ORDER BY ordinal_position;

-- Check user_topic_progress columns
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'user_topic_progress'
AND table_schema = 'public'
ORDER BY ordinal_position;

-- Check spaced_repetition_cards columns
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'spaced_repetition_cards'
AND table_schema = 'public'
ORDER BY ordinal_position;

-- ============================================
-- 4. Verify topics are seeded
-- ============================================

SELECT id, title_en, title_fr, weight, difficulty_multiplier
FROM topics
ORDER BY weight DESC;

-- ============================================
-- 5. Check existing user data
-- ============================================

-- Check if user has any question history
SELECT COUNT(*) as question_count
FROM question_history
WHERE user_id = '23d76275-e68b-4927-a7a1-b6358ca96903'::uuid;

-- Check if user has any topic progress
SELECT topic_id, questions_attempted, questions_correct, points_earned
FROM user_topic_progress
WHERE user_id = '23d76275-e68b-4927-a7a1-b6358ca96903'::uuid;

-- ============================================
-- 6. Test RLS policies
-- ============================================

-- Verify RLS is enabled
SELECT schemaname, tablename, rowsecurity
FROM pg_tables
WHERE tablename IN ('profiles', 'question_history', 'user_topic_progress', 'spaced_repetition_cards')
AND schemaname = 'public';

-- List all policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies
WHERE tablename IN ('profiles', 'question_history', 'user_topic_progress', 'spaced_repetition_cards')
ORDER BY tablename, policyname;
