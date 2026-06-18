import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { getStripe } from '@/lib/stripe'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: Request) {
  const stripe = getStripe()

  const body = await request.text()
  const headersList = await headers()
  const sig = headersList.get('stripe-signature')!

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`)
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    )
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as any
      const userId = session.metadata.userId
      const customerId = session.customer

      // Update user to Pro
      const { error } = await supabase
        .from('profiles')
        .update({
          is_pro: true,
          subscription_status: 'active',
          stripe_customer_id: customerId,
        })
        .eq('id', userId)

      if (error) {
        console.error('Error updating user to Pro:', error)
      } else {
        console.log(`User ${userId} upgraded to Pro`)
      }
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as any
      const customerId = subscription.customer

      // Find user by stripe_customer_id and downgrade
      const { error } = await supabase
        .from('profiles')
        .update({
          is_pro: false,
          subscription_status: 'cancelled',
        })
        .eq('stripe_customer_id', customerId)

      if (error) {
        console.error('Error downgrading user:', error)
      } else {
        console.log(`Customer ${customerId} subscription cancelled`)
      }
      break
    }

    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
