import type { FormulaItem } from './types'

const r = String.raw

export const derivativesFormulas: FormulaItem[] = [
  // ───────── Contrats à terme ─────────
  {
    id: 'dv-fwd', group: 'Forwards et futures', name: 'Forward price (no income)',
    latex: r`F_0(T) = S_0\,(1+r)^T`,
    note: 'Prix à terme sans arbitrage pour un actif sans revenu ni coût de portage : spot capitalisé au taux sans risque.',
  },
  {
    id: 'dv-fwd-inc', group: 'Forwards et futures', name: 'Forward price with income and costs',
    latex: r`F_0(T) = (S_0 - PV(\text{income}) + PV(\text{costs}))\,(1+r)^T`,
    note: 'Les revenus (dividendes, coupons) baissent le prix à terme ; les coûts de stockage le font monter.',
  },
  {
    id: 'dv-fwd-cont', group: 'Forwards et futures', name: 'Forward price, continuous compounding',
    latex: r`F_0(T) = S_0\,e^{(r - q)T}`,
    vars: [[r`q`, 'rendement continu de l\'actif (dividende)']],
    note: 'Pour un indice boursier ou une devise, q est le rendement du dividende ou le taux étranger.',
  },
  {
    id: 'dv-fwd-val', group: 'Forwards et futures', name: 'Value of a forward contract',
    latex: r`V_t(T) = S_t - \frac{F_0(T)}{(1+r)^{T-t}} \qquad (\text{no income})`,
    note: 'Nulle à l\'initiation. Pour la position vendeur, le signe est inverse.',
  },
  {
    id: 'dv-fra', group: 'Forwards et futures', name: 'Forward rate agreement',
    latex: r`\text{FRA payoff} = \frac{N\,(L - K)\,\frac{d}{360}}{1 + L\,\frac{d}{360}}`,
    vars: [[r`L`, 'taux de marché à la date de fixation'], [r`K`, 'taux du FRA'], [r`d`, 'jours']],
    note: 'Règlement versé en début de période et donc actualisé. Positif pour l\'acheteur si L > K.',
  },
  {
    id: 'dv-swap', group: 'Forwards et futures', name: 'Swap fixed rate',
    latex: r`\text{Fixed rate} = \frac{1 - PV_N}{\sum_{i=1}^{N} PV_i}`,
    vars: [[r`PV_i`, 'facteur d\'actualisation de la date i']],
    note: 'Taux fixe qui rend la valeur initiale du swap nulle (valeur des flux fixes = valeur des flux variables).',
  },

  // ───────── Options ─────────
  {
    id: 'dv-callpay', group: 'Options', name: 'Call and put payoffs at expiration',
    latex: r`c_T = \max(0,\,S_T - X), \qquad p_T = \max(0,\,X - S_T)`,
    vars: [[r`X`, 'prix d\'exercice']],
    note: 'Pour l\'acheteur. Le vendeur a le payoff opposé. Le profit se calcule en retirant la prime payée.',
  },
  {
    id: 'dv-profit', group: 'Options', name: 'Break-even and profit',
    latex: r`\text{Call BE} = X + c_0, \qquad \text{Put BE} = X - p_0`,
    note: 'Le gain maximal de l\'acheteur de call est illimité, sa perte est limitée à la prime.',
  },
  {
    id: 'dv-bounds', group: 'Options', name: 'Lower bounds for European options',
    latex: r`c_0 \ge \max\!\left(0,\, S_0 - \frac{X}{(1+r)^T}\right), \qquad p_0 \ge \max\!\left(0,\, \frac{X}{(1+r)^T} - S_0\right)`,
    note: 'Sans dividende. En dessous de ces bornes, un arbitrage est possible.',
  },
  {
    id: 'dv-intrinsic', group: 'Options', name: 'Intrinsic and time value',
    latex: r`\text{Option premium} = \text{Intrinsic value} + \text{Time value}`,
    note: 'La valeur temps diminue à l\'approche de l\'échéance et est maximale pour une option à la monnaie.',
  },
  {
    id: 'dv-pcp', group: 'Options', name: 'Put-call parity',
    latex: r`c_0 + \frac{X}{(1+r)^T} = p_0 + S_0`,
    note: 'Pour des options européennes de mêmes X et T. Permet de reconstruire n\'importe quelle position à partir des trois autres.',
  },
  {
    id: 'dv-bin', group: 'Options', name: 'One-period binomial model',
    latex: r`\pi_U = \frac{1+r-D}{U-D}, \qquad c_0 = \frac{\pi_U\,c_U + (1-\pi_U)\,c_D}{1+r}`,
    vars: [[r`U, D`, 'facteurs de hausse et de baisse'], [r`\pi_U`, 'probabilité neutre au risque']],
    note: 'On actualise l\'espérance neutre au risque du payoff. Aucune probabilité réelle n\'intervient.',
  },
  {
    id: 'dv-hedge', group: 'Options', name: 'Hedge ratio (delta)',
    latex: r`h = \frac{c_U - c_D}{S_U - S_D}`,
    note: 'Nombre d\'actions à détenir pour couvrir une option vendue : on obtient alors un portefeuille sans risque.',
  },
  {
    id: 'dv-greeks', group: 'Options', name: 'Option sensitivities',
    latex: r`\Delta=\frac{\partial c}{\partial S}, \quad \Gamma=\frac{\partial \Delta}{\partial S}, \quad Vega=\frac{\partial c}{\partial \sigma}`,
    note: 'Delta : sensibilité au sous-jacent. Gamma : sensibilité du delta. Vega : sensibilité à la volatilité (toujours positive pour l\'acheteur).',
  },
]
