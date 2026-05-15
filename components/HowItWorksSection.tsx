// ─────────────────────────────────────────────────────────────
// HowItWorksSection.jsx
// HOW TO ADD: Import and place AFTER your <Services> section:
//   import HowItWorksSection from "@/components/HowItWorksSection"
//   <HowItWorksSection />
// ─────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    icon: "📋",
    title: "Submit & onboard",
    desc: "Select your services and complete our intake form. You'll receive a detailed questionnaire within 2 hours to share your career story, goals, and target roles.",
    time: "Within 2 hours",
    tag: "Check your inbox",
  },
  {
    num: "02",
    icon: "🔍",
    title: "Deep-dive review",
    desc: "Syed personally reviews your existing profile and materials. We research your target roles, identify keyword gaps, and map your experience to what recruiters actually search for.",
    time: "Day 1–2",
    tag: "Role-specific research",
  },
  {
    num: "03",
    icon: "✍️",
    title: "Draft & refine",
    desc: "Your optimised LinkedIn, ATS-ready resume, or portfolio is delivered. You review, share feedback, and we revise until every word earns its place.",
    time: "Day 3–5",
    tag: "Revisions included",
  },
  {
    num: "04",
    icon: "🚀",
    title: "Launch & get noticed",
    desc: "Your profile goes live. If you've chosen Marketing, we immediately promote your profile to our network of top recruiters across 15+ countries.",
    time: "Day 5–7",
    tag: "10K+ recruiter network",
  },
]

const timeline = [
  {
    step: "Same day",
    title: "Welcome email + intake questionnaire",
    desc: "You'll receive a detailed questionnaire covering your career history, goals, target companies, and preferred tone. The more you share, the stronger we make your profile.",
    tag: "📧 Check your inbox within 2 hours",
  },
  {
    step: "Day 1–2",
    title: "Personal strategy review by Syed",
    desc: "Syed reviews everything and builds a positioning strategy tailored to your industry, seniority, and target market — India, US, UK, UAE, or wherever you're aiming.",
    tag: "🎯 Role-specific keyword research included",
  },
  {
    step: "Day 3–5",
    title: "First draft delivered",
    desc: "Your new LinkedIn profile, resume, or portfolio lands in your inbox. Review and send back any changes — we revise until you're completely satisfied.",
    tag: "🔄 Revisions included per your plan",
  },
  {
    step: "Day 5–7",
    title: "Go live & start getting noticed",
    desc: "Your profile is live and optimised. With the Marketing add-on, Syed immediately starts promoting you to our recruiter network. Messages typically begin within 1–2 weeks.",
    tag: "📣 Promoted to 10K+ recruiter network",
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-black border-t border-white/10 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-semibold tracking-widest uppercase text-lime-400 mb-4">
          The process
        </p>
        <h2 className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight">
          From signup to <span className="italic text-white/60">placed</span> —<br />
          here's exactly what happens
        </h2>
        <p className="text-white/50 text-sm max-w-xl mb-16">
          No guesswork. No radio silence. You know what's happening at every step.
        </p>

        {/* 4-step grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-20">
          {steps.map(({ num, icon, title, desc, time, tag }) => (
            <div
              key={num}
              className="bg-zinc-950 p-8 hover:bg-zinc-900 transition-colors group"
            >
              <div className="text-5xl font-light text-lime-400/10 group-hover:text-lime-400/20 transition-colors mb-5 leading-none">
                {num}
              </div>
              <div className="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lg mb-4">
                {icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
              <p className="text-xs text-white/50 leading-relaxed mb-4">{desc}</p>
              <p className="text-xs font-semibold text-lime-400 uppercase tracking-wide">
                ⏱ {time}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-10">
          What happens after you pay
        </p>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-10">
            {timeline.map(({ step, title, desc, tag }, i) => (
              <div key={i} className="flex gap-8 pl-12 relative">
                {/* Dot */}
                <div className="absolute left-0 top-1 w-[38px] h-[38px] rounded-full bg-black border-2 border-lime-400 flex items-center justify-center text-lime-400 text-xs font-bold">
                  {i + 1}
                </div>
                <div>
                  <p className="text-xs text-lime-400 font-semibold uppercase tracking-wide mb-1">
                    {step}
                  </p>
                  <h4 className="text-sm font-semibold text-white mb-1">{title}</h4>
                  <p className="text-xs text-white/50 leading-relaxed mb-2">{desc}</p>
                  <span className="inline-block text-xs text-white/40 bg-white/5 px-3 py-1 rounded">
                    {tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}