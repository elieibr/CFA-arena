import type { SupabaseClient, User } from '@supabase/supabase-js'

// Nom d'utilisateur valide (3-30 caractères, minuscules/chiffres/_) dérivé de l'email ou des métadonnées.
function baseUsername(user: User): string {
  const raw = (user.user_metadata?.username as string | undefined) || user.email?.split('@')[0] || 'user'
  const cleaned = raw.toLowerCase().replace(/[^a-z0-9_]/g, '').slice(0, 20)
  return cleaned.length >= 3 ? cleaned : (cleaned + 'user').slice(0, 20)
}

/**
 * Retourne le profil de l'utilisateur, en le créant s'il n'existe pas encore
 * (comptes pour lesquels le trigger de création de profil n'a pas tourné).
 * La politique RLS "Users can insert own profile" autorise cet insert.
 */
export async function ensureProfile(supabase: SupabaseClient, user: User) {
  const { data: existing } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .maybeSingle()

  if (existing) return existing

  const base = baseUsername(user)
  for (let attempt = 0; attempt < 3; attempt++) {
    const username = attempt === 0 ? base : `${base.slice(0, 25)}${Math.floor(1000 + Math.random() * 9000)}`
    const { data: created, error } = await supabase
      .from('profiles')
      .insert({ id: user.id, username })
      .select('*')
      .maybeSingle()

    if (created) return created
    // 23505 = nom déjà pris -> on réessaie avec un suffixe ; autre erreur -> on abandonne
    if (error && error.code !== '23505') {
      console.error('Profile creation failed:', error.message)
      return null
    }
  }
  return null
}
