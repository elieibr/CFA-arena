'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: 'var(--bg-0)' }}>
      {/* Hero */}
      <section style={{ padding: '120px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            padding: '6px 12px',
            background: 'var(--bg-1)',
            border: '1px solid var(--line)',
            borderRadius: '6px',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--acc)',
            marginBottom: '32px',
            fontWeight: 500
          }}>
            [ CFA LEVEL 1 · TERMINAL ]
          </div>

          <h1 className="landing-hero-title" style={{
            fontSize: '72px',
            fontWeight: 700,
            color: 'var(--fg-0)',
            lineHeight: 1.1,
            marginBottom: '24px',
            letterSpacing: '-2px'
          }}>
            Préparez le CFA Level 1.<br />Sérieusement.
          </h1>

          <p style={{
            fontSize: '20px',
            color: 'var(--fg-2)',
            lineHeight: 1.6,
            marginBottom: '48px',
            maxWidth: '700px',
            margin: '0 auto 48px'
          }}>
            1 000 questions officielles. 10 matières. Classement en temps réel. La plateforme de préparation CFA qui ne prend pas les candidats pour des idiots.
          </p>

          <div className="landing-hero-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '64px' }}>
            <Link href="/signup" style={{
              padding: '14px 32px',
              fontSize: '16px',
              background: '#00e0c6',
              color: '#07090c',
              fontWeight: 600,
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.15s ease'
            }}>
              Commencer gratuitement
            </Link>
            <Link href="/leaderboard" className="btn btn-ghost" style={{ padding: '14px 32px', fontSize: '16px' }}>
              Voir le classement
            </Link>
          </div>

          {/* Stats */}
          <div className="landing-stats-strip" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            padding: '24px',
            background: 'var(--bg-1)',
            border: '1px solid var(--line)',
            borderRadius: '12px'
          }}>
            {[
              '1 000 QUESTIONS',
              '10 MATIÈRES',
              'CLASSEMENT LIVE',
              'GRATUIT POUR COMMENCER'
            ].map((stat, i) => (
              <div key={i} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--fg-2)',
                fontWeight: 600
              }}>
                {stat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '80px 24px', background: 'var(--bg-1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 600,
            color: 'var(--fg-0)',
            textAlign: 'center',
            marginBottom: '64px',
            letterSpacing: '-1px'
          }}>
            Tout ce dont vous avez besoin
          </h2>

          <div className="landing-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              {
                title: 'Quiz adaptatif',
                desc: '1 000 questions style CFA officiel. Chrono. Difficulté progressive.',
                icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00e0c6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="2" width="18" height="20" rx="2"/><path d="M7 6h10M7 10h10M7 14h6"/></svg>
              },
              {
                title: 'Classement global',
                desc: 'Comparez-vous aux autres candidats en temps réel.',
                icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00e0c6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 15h16"/><path d="M10 18.5c0 2.5 2 4.5 4 4.5s4-2 4-4.5V15c0-2-2-3-4-3s-4 1-4 3v3.5Z"/></svg>
              },
              {
                title: 'Progression détaillée',
                desc: 'Taux de réussite par matière. Sauvegarde automatique.',
                icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00e0c6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17l-4-4-4 4-4-8"/></svg>
              }
            ].map((feature, i) => (
              <div key={i} style={{
                padding: '32px',
                background: '#0c1015',
                border: '1px solid #1c232d',
                borderRadius: '12px'
              }}>
                <div style={{ marginBottom: '16px' }}>{feature.icon}</div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--fg-0)',
                  marginBottom: '12px'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: 'var(--fg-2)',
                  lineHeight: 1.6
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 600,
            color: 'var(--fg-0)',
            textAlign: 'center',
            marginBottom: '64px',
            letterSpacing: '-1px'
          }}>
            Utilisé par des candidats sérieux
          </h2>

          <div className="landing-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              {
                quote: "CharterPath m'a permis de passer 2h de révision par jour sans m'ennuyer.",
                author: 'Sarah K.',
                role: 'CFA Candidate'
              },
              {
                quote: "Le classement m'a donné la motivation que les livres ne donnaient pas.",
                author: 'Marc D.',
                role: 'Finance Analyst'
              },
              {
                quote: "La meilleure alternative à Schweser pour le prix.",
                author: 'Thomas R.',
                role: 'Portfolio Manager'
              }
            ].map((testimonial, i) => (
              <div key={i} style={{
                padding: '32px',
                background: 'var(--bg-1)',
                border: '1px solid var(--line)',
                borderRadius: '12px'
              }}>
                <p style={{
                  fontSize: '16px',
                  color: 'var(--fg-1)',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.quote}"
                </p>
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--fg-0)',
                    marginBottom: '4px'
                  }}>
                    {testimonial.author}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: 'var(--fg-3)',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: '80px 24px', background: 'var(--bg-1)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 600,
            color: 'var(--fg-0)',
            textAlign: 'center',
            marginBottom: '64px',
            letterSpacing: '-1px'
          }}>
            Tarifs transparents
          </h2>

          <div className="landing-pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {/* Free */}
            <div style={{
              padding: '40px',
              background: '#0c1015',
              border: '1px solid #1c232d',
              borderRadius: '12px'
            }}>
              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--fg-2)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px'
              }}>
                FREE
              </div>
              <div style={{
                fontSize: '48px',
                fontWeight: 700,
                color: 'var(--fg-0)',
                marginBottom: '8px'
              }}>
                0€
              </div>
              <div style={{
                fontSize: '14px',
                color: 'var(--fg-3)',
                marginBottom: '32px',
                fontFamily: 'var(--font-mono)'
              }}>
                Gratuit pour toujours
              </div>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {[
                  '10 questions/jour',
                  '3 matières',
                  'Classement visible',
                  'Profil public'
                ].map((item, i) => (
                  <li key={i} style={{
                    fontSize: '15px',
                    color: 'var(--fg-1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <span style={{ color: 'var(--acc)' }}>✓</span> {item}
                  </li>
                ))}
              </ul>

              <Link href="/signup" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
                Commencer gratuitement
              </Link>
            </div>

            {/* Pro */}
            <div style={{
              padding: '40px',
              background: '#0c1015',
              border: '1px solid #1c232d',
              borderRadius: '12px',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-12px',
                right: '24px',
                padding: '4px 12px',
                background: 'var(--acc)',
                color: '#07090c',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                borderRadius: '4px'
              }}>
                BIENTÔT
              </div>

              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--acc)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px'
              }}>
                PRO
              </div>
              <div style={{
                fontSize: '48px',
                fontWeight: 700,
                color: 'var(--fg-0)',
                marginBottom: '8px'
              }}>
                7,99€<span style={{ fontSize: '20px', color: 'var(--fg-3)' }}>/mois</span>
              </div>
              <div style={{
                fontSize: '14px',
                color: 'var(--fg-3)',
                marginBottom: '32px',
                fontFamily: 'var(--font-mono)'
              }}>
                Sans engagement
              </div>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {[
                  'Questions illimitées',
                  '10 matières complètes',
                  'Fiches de cours + formules',
                  'Historique complet',
                  'Badge Pro'
                ].map((item, i) => (
                  <li key={i} style={{
                    fontSize: '15px',
                    color: 'var(--fg-1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <span style={{ color: 'var(--acc)' }}>✓</span> {item}
                  </li>
                ))}
              </ul>

              <button
                disabled
                className="btn"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  background: 'var(--bg-2)',
                  color: 'var(--fg-3)',
                  cursor: 'not-allowed',
                  border: '1px solid var(--line)'
                }}
              >
                Bientôt disponible
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 600,
            color: 'var(--fg-0)',
            textAlign: 'center',
            marginBottom: '64px',
            letterSpacing: '-1px'
          }}>
            Questions fréquentes
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                q: "C'est quoi le CFA Level 1 ?",
                a: "Le CFA Level 1 est le premier des trois niveaux de l'examen CFA, couvrant 10 matières de finance (éthique, quantitative methods, economics, FRA, corporate finance, equity, fixed income, derivatives, alternative investments, portfolio management)."
              },
              {
                q: "CharterPath remplace-t-il Schweser ?",
                a: "CharterPath est un complément idéal à Schweser ou Kaplan. Nos 1 000 questions vous permettent de tester vos connaissances de manière interactive, avec un classement en temps réel pour rester motivé."
              },
              {
                q: "Les questions sont-elles officielles ?",
                a: "Nos questions sont rédigées dans le style exact de l'examen CFA officiel, avec des vignettes narratives, des chiffres précis, et 3 choix de réponse. Elles respectent la pondération officielle de chaque matière."
              },
              {
                q: "Comment fonctionne le classement ?",
                a: "Le classement est mis à jour en temps réel en fonction de vos points (calculés selon la difficulté et le temps de réponse). Vous pouvez vous comparer à d'autres candidats et grimper dans les leagues (Bronze, Silver, Gold, Master)."
              },
              {
                q: "Puis-je annuler mon abonnement ?",
                a: "Oui, l'abonnement Pro (bientôt disponible) sera sans engagement. Vous pourrez annuler à tout moment depuis votre compte. Le plan Free reste gratuit pour toujours."
              }
            ].map((faq, i) => (
              <div key={i} style={{
                padding: '24px',
                background: 'var(--bg-1)',
                border: '1px solid var(--line)',
                borderRadius: '12px',
                cursor: 'pointer'
              }}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--fg-0)'
                  }}>
                    {faq.q}
                  </h3>
                  <span style={{
                    fontSize: '24px',
                    color: 'var(--fg-3)',
                    transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.2s'
                  }}>
                    ▼
                  </span>
                </div>
                {openFaq === i && (
                  <p style={{
                    fontSize: '15px',
                    color: 'var(--fg-2)',
                    lineHeight: 1.6,
                    marginTop: '16px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--line)'
                  }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-1)', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            color: 'var(--fg-0)',
            marginBottom: '24px',
            letterSpacing: '-1px'
          }}>
            Prêt à passer le CFA ?
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--fg-2)',
            marginBottom: '40px',
            lineHeight: 1.6
          }}>
            Rejoignez des centaines de candidats qui révisent sérieusement avec CharterPath.
          </p>
          <Link href="/signup" style={{
            padding: '16px 48px',
            fontSize: '18px',
            background: '#00e0c6',
            color: '#07090c',
            fontWeight: 600,
            borderRadius: '8px',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.15s ease'
          }}>
            Créer mon compte gratuit
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--line)',
        padding: '48px 24px',
        background: 'var(--bg-0)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <img src="/charterpath-logo.svg" width="170" height="42" alt="CharterPath" style={{ marginBottom: '12px' }} />
            <p style={{
              fontSize: '13px',
              color: 'var(--fg-3)',
              fontFamily: 'var(--font-mono)'
            }}>
              La plateforme de préparation CFA la plus sérieuse
            </p>
          </div>

          <div style={{ display: 'flex', gap: '32px' }}>
            <Link href="/blog" style={{ fontSize: '14px', color: 'var(--fg-2)', textDecoration: 'none' }}>Blog</Link>
            <Link href="/leaderboard" style={{ fontSize: '14px', color: 'var(--fg-2)', textDecoration: 'none' }}>Classement</Link>
            <Link href="/login" style={{ fontSize: '14px', color: 'var(--fg-2)', textDecoration: 'none' }}>Se connecter</Link>
            <Link href="/signup" style={{ fontSize: '14px', color: 'var(--fg-2)', textDecoration: 'none' }}>S'inscrire</Link>
          </div>
        </div>

        <div style={{
          maxWidth: '1200px',
          margin: '32px auto 0',
          paddingTop: '32px',
          borderTop: '1px solid var(--line)',
          textAlign: 'center',
          fontSize: '13px',
          color: 'var(--fg-3)',
          fontFamily: 'var(--font-mono)'
        }}>
          © 2026 CharterPath
        </div>
      </footer>
    </div>
  )
}
