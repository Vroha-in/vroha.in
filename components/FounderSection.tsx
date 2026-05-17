"use client";

import Image from "next/image";

export default function FounderSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-3 text-center">
          Meet the founder
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16 leading-snug">
          Built by someone who has been <br className="hidden md:block" />
          on both sides of the table
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

          {/* Photo */}
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <div className="w-44 h-44 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
              {/* Replace /founder.jpg with your actual photo filename */}
              <img
                src="/founder.jpg"
                alt="Syed Amir Husain — Founder of Vroha"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Shows initials if photo not found
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Fallback initials avatar */}
              <div className="w-full h-full flex items-center justify-center bg-amber-50">
                <span className="text-4xl font-bold text-amber-600">SA</span>
              </div>
            </div>

            {/* LinkedIn button */}
            <a
              href="https://www.linkedin.com/in/syed-amir-husain/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors border border-blue-200 hover:border-blue-400 px-4 py-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>

          {/* Story */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              Syed Amir Husain
            </h3>
            <p className="text-amber-600 font-medium text-sm mb-6 tracking-wide uppercase">
              Founder &amp; Career Strategist · Vroha
            </p>

            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                I started my career as a <strong className="text-gray-900">bench sales recruiter</strong> — the person on the other side of the screen who decides which profiles to call and which to scroll past. After 4 years across multiple domains, one thing became painfully clear to me:
              </p>

              <p className="text-gray-900 font-semibold text-lg border-l-4 border-amber-400 pl-4">
                "Talented people were losing opportunities — not because they lacked skills, but because they were invisible."
              </p>

              <p>
                I watched candidates on visa deadlines, freshers with great potential, and experienced professionals all struggle with the same problem — their LinkedIn profile and resume didn't represent how good they actually were. Recruiters couldn't find them. And when they did, the profile didn't convert.
              </p>

              <p>
                That's why I built Vroha. To give every candidate the professional presence they deserve — optimized, targeted, and built the way a recruiter thinks.
              </p>

              <p>
                <strong className="text-gray-900">Every profile I work on, I handle personally.</strong> No outsourcing. No templates. Just my experience applied to your career.
              </p>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { number: "4+", label: "Years in recruitment" },
                { number: "500+", label: "Candidates helped" },
                { number: "15+", label: "Countries served" },
                { number: "10K+", label: "LinkedIn network" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-amber-50 border border-amber-100 rounded-xl px-5 py-3 text-center"
                >
                  <div className="text-xl font-bold text-amber-700">
                    {stat.number}
                  </div>
                  <div className="text-xs text-amber-600 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}