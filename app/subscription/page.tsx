'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'

export default function SubscriptionPage() {
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    loadProfile()
  }, [])

  async function loadProfile() {
    setLoading(true)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }

    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    setProfile(profileData)
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Chargement...</div>
      </div>
    )
  }

  // Check if user has active subscription (placeholder logic)
  const hasActiveSubscription = false // TODO: Implement actual subscription check

  return (
    <div className="page">
      {/* Radial glow background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '600px',
          background: 'radial-gradient(circle at 50% 0%, oklch(0.78 0.16 180 / 0.15), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <section className="block" style={{ paddingTop: '72px', paddingBottom: '96px', position: 'relative', zIndex: 1 }}>
        <div className="wrap" style={{ maxWidth: '640px', textAlign: 'center' }}>
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 500,
              color: 'var(--acc)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '24px',
              padding: '6px 14px',
              border: '1px solid oklch(0.78 0.16 180 / 0.3)',
              borderRadius: '99px',
              background: 'oklch(0.78 0.16 180 / 0.08)'
            }}
          >
            〔 TARIF UNIQUE — RIEN À NÉGOCIER 〕
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '40px',
              fontWeight: 400,
              letterSpacing: '-0.025em',
              margin: '0 0 56px',
              lineHeight: 1.2,
              color: 'var(--fg-0)'
            }}
          >
            Le prix d'un café par semaine.
          </h1>

          {/* Pricing Card */}
          {!hasActiveSubscription ? (
            <div
              style={{
                background: 'var(--bg-1)',
                border: '1px solid var(--line-strong)',
                borderRadius: 'var(--radius)',
                padding: '36px',
                maxWidth: '480px',
                margin: '0 auto',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="pricing-card-corners"
            >
              {/* Accent corners */}
              <style jsx>{`
                .pricing-card-corners::before,
                .pricing-card-corners::after {
                  content: '';
                  position: absolute;
                  width: 20px;
                  height: 20px;
                  border: 2px solid var(--acc);
                }
                .pricing-card-corners::before {
                  top: 0;
                  left: 0;
                  border-right: none;
                  border-bottom: none;
                }
                .pricing-card-corners::after {
                  top: 0;
                  right: 0;
                  border-left: none;
                  border-bottom: none;
                }
                .pricing-card-corners-bottom::before,
                .pricing-card-corners-bottom::after {
                  content: '';
                  position: absolute;
                  width: 20px;
                  height: 20px;
                  border: 2px solid var(--acc);
                }
                .pricing-card-corners-bottom::before {
                  bottom: -36px;
                  left: -36px;
                  border-right: none;
                  border-top: none;
                }
                .pricing-card-corners-bottom::after {
                  bottom: -36px;
                  right: -36px;
                  border-left: none;
                  border-top: none;
                }
              `}</style>

              {/* Bottom corners via pseudo elements on inner div */}
              <div
                style={{ position: 'relative', zIndex: 1 }}
                className="pricing-card-corners-bottom"
              >

                {/* Label */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'var(--acc)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '20px'
                  }}
                >
                  CharterPath · Standard
                </div>

                {/* Price */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '56px',
                    fontWeight: 500,
                    letterSpacing: '-0.04em',
                    color: 'var(--fg-0)',
                    lineHeight: 1,
                    marginBottom: '12px'
                  }}
                >
                  €7,99 <span style={{ fontSize: '24px', color: 'var(--fg-2)' }}>/ mois</span>
                </div>

                {/* Comparison */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'var(--fg-3)',
                    marginBottom: '32px',
                    paddingBottom: '24px',
                    borderBottom: '1px solid var(--line-soft)'
                  }}
                >
                  Schweser Premium · 1 290€ — <span style={{ color: 'var(--acc)' }}>99,4% d'économie</span>
                </div>

                {/* Features */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    textAlign: 'left'
                  }}
                >
                  {[
                    '1 200+ questions CFA Level 1 officielles',
                    'Algorithme de répétition espacée (SM-2)',
                    'Examens blancs chronométrés illimités',
                    'Statistiques détaillées par matière',
                    'Accès mobile iOS / Android / Web'
                  ].map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        fontSize: '14px',
                        color: 'var(--fg-1)',
                        lineHeight: 1.5
                      }}
                    >
                      <div
                        style={{
                          width: '14px',
                          height: '14px',
                          flexShrink: 0,
                          marginTop: '2px',
                          background: 'oklch(0.78 0.16 180 / 0.12)',
                          border: '1px solid var(--acc)',
                          borderRadius: '2px',
                          display: 'grid',
                          placeItems: 'center',
                          fontSize: '10px',
                          color: 'var(--acc)',
                          fontWeight: 700
                        }}
                      >
                        ✓
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '14px 24px',
                    fontSize: '15px',
                    marginBottom: '20px'
                  }}
                >
                  Démarrer · 7 jours gratuits
                </a>

                {/* Footer */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--fg-3)',
                    textAlign: 'center',
                    lineHeight: 1.5
                  }}
                >
                  Stripe · CB / Apple Pay / SEPA · facture mensuelle
                </div>
              </div>
            </div>
          ) : (
            // Active subscription state
            <div
              style={{
                background: 'var(--bg-1)',
                border: '1px solid var(--line-strong)',
                borderRadius: 'var(--radius)',
                padding: '36px',
                maxWidth: '480px',
                margin: '0 auto',
                textAlign: 'center'
              }}
            >
              {/* Active badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'var(--acc)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '20px',
                  padding: '6px 12px',
                  background: 'oklch(0.78 0.16 180 / 0.12)',
                  border: '1px solid var(--acc)',
                  borderRadius: '6px'
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    background: 'var(--acc)',
                    borderRadius: '50%',
                    boxShadow: '0 0 8px var(--acc)'
                  }}
                />
                Abonnement actif
              </div>

              <div
                style={{
                  fontSize: '18px',
                  fontWeight: 500,
                  color: 'var(--fg-0)',
                  marginBottom: '8px'
                }}
              >
                CharterPath Standard
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--fg-2)',
                  marginBottom: '32px'
                }}
              >
                Renouvellement le 1er juin 2026 · €7,99
              </div>

              <a
                href="#"
                className="btn btn-ghost"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '12px 20px'
                }}
              >
                Gérer l'abonnement
              </a>
            </div>
          )}

          {/* FAQ or additional info */}
          <div
            style={{
              marginTop: '48px',
              fontSize: '13px',
              color: 'var(--fg-3)',
              lineHeight: 1.6
            }}
          >
            Annulation possible à tout moment · Remboursement intégral sous 14 jours ·
            Questions ? <a href="#" style={{ color: 'var(--acc)', textDecoration: 'underline' }}>support@charterpath.com</a>
          </div>
        </div>
      </section>
    </div>
  )
}
