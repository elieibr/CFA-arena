import type { FormulaItem } from './types'

export const ethicsFormulas: FormulaItem[] = [
  {
    id: 'et-structure', group: 'Cadre', name: 'The seven Standards of Professional Conduct',
    text: 'I Professionalism · II Integrity of Capital Markets · III Duties to Clients · IV Duties to Employers · V Investment Analysis, Recommendations and Actions · VI Conflicts of Interest · VII Responsibilities as a CFA Institute Member or Candidate',
    note: 'Structure à connaître par cœur : les questions demandent de repérer la norme violée.',
  },
  {
    id: 'et-stricter', group: 'Cadre', name: 'Stricter rule principle',
    text: 'Conduite à suivre = la plus stricte entre la loi locale et le Code and Standards.',
    note: 'En cas de conflit entre la loi et le Code and Standards, appliquer la règle imposant le devoir le plus élevé.',
  },
  {
    id: 'et-decision', group: 'Cadre', name: 'Ethical decision-making framework',
    text: 'Identifier les faits et les parties prenantes → Considérer les normes et les alternatives → Décider et agir → Réfléchir au résultat.',
    note: 'Démarche à suivre devant un dilemme.',
  },
  {
    id: 'et-gips', group: 'GIPS', name: 'GIPS compliance',
    text: 'La conformité GIPS s\'applique à l\'ensemble de l\'entreprise (firm-wide) : on ne peut pas se déclarer conforme pour un seul produit ou composite.',
    note: 'Tout ou rien : l\'entreprise respecte toutes les exigences applicables ou ne peut pas revendiquer la conformité.',
  },
  {
    id: 'et-mnpi', group: 'Normes clés', name: 'Material nonpublic information (Standard II(A))',
    text: 'Information importante (susceptible d\'influencer le cours ou la décision d\'un investisseur raisonnable) ET non diffusée au marché → interdiction de négocier ou d\'inciter à négocier.',
    note: 'Théorie de la mosaïque : combiner des informations publiques et des informations non publiques non importantes reste permis.',
  },
  {
    id: 'et-fair', group: 'Normes clés', name: 'Loyalty, fair dealing and suitability (Standard III)',
    text: 'Loyauté, prudence et diligence envers le client ; traitement équitable de tous les clients lors des recommandations ; adéquation des recommandations à son profil (objectifs, contraintes, tolérance au risque).',
    note: 'Le devoir envers le client prime sur les intérêts de l\'employeur et du membre.',
  },
  {
    id: 'et-priority', group: 'Normes clés', name: 'Priority of transactions (Standard VI(B))',
    text: 'Ordre de priorité : 1. clients, 2. employeur, 3. opérations personnelles du membre.',
    note: 'Front running : négocier devant un ordre client connu est une violation.',
  },
]
