// Supprime l'utilisateur de test créé par setup-free-test.mjs, ainsi que ses données.
//
// Usage : node scripts/cleanup-free-test.mjs
// Ne touche qu'à l'email test-free@charterpath.test (codé en dur).

import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'node:fs'

const TEST_EMAIL = 'test-free@charterpath.test'

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

console.log(`Projet Supabase : ${new URL(url).host}`)

const user = await findUserByEmail(TEST_EMAIL)
if (!user) {
  console.log(`Aucun utilisateur ${TEST_EMAIL} : rien à supprimer.`)
  process.exit(0)
}

// Données liées d'abord (certaines tables peuvent ne pas avoir de cascade)
for (const table of ['user_topic_progress', 'spaced_repetition_cards', 'question_history', 'exam_simulations']) {
  const { error } = await supabase.from(table).delete().eq('user_id', user.id)
  console.log(error ? `  ${table} : ${error.message}` : `  ${table} : supprimé`)
}

const { error: profErr } = await supabase.from('profiles').delete().eq('id', user.id)
console.log(profErr ? `  profiles : ${profErr.message}` : '  profiles : supprimé')

const { error: authErr } = await supabase.auth.admin.deleteUser(user.id)
if (authErr) {
  console.error(`Suppression de l'utilisateur auth : ${authErr.message}`)
  process.exit(1)
}
console.log(`Utilisateur ${TEST_EMAIL} supprimé.`)
