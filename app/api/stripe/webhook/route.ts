import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import type Stripe from 'stripe'
import { getStripe } from '@/lib/stripe'

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

// Statuts Stripe qui donnent accès au Pro
const PRO_STATUSES = new Set(['active', 'trialing'])

export async function POST(request: Request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature error:', err instanceof Error ? err.message : err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const supabase = adminClient()

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const userId = session.metadata?.userId
        const customerId = typeof session.customer === 'string' ? session.customer : session.customer?.id
        if (!userId || !customerId) break

        const { error } = await supabase
          .from('profiles')
          .update({ is_pro: true, subscription_status: 'active', stripe_customer_id: customerId })
          .eq('id', userId)
        if (error) throw error
        break
      }

      // Changement de statut : impayé, reprise, résiliation programmée, etc.
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription
        const customerId = typeof sub.customer === 'string' ? sub.customer : sub.customer.id
        const isPro = event.type === 'customer.subscription.updated' && PRO_STATUSES.has(sub.status)

        const { error } = await supabase
          .from('profiles')
          .update({
            is_pro: isPro,
            subscription_status: event.type === 'customer.subscription.deleted' ? 'cancelled' : sub.status,
          })
          .eq('stripe_customer_id', customerId)
        if (error) throw error
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const customerId = typeof invoice.customer === 'string' ? invoice.customer : invoice.customer?.id
        if (!customerId) break

        // On marque l'impayé ; l'accès Pro est retiré par subscription.updated/deleted
        // quand Stripe change le statut (past_due -> unpaid/canceled).
        const { error } = await supabase
          .from('profiles')
          .update({ subscription_status: 'past_due' })
          .eq('stripe_customer_id', customerId)
        if (error) throw error
        break
      }
    }
  } catch (err) {
    // 500 => Stripe réessaie la livraison (les mises à jour ci-dessus sont idempotentes)
    console.error(`Webhook handler failed for ${event.type}:`, err)
    return NextResponse.json({ error: 'Handler failed' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
