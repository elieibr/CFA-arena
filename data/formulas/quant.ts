import type { FormulaItem } from './types'

const r = String.raw

export const quantFormulas: FormulaItem[] = [
  // ───────── Rendements ─────────
  {
    id: 'qm-hpr', group: 'Rendements', name: 'Holding period return',
    latex: r`R = \frac{P_1 - P_0 + D_1}{P_0}`,
    vars: [[r`P_0, P_1`, 'prix initial et final'], [r`D_1`, 'revenus perçus (dividendes, coupons)']],
    note: 'Rendement total sur une période : gain en capital plus revenus, rapporté au prix de départ.',
  },
  {
    id: 'qm-arith', group: 'Rendements', name: 'Arithmetic mean return',
    latex: r`\bar{R} = \frac{1}{T}\sum_{t=1}^{T} R_t`,
    note: 'Moyenne simple des rendements. Bon estimateur du rendement attendu d\'une seule période, mais surestime la croissance composée.',
  },
  {
    id: 'qm-geo', group: 'Rendements', name: 'Geometric mean return',
    latex: r`R_G = \left[\prod_{t=1}^{T}(1+R_t)\right]^{1/T} - 1`,
    note: 'Taux de croissance composé moyen. Toujours ≤ moyenne arithmétique ; l\'écart grandit avec la volatilité.',
  },
  {
    id: 'qm-harm', group: 'Rendements', name: 'Harmonic mean',
    latex: r`\bar{X}_H = \frac{n}{\sum_{i=1}^{n} \frac{1}{X_i}}`,
    note: 'Convient au prix moyen payé en investissant un montant fixe à intervalles réguliers (cost averaging). Ordre : arithmétique ≥ géométrique ≥ harmonique.',
  },
  {
    id: 'qm-real', group: 'Rendements', name: 'Real return',
    latex: r`1 + r_{real} = \frac{1 + r_{nom}}{1 + \pi}`,
    vars: [[r`\pi`, 'taux d\'inflation']],
    note: 'Rendement ajusté de l\'inflation. L\'approximation r_nom − π est acceptable pour de petits taux.',
  },
  {
    id: 'qm-lev', group: 'Rendements', name: 'Leveraged return',
    latex: r`R_L = R_P + \frac{V_B}{V_E}\,(R_P - r_D)`,
    vars: [[r`V_B`, 'montant emprunté'], [r`V_E`, 'fonds propres'], [r`r_D`, 'coût de la dette']],
    note: 'Le levier amplifie les gains comme les pertes : si R_P < r_D, le levier détruit de la valeur.',
  },
  {
    id: 'qm-mwr', group: 'Rendements', name: 'Money-weighted return (IRR)',
    latex: r`0 = CF_0 + \sum_{t=1}^{N}\frac{CF_t}{(1+IRR)^t}`,
    note: 'Taux qui annule la valeur actuelle des flux. Sensible au moment et à la taille des apports : à utiliser si le client contrôle les flux.',
  },
  {
    id: 'qm-twr', group: 'Rendements', name: 'Time-weighted return',
    latex: r`TWR = \left[\prod_{k=1}^{K}(1+R_k)\right] - 1`,
    note: 'Chaîne les rendements de sous-périodes. Neutre vis-à-vis des flux : mesure la performance du gérant.',
  },

  // ───────── Valeur temps ─────────
  {
    id: 'qm-fv', group: 'Valeur temps de l\'argent', name: 'Future value',
    latex: r`FV_N = PV\,(1+r)^N`,
    note: 'Capitalise un montant présent sur N périodes au taux r.',
  },
  {
    id: 'qm-pv', group: 'Valeur temps de l\'argent', name: 'Present value',
    latex: r`PV = \frac{FV_N}{(1+r)^N}`,
    note: 'Actualise un montant futur. Le taux et la durée doivent être exprimés dans la même unité de temps.',
  },
  {
    id: 'qm-fv-m', group: 'Valeur temps de l\'argent', name: 'Future value, m compounding periods per year',
    latex: r`FV_N = PV\left(1+\frac{r_s}{m}\right)^{mN}`,
    vars: [[r`r_s`, 'taux annuel nominal'], [r`m`, 'périodes de capitalisation par an'], [r`N`, 'années']],
    note: 'Pour une capitalisation mensuelle, m = 12 ; trimestrielle, m = 4.',
  },
  {
    id: 'qm-cont', group: 'Valeur temps de l\'argent', name: 'Continuous compounding',
    latex: r`FV_N = PV\,e^{\,r_s N}`,
    note: 'Limite quand m tend vers l\'infini. Lien avec le rendement continu : r = ln(P₁/P₀).',
  },
  {
    id: 'qm-ear', group: 'Valeur temps de l\'argent', name: 'Effective annual rate',
    latex: r`EAR = \left(1+\frac{r_s}{m}\right)^{m} - 1`,
    note: 'Taux réellement gagné sur un an. Sert à comparer des produits de fréquences de capitalisation différentes.',
  },
  {
    id: 'qm-ann', group: 'Valeur temps de l\'argent', name: 'Present value of an ordinary annuity',
    latex: r`PV = A\,\frac{1-(1+r)^{-N}}{r}`,
    vars: [[r`A`, 'flux constant versé en fin de période']],
    note: 'Pour une annuité en début de période (annuity due), multiplier le résultat par (1 + r).',
  },
  {
    id: 'qm-perp', group: 'Valeur temps de l\'argent', name: 'Perpetuity',
    latex: r`PV = \frac{A}{r}`,
    note: 'Valeur d\'un flux constant infini. Avec croissance g : PV = A₁ / (r − g), avec r > g.',
  },
  {
    id: 'qm-npv', group: 'Valeur temps de l\'argent', name: 'Net present value',
    latex: r`NPV = \sum_{t=0}^{N}\frac{CF_t}{(1+r)^t}`,
    note: 'Valeur créée par un projet. NPV > 0 : accepter. L\'IRR est le taux pour lequel NPV = 0.',
  },

  // ───────── Statistiques descriptives ─────────
  {
    id: 'qm-wmean', group: 'Statistiques descriptives', name: 'Weighted mean',
    latex: r`\bar{X}_w = \sum_{i=1}^{n} w_i X_i, \qquad \sum w_i = 1`,
    note: 'Exemple type : rendement d\'un portefeuille = somme (poids × rendement de chaque actif).',
  },
  {
    id: 'qm-median', group: 'Statistiques descriptives', name: 'Median position',
    latex: r`\text{position} = \frac{n+1}{2}`,
    note: 'Données triées. Si n est pair, moyenne des deux valeurs centrales.',
  },
  {
    id: 'qm-pctl', group: 'Statistiques descriptives', name: 'Percentile location',
    latex: r`L_y = (n+1)\,\frac{y}{100}`,
    note: 'Rang du y-ième percentile dans les données triées. Si L_y n\'est pas entier, interpoler linéairement.',
  },
  {
    id: 'qm-range', group: 'Statistiques descriptives', name: 'Range and interquartile range',
    latex: r`\text{Range} = X_{max} - X_{min}, \qquad IQR = Q_3 - Q_1`,
    note: 'L\'IQR est robuste aux valeurs extrêmes, contrairement à l\'étendue.',
  },
  {
    id: 'qm-mad', group: 'Statistiques descriptives', name: 'Mean absolute deviation',
    latex: r`MAD = \frac{1}{n}\sum_{i=1}^{n}\left|X_i - \bar{X}\right|`,
    note: 'Écart absolu moyen autour de la moyenne.',
  },
  {
    id: 'qm-var', group: 'Statistiques descriptives', name: 'Sample variance and standard deviation',
    latex: r`s^2 = \frac{\sum_{i=1}^{n}(X_i-\bar{X})^2}{n-1}, \qquad s=\sqrt{s^2}`,
    note: 'Diviser par n − 1 (et non n) pour un échantillon : correction du biais. La variance d\'une population se divise par N.',
  },
  {
    id: 'qm-semi', group: 'Statistiques descriptives', name: 'Target semideviation',
    latex: r`s_{target} = \sqrt{\frac{\sum_{X_i \le B}(X_i - B)^2}{n-1}}`,
    vars: [[r`B`, 'rendement cible']],
    note: 'Ne mesure que le risque de baisse sous la cible B.',
  },
  {
    id: 'qm-cv', group: 'Statistiques descriptives', name: 'Coefficient of variation',
    latex: r`CV = \frac{s}{\bar{X}}`,
    note: 'Risque par unité de rendement moyen : permet de comparer des séries d\'échelles différentes.',
  },
  {
    id: 'qm-cheb', group: 'Statistiques descriptives', name: 'Chebyshev\'s inequality',
    latex: r`P\left(|X-\mu| \le k\sigma\right) \ge 1 - \frac{1}{k^2}`,
    note: 'Vrai pour toute distribution, avec k > 1. À k = 2 : au moins 75 % des observations ; à k = 3 : au moins 89 %.',
  },
  {
    id: 'qm-cov', group: 'Statistiques descriptives', name: 'Sample covariance and correlation',
    latex: r`Cov_{XY}=\frac{\sum_{i=1}^{n}(X_i-\bar{X})(Y_i-\bar{Y})}{n-1}, \qquad r_{XY}=\frac{Cov_{XY}}{s_X\, s_Y}`,
    note: 'La corrélation est bornée entre −1 et +1 ; la covariance n\'a pas d\'échelle interprétable.',
  },

  // ───────── Probabilités ─────────
  {
    id: 'qm-add', group: 'Probabilités', name: 'Addition rule',
    latex: r`P(A \cup B) = P(A) + P(B) - P(A \cap B)`,
    note: 'Si A et B sont mutuellement exclusifs, P(A ∩ B) = 0.',
  },
  {
    id: 'qm-cond', group: 'Probabilités', name: 'Conditional probability and multiplication rule',
    latex: r`P(A|B) = \frac{P(A \cap B)}{P(B)}, \qquad P(A \cap B) = P(A|B)\,P(B)`,
    note: 'Si A et B sont indépendants : P(A ∩ B) = P(A) × P(B).',
  },
  {
    id: 'qm-total', group: 'Probabilités', name: 'Total probability rule',
    latex: r`P(A) = \sum_{i} P(A|B_i)\,P(B_i)`,
    vars: [[r`B_i`, 'événements mutuellement exclusifs et exhaustifs']],
    note: 'Probabilité de A en pondérant par chaque scénario possible.',
  },
  {
    id: 'qm-bayes', group: 'Probabilités', name: 'Bayes\' formula',
    latex: r`P(B|A) = \frac{P(A|B)}{P(A)}\,P(B)`,
    note: 'Met à jour une probabilité a priori P(B) à la lumière d\'une nouvelle information A.',
  },
  {
    id: 'qm-ev', group: 'Probabilités', name: 'Expected value and variance of a random variable',
    latex: r`E(X)=\sum_i P(x_i)\,x_i, \qquad \sigma^2(X)=\sum_i P(x_i)\,[x_i-E(X)]^2`,
    note: 'Valable pour une distribution discrète de probabilités.',
  },
  {
    id: 'qm-pexp', group: 'Probabilités', name: 'Two-asset portfolio: expected return and variance',
    latex: r`E(R_p)=w_1E(R_1)+w_2E(R_2), \quad \sigma_p^2=w_1^2\sigma_1^2+w_2^2\sigma_2^2+2w_1w_2\rho_{12}\sigma_1\sigma_2`,
    note: 'La diversification joue par ρ : plus la corrélation est faible, plus le risque du portefeuille baisse.',
  },
  {
    id: 'qm-comb', group: 'Probabilités', name: 'Counting: combinations and permutations',
    latex: r`\binom{n}{r}=\frac{n!}{(n-r)!\,r!}, \qquad {}_nP_r=\frac{n!}{(n-r)!}`,
    note: 'Combinaison : l\'ordre ne compte pas. Permutation : l\'ordre compte.',
  },

  // ───────── Lois de probabilité ─────────
  {
    id: 'qm-binom', group: 'Lois de probabilité', name: 'Binomial distribution',
    latex: r`P(X=x)=\binom{n}{x}p^x(1-p)^{n-x}, \quad E(X)=np, \quad \sigma^2=np(1-p)`,
    note: 'n essais indépendants à deux issues, de probabilité de succès p.',
  },
  {
    id: 'qm-z', group: 'Lois de probabilité', name: 'Standardization (z-score)',
    latex: r`z = \frac{x-\mu}{\sigma}`,
    note: 'Ramène une loi normale à N(0,1) pour lire la table. Repères : ±1σ ≈ 68 %, ±2σ ≈ 95 %, ±3σ ≈ 99 %.',
  },
  {
    id: 'qm-sf', group: 'Lois de probabilité', name: 'Safety-first ratio',
    latex: r`SFRatio=\frac{E(R_p)-R_L}{\sigma_p}`,
    vars: [[r`R_L`, 'rendement minimal acceptable']],
    note: 'On choisit le portefeuille au ratio le plus élevé : il minimise la probabilité de passer sous R_L.',
  },
  {
    id: 'qm-logn', group: 'Lois de probabilité', name: 'Continuously compounded return',
    latex: r`r_{0,T}=\ln\frac{S_T}{S_0}`,
    note: 'Les rendements continus s\'additionnent dans le temps. Le prix suit alors une loi lognormale.',
  },

  // ───────── Échantillonnage ─────────
  {
    id: 'qm-se', group: 'Échantillonnage et estimation', name: 'Standard error of the sample mean',
    latex: r`\sigma_{\bar{X}}=\frac{\sigma}{\sqrt{n}}, \qquad s_{\bar{X}}=\frac{s}{\sqrt{n}}`,
    note: 'Première forme si σ est connu, seconde sinon. Quadrupler n divise l\'erreur par 2.',
  },
  {
    id: 'qm-ci', group: 'Échantillonnage et estimation', name: 'Confidence interval for the mean',
    latex: r`\bar{X} \pm \text{(reliability factor)} \times \frac{s}{\sqrt{n}}`,
    note: 'Facteur z si σ connu ou grand échantillon, t (n − 1 degrés de liberté) sinon. Repères z : 1,645 (90 %), 1,96 (95 %), 2,576 (99 %).',
  },

  // ───────── Tests d'hypothèses ─────────
  {
    id: 'qm-tstat', group: 'Tests d\'hypothèses', name: 'Test statistic for a mean',
    latex: r`t=\frac{\bar{X}-\mu_0}{s/\sqrt{n}} \quad (\text{ou } z \text{ avec } \sigma)`,
    note: 'Rejeter H₀ si la statistique dépasse la valeur critique, ou si la p-value est inférieure au seuil α.',
  },
  {
    id: 'qm-chi', group: 'Tests d\'hypothèses', name: 'Chi-square test of a variance',
    latex: r`\chi^2=\frac{(n-1)\,s^2}{\sigma_0^2}`,
    note: 'Test sur une variance, avec n − 1 degrés de liberté.',
  },
  {
    id: 'qm-ftest', group: 'Tests d\'hypothèses', name: 'F-test for equality of variances',
    latex: r`F=\frac{s_1^2}{s_2^2}`,
    note: 'Mettre au numérateur la plus grande variance, de sorte que F ≥ 1.',
  },

  // ───────── Régression linéaire simple ─────────
  {
    id: 'qm-slope', group: 'Régression linéaire simple', name: 'Slope and intercept',
    latex: r`\hat{b}_1=\frac{Cov_{XY}}{\sigma_X^2}, \qquad \hat{b}_0=\bar{Y}-\hat{b}_1\bar{X}`,
    note: 'Modèle : Y = b₀ + b₁X + ε. La droite passe toujours par le point (X̄, Ȳ).',
  },
  {
    id: 'qm-anova', group: 'Régression linéaire simple', name: 'Variation decomposition and R²',
    latex: r`SST = SSR + SSE, \qquad R^2=\frac{SSR}{SST}`,
    note: 'SST : variation totale ; SSR : expliquée par la régression ; SSE : résiduelle. En régression simple, R² = r².',
  },
  {
    id: 'qm-see', group: 'Régression linéaire simple', name: 'Standard error of estimate',
    latex: r`SEE=\sqrt{\frac{SSE}{n-2}}`,
    note: 'Écart-type des résidus : plus il est petit, mieux le modèle ajuste les données.',
  },
  {
    id: 'qm-fstat', group: 'Régression linéaire simple', name: 'F-statistic of the regression',
    latex: r`F=\frac{MSR}{MSE}=\frac{SSR/1}{SSE/(n-2)}`,
    note: 'Teste si la pente est globalement significative. En régression simple, F = t² de la pente.',
  },
  {
    id: 'qm-tslope', group: 'Régression linéaire simple', name: 't-test of the slope coefficient',
    latex: r`t=\frac{\hat{b}_1-B_1}{s_{\hat{b}_1}}, \qquad df=n-2`,
    vars: [[r`B_1`, 'valeur testée sous H₀ (souvent 0)']],
    note: 'Si H₀ : b₁ = 0 est rejetée, la variable explicative a un pouvoir explicatif significatif.',
  },
  {
    id: 'qm-tcorr', group: 'Régression linéaire simple', name: 'Significance test of the correlation',
    latex: r`t=\frac{r\sqrt{n-2}}{\sqrt{1-r^2}}`,
    note: 'Teste H₀ : ρ = 0, avec n − 2 degrés de liberté.',
  },
]
