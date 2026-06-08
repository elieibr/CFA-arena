'use client'

import Link from 'next/link'

export default function Footer() {
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
          © 2026 CharterPath — CFA Institute does not endorse or warrant the accuracy of this product
        </div>
      </div>
    </footer>
  )
}
