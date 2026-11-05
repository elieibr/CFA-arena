import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getStripe } from '@/lib/stripe'

export async function POST(request: Request) {
  try {
    const origin = process.env.NEXT_PUBLIC_APP_URL || new URL(request.url).origin

    // L'identité vient de la session Supabase, jamais du corps de la requête :
    // sinon n'importe qui pourrait activer le Pro d'un autre compte.
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user || !user.email) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const { data } = await supabase
      .from('profiles')
      .select('is_pro')
      .eq('id', user.id)
      .maybeSingle()
    const profile = data as { is_pro: boolean | null } | null

    if (profile?.is_pro) {
      return NextResponse.json({ error: 'Already subscribed' }, { status: 400 })
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
      success_url: `${origin}/dashboard?success=true`,
      cancel_url: `${origin}/subscription`,
      customer_email: user.email,
      metadata: {
        userId: user.id,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json({ error: 'Checkout unavailable' }, { status: 500 })
  }
}
