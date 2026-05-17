"use client";

const results = [
  {
    metric: "2 weeks",
    label: "Average time to first recruiter contact",
    description: "After LinkedIn optimization, most clients hear from recruiters within 2 weeks.",
  },
  {
    metric: "3x",
    label: "More profile views on average",
    description: "Optimized profiles get significantly more visibility in LinkedIn search results.",
  },
  {
    metric: "500+",
    label: "Professionals helped across 15+ countries",
    description: "From India to the USA, UAE to Canada — Vroha has helped candidates worldwide.",
  },
  {
    metric: "40%",
    label: "Average salary increase reported",
    description: "Clients who land new roles after Vroha optimization report significant pay jumps.",
  },
];

const logos = [
  "Microsoft", "Google", "Amazon", "Deloitte", "AWS", "Salesforce",
];

export default function ResultsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-3 text-center">
          Real results
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 leading-snug">
          What happens after Vroha
        </h2>
        <p className="text-center text-gray-500 text-base mb-16 max-w-xl mx-auto">
          Numbers from our clients across LinkedIn optimization, resume writing, and profile marketing services.
        </p>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {results.map((item, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-2xl p-7 bg-gray-50 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl font-bold text-amber-600 mb-2">
                {item.metric}
              </div>
              <div className="text-base font-semibold text-gray-900 mb-2">
                {item.label}
              </div>
              <div className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </div>
            </div>
          ))}
        </div>

        {/* Companies */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6">
            Our clients have landed roles at
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {logos.map((logo) => (
              <span
                key={logo}
                className="px-5 py-2 rounded-full border border-gray-200 text-gray-500 text-sm font-medium bg-white"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}