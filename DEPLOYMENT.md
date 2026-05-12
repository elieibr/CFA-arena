# Guide de Déploiement - CFA Arena

## 📋 Prérequis

1. Compte GitHub: https://github.com
2. Compte Vercel: https://vercel.com
3. Projet Supabase configuré avec le schéma de base de données

## 🚀 Étape 1: Pousser le code sur GitHub

```bash
# Créer un nouveau repository sur GitHub (ne pas initialiser avec README)
# Copier l'URL du repository (ex: https://github.com/votre-username/cfa-arena.git)

# Ajouter le remote GitHub
git remote add origin https://github.com/votre-username/cfa-arena.git

# Pousser le code
git branch -M main
git push -u origin main
```

## 🌐 Étape 2: Déployer sur Vercel

### Méthode 1: Via l'interface web (Recommandé)

1. Aller sur https://vercel.com
2. Cliquer sur "Add New" → "Project"
3. Importer votre repository GitHub
4. Vercel détectera automatiquement Next.js
5. Configurer les variables d'environnement:
   - `NEXT_PUBLIC_SUPABASE_URL` = votre URL Supabase
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = votre clé anonyme Supabase
6. Cliquer sur "Deploy"

### Méthode 2: Via la CLI Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer (suivre les instructions)
vercel

# Ajouter les variables d'environnement
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production

# Redéployer avec les nouvelles variables
vercel --prod
```

## 🗄️ Étape 3: Configuration Supabase

1. Aller dans votre projet Supabase
2. Dans "SQL Editor", exécuter dans l'ordre:
   ```sql
   -- 1. Schéma principal
   [Coller le contenu de supabase-schema.sql]

   -- 2. Trigger pour création automatique de profil
   [Coller le contenu de supabase-trigger-profile.sql]

   -- 3. Suppression du système ELO
   [Coller le contenu de supabase-remove-elo.sql]
   ```

3. Dans "Authentication" → "URL Configuration":
   - Ajouter votre URL Vercel dans "Site URL"
   - Ajouter `https://votre-app.vercel.app/**` dans "Redirect URLs"

4. Dans "Authentication" → "Providers":
   - Activer "Email" (obligatoire)
   - (Optionnel) Activer "Google OAuth"

## ✅ Vérification

1. Visiter votre URL Vercel
2. Tester la création de compte (`/signup`)
3. Tester la connexion (`/login`)
4. Vérifier le dashboard

## 🔧 Commandes utiles

```bash
# Voir les logs en temps réel
vercel logs

# Lister les déploiements
vercel ls

# Ouvrir le dashboard Vercel
vercel

# Redéployer
vercel --prod
```

## 🐛 Résolution de problèmes

### Erreur: Variables d'environnement manquantes
```bash
vercel env pull .env.local
```

### Erreur: Base de données
- Vérifier que tous les scripts SQL sont exécutés
- Vérifier que le trigger `handle_new_user()` est actif
- Vérifier les RLS policies dans Supabase

### Erreur de build
```bash
npm run build
# Résoudre les erreurs localement avant de push
```

## 📝 Notes

- Le site sera accessible sur: `https://votre-projet.vercel.app`
- Les déploiements automatiques se font à chaque push sur `main`
- Vercel supporte les domaines personnalisés (Settings → Domains)
