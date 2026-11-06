import type { FormulaItem } from './types'

const r = String.raw

export const corporateFormulas: FormulaItem[] = [
  // ───────── Budget d'investissement ─────────
  {
    id: 'ci-npv', group: 'Choix d\'investissement', name: 'Net present value',
    latex: r`NPV = \sum_{t=0}^{N}\frac{CF_t}{(1+r)^t}`,
    note: 'Critère de référence : NPV > 0 crée de la valeur pour les actionnaires.',
  },
  {
    id: 'ci-pi', group: 'Choix d\'investissement', name: 'Profitability index',
    latex: r`PI = \frac{PV\ \text{of future cash flows}}{\text{Initial investment}} = 1 + \frac{NPV}{\text{Initial investment}}`,
    note: 'Accepter si PI > 1. Utile pour classer des projets sous contrainte de capital.',
  },
  {
    id: 'ci-payback', group: 'Choix d\'investissement', name: 'Payback period',
    latex: r`\text{Payback} = \text{years before recovery} + \frac{\text{unrecovered cost}}{\text{cash flow of recovery year}}`,
    note: 'Ignore la valeur temps (version simple) et les flux après la récupération.',
  },
  {
    id: 'ci-cf', group: 'Choix d\'investissement', name: 'Project operating cash flow',
    latex: r`CF = (R - C - D)(1-t) + D = (R-C)(1-t) + D\,t`,
    vars: [[r`R`, 'revenus'], [r`C`, 'coûts décaissés'], [r`D`, 'amortissement'], [r`t`, 'taux d\'imposition']],
    note: 'L\'amortissement ne crée pas de cash, mais il économise de l\'impôt (bouclier fiscal D·t).',
  },
  {
    id: 'ci-eaa', group: 'Choix d\'investissement', name: 'Equivalent annual annuity',
    latex: r`EAA = \frac{NPV}{\text{Annuity factor}\ (r, N)}`,
    note: 'Compare des projets de durées de vie différentes : retenir l\'EAA le plus élevé.',
  },

  // ───────── Coût du capital ─────────
  {
    id: 'ci-wacc', group: 'Coût du capital', name: 'Weighted average cost of capital',
    latex: r`WACC = \frac{D}{D+E}\,r_d\,(1-t) + \frac{E}{D+E}\,r_e`,
    note: 'Taux d\'actualisation de projets au risque moyen de l\'entreprise. Les poids sont en valeur de marché ou cible.',
  },
  {
    id: 'ci-capm', group: 'Coût du capital', name: 'Cost of equity (CAPM)',
    latex: r`r_e = R_f + \beta\,(R_M - R_f)`,
    note: 'Alternative : r_e = D₁/P₀ + g (modèle de Gordon), ou rendement de la dette + prime de risque.',
  },
  {
    id: 'ci-bondyield', group: 'Coût du capital', name: 'Cost of debt and cost of preferred stock',
    latex: r`r_d^{\,after\text{-}tax} = r_d\,(1-t), \qquad r_p = \frac{D_p}{P_p}`,
    note: 'Les intérêts sont déductibles, pas les dividendes préférentiels.',
  },
  {
    id: 'ci-beta', group: 'Coût du capital', name: 'Unlevering and relevering beta',
    latex: r`\beta_{asset} = \beta_{equity}\left[\frac{1}{1+(1-t)\,D/E}\right]`,
    note: 'Permet d\'importer le bêta d\'une société comparable : désendetter avec sa structure financière, puis réendetter avec celle de la cible.',
  },

  // ───────── Levier ─────────
  {
    id: 'ci-dol', group: 'Effet de levier', name: 'Degree of operating leverage',
    latex: r`DOL = \frac{\%\Delta EBIT}{\%\Delta Sales} = \frac{Q\,(P-V)}{Q\,(P-V)-F}`,
    vars: [[r`P, V`, 'prix et coût variable unitaires'], [r`F`, 'coûts fixes']],
    note: 'Sensibilité du résultat opérationnel aux ventes. Plus les coûts fixes sont élevés, plus le DOL est élevé.',
  },
  {
    id: 'ci-dfl', group: 'Effet de levier', name: 'Degree of financial leverage',
    latex: r`DFL = \frac{\%\Delta EPS}{\%\Delta EBIT} = \frac{EBIT}{EBIT - Int}`,
    note: 'Sensibilité du bénéfice par action au résultat opérationnel.',
  },
  {
    id: 'ci-dtl', group: 'Effet de levier', name: 'Degree of total leverage',
    latex: r`DTL = DOL \times DFL = \frac{\%\Delta EPS}{\%\Delta Sales}`,
    note: 'Risque combiné d\'exploitation et de financement.',
  },
  {
    id: 'ci-be', group: 'Effet de levier', name: 'Breakeven quantity',
    latex: r`Q_{BE} = \frac{F}{P - V}`,
    note: 'Quantité pour laquelle le résultat opérationnel est nul. Ajouter les intérêts à F pour le seuil du résultat net.',
  },

  // ───────── Trésorerie et dividendes ─────────
  {
    id: 'ci-ccc', group: 'Fonds de roulement et dividendes', name: 'Cash conversion cycle',
    latex: r`CCC = DIO + DSO - DPO`,
    note: 'Un cycle plus court libère de la trésorerie. DPO élevé = fournisseurs financent l\'entreprise.',
  },
  {
    id: 'ci-disc', group: 'Fonds de roulement et dividendes', name: 'Cost of forgoing a trade discount',
    latex: r`\text{Cost} = \left(1+\frac{d}{1-d}\right)^{\frac{365}{N-n}} - 1`,
    vars: [[r`d`, 'taux d\'escompte (ex. 2 %)'], [r`N`, 'jours de crédit'], [r`n`, 'jours d\'escompte']],
    note: 'Pour 2/10 net 30, renoncer à l\'escompte coûte plus de 40 % par an : en général, il faut payer tôt.',
  },
  {
    id: 'ci-payout', group: 'Fonds de roulement et dividendes', name: 'Dividend payout ratio and share repurchase',
    latex: r`\text{Payout}=\frac{DPS}{EPS}, \qquad \text{Ex-dividend price} \approx P_{cum} - D`,
    note: 'Un rachat d\'actions et un dividende de même montant ont des effets similaires sur la richesse des actionnaires (hors fiscalité).',
  },
]
