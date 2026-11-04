'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { createBrowserClient } from '@supabase/ssr'

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const profileMenuRef = useRef<HTMLDivElement>(null)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    loadUser()
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setProfileMenuOpen(false)
      }
    }

    if (profileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [profileMenuOpen])

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

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
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
              <div style={{ position: 'relative' }} ref={profileMenuRef}>
                <div
                  className="avatar"
                  title={profile?.username || 'Profil'}
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  style={{ cursor: 'pointer' }}
                >
                  {getInitials()}
                </div>

                {profileMenuOpen && (
                  <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: 0,
                    background: '#0c1015',
                    border: '1px solid #1c232d',
                    borderRadius: '8px',
                    minWidth: '180px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    zIndex: 1000,
                    overflow: 'hidden'
                  }}>
                    <Link
                      href={`/profile/${profile?.username}`}
                      onClick={() => setProfileMenuOpen(false)}
                      style={{
                        display: 'block',
                        padding: '12px 16px',
                        color: '#b6bfcc',
                        fontSize: '14px',
                        textDecoration: 'none',
                        borderBottom: '1px solid #1c232d',
                        transition: 'color 0.15s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#00e0c6'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#b6bfcc'}
                    >
                      Mon profil
                    </Link>
                    <Link
                      href="/settings"
                      onClick={() => setProfileMenuOpen(false)}
                      style={{
                        display: 'block',
                        padding: '12px 16px',
                        color: '#b6bfcc',
                        fontSize: '14px',
                        textDecoration: 'none',
                        borderBottom: '1px solid #1c232d',
                        transition: 'color 0.15s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#00e0c6'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#b6bfcc'}
                    >
                      Paramètres
                    </Link>
                    <button
                      onClick={() => {
                        setProfileMenuOpen(false)
                        handleLogout()
                      }}
                      style={{
                        display: 'block',
                        width: '100%',
                        padding: '12px 16px',
                        color: '#b6bfcc',
                        fontSize: '14px',
                        textAlign: 'left',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'color 0.15s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#00e0c6'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#b6bfcc'}
                    >
                      Se déconnecter
                    </button>
                  </div>
                )}
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
            <div style={{ borderTop: '1px solid #1c232d', margin: '8px 0' }}></div>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                handleLogout()
              }}
              style={{
                display: 'block',
                width: '100%',
                padding: '12px 16px',
                color: '#b6bfcc',
                fontSize: '14px',
                textAlign: 'left',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.15s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#00e0c6'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#b6bfcc'}
            >
              Se déconnecter
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
