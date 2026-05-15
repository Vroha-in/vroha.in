// ─────────────────────────────────────────────────────────────
// FAQSection.jsx
// HOW TO ADD: Import and place BEFORE your footer section:
//   import FAQSection from "@/components/FAQSection"
//   <FAQSection />
// ─────────────────────────────────────────────────────────────

"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"

const faqs = [
  {
    q: "How long does the whole process take?",
    a: "Most deliverables are ready within 5–7 business days from when you complete the intake questionnaire. Rush delivery in 2–3 days is available — just mention it when enrolling and we'll confirm availability.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "Every plan includes revision rounds (2 for Pro, 5 for Elite). We revise until you're satisfied. If after revisions you're still not happy, reach out directly to Syed — we'll find a resolution together.",
  },
  {
    q: "Do you offer refunds?",
    a: "Because our work is fully custom and time-intensive, we don't offer blanket refunds after delivery. However, we take full responsibility for quality — if there's a genuine issue with the deliverable, we'll make it right with additional revisions or a partial credit.",
  },
  {
    q: "Will recruiters know my profile was professionally written?",
    a: "No. Everything is written in your voice, using your own experience and accomplishments. We make you sound like the best version of yourself — not like a template. Recruiters only notice that your profile stands out.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Absolutely. All personal and professional information you share is used solely to create your deliverables and is never shared with any third party. Your privacy is taken very seriously.",
  },
  {
    q: "Do you work with freshers or only experienced professionals?",
    a: "Both. We've helped recent graduates land their first roles and senior professionals make lateral or upward moves. The strategy differs by career stage, and we tailor everything accordingly.",
  },
  {
    q: "Which countries do you serve?",
    a: "We've worked with clients in 15+ countries including India, USA, UK, Canada, Australia, UAE, and across Europe. We offer region-specific pricing and understand what recruiters in each market are looking for.",
  },
  {
    q: "How do I pay? Is it secure?",
    a: "Payments are processed via Wise, which supports international transfers in local currencies and is trusted globally. Indian clients can also pay via UPI or bank transfer — just ask when enrolling.",
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="bg-black border-t border-white/10 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-semibold tracking-widest uppercase text-lime-400 mb-4">
          Frequently asked
        </p>
        <h2 className="text-4xl md:text-5xl font-light text-white mb-16 leading-tight">
          Everything you want to know,{" "}
          <span className="italic text-white/60">answered</span>
        </h2>

        {/* FAQ grid — 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="bg-zinc-950 hover:bg-zinc-900 transition-colors">
                <button
                  className="w-full text-left px-7 py-6 flex items-start justify-between gap-4 group"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-white leading-snug group-hover:text-lime-400 transition-colors">
                    {q}
                  </span>
                  <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-white/60 group-hover:border-lime-400 group-hover:text-lime-400 transition-colors">
                    {isOpen ? <X className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                  </span>
                </button>

                {/* Animated answer */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? 300 : 0 }}
                >
                  <p className="px-7 pb-6 text-sm text-white/50 leading-relaxed">{a}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm mb-4">Still have questions?</p>
          <a
            href="https://wa.me/917007699036?text=Hi%20Vroha!%20I%20have%20a%20question%20before%20enrolling."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-black text-sm font-semibold px-6 py-3 rounded-full transition-colors"
          >
            {/* WhatsApp icon inline SVG so no extra dep needed */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.137.564 4.14 1.544 5.875L.057 23.998l6.304-1.653A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.001-1.371l-.359-.213-3.722.976.994-3.634-.234-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            Ask on WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}