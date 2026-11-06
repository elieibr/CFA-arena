-- Fix RLS policy for profiles table to allow signup
-- This script fixes the "new row violates row-level security policy" error

-- Drop existing INSERT policy
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;

-- Create new INSERT policy that works during signup
-- The key is to allow INSERT when the id matches auth.uid()
CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Alternative: If the above doesn't work, you can temporarily disable RLS during user creation
-- Or use a more permissive policy:

-- Option 2: Allow authenticated users to insert their own profile
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Option 3: If you need even more permissive during development
-- (Remove this in production!)
-- DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
-- CREATE POLICY "Users can insert own profile"
--   ON profiles FOR INSERT
--   TO authenticated
--   WITH CHECK (true);
