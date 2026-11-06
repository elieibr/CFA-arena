import type { FormulaItem } from './types'

const r = String.raw

export const fsaFormulas: FormulaItem[] = [
  // ───────── Fondamentaux ─────────
  {
    id: 'fs-equation', group: 'Fondamentaux comptables', name: 'Accounting equation',
    latex: r`\text{Assets} = \text{Liabilities} + \text{Equity}`,
    note: 'Identité du bilan, toujours vérifiée. Chaque opération touche au moins deux postes.',
  },
  {
    id: 'fs-re', group: 'Fondamentaux comptables', name: 'Retained earnings roll-forward',
    latex: r`RE_{end} = RE_{beg} + \text{Net income} - \text{Dividends}`,
    note: 'Fait le lien entre le compte de résultat et le bilan.',
  },
  {
    id: 'fs-eps', group: 'Fondamentaux comptables', name: 'Basic earnings per share',
    latex: r`EPS = \frac{NI - \text{Preferred dividends}}{\text{Weighted avg. shares outstanding}}`,
    note: 'Le BPA dilué ajoute au dénominateur les actions issues des instruments convertibles et des options (méthode du treasury stock).',
  },
  {
    id: 'fs-tsm', group: 'Fondamentaux comptables', name: 'Treasury stock method',
    latex: r`\text{Net new shares} = N_{options} - \frac{N_{options} \times K}{P_{avg}}`,
    vars: [[r`K`, 'prix d\'exercice'], [r`P_{avg}`, 'cours moyen']],
    note: 'Ne s\'applique que si les options sont dans la monnaie (cours moyen > prix d\'exercice).',
  },

  // ───────── Stocks et amortissements ─────────
  {
    id: 'fs-cogs', group: 'Stocks et amortissements', name: 'Inventory roll-forward',
    latex: r`COGS = \text{Beginning inv.} + \text{Purchases} - \text{Ending inv.}`,
    note: 'Dans un contexte de hausse des prix, FIFO donne un COGS plus bas et un résultat plus élevé que LIFO.',
  },
  {
    id: 'fs-lifo', group: 'Stocks et amortissements', name: 'LIFO reserve adjustments',
    latex: r`\text{Inv}_{FIFO} = \text{Inv}_{LIFO} + \text{LIFO reserve}, \qquad COGS_{FIFO} = COGS_{LIFO} - \Delta\text{LIFO reserve}`,
    note: 'Permet de comparer une entreprise sous LIFO à une entreprise sous FIFO.',
  },
  {
    id: 'fs-sl', group: 'Stocks et amortissements', name: 'Straight-line depreciation',
    latex: r`\text{Depreciation} = \frac{\text{Cost} - \text{Salvage value}}{\text{Useful life}}`,
    note: 'Charge constante chaque année.',
  },
  {
    id: 'fs-ddb', group: 'Stocks et amortissements', name: 'Double-declining balance',
    latex: r`\text{Depreciation}_t = \frac{2}{\text{Useful life}} \times \text{BV}_{t-1}`,
    note: 'Amortissement accéléré calculé sur la valeur comptable (sans déduire la valeur résiduelle), sans passer sous la valeur résiduelle.',
  },

  // ───────── Flux de trésorerie ─────────
  {
    id: 'fs-cfo', group: 'Flux de trésorerie', name: 'Free cash flow to the firm',
    latex: r`FCFF = CFO + Int\,(1-t) - FCInv`,
    vars: [[r`CFO`, 'flux d\'exploitation'], [r`FCInv`, 'investissements en capital fixe']],
    note: 'Flux disponible pour tous les apporteurs de capitaux (actionnaires et créanciers). Sous IFRS, les intérêts payés peuvent être classés en financement.',
  },
  {
    id: 'fs-fcfe', group: 'Flux de trésorerie', name: 'Free cash flow to equity',
    latex: r`FCFE = CFO - FCInv + \text{Net borrowing}`,
    note: 'Flux disponible pour les actionnaires après service de la dette.',
  },
  {
    id: 'fs-fcff-ni', group: 'Flux de trésorerie', name: 'FCFF from net income',
    latex: r`FCFF = NI + NCC + Int\,(1-t) - FCInv - WCInv`,
    vars: [[r`NCC`, 'charges non monétaires'], [r`WCInv`, 'variation du BFR']],
    note: 'Autre point de départ de la même grandeur : FCFF = FCFE + intérêts après impôt − emprunts nets.',
  },

  // ───────── Ratios ─────────
  {
    id: 'fs-current', group: 'Ratios de liquidité et de solvabilité', name: 'Current ratio and quick ratio',
    latex: r`\frac{\text{Current assets}}{\text{Current liabilities}}, \qquad \frac{\text{Cash} + \text{Marketable sec.} + \text{Receivables}}{\text{Current liabilities}}`,
    note: 'Liquidité à court terme : le quick ratio exclut les stocks, moins faciles à convertir en cash.',
  },
  {
    id: 'fs-de', group: 'Ratios de liquidité et de solvabilité', name: 'Debt ratios',
    latex: r`\frac{\text{Debt}}{\text{Equity}}, \qquad \frac{\text{Debt}}{\text{Assets}}, \qquad \text{Financial leverage} = \frac{\text{Avg. assets}}{\text{Avg. equity}}`,
    note: 'Mesurent l\'endettement. Le levier financier entre dans la décomposition DuPont.',
  },
  {
    id: 'fs-icr', group: 'Ratios de liquidité et de solvabilité', name: 'Interest coverage',
    latex: r`\frac{EBIT}{\text{Interest expense}}`,
    note: 'Capacité à payer les intérêts à partir du résultat opérationnel.',
  },
  {
    id: 'fs-turn', group: 'Ratios d\'activité', name: 'Turnover ratios',
    latex: r`\text{Inv. turnover}=\frac{COGS}{\text{Avg. inv.}}, \quad \text{Rec. turnover}=\frac{\text{Revenue}}{\text{Avg. receivables}}, \quad \text{Pay. turnover}=\frac{\text{Purchases}}{\text{Avg. payables}}`,
    note: 'Mesurent la vitesse de rotation des postes du BFR.',
  },
  {
    id: 'fs-days', group: 'Ratios d\'activité', name: 'Days ratios and cash conversion cycle',
    latex: r`DIO=\frac{365}{\text{Inv. turnover}}, \quad DSO=\frac{365}{\text{Rec. turnover}}, \quad CCC = DIO + DSO - DPO`,
    note: 'Le cycle de conversion de trésorerie mesure le nombre de jours que dure le financement du cycle d\'exploitation.',
  },
  {
    id: 'fs-margins', group: 'Ratios de rentabilité', name: 'Margins',
    latex: r`\text{Gross}=\frac{\text{Revenue}-COGS}{\text{Revenue}}, \quad \text{Operating}=\frac{EBIT}{\text{Revenue}}, \quad \text{Net}=\frac{NI}{\text{Revenue}}`,
    note: 'Part du chiffre d\'affaires qui subsiste à chaque niveau du compte de résultat.',
  },
  {
    id: 'fs-roe', group: 'Ratios de rentabilité', name: 'ROA and ROE',
    latex: r`ROA = \frac{NI}{\text{Avg. total assets}}, \qquad ROE = \frac{NI}{\text{Avg. equity}}`,
    note: 'Rentabilité des actifs et des capitaux propres.',
  },
  {
    id: 'fs-dupont3', group: 'Ratios de rentabilité', name: 'DuPont decomposition (3 steps)',
    latex: r`ROE = \underbrace{\frac{NI}{Rev}}_{\text{net margin}} \times \underbrace{\frac{Rev}{Assets}}_{\text{asset turnover}} \times \underbrace{\frac{Assets}{Equity}}_{\text{leverage}}`,
    note: 'Identifie si le ROE vient de la marge, de l\'efficacité des actifs ou de l\'endettement.',
  },
  {
    id: 'fs-dupont5', group: 'Ratios de rentabilité', name: 'DuPont decomposition (5 steps)',
    latex: r`ROE = \frac{NI}{EBT} \times \frac{EBT}{EBIT} \times \frac{EBIT}{Rev} \times \frac{Rev}{Assets} \times \frac{Assets}{Equity}`,
    note: 'Sépare l\'effet de la charge fiscale (NI/EBT) et de la charge d\'intérêts (EBT/EBIT).',
  },
  {
    id: 'fs-sgr', group: 'Ratios de rentabilité', name: 'Sustainable growth rate',
    latex: r`g = b \times ROE, \qquad b = 1 - \text{payout ratio}`,
    note: 'Croissance maximale finançable par les bénéfices non distribués, sans nouvelle émission ni hausse du levier.',
  },
]
