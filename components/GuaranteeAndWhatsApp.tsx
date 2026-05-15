// ─────────────────────────────────────────────────────────────
// GuaranteeSection.jsx
// HOW TO ADD: Import and place BEFORE your enrolment/CTA form:
//   import GuaranteeSection from "@/components/GuaranteeSection"
//   <GuaranteeSection />
// ─────────────────────────────────────────────────────────────

export default function GuaranteeSection() {
  const pills = [
    "✓ Revisions included in every plan",
    "✓ Personal review by Syed",
    "✓ Delivered within 7 days",
    "✓ Secure payment via Wise",
    "✓ UPI accepted for Indian clients",
  ]

  return (
    <section id="guarantee" className="bg-black border-t border-white/10 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 bg-zinc-950 border border-white/10 rounded-2xl p-10 md:p-14">

          {/* Shield icon */}
          <div className="flex-shrink-0 w-24 h-24 rounded-full bg-lime-400/8 border border-lime-400/20 flex items-center justify-center text-5xl">
            🛡️
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-light text-white mb-4 leading-snug">
              Our satisfaction{" "}
              <span className="italic text-white/60">commitment</span>
            </h2>
            <p className="text-sm text-white/50 leading-relaxed mb-3">
              If you're not completely satisfied with your deliverables, we revise them until
              you are — no questions asked. Every service includes a minimum of 2 revision
              rounds, and we won't mark your project complete until you're confident in your
              new professional presence.
            </p>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              If we genuinely cannot meet your expectations after revisions, we'll work with
              you on a fair resolution. Your career matters too much to leave you with
              something that doesn't feel right.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {pills.map((p) => (
                <span
                  key={p}
                  className="text-xs text-lime-400 bg-lime-400/8 border border-lime-400/20 px-3 py-1.5 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}


// ─────────────────────────────────────────────────────────────
// WhatsAppButton.jsx  (floating button — paste once in layout)
// HOW TO ADD: Import in your root layout.tsx or app/layout.tsx:
//   import WhatsAppButton from "@/components/WhatsAppButton"
// Then add <WhatsAppButton /> inside the <body> tag.
// ─────────────────────────────────────────────────────────────

export function WhatsAppButton() {
  return (
    <>
      <a
        href="https://wa.me/917007699036?text=Hi%20Vroha!%20I%27d%20like%20to%20know%20more%20about%20your%20career%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Vroha on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:scale-110 transition-transform"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <svg
          className="w-7 h-7 fill-white relative z-10"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.137.564 4.14 1.544 5.875L.057 23.998l6.304-1.653A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.001-1.371l-.359-.213-3.722.976.994-3.634-.234-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
        </svg>
      </a>

      {/* Tooltip label — shows on hover via CSS */}
      <style>{`
        a[aria-label="Chat with Vroha on WhatsApp"]::before {
          content: "Chat with us";
          position: fixed;
          bottom: 5rem;
          right: 1.5rem;
          background: #111;
          color: #fff;
          font-size: 12px;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 8px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
        }
        a[aria-label="Chat with Vroha on WhatsApp"]:hover::before {
          opacity: 1;
        }
      `}</style>
    </>
  )
}