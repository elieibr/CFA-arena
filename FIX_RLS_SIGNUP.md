# Fix RLS Error During Signup

## Problème
Erreur lors de l'inscription : **"new row violates row-level security policy for table profiles"**

## Solution Recommandée : Trigger Automatique

### Étape 1 : Exécuter le script SQL

Dans votre dashboard Supabase, allez dans **SQL Editor** et exécutez :

```sql
-- Fonction pour créer automatiquement un profil lors de l'inscription
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, username, full_name, email)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1)),
    COALESCE(new.raw_user_meta_data->>'full_name', ''),
    new.email
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Supprimer le trigger s'il existe déjà
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Créer le trigger qui s'exécute après la création d'un utilisateur
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

### Étape 2 : Vérifier que le code a été mis à jour

Le fichier `app/actions/auth.ts` a été modifié pour :
- ✅ Ne plus créer manuellement le profil
- ✅ Laisser le trigger s'en charger automatiquement
- ✅ Vérifier que le username n'est pas déjà pris

### Comment ça marche ?

1. L'utilisateur s'inscrit avec email/password
2. Supabase crée l'entrée dans `auth.users`
3. Le trigger `on_auth_user_created` s'exécute **automatiquement**
4. Le profil est créé avec `SECURITY DEFINER` (contourne RLS)
5. L'utilisateur est redirigé vers le dashboard

## Alternative : Modifier la politique RLS

Si vous préférez ne pas utiliser de trigger, vous pouvez modifier la politique RLS :

```sql
-- Option 1: Politique plus permissive pour INSERT
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Option 2: Politique temporaire pour développement (À SUPPRIMER EN PRODUCTION!)
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (true);
```

⚠️ **Option 2 est dangereuse en production** - elle permet à n'importe qui de créer n'importe quel profil!

## Tester l'inscription

1. Assurez-vous que le trigger est bien créé :
```sql
SELECT * FROM pg_trigger WHERE tgname = 'on_auth_user_created';
```

2. Testez l'inscription avec un nouvel utilisateur

3. Vérifiez que le profil a été créé :
```sql
SELECT * FROM profiles ORDER BY created_at DESC LIMIT 5;
```

## Bonus : Gestion du Google OAuth

Le trigger fonctionne aussi pour Google OAuth! Il va automatiquement :
- Extraire le username depuis les métadonnées
- Utiliser l'email comme fallback
- Créer le profil avec les bonnes valeurs par défaut

## En cas de problème

Si l'erreur persiste :

1. Vérifiez que le trigger existe :
```sql
SELECT * FROM pg_trigger WHERE tgname = 'on_auth_user_created';
```

2. Vérifiez les logs Supabase dans le dashboard

3. Testez la fonction manuellement :
```sql
SELECT public.handle_new_user();
```

4. Vérifiez les permissions :
```sql
GRANT ALL ON public.profiles TO service_role;
```
