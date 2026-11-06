import type { FormulaItem } from './types'

const r = String.raw

export const alternativesFormulas: FormulaItem[] = [
  // ───────── Hedge funds ─────────
  {
    id: 'ai-fees', group: 'Hedge funds', name: 'Fund fees: management and incentive',
    latex: r`\text{Mgmt fee} = f_m \times AUM, \qquad \text{Incentive fee} = f_i \times \max(0,\,\text{profit above hurdle})`,
    note: 'Le « 2 et 20 » : 2 % de commission de gestion et 20 % de commission de performance. Le high-water mark évite de payer deux fois sur les mêmes gains.',
  },


  // ───────── Immobilier ─────────
  {
    id: 'ai-noi', group: 'Immobilier', name: 'Net operating income',
    latex: r`NOI = \text{Rental income} - \text{Operating expenses}`,
    note: 'Avant impôt, intérêts et amortissement.',
  },
  {
    id: 'ai-cap', group: 'Immobilier', name: 'Capitalization rate and direct capitalization',
    latex: r`\text{Cap rate} = \frac{NOI_1}{\text{Property value}}, \qquad V_0 = \frac{NOI_1}{\text{Cap rate}}`,
    note: 'Analogue du rendement d\'un actif perpétuel : un cap rate plus bas donne une valeur plus élevée.',
  },
  {
    id: 'ai-grm', group: 'Immobilier', name: 'Gross rent multiplier',
    latex: r`GRM = \frac{\text{Price}}{\text{Gross potential rent}}`,
    note: 'Multiple de valorisation rapide, qui ignore les charges.',
  },
  {
    id: 'ai-dscr', group: 'Immobilier', name: 'Debt service coverage ratio',
    latex: r`DSCR = \frac{NOI}{\text{Debt service}}`,
    note: 'Un DSCR supérieur à 1 signifie que le loyer couvre le service de la dette.',
  },
  {
    id: 'ai-ltv', group: 'Immobilier', name: 'Loan-to-value',
    latex: r`LTV = \frac{\text{Loan}}{\text{Appraised value}}`,
    note: 'Mesure la part du bien financée par la dette.',
  },

  // ───────── Capital-investissement ─────────
  {
    id: 'ai-moic', group: 'Capital-investissement', name: 'Multiple of invested capital',
    latex: r`MOIC = \frac{\text{Total value (realized + unrealized)}}{\text{Capital invested}}`,
    note: 'Ne tient pas compte du temps : deux fonds de même MOIC peuvent avoir des IRR très différents.',
  },
  {
    id: 'ai-pme', group: 'Capital-investissement', name: 'PE performance multiples',
    latex: r`DPI = \frac{\text{Cumulative distributions}}{\text{Paid-in capital}}, \quad RVPI = \frac{\text{NAV}}{\text{Paid-in capital}}, \quad TVPI = DPI + RVPI`,
    note: 'DPI : cash déjà rendu aux investisseurs. RVPI : valeur résiduelle non réalisée. TVPI : somme des deux.',
  },
  {
    id: 'ai-irr', group: 'Capital-investissement', name: 'Internal rate of return',
    latex: r`0 = \sum_{t=0}^{N}\frac{CF_t}{(1+IRR)^t}`,
    note: 'Mesure principale du capital-investissement. Les flux peuvent être négatifs (appels de fonds) puis positifs (distributions).',
  },
  {
    id: 'ai-carry', group: 'Capital-investissement', name: 'Carried interest',
    latex: r`\text{Carry} = c \times \max(0,\, \text{Profit above preferred return})`,
    note: 'Part des profits du gérant (souvent 20 %), versée une fois le rendement préférentiel (hurdle) dépassé aux investisseurs.',
  },

  // ───────── Matières premières ─────────
  {
    id: 'ai-comm', group: 'Matières premières et actifs réels', name: 'Commodity total return',
    latex: r`R_{total} = R_{spot} + R_{roll} + R_{collateral}`,
    note: 'Rendement d\'un investissement en contrats à terme : variation du spot, rendement de roulement (backwardation positif, contango négatif) et intérêts sur le collatéral.',
  },
  {
    id: 'ai-roll', group: 'Matières premières et actifs réels', name: 'Roll yield',
    latex: r`\text{Roll yield} = \frac{F_{near} - F_{far}}{F_{near}}`,
    note: 'Positif en backwardation (futures proches plus chers que lointains), négatif en contango.',
  },
]
