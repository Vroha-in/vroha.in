// ─────────────────────────────────────────────────────────────
// ResultsSection.jsx
// HOW TO ADD: Import and place BEFORE your <Testimonials> section:
//   import ResultsSection from "@/components/ResultsSection"
//   <ResultsSection />
// ─────────────────────────────────────────────────────────────

const stats = [
  {
    big: "84%",
    label: "of clients received recruiter messages within 3 weeks of going live",
  },
  {
    big: "+38%",
    label: "average salary increase reported by placed candidates",
  },
  {
    big: "21 days",
    label: "average time to first interview after profile optimisation",
  },
]

const beforeAfter = [
  {
    context: "Software Engineer → Senior Engineer at a FAANG company",
    before: "Software Engineer at Infosys | Java | 5 years experience",
    beforeNote: "❌ Generic · No keywords · Zero differentiation",
    after:
      "Senior Software Engineer | Java · Spring Boot · AWS | Building scalable backend systems for fintech at scale",
    afterNote: "✓ Keyword-rich · Niche-specific · Recruiter-targeted",
  },
  {
    context: "Marketing Manager → Director role, 41% salary jump",
    before:
      "Marketing Manager | Digital Marketing | Brand Management | Open to work",
    beforeNote: "❌ Weak positioning · 'Open to work' signals desperation",
    after:
      "Marketing Director (B2B SaaS) | Driving pipeline growth through performance marketing & brand strategy | Ex-Razorpay",
    afterNote: "✓ Authority positioning · Industry-specific · Hiring-magnet",
  },
  {
    context: "Data Analyst → Cloud Data Engineer placed in UAE",
    before: "Data Analyst | SQL | Excel | Power BI | Looking for opportunities",
    beforeNote: "❌ Tool-listing only · No outcomes · Passive tone",
    after:
      "Cloud Data Engineer | Azure · Databricks · SQL | Turning raw data into business decisions for enterprises across MENA",
    afterNote: "✓ Geo-targeted · Outcome-led · Future-role aligned",
  },
]

export default function ResultsSection() {
  return (
    <section id="results" className="bg-black border-t border-white/10 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-semibold tracking-widest uppercase text-lime-400 mb-4">
          Proven outcomes
        </p>
        <h2 className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight">
          Numbers that speak{" "}
          <span className="italic text-white/60">for themselves</span>
        </h2>
        <p className="text-white/50 text-sm max-w-xl mb-16">
          Across 500+ professionals in 15+ countries. Based on client-reported outcomes.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden mb-20">
          {stats.map(({ big, label }) => (
            <div key={big} className="bg-zinc-950 p-10 text-center relative">
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
              <div className="text-5xl md:text-6xl font-light text-lime-400 mb-3 leading-none">
                {big}
              </div>
              <p className="text-xs text-white/50 leading-relaxed">{label}</p>
            </div>
          ))}
        </div>

        {/* Before / After */}
        <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-10">
          Real transformations — anonymised client examples
        </p>

        <div className="space-y-8">
          {beforeAfter.map(({ context, before, beforeNote, after, afterNote }) => (
            <div key={context}>
              <p className="text-xs text-white/30 mb-3">{context}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Before */}
                <div className="bg-zinc-950 border border-white/8 rounded-xl p-5">
                  <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-red-500/10 text-red-400 px-2.5 py-1 rounded mb-3">
                    Before
                  </span>
                  <p className="text-sm text-white/40 line-through leading-relaxed mb-3">
                    {before}
                  </p>
                  <p className="text-[11px] text-red-400/70">{beforeNote}</p>
                </div>
                {/* After */}
                <div className="bg-zinc-950 border border-lime-400/20 rounded-xl p-5">
                  <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-lime-400/10 text-lime-400 px-2.5 py-1 rounded mb-3">
                    After Vroha
                  </span>
                  <p className="text-sm text-white leading-relaxed mb-3">{after}</p>
                  <p className="text-[11px] text-lime-400/80">{afterNote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}