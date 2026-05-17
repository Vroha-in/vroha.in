"use client";

// ─── Floating WhatsApp Button ─────────────────────────────────────────────────
// Shows in the bottom-right corner on every page
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917007510168?text=Hi%20Syed%2C%20I%20found%20Vroha%20and%20I%27d%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
    >
      {/* WhatsApp icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      Chat with us
    </a>
  );
}

// ─── Guarantee Section ────────────────────────────────────────────────────────
export default function GuaranteeSection() {
  return (
    <section className="py-20 px-4 bg-amber-50 border-y border-amber-100">
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <span>🛡️</span> Our promise to you
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
          We don&apos;t stop until <br className="hidden md:block" />
          you&apos;re satisfied
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Every profile Syed works on is treated like it&apos;s his own. If you&apos;re not happy with the
          result after your revision rounds, reach out directly on WhatsApp and we will make it right.
          No runaround. No waiting. Just a direct conversation with the founder.
        </p>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: "👤",
              title: "Personal attention",
              desc: "Syed personally handles every single profile. No outsourcing ever.",
            },
            {
              icon: "⚡",
              title: "Fast delivery",
              desc: "Delivered in 3–5 business days. Rush options available on WhatsApp.",
            },
            {
              icon: "🔄",
              title: "Revision rounds",
              desc: "We revise until it's right. Up to 5 rounds on the Elite plan.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-amber-100 rounded-2xl p-6 text-left shadow-sm"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
              <div className="text-sm text-gray-500 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/917007510168?text=Hi%20Syed%2C%20I%27d%20like%20to%20get%20started%20with%20Vroha."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-md transition-all hover:scale-105 text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          WhatsApp Syed directly
        </a>

        <p className="text-gray-400 text-xs mt-4">
          Usually replies within a few hours · +91 70075 10168
        </p>

      </div>
    </section>
  );
}