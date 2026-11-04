import { ethicsQuestions } from '@/data/questions/ethics'
import { ethicsAdvancedQuestions } from '@/data/questions/ethics-advanced'
import { quantQuestions } from '@/data/questions/quant'
import { quantAdvancedQuestions } from '@/data/questions/quant-advanced'
import { economicsQuestions } from '@/data/questions/economics'
import { economicsAdvancedQuestions } from '@/data/questions/economics-advanced'
import { fraQuestions } from '@/data/questions/fra'
import { fraAdvancedQuestions } from '@/data/questions/fra-advanced'
import { corporateFinanceAdvancedQuestions } from '@/data/questions/corporate-finance-advanced'
import { equityAdvancedQuestions } from '@/data/questions/equity-advanced'
import { fixedIncomeAdvancedQuestions } from '@/data/questions/fixed-income-advanced'
import { derivativesAdvancedQuestions } from '@/data/questions/derivatives-advanced'
import { alternativeInvestmentsAdvancedQuestions } from '@/data/questions/alternative-investments-advanced'
import { portfolioManagementAdvancedQuestions } from '@/data/questions/portfolio-management-advanced'

export interface BankQuestion {
  id: string
  topic_id: string
  question_text: string
  option_a: string
  option_b: string
  option_c: string
  correct_answer: string
  explanation: string
  difficulty: number
}

// Banque de questions par matière (ids = table `topics` / data/curriculum.ts)
export const questionBank: { [topicId: string]: BankQuestion[] } = {
  'ethical-standards': [...ethicsQuestions, ...ethicsAdvancedQuestions],
  'quantitative-methods': [...quantQuestions, ...quantAdvancedQuestions],
  'economics': [...economicsQuestions, ...economicsAdvancedQuestions],
  'financial-statement-analysis': [...fraQuestions, ...fraAdvancedQuestions],
  'corporate-issuers': corporateFinanceAdvancedQuestions,
  'equity-investments': equityAdvancedQuestions,
  'fixed-income': fixedIncomeAdvancedQuestions,
  'derivatives': derivativesAdvancedQuestions,
  'alternative-investments': alternativeInvestmentsAdvancedQuestions,
  'portfolio-management': portfolioManagementAdvancedQuestions,
}
