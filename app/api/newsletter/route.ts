import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]+\.[^\s@]{2,}$/

// Limitation de débit en mémoire (par instance serverless : freine l'abus basique,
// pas un attaquant distribué). Pour du solide : Upstash/Redis ou Vercel WAF.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_IP = 5
const hitsByIp = new Map<string, number[]>()
const recentEmails = new Map<string, number>()

function tooManyRequests(ip: string): boolean {
  const now = Date.now()
  const hits = (hitsByIp.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  hits.push(now)
  hitsByIp.set(ip, hits)
  if (hitsByIp.size > 5000) hitsByIp.clear()
  return hits.length > MAX_PER_IP
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'
    if (tooManyRequests(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const body = await request.json().catch(() => null)
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''

    if (email.length > 254 || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Un même email ne reçoit pas le mail de bienvenue plus d'une fois par 24 h
    const last = recentEmails.get(email)
    if (last && Date.now() - last < 24 * 60 * 60 * 1000) {
      return NextResponse.json({ success: true })
    }
    recentEmails.set(email, Date.now())
    if (recentEmails.size > 5000) recentEmails.clear()

    // Send welcome email via Resend
    await resend.emails.send({
      from: 'CharterPath <onboarding@charterpath.app>',
      to: email,
      subject: 'Welcome to CharterPath 🎯',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                margin: 0;
                padding: 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background-color: #07090c;
                color: #e5e5e5;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 40px 20px;
              }
              .header {
                text-align: center;
                margin-bottom: 40px;
              }
              .logo {
                font-size: 24px;
                font-weight: 600;
                color: #00e0c6;
                margin-bottom: 8px;
              }
              .title {
                font-size: 28px;
                font-weight: 600;
                color: #ffffff;
                margin: 0 0 16px 0;
              }
              .content {
                background-color: #0d1117;
                border: 1px solid #1f2937;
                border-radius: 12px;
                padding: 32px;
                margin-bottom: 32px;
              }
              .text {
                font-size: 16px;
                line-height: 1.6;
                color: #d1d5db;
                margin: 0 0 24px 0;
              }
              .cta {
                text-align: center;
                margin: 32px 0 24px 0;
              }
              .button {
                display: inline-block;
                padding: 14px 32px;
                background-color: #00e0c6;
                color: #07090c;
                text-decoration: none;
                border-radius: 8px;
                font-weight: 600;
                font-size: 16px;
              }
              .button:hover {
                background-color: #00f0d6;
              }
              .footer {
                text-align: center;
                padding-top: 24px;
                border-top: 1px solid #1f2937;
              }
              .footer-title {
                font-size: 14px;
                font-weight: 500;
                color: #9ca3af;
                margin: 0 0 8px 0;
              }
              .footer-text {
                font-size: 12px;
                color: #6b7280;
                margin: 0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">CharterPath</div>
              </div>

              <div class="content">
                <h1 class="title">Welcome to CharterPath!</h1>

                <p class="text">
                  You're now on the list. We'll keep you updated on new features, CFA tips, and leaderboard updates.
                </p>

                <p class="text">
                  In the meantime, start practicing:
                </p>

                <div class="cta">
                  <a href="https://charterpath.app" class="button">Start now</a>
                </div>
              </div>

              <div class="footer">
                <p class="footer-title">CharterPath — CFA Level 1 Preparation</p>
                <p class="footer-text">
                  You received this email because you signed up at charterpath.app
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
