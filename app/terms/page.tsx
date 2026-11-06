import Link from 'next/link'
import LegalPage from '@/components/LegalPage'

export const metadata = { title: 'Conditions d\'utilisation — CharterPath' }

export default function TermsPage() {
  return (
    <LegalPage title="Conditions générales d'utilisation et de vente" updated="6 novembre 2026">
      <h2>1. Objet</h2>
      <p>
        CharterPath propose des outils de préparation à l&apos;examen CFA Level I : quiz, examens blancs, révision espacée,
        cours et statistiques. L&apos;éditeur est identifié dans les <Link href="/legal">mentions légales</Link>.
      </p>

      <h2>2. Compte</h2>
      <p>
        L&apos;inscription nécessite une adresse email valide et un nom d&apos;utilisateur. Vous êtes responsable de la confidentialité
        de votre mot de passe. Le nom d&apos;utilisateur et votre score peuvent apparaître publiquement (profil, classement) ;
        vous pouvez rendre votre profil privé dans les paramètres.
      </p>

      <h2>3. Offres</h2>
      <ul>
        <li>Offre gratuite : accès limité à 100 questions.</li>
        <li>Offre Pro : abonnement mensuel donnant un accès sans cette limite. Le prix en vigueur est affiché sur la page d&apos;abonnement avant le paiement.</li>
      </ul>

      <h2>4. Paiement et résiliation</h2>
      <p>
        Le paiement est traité par Stripe. L&apos;abonnement est reconduit automatiquement chaque période jusqu&apos;à résiliation.
        Vous pouvez résilier à tout moment depuis le portail client (page Abonnement) ; l&apos;accès Pro reste actif jusqu&apos;à la fin
        de la période déjà payée.
      </p>

      <h2>5. Droit de rétractation</h2>
      <p>
        Conformément à l&apos;article L221-28 du Code de la consommation, en demandant l&apos;accès immédiat au service numérique
        vous renoncez à votre droit de rétractation de 14 jours une fois le service commencé. [À VALIDER AVEC UN JURISTE : politique de remboursement éventuelle.]
      </p>

      <h2>6. Absence de garantie de résultat</h2>
      <p>
        Le contenu est fourni à titre pédagogique, peut comporter des erreurs et ne garantit pas la réussite à l&apos;examen.
        CharterPath est indépendant du CFA Institute.
      </p>

      <h2>7. Usage acceptable</h2>
      <p>
        Il est interdit d&apos;extraire massivement le contenu, de revendre l&apos;accès, de partager votre compte ou de perturber le service.
        Nous pouvons suspendre un compte en cas d&apos;abus.
      </p>

      <h2>8. Responsabilité</h2>
      <p>
        Le service est fourni « en l&apos;état ». Dans les limites permises par la loi, la responsabilité de l&apos;éditeur est limitée
        aux sommes payées au cours des 12 derniers mois.
      </p>

      <h2>9. Droit applicable</h2>
      <p>
        Droit français. Pour tout litige, vous pouvez recourir à un médiateur de la consommation : [COORDONNÉES DU MÉDIATEUR].
      </p>

      <h2>10. Contact</h2>
      <p><a href="mailto:support@charterpath.app">support@charterpath.app</a></p>
    </LegalPage>
  )
}
