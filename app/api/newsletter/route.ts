import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

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
