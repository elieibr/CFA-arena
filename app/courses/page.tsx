import Link from 'next/link'
import { courses } from '@/data/courses'

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-0)] text-[var(--fg-0)]">
      <div className="max-w-[1100px] mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-[var(--fg-3)] mb-3">
            CFA Level 1 · 10 matières
          </div>
          <h1 className="mb-3" style={{ fontSize: 'clamp(30px, 8vw, 40px)', fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
            Fiches de cours
          </h1>
          <p className="text-[var(--fg-2)] text-[14px]">
            Formules essentielles et définitions clés pour chaque matière du CFA Level 1
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="block bg-[#0c1015] border border-[#1c232d] rounded-[14px] p-6 hover:border-[var(--acc)] transition-all duration-200"
            >
              {/* Course Code Badge */}
              <div className="inline-block bg-[var(--bg-0)] border border-[var(--line)] rounded-[7px] px-3 py-1.5 mb-4">
                <span className="font-[var(--font-mono)] text-[11px] font-[500] text-[var(--acc)] uppercase tracking-[0.06em]">
                  {course.code}
                </span>
              </div>

              {/* Course Name */}
              <h2 className="text-[var(--fg-0)] mb-2" style={{ fontSize: '18px', fontWeight: 500, lineHeight: 1.35, letterSpacing: '-0.01em' }}>
                {course.name}
              </h2>

              {/* Stats */}
              <div className="flex items-center gap-4 mb-4 text-[12px] font-[var(--font-mono)] text-[var(--fg-3)]">
                <span>{course.formulas.length} formules</span>
                <span>·</span>
                <span>{course.definitions.length} définitions</span>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-[13px] font-[500] text-[var(--acc)]">
                <span>Voir la fiche</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
