import type { FormulaItem } from './types'

const r = String.raw

export const fixedIncomeFormulas: FormulaItem[] = [
  // ───────── Prix et rendement ─────────
  {
    id: 'fi-price', group: 'Prix et rendement', name: 'Bond price',
    latex: r`PV = \sum_{t=1}^{N}\frac{PMT}{(1+r)^t} + \frac{FV}{(1+r)^N}`,
    vars: [[r`r`, 'rendement par période'], [r`N`, 'nombre de périodes']],
    note: 'Coupons actualisés plus nominal actualisé. Pour un coupon semestriel : PMT = coupon annuel / 2, N = 2 × années, r = YTM / 2.',
  },
  {
    id: 'fi-rel', group: 'Prix et rendement', name: 'Price and coupon-yield relationship',
    text: 'Coupon > YTM → prix supérieur au pair (prime). Coupon = YTM → prix = pair. Coupon < YTM → prix inférieur au pair (décote).',
    note: 'Prix et rendement évoluent en sens inverse. La relation est convexe.',
  },
  {
    id: 'fi-zero', group: 'Prix et rendement', name: 'Zero-coupon bond',
    latex: r`PV = \frac{FV}{(1+r)^N}`,
    note: 'Sans coupon : le rendement vient uniquement de l\'écart entre prix d\'achat et nominal.',
  },
  {
    id: 'fi-cy', group: 'Prix et rendement', name: 'Current yield',
    latex: r`CY = \frac{\text{Annual coupon}}{\text{Price}}`,
    note: 'Ignore le gain ou la perte en capital jusqu\'à l\'échéance : ce n\'est pas un rendement total.',
  },
  {
    id: 'fi-accr', group: 'Prix et rendement', name: 'Accrued interest and full price',
    latex: r`AI = \frac{t}{T}\times PMT, \qquad PV^{full} = PV^{flat} + AI`,
    vars: [[r`t`, 'jours depuis le dernier coupon'], [r`T`, 'jours dans la période de coupon']],
    note: 'Les cotations sont en prix « flat » (sans coupon couru) ; l\'acheteur paie le prix « full ».',
  },
  {
    id: 'fi-spot', group: 'Prix et rendement', name: 'Spot rates and forward rates',
    latex: r`(1+z_B)^B = (1+z_A)^A\,(1+IFR_{A,B-A})^{B-A}`,
    vars: [[r`z_n`, 'taux zéro-coupon (spot) à n ans'], [r`IFR`, 'taux forward implicite']],
    note: 'Un placement sur B années doit rapporter autant qu\'un placement sur A années suivi d\'un placement au taux forward.',
  },

  // ───────── Durée et convexité ─────────
  {
    id: 'fi-mac', group: 'Durée et convexité', name: 'Macaulay duration',
    latex: r`MacDur = \frac{\sum_{t} t \cdot PV(CF_t)}{PV^{full}}`,
    note: 'Moyenne pondérée des échéances des flux, en années. Pour un zéro-coupon, durée = maturité.',
  },
  {
    id: 'fi-mod', group: 'Durée et convexité', name: 'Modified duration',
    latex: r`ModDur = \frac{MacDur}{1 + YTM/m}`,
    note: 'Sensibilité du prix à une variation du rendement : ΔPrix % ≈ −ModDur × ΔYTM.',
  },
  {
    id: 'fi-eff', group: 'Durée et convexité', name: 'Effective duration',
    latex: r`EffDur = \frac{PV_{-} - PV_{+}}{2\,\Delta Curve \times PV_0}`,
    vars: [[r`PV_{-}, PV_{+}`, 'prix si la courbe baisse / monte de ΔCurve']],
    note: 'À utiliser pour les obligations avec options intégrées (callable, putable), dont les flux changent avec les taux.',
  },
  {
    id: 'fi-approx', group: 'Durée et convexité', name: 'Approximate price change',
    latex: r`\%\Delta PV \approx -ModDur\,\Delta YTM + \tfrac{1}{2}\,Convexity\,(\Delta YTM)^2`,
    note: 'Le terme de convexité corrige l\'approximation linéaire de la durée, surtout pour les grands mouvements de taux.',
  },
  {
    id: 'fi-bpv', group: 'Durée et convexité', name: 'Money duration and PVBP',
    latex: r`MoneyDur = ModDur \times PV, \qquad PVBP = \frac{MoneyDur}{10\,000}`,
    note: 'Variation du prix en unités monétaires pour un point de base (0,01 %).',
  },
  {
    id: 'fi-port', group: 'Durée et convexité', name: 'Portfolio duration',
    latex: r`D_P = \sum_{i} w_i\,D_i`,
    note: 'Moyenne pondérée par les valeurs de marché. Suppose un déplacement parallèle de la courbe.',
  },

  // ───────── Spreads ─────────
  {
    id: 'fi-gs', group: 'Spreads et risque de crédit', name: 'Yield spread',
    latex: r`\text{Spread} = YTM_{corp} - YTM_{benchmark}`,
    note: 'Rémunère le risque de crédit, la liquidité et la fiscalité par rapport à la référence souveraine de même maturité.',
  },
  {
    id: 'fi-el', group: 'Spreads et risque de crédit', name: 'Expected loss',
    latex: r`EL = PD \times LGD, \qquad LGD = EAD \times (1 - \text{recovery rate})`,
    vars: [[r`PD`, 'probabilité de défaut'], [r`LGD`, 'perte en cas de défaut'], [r`EAD`, 'exposition au défaut']],
    note: 'Mesure statistique de la perte moyenne attendue sur une créance.',
  },
  {
    id: 'fi-frn', group: 'Spreads et risque de crédit', name: 'Floating-rate note',
    latex: r`\text{Coupon} = \text{Reference rate} + \text{Quoted margin}`,
    note: 'Le coupon se réajuste avec le taux de référence : la durée est très faible et le prix reste proche du pair.',
  },

  // ───────── Titrisation ─────────
  {
    id: 'fi-mbs', group: 'Titrisation', name: 'Mortgage payment (level payment)',
    latex: r`PMT = PV \times \frac{r}{1-(1+r)^{-N}}`,
    note: 'Annuité constante. Au début, la part d\'intérêts domine ; elle diminue progressivement au profit du capital.',
  },
  {
    id: 'fi-ltv', group: 'Titrisation', name: 'Loan-to-value ratio',
    latex: r`LTV = \frac{\text{Loan amount}}{\text{Property value}}`,
    note: 'Plus le LTV est élevé, plus le risque de défaut est important.',
  },
]
