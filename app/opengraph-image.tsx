import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'CharterPath — Préparation CFA Level 1'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#07090c',
          padding: '80px',
        }}
      >
        {/* Logo and Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {/* CharterPath Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                background: '#00e0c6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                fontWeight: 700,
                color: '#07090c',
              }}
            >
              CP
            </div>
            <div
              style={{
                fontSize: '72px',
                fontWeight: 700,
                color: '#e6ecf3',
                display: 'flex',
                letterSpacing: '-2px',
              }}
            >
              Charter<span style={{ color: '#00e0c6' }}>Path</span>
            </div>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '36px',
              color: '#8a919d',
              fontWeight: 400,
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            Préparation CFA Level 1
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '48px',
              marginTop: '24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 600,
                  color: '#00e0c6',
                }}
              >
                1 000
              </div>
              <div
                style={{
                  fontSize: '20px',
                  color: '#525a66',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                QUESTIONS
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 600,
                  color: '#00e0c6',
                }}
              >
                10
              </div>
              <div
                style={{
                  fontSize: '20px',
                  color: '#525a66',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                MATIÈRES
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 600,
                  color: '#00e0c6',
                }}
              >
                ∞
              </div>
              <div
                style={{
                  fontSize: '20px',
                  color: '#525a66',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                RÉVISIONS
              </div>
            </div>
          </div>
        </div>

        {/* Footer tagline */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            fontSize: '24px',
            color: '#525a66',
            fontWeight: 500,
            letterSpacing: '1px',
          }}
        >
          La plateforme de préparation CFA la plus sérieuse
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
