'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'

export default function UsernameOnboardingPage() {
  const [username, setUsername] = useState('')
  const [isChecking, setIsChecking] = useState(false)
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null)
  const [error, setError] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    checkIfUsernameNeeded()
  }, [])

  async function checkIfUsernameNeeded() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }

    // Check if user already has a username
    const { data: profile } = await supabase
      .from('profiles')
      .select('username')
      .eq('id', user.id)
      .single()

    if (profile?.username) {
      // User already has username, redirect to dashboard
      router.push('/dashboard')
    }
  }

  // Validate username format
  function validateUsername(value: string): string | null {
    if (value.length < 3) return 'Le nom d\'utilisateur doit contenir au moins 3 caractères'
    if (value.length > 20) return 'Le nom d\'utilisateur ne peut pas dépasser 20 caractères'
    if (!/^[a-zA-Z0-9_]+$/.test(value)) return 'Seuls les lettres, chiffres et underscore (_) sont autorisés'
    return null
  }

  // Check username availability in real-time
  useEffect(() => {
    const checkAvailability = async () => {
      if (username.length < 3) {
        setIsAvailable(null)
        return
      }

      const validationError = validateUsername(username)
      if (validationError) {
        setError(validationError)
        setIsAvailable(null)
        return
      }

      setError('')
      setIsChecking(true)

      const { data, error: queryError } = await supabase
        .from('profiles')
        .select('username')
        .eq('username', username.toLowerCase())
        .maybeSingle()

      setIsChecking(false)

      if (queryError) {
        setError('Erreur lors de la vérification')
        setIsAvailable(null)
        return
      }

      setIsAvailable(!data)
    }

    const timeoutId = setTimeout(checkAvailability, 300)
    return () => clearTimeout(timeoutId)
  }, [username])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const validationError = validateUsername(username)
    if (validationError) {
      setError(validationError)
      return
    }

    if (!isAvailable) {
      setError('Ce nom d\'utilisateur n\'est pas disponible')
      return
    }

    setIsSaving(true)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }

    const { error: updateError } = await supabase
      .from('profiles')
      .update({ username: username.toLowerCase() })
      .eq('id', user.id)

    if (updateError) {
      setError('Erreur lors de l\'enregistrement: ' + updateError.message)
      setIsSaving(false)
      return
    }

    // Success! Redirect to dashboard
    router.push('/dashboard')
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-0)',
        padding: '24px'
      }}
    >
      {/* Radial glow background */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(circle at 50% 0%, oklch(0.78 0.16 180 / 0.12), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div
        style={{
          background: 'var(--bg-1)',
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius)',
          padding: '48px',
          maxWidth: '480px',
          width: '100%',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, var(--acc), oklch(0.62 0.18 180))',
              borderRadius: '12px',
              display: 'grid',
              placeItems: 'center',
              margin: '0 auto 20px',
              boxShadow: '0 0 0 1px oklch(0.78 0.16 180 / 0.3), 0 4px 12px oklch(0.78 0.16 180 / 0.15)'
            }}
          >
            <span style={{ fontSize: '24px', fontWeight: 600, color: 'var(--bg-0)' }}>CP</span>
          </div>
          <h1
            style={{
              fontSize: '28px',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              margin: '0 0 8px',
              color: 'var(--fg-0)'
            }}
          >
            Choisissez votre nom d'utilisateur
          </h1>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--fg-2)',
              margin: 0,
              lineHeight: 1.5
            }}
          >
            Vous pourrez le modifier plus tard dans les paramètres
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '24px' }}>
            <label
              htmlFor="username"
              style={{
                display: 'block',
                fontSize: '13px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--fg-2)',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em'
              }}
            >
              Nom d'utilisateur
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="john_doe"
                autoFocus
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '15px',
                  fontFamily: 'var(--font-mono)',
                  background: 'var(--bg-0)',
                  border: `1px solid ${error ? 'var(--acc-amber)' : isAvailable === true ? 'var(--acc)' : 'var(--line)'}`,
                  borderRadius: '8px',
                  color: 'var(--fg-0)',
                  outline: 'none',
                  transition: 'all 0.15s ease'
                }}
                onFocus={(e) => {
                  if (!error && isAvailable !== true) {
                    e.currentTarget.style.borderColor = 'var(--line-strong)'
                  }
                }}
                onBlur={(e) => {
                  if (!error && isAvailable !== true) {
                    e.currentTarget.style.borderColor = 'var(--line)'
                  }
                }}
              />
              {/* Status indicator */}
              {username.length >= 3 && (
                <div
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  {isChecking ? (
                    <span style={{ color: 'var(--fg-3)' }}>Vérification...</span>
                  ) : isAvailable === true ? (
                    <>
                      <span style={{ color: 'var(--acc)' }}>✓ Disponible</span>
                    </>
                  ) : isAvailable === false ? (
                    <span style={{ color: 'var(--acc-amber)' }}>✗ Indisponible</span>
                  ) : null}
                </div>
              )}
            </div>

            {/* Error message */}
            {error && (
              <div
                style={{
                  marginTop: '8px',
                  fontSize: '12px',
                  color: 'var(--acc-amber)',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {error}
              </div>
            )}

            {/* Rules */}
            <div
              style={{
                marginTop: '12px',
                fontSize: '12px',
                color: 'var(--fg-3)',
                lineHeight: 1.5
              }}
            >
              <div>• 3-20 caractères</div>
              <div>• Lettres, chiffres et underscore (_) uniquement</div>
              <div>• Pas de caractères spéciaux ou espaces</div>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={!isAvailable || isSaving || isChecking}
            className="btn btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '14px 24px',
              opacity: (!isAvailable || isSaving || isChecking) ? 0.5 : 1,
              cursor: (!isAvailable || isSaving || isChecking) ? 'not-allowed' : 'pointer'
            }}
          >
            {isSaving ? 'Enregistrement...' : 'Confirmer'}
          </button>
        </form>

        {/* Footer note */}
        <div
          style={{
            marginTop: '24px',
            paddingTop: '24px',
            borderTop: '1px solid var(--line-soft)',
            fontSize: '12px',
            color: 'var(--fg-3)',
            textAlign: 'center',
            lineHeight: 1.5
          }}
        >
          Votre nom d'utilisateur sera visible sur votre profil public
        </div>
      </div>
    </div>
  )
}
