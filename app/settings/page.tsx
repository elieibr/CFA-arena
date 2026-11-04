'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

interface AccountInfo {
  email: string
  username: string | null
  isPro: boolean
}

const cardStyle = {
  background: 'var(--bg-1)',
  border: '1px solid var(--line)',
  borderRadius: '12px',
  padding: '24px',
} as const

const labelStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: 'var(--fg-3)',
  marginBottom: '6px',
} as const

export default function SettingsPage() {
  const router = useRouter()
  const [account, setAccount] = useState<AccountInfo | null>(null)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
        return
      }
      const { data: profile } = await supabase
        .from('profiles')
        .select('username, is_pro')
        .eq('id', user.id)
        .single()

      setAccount({
        email: user.email || '',
        username: profile?.username || null,
        isPro: !!profile?.is_pro,
      })
    }
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <div style={{ minHeight: '60vh', padding: '64px 24px' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <div style={{ ...labelStyle, marginBottom: '12px' }}>Compte</div>
        <h1
          style={{
            fontSize: 'clamp(30px, 8vw, 40px)',
            fontWeight: 400,
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            marginBottom: '32px',
          }}
        >
          Paramètres
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={cardStyle}>
            <div style={labelStyle}>Email</div>
            <div style={{ color: 'var(--fg-0)', fontSize: '15px', marginBottom: '20px', overflowWrap: 'anywhere' }}>
              {account ? account.email : '…'}
            </div>
            <div style={labelStyle}>Nom d&apos;utilisateur</div>
            <div style={{ color: 'var(--fg-0)', fontSize: '15px' }}>
              {account ? account.username || 'Non défini' : '…'}
            </div>
          </div>

          <div style={cardStyle}>
            <div style={labelStyle}>Abonnement</div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
              }}
            >
              <div style={{ color: 'var(--fg-0)', fontSize: '15px' }}>
                {account
                  ? account.isPro
                    ? 'Pro · accès illimité'
                    : 'Gratuit · 100 questions offertes'
                  : '…'}
              </div>
              <Link href="/subscription" className="btn btn-ghost">
                {account?.isPro ? 'Gérer mon abonnement' : 'Passer Pro'}
              </Link>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={labelStyle}>Session</div>
            <button
              onClick={handleLogout}
              className="btn btn-ghost"
              style={{ color: 'var(--danger)', marginTop: '4px' }}
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
