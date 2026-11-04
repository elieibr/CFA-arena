'use client'

import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

export default function SettingsPage() {
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ⚙️ Paramètres
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Page de paramètres - En construction
          </p>

          {/* Logout button */}
          <div style={{
            paddingTop: '24px',
            marginTop: '24px',
            borderTop: '1px solid #e5e7eb'
          }}>
            <button
              onClick={handleLogout}
              style={{
                padding: '12px 24px',
                background: '#ef4444',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 500,
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.15s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#dc2626'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#ef4444'}
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
