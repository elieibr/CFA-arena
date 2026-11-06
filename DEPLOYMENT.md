# Déploiement

## 1. Supabase

Dans le SQL Editor, exécuter dans l'ordre :

1. `supabase/schema/supabase-schema.sql`
2. `supabase/schema/supabase-trigger-profile.sql`
3. `supabase/schema/supabase-remove-elo.sql`
4. `supabase/schema/supabase-fix-rls.sql` et `supabase/schema/fix-schema.sql`
5. Les migrations de `supabase/migrations/` :
   `add_question_index.sql`, `add_subscription_columns.sql`, `protect_billing_columns.sql`,
   puis `public_profiles_view.sql`.

> `public_profiles_view.sql` contient en commentaire un `DROP POLICY` à exécuter **après** le déploiement
> du code qui lit la vue `public_profiles`. C'est ce qui empêche de lire `is_pro` / `stripe_customer_id`
> des autres utilisateurs.

Authentication → URL Configuration : Site URL = URL de production, Redirect URLs = `https://<domaine>/auth/callback`.
Providers : Email (obligatoire), Google (optionnel).

Test de sécurité (connecté en tant qu'utilisateur, doit échouer) :
`update profiles set is_pro = true where id = auth.uid();`

## 2. Stripe

1. Créer le produit et le prix d'abonnement → `STRIPE_PRICE_ID`.
2. Activer le portail client (Settings → Billing → Customer portal).
3. Créer un webhook vers `https://<domaine>/api/stripe/webhook` avec les événements :
   `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`,
   `invoice.payment_failed` → `STRIPE_WEBHOOK_SECRET`.
4. En production, utiliser les clés **live** (`sk_live_...`, `pk_live_...`).

## 3. Resend

Vérifier le domaine d'envoi (SPF, DKIM) avant d'utiliser `onboarding@charterpath.app`.

## 4. Vercel

Importer le dépôt GitHub (déploiement automatique à chaque push sur `main`) et définir :

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL du projet Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clé anon (publique) |
| `SUPABASE_SERVICE_ROLE_KEY` | Clé service (serveur uniquement, utilisée par le webhook) |
| `NEXT_PUBLIC_APP_URL` | URL de production (redirections Stripe et OAuth) |
| `STRIPE_SECRET_KEY` | Clé secrète Stripe |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Clé publique Stripe |
| `STRIPE_PRICE_ID` | Prix de l'abonnement Pro |
| `STRIPE_WEBHOOK_SECRET` | Secret de signature du webhook |
| `RESEND_API_KEY` | Envoi d'emails |

## 5. Vérification après déploiement

Inscription → onboarding → quiz → limite gratuite (100 questions) → paiement → statut Pro →
portail client → annulation (le Pro doit être retiré).
