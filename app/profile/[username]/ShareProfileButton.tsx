'use client'

import { Share2, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function ShareProfileButton({ username }: { username: string }) {
  const [copied, setCopied] = useState(false)
  const profileUrl = `${process.env.NEXT_PUBLIC_APP_URL}/profile/${username}`

  const handleShare = async () => {
    // Try native share API first
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Profil CFA Arena de @${username}`,
          text: `Découvrez mon profil CFA Arena! 🏆`,
          url: profileUrl,
        })
        return
      } catch (err) {
        // User cancelled or share failed, fallback to copy
      }
    }

    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(profileUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const shareToLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(profileUrl)}`
    window.open(url, '_blank', 'width=600,height=400')
  }

  const shareToTwitter = () => {
    const text = `Découvrez mon profil CFA Arena! 🏆 #CFA #CFAArena`
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(profileUrl)}`
    window.open(url, '_blank', 'width=600,height=400')
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={handleShare}
        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition rounded-lg border border-white/30"
      >
        {copied ? (
          <>
            <Check className="w-5 h-5" />
            <span className="font-medium">Copié!</span>
          </>
        ) : (
          <>
            <Share2 className="w-5 h-5" />
            <span className="font-medium">Partager</span>
          </>
        )}
      </button>

      <button
        onClick={shareToLinkedIn}
        className="px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] transition rounded-lg font-medium"
        title="Partager sur LinkedIn"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </button>

      <button
        onClick={shareToTwitter}
        className="px-4 py-2 bg-black hover:bg-gray-800 transition rounded-lg font-medium"
        title="Partager sur X (Twitter)"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </button>
    </div>
  )
}
