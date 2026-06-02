'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'

export default function Header() {
  const pathname = usePathname()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    loadUser()
  }, [])

  async function loadUser() {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      setUser(user)
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      setProfile(profileData)
    }
  }

  const getInitials = () => {
    if (profile?.username) {
      return profile.username.substring(0, 2).toUpperCase()
    }
    return 'CP'
  }

  const getStreakDays = () => {
    if (profile?.last_login_at && profile?.created_at) {
      const now = new Date()
      const lastLogin = new Date(profile.last_login_at)
      const daysSinceLastLogin = Math.floor((now.getTime() - lastLogin.getTime()) / (1000 * 60 * 60 * 24))
      return daysSinceLastLogin <= 1 ? Math.floor((now.getTime() - new Date(profile.created_at).getTime()) / (1000 * 60 * 60 * 24)) : 0
    }
    return 0
  }

  return (
    <header className="site">
      <div className="wrap">
        <div className="nav">
          <Link href="/dashboard" className="brand">
            <img src="/logo-mark.svg" width="28" height="28" alt="CharterPath" style={{ flexShrink: 0 }} />
            <span style={{ fontWeight: 700, fontSize: '15px', letterSpacing: '-0.01em' }}>
              Charter<span style={{ color: '#00e0c6' }}>Path</span>
            </span>
          </Link>

          <nav className="primary">
            <Link href="/dashboard" className={pathname === '/dashboard' ? 'active' : ''}>
              Accueil
            </Link>
            <Link href="/dashboard#subjects">Matières</Link>
            <Link href="/exam">Examen blanc</Link>
            <Link href="/statistics" className={pathname === '/statistics' ? 'active' : ''}>
              Stats
            </Link>
            <Link href="/subscription" className={pathname === '/subscription' ? 'active' : ''}>
              Abonnement
            </Link>
            <Link href="/leaderboard" className={pathname === '/leaderboard' ? 'active' : ''}>
              Classement
            </Link>
          </nav>

          <div className="nav-end">
            {user && (
              <>
                <span className="streak">
                  <span>🔥</span>
                  <span>{getStreakDays()} jours</span>
                </span>
                <div className="avatar" title={profile?.username || 'Profil'}>
                  {getInitials()}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
