import LegalPage from '@/components/LegalPage'

export const metadata = { title: 'Mentions légales — CharterPath' }

export default function LegalNoticePage() {
  return (
    <LegalPage title="Mentions légales" updated="6 novembre 2026">
      <h2>Éditeur du site</h2>
      <p>
        CharterPath est édité par [NOM / RAISON SOCIALE], [FORME JURIDIQUE ET SIRET / NUMÉRO D&apos;IMMATRICULATION],
        [ADRESSE POSTALE].<br />
        Directeur de la publication : [NOM].<br />
        Contact : <a href="mailto:support@charterpath.app">support@charterpath.app</a>
      </p>

      <h2>Hébergement</h2>
      <p>
        Application hébergée par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
        Base de données et authentification : Supabase.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les contenus (questions, cours, articles) sont la propriété de l&apos;éditeur. Toute reproduction sans autorisation est interdite.
      </p>

      <h2>Mention relative au CFA Institute</h2>
      <p>
        CharterPath est un produit indépendant. Le CFA Institute ne l&apos;approuve pas, ne le parraine pas et ne garantit pas
        l&apos;exactitude de son contenu. « CFA » et « Chartered Financial Analyst » sont des marques du CFA Institute.
      </p>
    </LegalPage>
  )
}
