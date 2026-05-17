"use client";

const steps = [
  {
    number: "01",
    title: "Choose your service & fill the form",
    description:
      "Select the service you need — LinkedIn, Resume, Marketing, or Portfolio. Fill in the short form on our site with your details and career goals. Takes less than 2 minutes.",
    icon: "📋",
  },
  {
    number: "02",
    title: "We review & get to work",
    description:
      "Syed personally reviews your profile and existing resume. No outsourcing, no junior staff. You may receive a quick WhatsApp message if we need any extra details from you.",
    icon: "🔍",
  },
  {
    number: "03",
    title: "Receive your optimized profile",
    description:
      "Your fully optimized LinkedIn profile, resume, or portfolio is delivered within 3–5 business days. You get a revision round to make sure everything is exactly right.",
    icon: "✅",
  },
  {
    number: "04",
    title: "Get visible. Get hired.",
    description:
      "Your profile is now recruiter-ready. We also market your profile directly to top recruitment agencies so you start getting noticed immediately.",
    icon: "🚀",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-3 text-center">
          The process
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 leading-snug">
          How Vroha works
        </h2>
        <p className="text-center text-gray-500 text-base mb-16 max-w-xl mx-auto">
          From sign-up to job-ready in as little as 5 business days. Here is exactly what happens after you get started.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm flex gap-5 items-start"
            >
              {/* Number circle */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center">
                <span className="text-amber-700 font-bold text-sm">{step.number}</span>
              </div>

              <div>
                <div className="text-2xl mb-2">{step.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Questions before getting started?{" "}
            <a
              href="https://wa.me/917007510168"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 font-medium hover:underline"
            >
              Chat with us on WhatsApp →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}