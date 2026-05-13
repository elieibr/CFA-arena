'use client'

import { mockEthicsQuestions } from '@/data/mock-questions'

export default function QuizTestPage() {
  return (
    <div className="page" style={{ padding: '2rem' }}>
      <h1 style={{ color: 'var(--fg-0)', marginBottom: '2rem' }}>Test Questions Ethics</h1>

      <div style={{ color: 'var(--fg-1)' }}>
        <p>Nombre de questions: {mockEthicsQuestions.length}</p>

        {mockEthicsQuestions.map((q, i) => (
          <div key={q.id} style={{
            marginTop: '2rem',
            padding: '1rem',
            background: 'var(--bg-1)',
            borderRadius: '8px',
            border: '1px solid var(--line-soft)'
          }}>
            <h3 style={{ color: 'var(--fg-0)', marginBottom: '1rem' }}>
              Question {i + 1}: {q.question_text}
            </h3>
            <div style={{ marginLeft: '1rem' }}>
              <p>A) {q.option_a}</p>
              <p>B) {q.option_b}</p>
              <p>C) {q.option_c}</p>
              <p style={{ color: 'var(--acc-green)', marginTop: '0.5rem' }}>
                ✓ Réponse correcte: {q.correct_answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
