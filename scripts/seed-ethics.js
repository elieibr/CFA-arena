const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

const ethicsQuestions = [
  {
    topic_id: 'ethics',
    question_text: 'Which of the following is a fundamental principle of the CFA Institute Code of Ethics?',
    option_a: 'Maximize client profits at all costs',
    option_b: 'Act with integrity, competence, diligence, and respect',
    option_c: 'Prioritize personal financial gain over client interests',
    correct_answer: 'B',
    explanation: 'The CFA Institute Code of Ethics emphasizes acting with integrity, competence, diligence, respect, and in an ethical manner with the public, clients, prospective clients, employers, employees, colleagues in the investment profession, and other participants in the global capital markets.',
    difficulty: 1
  },
  {
    topic_id: 'ethics',
    question_text: 'Under the CFA Institute Standards of Professional Conduct, which action would constitute a violation of the Standard on Material Nonpublic Information?',
    option_a: "Trading on information received from a company's annual report",
    option_b: 'Trading based on a conversation overheard in an elevator about an upcoming merger',
    option_c: 'Trading based on publicly available analyst reports',
    correct_answer: 'B',
    explanation: 'Trading on material nonpublic information violates Standard II(A). Information overheard about an upcoming merger that has not been publicly disclosed is material nonpublic information, and trading on it would be illegal.',
    difficulty: 2
  },
  {
    topic_id: 'ethics',
    question_text: 'According to the Standards of Professional Conduct, what is the primary duty of an investment professional?',
    option_a: 'To the employer',
    option_b: 'To clients and prospective clients',
    option_c: 'To regulatory authorities',
    correct_answer: 'B',
    explanation: 'Under Standard III(A) - Loyalty, Prudence, and Care, members and candidates have a duty of loyalty to their clients and must act with reasonable care and exercise prudent judgment. Client interests come before employer or personal interests.',
    difficulty: 1
  },
  {
    topic_id: 'ethics',
    question_text: 'Which of the following situations would require disclosure to clients under the Standards of Professional Conduct?',
    option_a: 'An analyst receiving a research report from a brokerage firm',
    option_b: 'A portfolio manager receiving a gift valued at $500 from a client',
    option_c: 'A portfolio manager having a personal investment in the same stock recommended to clients',
    correct_answer: 'C',
    explanation: 'Standard VI(A) - Disclosure of Conflicts requires members to make full and fair disclosure of all matters that could reasonably be expected to impair their independence and objectivity or interfere with their duties to clients. A personal investment in recommended securities is a conflict that must be disclosed.',
    difficulty: 2
  },
  {
    topic_id: 'ethics',
    question_text: 'What is the minimum requirement for compliance with the CFA Institute Standards regarding diligence and reasonable basis?',
    option_a: 'Rely solely on third-party research without verification',
    option_b: 'Exercise diligence, independence, and thoroughness in analyzing investments',
    option_c: 'Follow the majority opinion in the market',
    correct_answer: 'B',
    explanation: 'Standard V(A) - Diligence and Reasonable Basis requires members and candidates to exercise diligence, independence, and thoroughness in analyzing investments, making investment recommendations, and taking investment actions. They must have a reasonable and adequate basis supported by appropriate research and investigation.',
    difficulty: 1
  }
]

async function seedEthicsQuestions() {
  console.log('🌱 Seeding Ethics questions...')

  try {
    // Delete existing ethics questions
    const { error: deleteError } = await supabase
      .from('questions')
      .delete()
      .eq('topic_id', 'ethics')

    if (deleteError) {
      console.error('Error deleting existing questions:', deleteError)
    } else {
      console.log('✅ Deleted existing Ethics questions')
    }

    // Insert new questions
    const { data, error } = await supabase
      .from('questions')
      .insert(ethicsQuestions)
      .select()

    if (error) {
      console.error('❌ Error inserting questions:', error)
      throw error
    }

    console.log(`✅ Successfully inserted ${data.length} Ethics questions`)
    console.log('\nQuestions:')
    data.forEach((q, i) => {
      console.log(`${i + 1}. ${q.question_text.substring(0, 60)}...`)
    })

  } catch (error) {
    console.error('❌ Failed to seed questions:', error)
    process.exit(1)
  }
}

seedEthicsQuestions()
