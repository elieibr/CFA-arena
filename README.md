# CharterPath

Plateforme de préparation au CFA Level I : quiz par matière, examens blancs, révision espacée, cours,
classement et statistiques. Gratuit jusqu'à 100 questions, abonnement Pro au-delà.

## Stack

- Next.js 16 (App Router, `proxy.ts` pour l'authentification), React 19, Tailwind 4
- Supabase : PostgreSQL, Auth, RLS
- Stripe : abonnement Pro, portail client, webhook
- Resend : emails

> Cette version de Next.js a des changements incompatibles (ex. `middleware` renommé `proxy`).
> Consulter `node_modules/next/dist/docs/` avant de modifier les conventions de fichiers.

## Démarrage local

```bash
npm install
cp .env.local.example .env.local   # puis remplir les valeurs
npm run dev                        # http://localhost:3000
```

Variables d'environnement : voir `.env.local.example` et `DEPLOYMENT.md`.

## Structure

| Dossier | Contenu |
|---|---|
| `app/` | Pages et routes (`api/stripe/*`, `api/newsletter`, `auth/callback`) |
| `proxy.ts` | Rafraîchit la session Supabase et protège les pages privées |
| `data/questions/` | Banque de questions par matière (`data/question-bank.ts` les assemble) |
| `data/courses.ts`, `data/curriculum.ts` | Cours et programme |
| `content/blog/` | Articles du blog (Markdown) |
| `supabase/schema/` | Schéma initial et correctifs historiques |
| `supabase/migrations/` | Migrations à exécuter dans l'ordre (SQL Editor) |
| `scripts/` | Scripts de test (utilisateur gratuit, seed) |

## Commandes

```bash
npm run dev     # développement
npm run build   # build de production
npm run lint    # ESLint
```

## Stripe en local

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Copier le `whsec_...` affiché dans `STRIPE_WEBHOOK_SECRET`.
