'use client'

import { useParams, useRouter } from 'next/navigation'
import { courses } from '@/data/courses'
import { useState } from 'react'

export default function CoursePage() {
  const params = useParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'resume' | 'formulas' | 'definitions'>('resume')

  const course = courses.find((c) => c.id === params.id)

  if (!course) {
    return (
      <div className="min-h-screen bg-[var(--bg-0)] text-[var(--fg-0)] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[var(--fg-3)] font-[var(--font-mono)] text-[13px]">
            Cours introuvable
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--bg-0)] text-[var(--fg-0)]">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block bg-[var(--bg-1)] border border-[var(--line)] rounded-[7px] px-3 py-1.5 mb-4">
            <span className="font-[var(--font-mono)] text-[11px] font-[500] text-[var(--acc)] uppercase tracking-[0.06em]">
              {course.code}
            </span>
          </div>
          <h1 className="text-[32px] font-[500] mb-4" style={{ letterSpacing: '-0.02em' }}>
            {course.name}
          </h1>
          <button
            onClick={() => router.push(`/quiz?topic=${course.id}`)}
            className="bg-[var(--acc)] text-[var(--bg-0)] font-[500] text-[14px] px-6 py-2.5 rounded-[8px] hover:opacity-90 transition-opacity"
          >
            S&apos;entraîner sur cette matière
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-[var(--bg-1)] border border-[var(--line)] rounded-[10px] p-1">
          <button
            onClick={() => setActiveTab('resume')}
            className={`flex-1 px-4 py-2 rounded-[7px] text-[13px] font-[500] transition-all ${
              activeTab === 'resume'
                ? 'bg-[var(--bg-0)] text-[var(--fg-0)] shadow-sm'
                : 'text-[var(--fg-3)] hover:text-[var(--fg-1)]'
            }`}
          >
            Résumé
          </button>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`flex-1 px-4 py-2 rounded-[7px] text-[13px] font-[500] transition-all ${
              activeTab === 'formulas'
                ? 'bg-[var(--bg-0)] text-[var(--fg-0)] shadow-sm'
                : 'text-[var(--fg-3)] hover:text-[var(--fg-1)]'
            }`}
          >
            Formules ({course.formulas.length})
          </button>
          <button
            onClick={() => setActiveTab('definitions')}
            className={`flex-1 px-4 py-2 rounded-[7px] text-[13px] font-[500] transition-all ${
              activeTab === 'definitions'
                ? 'bg-[var(--bg-0)] text-[var(--fg-0)] shadow-sm'
                : 'text-[var(--fg-3)] hover:text-[var(--fg-1)]'
            }`}
          >
            Définitions ({course.definitions.length})
          </button>
        </div>

        {/* Content */}
        <div className="bg-[#0c1015] border border-[#1c232d] rounded-[14px] p-8">
          {activeTab === 'resume' && (
            <div>
              <h2 className="text-[20px] font-[500] mb-4">Résumé</h2>
              <p className="text-[var(--fg-2)] text-[15px] leading-[1.7]">
                {course.summary}
              </p>
            </div>
          )}

          {activeTab === 'formulas' && (
            <div>
              <h2 className="text-[20px] font-[500] mb-6">Formules Essentielles</h2>
              <div className="space-y-6">
                {course.formulas.map((formula, index) => (
                  <div key={index} className="pb-6 border-b border-[var(--line-soft)] last:border-b-0 last:pb-0">
                    <h3 className="text-[15px] font-[500] text-[var(--fg-0)] mb-3">
                      {formula.name}
                    </h3>
                    <div className="bg-[var(--bg-0)] border border-[var(--line)] rounded-[8px] px-4 py-3 mb-3">
                      <code className="font-[var(--font-mono)] text-[13px] text-[var(--acc)]">
                        {formula.formula}
                      </code>
                    </div>
                    <p className="text-[var(--fg-2)] text-[14px] leading-[1.6]">
                      {formula.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'definitions' && (
            <div>
              <h2 className="text-[20px] font-[500] mb-6">Définitions Clés</h2>
              <div className="space-y-4">
                {course.definitions.map((definition, index) => (
                  <div key={index} className="pb-4 border-b border-[var(--line-soft)] last:border-b-0 last:pb-0">
                    <h3 className="text-[15px] font-[500] text-[var(--acc)] mb-2">
                      {definition.term}
                    </h3>
                    <p className="text-[var(--fg-2)] text-[14px] leading-[1.6]">
                      {definition.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
