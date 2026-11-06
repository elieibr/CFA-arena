import type { FormulaItem } from './types'
import { quantFormulas } from './quant'
import { economicsFormulas } from './economics'
import { fsaFormulas } from './fsa'
import { corporateFormulas } from './corporate'
import { equityFormulas } from './equity'
import { fixedIncomeFormulas } from './fixed-income'
import { derivativesFormulas } from './derivatives'
import { alternativesFormulas } from './alternatives'
import { portfolioFormulas } from './portfolio'
import { ethicsFormulas } from './ethics'

// Clé = id de la matière dans data/courses.ts.
export const formulaSets: Record<string, FormulaItem[]> = {
  'ethical-standards': ethicsFormulas,
  'quantitative-methods': quantFormulas,
  'economics': economicsFormulas,
  'financial-statement-analysis': fsaFormulas,
  'corporate-issuers': corporateFormulas,
  'equity-investments': equityFormulas,
  'fixed-income': fixedIncomeFormulas,
  'derivatives': derivativesFormulas,
  'alternative-investments': alternativesFormulas,
  'portfolio-management': portfolioFormulas,
}

export type { FormulaItem }
