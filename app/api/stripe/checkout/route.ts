import { NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'

export async function POST(request: Request) {
  try {
    console.log('STRIPE_SECRET_KEY exists:', !!process.env.STRIPE_SECRET_KEY)
    console.log('STRIPE_PRICE_ID:', process.env.STRIPE_PRICE_ID)
    console.log('Price ID being used:', process.env.STRIPE_PRICE_ID)
    console.log('Price ID length:', process.env.STRIPE_PRICE_ID?.length)
    console.log('Price ID chars:', JSON.stringify(process.env.STRIPE_PRICE_ID))

    const { userId, email } = await request.json()

    if (!userId || !email) {
      return NextResponse.json(
        { error: 'Missing userId or email' },
        { status: 400 }
      )
    }

    const stripe = getStripe()

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID!,
          quantity: 1,
        },
      ],
      success_url: 'https://charterpath.app/dashboard?success=true',
      cancel_url: 'https://charterpath.app/subscription',
      customer_email: email,
      metadata: {
        userId,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    )
  }
}
