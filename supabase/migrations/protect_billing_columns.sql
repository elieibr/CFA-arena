-- Empêche un utilisateur connecté de modifier lui-même ses colonnes de facturation.
-- Sans ça, la politique "Users can update own profile" permet à n'importe qui de faire
-- supabase.from('profiles').update({ is_pro: true }) depuis le navigateur.
-- Seuls service_role (webhook Stripe) et l'éditeur SQL (auth.role() est NULL) peuvent les changer.

CREATE OR REPLACE FUNCTION public.protect_billing_columns()
RETURNS TRIGGER AS $$
BEGIN
  IF auth.role() IN ('anon', 'authenticated') AND (
       NEW.is_pro IS DISTINCT FROM OLD.is_pro
    OR NEW.subscription_status IS DISTINCT FROM OLD.subscription_status
    OR NEW.stripe_customer_id IS DISTINCT FROM OLD.stripe_customer_id
  ) THEN
    RAISE EXCEPTION 'billing columns are read-only for clients';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

DROP TRIGGER IF EXISTS protect_billing_columns ON public.profiles;
CREATE TRIGGER protect_billing_columns
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.protect_billing_columns();

-- Même chose à l'insertion : un client ne doit pas créer son profil déjà Pro.
CREATE OR REPLACE FUNCTION public.protect_billing_columns_insert()
RETURNS TRIGGER AS $$
BEGIN
  IF auth.role() IN ('anon', 'authenticated') THEN
    NEW.is_pro := false;
    NEW.subscription_status := 'free';
    NEW.stripe_customer_id := NULL;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

DROP TRIGGER IF EXISTS protect_billing_columns_insert ON public.profiles;
CREATE TRIGGER protect_billing_columns_insert
  BEFORE INSERT ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.protect_billing_columns_insert();

-- Test (à lancer connecté en tant qu'utilisateur, doit échouer) :
--   update profiles set is_pro = true where id = auth.uid();
