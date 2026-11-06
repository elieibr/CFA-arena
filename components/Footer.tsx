'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  // La landing a son propre footer complet
  if (pathname === '/') return null

  return (
    <footer
      style={{
        borderTop: '1px solid #1c232d',
        background: '#07090c',
        padding: '32px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          textAlign: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          color: '#525a66',
        }}
      >
        <div style={{ marginBottom: '12px' }}>
          <Link
            href="/blog"
            style={{
              color: '#525a66',
              textDecoration: 'none',
              display: 'inline-block',
              padding: '14px 6px',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#00e0c6'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#525a66'
            }}
          >
            Blog
          </Link>
          {' · '}
          <Link
            href="/courses"
            style={{
              color: '#525a66',
              textDecoration: 'none',
              display: 'inline-block',
              padding: '14px 6px',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#00e0c6'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#525a66'
            }}
          >
            Cours
          </Link>
          {' · '}
          <Link
            href="/leaderboard"
            style={{
              color: '#525a66',
              textDecoration: 'none',
              display: 'inline-block',
              padding: '14px 6px',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#00e0c6'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#525a66'
            }}
          >
            Classement
          </Link>
        </div>
        <div>
          © 2026 CharterPath — Produit indépendant : le CFA Institute ne l&apos;approuve pas et ne garantit pas l&apos;exactitude de son contenu.
        </div>
      </div>
    </footer>
  )
}
