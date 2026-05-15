// ─────────────────────────────────────────────────────────────
// FounderSection.jsx
// HOW TO ADD: Open your main page file (usually app/page.tsx or
// pages/index.tsx) and paste this import at the top:
//   import FounderSection from "@/components/FounderSection"
// Then add <FounderSection /> after your existing <About> section.
// ─────────────────────────────────────────────────────────────

import { Linkedin, Mail, MessageCircle } from "lucide-react"

export default function FounderSection() {
  return (
    <section id="founder" className="bg-black border-t border-white/10 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-lime-400 mb-4">
          The person behind Vroha
        </p>

        <h2 className="text-4xl md:text-5xl font-light text-white mb-16 leading-tight">
          Built on real recruiter{" "}
          <span className="italic text-white/60">experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── Avatar side ── */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Rotating dashed ring */}
              <div
                className="absolute inset-0 m-auto rounded-full border border-dashed border-lime-400/30"
                style={{
                  width: 300,
                  height: 300,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  animation: "spin 20s linear infinite",
                }}
              />
              {/* Avatar circle */}
              <div className="w-56 h-56 rounded-full bg-gradient-to-br from-lime-400 to-emerald-400 flex items-center justify-center relative">
                <div className="absolute inset-[3px] rounded-full bg-black flex items-center justify-center">
                  <span className="text-6xl font-light text-lime-400 select-none">SA</span>
                </div>
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-zinc-900 border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 text-sm text-white shadow-xl">
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                Available for new clients
              </div>
            </div>
          </div>

          {/* ── Bio side ── */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-1">Syed Amir Husain</h3>
            <p className="text-xs text-lime-400 font-semibold tracking-wide uppercase mb-5">
              Founder, Vroha · Career Strategist &amp; LinkedIn Expert
            </p>

            <p className="text-white/60 leading-relaxed text-sm mb-6">
              I'm Syed Amir Husain, founder of Vroha, where I help professionals build standout
              LinkedIn profiles, resumes, and personal brands that attract the right career
              opportunities. With a practical, results-focused approach, I've worked with candidates
              across industries to strengthen their online presence and position them for roles in
              India and internationally.
            </p>
            <p className="text-white/60 leading-relaxed text-sm mb-8">
              My goal is simple: to help talented professionals present their experience with clarity
              and confidence so recruiters and employers take notice.
            </p>

            {/* Stats bar */}
            <div className="flex gap-8 bg-zinc-900 border border-white/10 rounded-xl p-5 mb-8">
              {[
                { num: "8+", label: "Years recruiting" },
                { num: "500+", label: "Careers transformed" },
                { num: "15+", label: "Countries served" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="text-2xl font-light text-lime-400">{num}</div>
                  <div className="text-xs text-white/40 mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* CTA links */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/917007699036?text=Hi%20Syed!%20I%27d%20like%20to%20discuss%20my%20career%20profile."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-lime-400 text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-lime-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/syed-amir-husain/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/10 text-white text-sm px-5 py-2.5 rounded-full hover:border-lime-400 hover:text-lime-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="mailto:vrohainc@outlook.com"
                className="inline-flex items-center gap-2 border border-white/10 text-white text-sm px-5 py-2.5 rounded-full hover:border-lime-400 hover:text-lime-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spin keyframe — add once to your globals.css if not already present */}
      <style>{`
        @keyframes spin { to { transform: translate(-50%, -50%) rotate(360deg); } }
      `}</style>
    </section>
  )
}