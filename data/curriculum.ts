export interface Topic {
  id: string
  code: string
  titleFr: string
  titleEn: string
  weight: number
  icon: string
  difficultyMultiplier: number
  description: string
}

export const curriculum: Topic[] = [
  {
    id: 'quantitative-methods',
    code: 'QM',
    titleFr: 'Méthodes Quantitatives',
    titleEn: 'Quantitative Methods',
    weight: 0.10,
    icon: 'Calculator',
    difficultyMultiplier: 1.2,
    description: 'Statistiques, probabilités, analyse de régression et séries temporelles'
  },
  {
    id: 'economics',
    code: 'EC',
    titleFr: 'Économie',
    titleEn: 'Economics',
    weight: 0.10,
    icon: 'TrendingUp',
    difficultyMultiplier: 1.0,
    description: 'Microéconomie, macroéconomie, commerce international et taux de change'
  },
  {
    id: 'financial-statement-analysis',
    code: 'FSA',
    titleFr: 'Analyse des États Financiers',
    titleEn: 'Financial Statement Analysis',
    weight: 0.13,
    icon: 'FileText',
    difficultyMultiplier: 1.3,
    description: 'Analyse des bilans, comptes de résultat, flux de trésorerie et ratios financiers'
  },
  {
    id: 'corporate-issuers',
    code: 'CI',
    titleFr: 'Émetteurs Corporate',
    titleEn: 'Corporate Issuers',
    weight: 0.08,
    icon: 'Building',
    difficultyMultiplier: 1.1,
    description: 'Gouvernance d\'entreprise, budgétisation du capital et structure du capital'
  },
  {
    id: 'equity-investments',
    code: 'EQ',
    titleFr: 'Investissements Actions',
    titleEn: 'Equity Investments',
    weight: 0.11,
    icon: 'LineChart',
    difficultyMultiplier: 1.2,
    description: 'Marchés actions, indices, valorisation et analyse des actions'
  },
  {
    id: 'fixed-income',
    code: 'FI',
    titleFr: 'Titres à Revenu Fixe',
    titleEn: 'Fixed Income',
    weight: 0.11,
    icon: 'DollarSign',
    difficultyMultiplier: 1.3,
    description: 'Obligations, duration, convexité, courbe des taux et risque de crédit'
  },
  {
    id: 'derivatives',
    code: 'DV',
    titleFr: 'Produits Dérivés',
    titleEn: 'Derivatives',
    weight: 0.05,
    icon: 'GitBranch',
    difficultyMultiplier: 1.5,
    description: 'Forwards, futures, options, swaps et stratégies de couverture'
  },
  {
    id: 'alternative-investments',
    code: 'AI',
    titleFr: 'Investissements Alternatifs',
    titleEn: 'Alternative Investments',
    weight: 0.07,
    icon: 'Briefcase',
    difficultyMultiplier: 1.4,
    description: 'Private equity, hedge funds, immobilier, matières premières et infrastructures'
  },
  {
    id: 'portfolio-management',
    code: 'PM',
    titleFr: 'Gestion de Portefeuille',
    titleEn: 'Portfolio Management',
    weight: 0.07,
    icon: 'PieChart',
    difficultyMultiplier: 1.2,
    description: 'Théorie moderne du portefeuille, CAPM, allocation d\'actifs et gestion des risques'
  },
  {
    id: 'ethical-standards',
    code: 'ETH',
    titleFr: 'Éthique et Standards Professionnels',
    titleEn: 'Ethical and Professional Standards',
    weight: 0.15,
    icon: 'Scale',
    difficultyMultiplier: 0.8,
    description: 'Code of Ethics, Standards of Professional Conduct et GIPS'
  }
]

export function getTopicById(id: string): Topic | undefined {
  return curriculum.find(topic => topic.id === id)
}

export function getLeagueColor(league: string): string {
  switch (league) {
    case 'bronze':
      return 'from-amber-600 to-amber-800'
    case 'silver':
      return 'from-gray-300 to-gray-500'
    case 'gold':
      return 'from-yellow-400 to-yellow-600'
    case 'diamond':
      return 'from-cyan-400 to-blue-600'
    case 'master':
      return 'from-purple-500 to-pink-600'
    default:
      return 'from-gray-400 to-gray-600'
  }
}

export function getLeagueEmoji(league: string): string {
  switch (league) {
    case 'bronze':
      return '🥉'
    case 'silver':
      return '🥈'
    case 'gold':
      return '🥇'
    case 'diamond':
      return '💎'
    case 'master':
      return '👑'
    default:
      return '🏆'
  }
}
