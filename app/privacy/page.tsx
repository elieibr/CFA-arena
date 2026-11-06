import LegalPage from '@/components/LegalPage'

export const metadata = { title: 'Politique de confidentialité — CharterPath' }

export default function PrivacyPage() {
  return (
    <LegalPage title="Politique de confidentialité" updated="6 novembre 2026">
      <h2>Responsable du traitement</h2>
      <p>[NOM / RAISON SOCIALE ET ADRESSE : voir mentions légales]. Contact : <a href="mailto:support@charterpath.app">support@charterpath.app</a></p>

      <h2>Données collectées</h2>
      <ul>
        <li>Compte : adresse email, nom d&apos;utilisateur, nom (facultatif), mot de passe (stocké chiffré par Supabase).</li>
        <li>Activité : réponses aux questions, progression par matière, scores, examens, cartes de révision.</li>
        <li>Abonnement : identifiant client Stripe et statut. Les données de carte sont traitées par Stripe et ne transitent pas par nos serveurs.</li>
        <li>Newsletter : adresse email saisie dans le formulaire.</li>
      </ul>

      <h2>Finalités et bases légales</h2>
      <ul>
        <li>Fournir le service et gérer votre compte (exécution du contrat).</li>
        <li>Gérer les paiements et abonnements (exécution du contrat, obligation légale).</li>
        <li>Afficher classement et profils publics (exécution du contrat ; désactivable dans les paramètres).</li>
        <li>Vous écrire au sujet du service (intérêt légitime ; consentement pour la newsletter).</li>
      </ul>

      <h2>Sous-traitants</h2>
      <ul>
        <li>Supabase : base de données et authentification.</li>
        <li>Vercel : hébergement.</li>
        <li>Stripe : paiements.</li>
        <li>Resend : envoi d&apos;emails.</li>
      </ul>
      <p>Certains de ces prestataires sont situés hors de l&apos;Union européenne ; les transferts s&apos;appuient sur les garanties prévues par le RGPD (clauses contractuelles types).</p>

      <h2>Durée de conservation</h2>
      <p>Les données du compte sont conservées tant que le compte existe, puis supprimées. Les données de facturation sont conservées selon les obligations légales.</p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez des droits d&apos;accès, de rectification, d&apos;effacement, de portabilité, d&apos;opposition et de limitation.
        Écrivez à <a href="mailto:support@charterpath.app">support@charterpath.app</a> ; vous pouvez aussi saisir la CNIL (cnil.fr).
      </p>

      <h2>Cookies</h2>
      <p>
        Le site n&apos;utilise que des cookies strictement nécessaires (session d&apos;authentification). Aucun cookie publicitaire ni outil
        de mesure d&apos;audience n&apos;est utilisé à ce jour ; cette page sera mise à jour si cela change.
      </p>
    </LegalPage>
  )
}
