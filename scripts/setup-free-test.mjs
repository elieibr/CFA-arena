// Prépare un utilisateur "free" à 99 questions tentées pour tester la limite des 100 questions.
//
// Usage : node scripts/setup-free-test.mjs
// Lit NEXT_PUBLIC_SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY dans .env.local.
// Affiche l'email et le mot de passe dans le terminal uniquement (rien n'est écrit sur disque).
// Relancer le script recrée l'utilisateur de zéro (il supprime d'abord l'ancien).
// Nettoyage : node scripts/cleanup-free-test.mjs

import { createClient } from '@supabase/supabase-js'
import { randomBytes } from 'node:crypto'
import { readFileSync } from 'node:fs'

const TEST_EMAIL = 'test-free@charterpath.test'
const TEST_USERNAME = 'test-free'
// 99 questions tentées au total, réparties sur 2 matières (ids de la table topics)
const PROGRESS = [
  { topic_id: 'ethical-standards', questions_attempted: 50, questions_correct: 35 },
  { topic_id: 'quantitative-methods', questions_attempted: 49, questions_correct: 30 },
]

function loadEnv(path) {
  const env = {}
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/)
    if (!m) continue
    env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, '$2')
  }
  return env
}

const env = loadEnv(new URL('../.env.local', import.meta.url).pathname)
const url = env.NEXT_PUBLIC_SUPABASE_URL
const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !serviceKey) {
  console.error('NEXT_PUBLIC_SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY manquant dans .env.local')
  process.exit(1)
}

const supabase = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
})

async function findUserByEmail(email) {
  for (let page = 1; page <= 50; page++) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 200 })
    if (error) throw error
    const hit = data.users.find(u => u.email?.toLowerCase() === email)
    if (hit) return hit
    if (data.users.length < 200) return null
  }
  return null
}

function must(label, { error }) {
  if (error) {
    console.error(`${label} : ${error.message}`)
    process.exit(1)
  }
}

console.log(`Projet Supabase : ${new URL(url).host}`)

// 1. Repartir d'un état propre si l'utilisateur existe déjà (uniquement cet email)
const existing = await findUserByEmail(TEST_EMAIL)
if (existing) {
  console.log('Utilisateur existant trouvé, suppression avant recréation...')
  for (const table of ['user_topic_progress', 'spaced_repetition_cards', 'question_history', 'exam_simulations']) {
    await supabase.from(table).delete().eq('user_id', existing.id)
  }
  await supabase.from('profiles').delete().eq('id', existing.id)
  must('Suppression utilisateur existant', await supabase.auth.admin.deleteUser(existing.id))
}

// 2. Créer l'utilisateur (email confirmé, mot de passe généré)
const password = randomBytes(12).toString('base64url')
const created = await supabase.auth.admin.createUser({
  email: TEST_EMAIL,
  password,
  email_confirm: true,
  user_metadata: { username: TEST_USERNAME, full_name: 'Test Free' },
})
must('Création utilisateur', created)
const userId = created.data.user.id

// 3. Profil : normalement créé par le trigger handle_new_user ; on force les valeurs voulues
//    (upsert au cas où le trigger n'existe pas sur cette base)
must(
  'Profil',
  await supabase.from('profiles').upsert(
    {
      id: userId,
      username: TEST_USERNAME,
      is_pro: false,
      subscription_status: 'free',
    },
    { onConflict: 'id' }
  )
)

// 4. Progression : 99 questions tentées sur 2 matières
must(
  'Progression',
  await supabase.from('user_topic_progress').insert(
    PROGRESS.map(p => ({
      user_id: userId,
      topic_id: p.topic_id,
      questions_attempted: p.questions_attempted,
      questions_correct: p.questions_correct,
      current_question_index: p.questions_attempted,
      last_practiced_at: new Date().toISOString(),
    }))
  )
)

// 5. Vérification
const { data: rows, error: checkErr } = await supabase
  .from('user_topic_progress')
  .select('questions_attempted')
  .eq('user_id', userId)
if (checkErr) {
  console.error(`Vérification : ${checkErr.message}`)
  process.exit(1)
}
const total = rows.reduce((s, r) => s + (r.questions_attempted || 0), 0)
const { data: prof } = await supabase.from('profiles').select('is_pro').eq('id', userId).single()

console.log('')
console.log(`Total questions tentées : ${total} (is_pro = ${prof?.is_pro})`)
console.log('')
console.log('Compte de test créé :')
console.log(`  email    : ${TEST_EMAIL}`)
console.log(`  mot de passe : ${password}`)
console.log('')
console.log('Test : se connecter, ouvrir /quiz?topic=ethical-standards, répondre à 1 question (total 100),')
console.log('puis recharger la page : le paywall "limite gratuite" doit apparaître.')
console.log('Nettoyage : node scripts/cleanup-free-test.mjs')
