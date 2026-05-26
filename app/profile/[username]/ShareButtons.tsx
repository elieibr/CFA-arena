'use client'

import { useState } from 'react'
import { Share2, Copy, CheckCircle } from 'lucide-react'

interface ShareButtonsProps {
  profileUrl: string
  username: string
  globalRank: number
}

export default function ShareButtons({ profileUrl, username, globalRank }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareMessage = `Je suis classé #${globalRank} sur CFA Arena ! Rejoins-moi pour préparer le CFA Level 1 🏆`

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(profileUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(profileUrl)}`
    window.open(linkedInUrl, '_blank', 'width=600,height=600')
  }

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(profileUrl)}`
    window.open(twitterUrl, '_blank', 'width=600,height=600')
  }

  return (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      {/* LinkedIn Share */}
      <button
        onClick={handleLinkedInShare}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.25rem',
          background: '#0077b5',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'opacity 0.2s'
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
        onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
        Partager sur LinkedIn
      </button>

      {/* Twitter/X Share */}
      <button
        onClick={handleTwitterShare}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.25rem',
          background: '#000000',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'opacity 0.2s'
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
        onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        Partager sur X
      </button>

      {/* Copy Link */}
      <button
        onClick={handleCopyLink}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.25rem',
          background: copied ? 'var(--acc-green)' : 'var(--bg-soft)',
          color: copied ? 'white' : 'var(--text-1)',
          border: '1px solid var(--line-soft)',
          borderRadius: '0.5rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        onMouseOver={(e) => {
          if (!copied) {
            e.currentTarget.style.background = 'var(--line-soft)'
          }
        }}
        onMouseOut={(e) => {
          if (!copied) {
            e.currentTarget.style.background = 'var(--bg-soft)'
          }
        }}
      >
        {copied ? (
          <>
            <CheckCircle className="w-5 h-5" />
            Copié !
          </>
        ) : (
          <>
            <Copy className="w-5 h-5" />
            Copier le lien
          </>
        )}
      </button>
    </div>
  )
}
