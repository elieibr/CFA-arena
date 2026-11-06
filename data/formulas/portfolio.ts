import type { FormulaItem } from './types'

const r = String.raw

export const portfolioFormulas: FormulaItem[] = [
  // ───────── Rendement et risque ─────────
  {
    id: 'pm-ret', group: 'Rendement et risque', name: 'Portfolio expected return',
    latex: r`E(R_p) = \sum_{i=1}^{n} w_i\,E(R_i)`,
    note: 'Moyenne pondérée des rendements attendus : les poids somment à 1.',
  },
  {
    id: 'pm-var2', group: 'Rendement et risque', name: 'Two-asset portfolio variance',
    latex: r`\sigma_p^2 = w_1^2\sigma_1^2 + w_2^2\sigma_2^2 + 2\,w_1 w_2\,\rho_{12}\,\sigma_1\sigma_2`,
    note: 'Le risque diminue avec la corrélation. À ρ = 1, il n\'y a aucune diversification ; à ρ = −1, le risque peut être annulé.',
  },
  {
    id: 'pm-cov', group: 'Rendement et risque', name: 'Covariance and correlation',
    latex: r`Cov_{12} = \rho_{12}\,\sigma_1\,\sigma_2`,
    note: 'Avec n actifs, il faut estimer n(n − 1)/2 covariances.',
  },
  {
    id: 'pm-nvar', group: 'Rendement et risque', name: 'Equal-weighted portfolio variance',
    latex: r`\sigma_p^2 = \frac{1}{n}\,\bar{\sigma}^2 + \frac{n-1}{n}\,\overline{Cov}`,
    note: 'Quand n grandit, le risque propre de chaque actif disparaît, mais la covariance moyenne (risque de marché) demeure.',
  },

  // ───────── CAPM ─────────
  {
    id: 'pm-capm', group: 'CAPM et lignes de marché', name: 'Security market line (CAPM)',
    latex: r`E(R_i) = R_f + \beta_i\,[E(R_M) - R_f]`,
    note: 'Seul le risque systématique (bêta) est rémunéré. Un titre au-dessus de la SML est sous-évalué.',
  },
  {
    id: 'pm-beta', group: 'CAPM et lignes de marché', name: 'Beta',
    latex: r`\beta_i = \frac{Cov(R_i, R_M)}{\sigma_M^2} = \rho_{iM}\,\frac{\sigma_i}{\sigma_M}`,
    note: 'Sensibilité du titre au marché. Le bêta du marché vaut 1 ; celui d\'un portefeuille est la moyenne pondérée des bêtas.',
  },
  {
    id: 'pm-cml', group: 'CAPM et lignes de marché', name: 'Capital market line',
    latex: r`E(R_p) = R_f + \frac{E(R_M) - R_f}{\sigma_M}\,\sigma_p`,
    note: 'Combine l\'actif sans risque et le portefeuille de marché. La pente est le ratio de Sharpe du marché.',
  },
  {
    id: 'pm-risk', group: 'CAPM et lignes de marché', name: 'Systematic and nonsystematic risk',
    latex: r`\sigma_i^2 = \beta_i^2\,\sigma_M^2 + \sigma_{\varepsilon,i}^2`,
    note: 'Seule la part non systématique se diversifie.',
  },

  // ───────── Ratios de performance ─────────
  {
    id: 'pm-sharpe', group: 'Mesures de performance', name: 'Sharpe ratio',
    latex: r`SR = \frac{R_p - R_f}{\sigma_p}`,
    note: 'Rendement excédentaire par unité de risque total : pertinent pour un portefeuille unique et non diversifié.',
  },
  {
    id: 'pm-treynor', group: 'Mesures de performance', name: 'Treynor ratio',
    latex: r`TR = \frac{R_p - R_f}{\beta_p}`,
    note: 'Rendement excédentaire par unité de risque systématique : pertinent pour un portefeuille faisant partie d\'un ensemble diversifié.',
  },
  {
    id: 'pm-alpha', group: 'Mesures de performance', name: 'Jensen\'s alpha',
    latex: r`\alpha_p = R_p - [R_f + \beta_p\,(R_M - R_f)]`,
    note: 'Rendement obtenu au-delà de celui prédit par le CAPM. Un alpha positif indique une création de valeur du gérant.',
  },
  {
    id: 'pm-m2', group: 'Mesures de performance', name: 'M² (Modigliani)',
    latex: r`M^2 = R_f + SR_p\,\sigma_M - R_M`,
    note: 'Rend le Sharpe comparable en points de rendement : le portefeuille est ajusté au niveau de risque du marché.',
  },
  {
    id: 'pm-ir', group: 'Mesures de performance', name: 'Information ratio',
    latex: r`IR = \frac{R_p - R_B}{\sigma(R_p - R_B)}`,
    vars: [[r`R_B`, 'rendement du benchmark']],
    note: 'Rendement actif par unité de risque actif (tracking error).',
  },
  {
    id: 'pm-sortino', group: 'Mesures de performance', name: 'Sortino ratio',
    latex: r`\text{Sortino} = \frac{R_p - MAR}{\sigma_{downside}}`,
    vars: [[r`MAR`, 'rendement minimal acceptable']],
    note: 'Ne pénalise que la volatilité à la baisse.',
  },

  // ───────── Risque de perte ─────────
  {
    id: 'pm-var', group: 'Mesures de risque de perte', name: 'Parametric value at risk',
    latex: r`VaR = \left[E(R_p) - z\,\sigma_p\right] \times V_p`,
    note: 'z = 1,645 (95 %) ou 2,33 (99 %). La VaR donne une perte minimale à un horizon donné et ne dit rien de l\'ampleur au-delà.',
  },
  {
    id: 'pm-scale', group: 'Mesures de risque de perte', name: 'Scaling to other horizons',
    latex: r`\sigma_{T} = \sigma_{1}\,\sqrt{T}`,
    note: 'Conversion de la volatilité entre horizons, en supposant des rendements indépendants.',
  },

  // ───────── Allocation ─────────
  {
    id: 'pm-ips', group: 'Allocation d\'actifs', name: 'Required return and risk tolerance',
    text: 'IPS : le rendement exigé est un objectif, la tolérance au risque dépend à la fois de la capacité (situation financière) et de la propension (psychologie). On retient la plus prudente des deux.',
    note: 'Deux dimensions du risque : capacité à prendre du risque, et volonté d\'en prendre.',
  },
  {
    id: 'pm-active', group: 'Allocation d\'actifs', name: 'Active return',
    latex: r`R_A = R_p - R_B`,
    note: 'Décomposable en allocation d\'actifs et sélection de titres.',
  },
]
