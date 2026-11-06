-- Profils publics : n'expose que les colonnes sans danger.
-- Avant : la policy "Public profiles are viewable by everyone" laissait lire TOUTES les colonnes
-- (is_pro, stripe_customer_id, subscription_status...) de n'importe quel profil public.
--
-- ORDRE : 1) exécuter ce fichier  2) déployer le code qui lit `public_profiles`
--         3) exécuter la dernière section (DROP POLICY) une fois le déploiement vérifié.

DO $$
DECLARE
  has_streak boolean;
BEGIN
  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'profiles' AND column_name = 'current_streak'
  ) INTO has_streak;

  EXECUTE format($v$
    CREATE OR REPLACE VIEW public.public_profiles AS
    SELECT id, username, avatar_url, bio, total_points, is_public, created_at%s
    FROM public.profiles
    WHERE is_public = true
  $v$, CASE WHEN has_streak THEN ', current_streak' ELSE '' END);
END $$;

GRANT SELECT ON public.public_profiles TO anon, authenticated;

-- ---------------------------------------------------------------
-- 3) À exécuter APRÈS déploiement du code (les profils publics ne seront plus lisibles
--    directement dans `profiles`, seulement via la vue ; chacun garde l'accès à son propre profil) :
-- DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
