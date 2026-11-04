import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getStripe } from '@/lib/stripe'

// Infos d'abonnement de l'utilisateur connecté (date de renouvellement, montant).
// L'identité vient de la session Supabase, jamais du corps de la requête.
export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const { data } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .maybeSingle()
    const profile = data as { stripe_customer_id: string | null } | null

    if (!profile?.stripe_customer_id) {
      return NextResponse.json({ error: 'No Stripe customer' }, { status: 404 })
    }

    const stripe = getStripe()
    const subs = await stripe.subscriptions.list({
      customer: profile.stripe_customer_id,
      status: 'all',
      limit: 5,
    })

    const sub: any = subs.data.find((s) => s.status === 'active' || s.status === 'trialing') || subs.data[0]
    if (!sub) {
      return NextResponse.json({ error: 'No subscription' }, { status: 404 })
    }

    // Selon la version d'API, la fin de période est sur l'abonnement ou sur son item
    const item = sub.items?.data?.[0]
    const periodEnd: number | undefined = item?.current_period_end ?? sub.current_period_end

    return NextResponse.json({
      status: sub.status,
      renewsAt: periodEnd ? new Date(periodEnd * 1000).toISOString() : null,
      cancelAtPeriodEnd: !!sub.cancel_at_period_end,
      amount: item?.price?.unit_amount ?? null,
      currency: item?.price?.currency ?? null,
    })
  } catch (error) {
    console.error('Stripe subscription lookup error:', error)
    return NextResponse.json({ error: 'Subscription lookup failed' }, { status: 500 })
  }
}
