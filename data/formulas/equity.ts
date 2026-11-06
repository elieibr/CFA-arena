import type { FormulaItem } from './types'

const r = String.raw

export const equityFormulas: FormulaItem[] = [
  // ───────── Indices ─────────
  {
    id: 'eq-pw', group: 'Indices boursiers', name: 'Price-weighted index',
    latex: r`\text{Index} = \frac{\sum P_i}{\text{Divisor}}`,
    note: 'Les actions à prix élevé pèsent davantage, quelle que soit la taille de l\'entreprise. Le diviseur est ajusté lors des splits.',
  },
  {
    id: 'eq-vw', group: 'Indices boursiers', name: 'Market-capitalization-weighted index',
    latex: r`\text{Index}_t = \text{Index}_0 \times \frac{\sum P_{i,t}\,Q_i}{\sum P_{i,0}\,Q_i}`,
    note: 'Chaque titre pèse selon sa capitalisation. Biais : surpondère les valeurs qui ont déjà monté.',
  },
  {
    id: 'eq-ew', group: 'Indices boursiers', name: 'Equal-weighted index return',
    latex: r`R = \frac{1}{N}\sum_{i=1}^{N} R_i`,
    note: 'Pondère à parts égales : tendance à surpondérer les petites capitalisations, et rééquilibrage régulier nécessaire.',
  },

  // ───────── Dividendes ─────────
  {
    id: 'eq-ddm', group: 'Actualisation des dividendes', name: 'Dividend discount model (general)',
    latex: r`V_0 = \sum_{t=1}^{\infty}\frac{D_t}{(1+r)^t}`,
    note: 'La valeur d\'une action est la valeur actuelle de tous ses dividendes futurs.',
  },
  {
    id: 'eq-gordon', group: 'Actualisation des dividendes', name: 'Gordon growth model',
    latex: r`V_0 = \frac{D_0\,(1+g)}{r-g} = \frac{D_1}{r-g}`,
    note: 'Valable si r > g et si la croissance est stable. Très sensible à l\'écart r − g.',
  },
  {
    id: 'eq-impl', group: 'Actualisation des dividendes', name: 'Implied required return',
    latex: r`r = \frac{D_1}{P_0} + g`,
    note: 'Gordon inversé : rendement du dividende plus croissance.',
  },
  {
    id: 'eq-g', group: 'Actualisation des dividendes', name: 'Growth from fundamentals',
    latex: r`g = b \times ROE = (1-\text{payout}) \times ROE`,
    note: 'Croissance durable : part des bénéfices conservée × rentabilité des capitaux propres.',
  },
  {
    id: 'eq-2stage', group: 'Actualisation des dividendes', name: 'Two-stage dividend discount model',
    latex: r`V_0 = \sum_{t=1}^{n}\frac{D_t}{(1+r)^t} + \frac{V_n}{(1+r)^n}, \qquad V_n = \frac{D_{n+1}}{r - g_L}`,
    note: 'Forte croissance sur n années, puis croissance stable g_L. V_n est la valeur terminale.',
  },
  {
    id: 'eq-pref', group: 'Actualisation des dividendes', name: 'Preferred stock value',
    latex: r`V = \frac{D_p}{r_p}`,
    note: 'Perpétuité : le dividende préférentiel est fixe.',
  },

  // ───────── Multiples ─────────
  {
    id: 'eq-pe', group: 'Multiples de valorisation', name: 'Justified forward and trailing P/E',
    latex: r`\frac{P_0}{E_1} = \frac{1-b}{r-g}, \qquad \frac{P_0}{E_0} = \frac{(1-b)(1+g)}{r-g}`,
    vars: [[r`b`, 'taux de rétention']],
    note: 'Déduit du Gordon en divisant par le bénéfice. Le P/E justifié monte avec g et le payout, baisse avec r.',
  },
  {
    id: 'eq-pb', group: 'Multiples de valorisation', name: 'Justified P/B',
    latex: r`\frac{P_0}{B_0} = \frac{ROE - g}{r - g}`,
    note: 'Si ROE > r, la valeur de marché dépasse la valeur comptable.',
  },
  {
    id: 'eq-ps', group: 'Multiples de valorisation', name: 'Other multiples',
    latex: r`\frac{P}{S} = \frac{\text{Price}}{\text{Sales per share}}, \qquad \frac{P}{CF} = \frac{\text{Price}}{\text{Cash flow per share}}`,
    note: 'Utiles quand les bénéfices sont négatifs ou manipulables.',
  },
  {
    id: 'eq-ev', group: 'Multiples de valorisation', name: 'Enterprise value and EV/EBITDA',
    latex: r`EV = \text{Market cap} + \text{Debt} + \text{Preferred} - \text{Cash}, \qquad \frac{EV}{EBITDA}`,
    note: 'Indépendant de la structure financière : comparable entre sociétés d\'endettement différent.',
  },
  {
    id: 'eq-peg', group: 'Multiples de valorisation', name: 'PEG ratio',
    latex: r`PEG = \frac{P/E}{g \times 100}`,
    note: 'Compare le multiple à la croissance attendue. Plus il est bas, moins l\'action paraît chère.',
  },

  // ───────── Valorisation par les flux ─────────
  {
    id: 'eq-ri', group: 'Résultat résiduel', name: 'Residual income',
    latex: r`RI_t = NI_t - r_e \times B_{t-1} = (ROE_t - r_e)\,B_{t-1}`,
    note: 'Bénéfice après rémunération du coût des fonds propres.',
  },
  {
    id: 'eq-riv', group: 'Résultat résiduel', name: 'Residual income valuation',
    latex: r`V_0 = B_0 + \sum_{t=1}^{\infty}\frac{RI_t}{(1+r_e)^t}`,
    note: 'Valeur comptable actuelle plus valeur actuelle des profits économiques futurs. Efficace quand les dividendes sont nuls.',
  },
  {
    id: 'eq-fcfe', group: 'Résultat résiduel', name: 'FCFE valuation',
    latex: r`V_0 = \sum_{t=1}^{\infty}\frac{FCFE_t}{(1+r_e)^t}`,
    note: 'Actualiser au coût des fonds propres. Pour le FCFF, actualiser au WACC et soustraire la dette.',
  },

  // ───────── Risque ─────────
  {
    id: 'eq-capm', group: 'Rendement exigé', name: 'CAPM required return',
    latex: r`r_e = R_f + \beta\,(R_M - R_f)`,
    note: 'Rendement exigé en fonction du risque systématique.',
  },

]
