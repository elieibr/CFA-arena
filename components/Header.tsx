'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'

export default function Header() {
  const pathname = usePathname()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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


  return (
    <header className="site">
      <div className="wrap">
        <div className="nav">
          <Link href="/dashboard" className="brand">
            <img src="/charterpath-logo.svg" width="170" height="42" alt="CharterPath" />
          </Link>

          <nav className="primary desktop-only">
            <Link href="/dashboard" className={pathname === '/dashboard' ? 'active' : ''}>
              Accueil
            </Link>
            <Link href="/dashboard#subjects">Matières</Link>
            <Link href="/courses" className={pathname?.startsWith('/courses') ? 'active' : ''}>
              Cours
            </Link>
            <Link href="/blog" className={pathname?.startsWith('/blog') ? 'active' : ''}>
              Blog
            </Link>
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

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="nav-end">
            {user && (
              <div className="avatar" title={profile?.username || 'Profil'}>
                {getInitials()}
              </div>
            )}
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-menu">
            <Link href="/dashboard" className={pathname === '/dashboard' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
              Accueil
            </Link>
            <Link href="/dashboard#subjects" onClick={() => setMobileMenuOpen(false)}>
              Matières
            </Link>
            <Link href="/courses" className={pathname?.startsWith('/courses') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
              Cours
            </Link>
            <Link href="/blog" className={pathname?.startsWith('/blog') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/exam" onClick={() => setMobileMenuOpen(false)}>
              Examen blanc
            </Link>
            <Link href="/statistics" className={pathname === '/statistics' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
              Stats
            </Link>
            <Link href="/subscription" className={pathname === '/subscription' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
              Abonnement
            </Link>
            <Link href="/leaderboard" className={pathname === '/leaderboard' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
              Classement
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
