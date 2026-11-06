import type { FormulaItem } from './types'

const r = String.raw

export const economicsFormulas: FormulaItem[] = [
  // ───────── Microéconomie ─────────
  {
    id: 'ec-ped', group: 'Élasticités', name: 'Price elasticity of demand',
    latex: r`E_d = \frac{\%\Delta Q_d}{\%\Delta P}`,
    note: 'En valeur absolue : |E| > 1 élastique (une baisse de prix augmente la recette), |E| < 1 inélastique.',
  },
  {
    id: 'ec-yed', group: 'Élasticités', name: 'Income and cross-price elasticity',
    latex: r`E_I = \frac{\%\Delta Q_d}{\%\Delta I}, \qquad E_{XY} = \frac{\%\Delta Q_X}{\%\Delta P_Y}`,
    note: 'E_I > 0 : bien normal ; E_I < 0 : bien inférieur. E_XY > 0 : substituts ; E_XY < 0 : compléments.',
  },
  {
    id: 'ec-tr', group: 'Élasticités', name: 'Total revenue and marginal revenue',
    latex: r`TR = P \times Q, \qquad MR = \frac{\Delta TR}{\Delta Q}`,
    note: 'La recette totale est maximale quand MR = 0, c\'est-à-dire à élasticité unitaire.',
  },
  {
    id: 'ec-profit', group: 'Coûts et structures de marché', name: 'Profit maximization',
    latex: r`MR = MC`,
    note: 'Règle valable pour toute structure de marché. En concurrence parfaite, P = MR, donc P = MC.',
  },
  {
    id: 'ec-costs', group: 'Coûts et structures de marché', name: 'Average costs',
    latex: r`ATC = AFC + AVC = \frac{TC}{Q}`,
    note: 'Une entreprise arrête sa production à court terme si P < AVC, et sort du marché à long terme si P < ATC.',
  },
  {
    id: 'ec-hhi', group: 'Coûts et structures de marché', name: 'Herfindahl-Hirschman Index',
    latex: r`HHI = \sum_{i=1}^{N} (100\, s_i)^2`,
    vars: [[r`s_i`, 'part de marché de la firme i']],
    note: 'Mesure la concentration : plus l\'indice est élevé, plus le marché est concentré. Il se calcule souvent sur les 4 plus grandes firmes.',
  },
  {
    id: 'ec-nfirm', group: 'Coûts et structures de marché', name: 'N-firm concentration ratio',
    latex: r`CR_N = \sum_{i=1}^{N} s_i`,
    note: 'Somme des parts des N plus grandes firmes. Ne dit rien de la répartition entre elles, contrairement au HHI.',
  },

  // ───────── Macroéconomie ─────────
  {
    id: 'ec-gdp-e', group: 'PIB et croissance', name: 'GDP, expenditure approach',
    latex: r`GDP = C + I + G + (X - M)`,
    note: 'Consommation, investissement, dépenses publiques et exportations nettes.',
  },
  {
    id: 'ec-gdp-i', group: 'PIB et croissance', name: 'Savings, investment and the current account',
    latex: r`(S - I) = (G - T) + (X - M)`,
    note: 'Un déficit courant se finance par un déficit public ou par un excès d\'investissement sur l\'épargne privée.',
  },
  {
    id: 'ec-deflator', group: 'PIB et croissance', name: 'GDP deflator',
    latex: r`\text{Deflator} = \frac{\text{Nominal GDP}}{\text{Real GDP}} \times 100`,
    note: 'Indice de prix couvrant tous les biens produits, contrairement à l\'IPC qui suit un panier de consommation.',
  },
  {
    id: 'ec-growth', group: 'PIB et croissance', name: 'Growth accounting (Solow)',
    latex: r`\Delta Y/Y = \Delta A/A + \alpha\,\Delta K/K + (1-\alpha)\,\Delta L/L`,
    vars: [[r`A`, 'productivité totale des facteurs'], [r`\alpha`, 'part du capital dans la production']],
    note: 'Décompose la croissance entre progrès technique, capital et travail.',
  },
  {
    id: 'ec-fisher', group: 'Monnaie et politique monétaire', name: 'Fisher effect',
    latex: r`r_{nom} \approx r_{real} + E(\pi)`,
    note: 'Le taux nominal incorpore l\'inflation anticipée.',
  },
  {
    id: 'ec-mm', group: 'Monnaie et politique monétaire', name: 'Money multiplier',
    latex: r`\text{Money multiplier} = \frac{1}{\text{reserve requirement}}`,
    note: 'Montant maximal de monnaie créé par unité de réserves, dans une version simplifiée du système bancaire.',
  },
  {
    id: 'ec-neutral', group: 'Monnaie et politique monétaire', name: 'Neutral nominal policy rate',
    latex: r`r_{neutral} = r_{real\ trend} + \pi_{target}`,
    note: 'Taux directeur qui ne stimule ni ne freine l\'économie. Au-dessus : politique restrictive ; en dessous : expansionniste.',
  },
  {
    id: 'ec-fm', group: 'Monnaie et politique monétaire', name: 'Fiscal multiplier',
    latex: r`\text{Multiplier} = \frac{1}{1 - c\,(1-t)}`,
    vars: [[r`c`, 'propension marginale à consommer'], [r`t`, 'taux d\'imposition']],
    note: 'Effet total d\'une dépense publique supplémentaire sur le PIB.',
  },

  // ───────── Change ─────────
  {
    id: 'ec-cross', group: 'Taux de change', name: 'Cross rate',
    latex: r`\frac{A}{C} = \frac{A}{B} \times \frac{B}{C}`,
    note: 'Convention : A/B = nombre d\'unités de A pour une unité de B (B est la monnaie de base). Vérifier que les devises se simplifient.',
  },
  {
    id: 'ec-fwd', group: 'Taux de change', name: 'Forward exchange rate (covered interest parity)',
    latex: r`F_{A/B} = S_{A/B}\,\frac{1+r_A}{1+r_B}`,
    vars: [[r`r_A`, 'taux sans risque de la monnaie de cotation A'], [r`r_B`, 'taux sans risque de la monnaie de base B']],
    note: 'Pas d\'arbitrage possible : la monnaie à taux d\'intérêt plus élevé se vend à terme avec un escompte.',
  },
  {
    id: 'ec-fpoints', group: 'Taux de change', name: 'Forward premium or discount',
    latex: r`\text{Forward points} = F - S`,
    note: 'F > S : la monnaie de base est à prime à terme. Les points sont souvent cotés en pips.',
  },
  {
    id: 'ec-ppp', group: 'Taux de change', name: 'Relative purchasing power parity',
    latex: r`\frac{\Delta S_{A/B}}{S_{A/B}} \approx \pi_A - \pi_B`,
    note: 'Sur le long terme, la monnaie du pays où l\'inflation est plus élevée se déprécie.',
  },
  {
    id: 'ec-ife', group: 'Taux de change', name: 'International Fisher effect',
    latex: r`r_{nom,A} - r_{nom,B} \approx E\!\left(\frac{\Delta S_{A/B}}{S_{A/B}}\right)`,
    note: 'L\'écart de taux nominaux reflète la dépréciation attendue de la monnaie qui offre le taux le plus élevé.',
  },
]
