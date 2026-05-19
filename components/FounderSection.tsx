"use client";

export default function FounderSection() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-amber-500 mb-3 text-center">
          Meet the founder
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 leading-snug">
          Built by someone who has been <br className="hidden md:block" />
          on both sides of the table
        </h2>

        {/* Main card — split layout */}
        <div className="rounded-3xl overflow-hidden border border-white/10 flex flex-col md:flex-row min-h-[560px]">

          {/* LEFT — Photo side */}
          <div className="md:w-[45%] relative min-h-[400px] md:min-h-auto">
            <img
              src="/founder.jpg"
              alt="Syed Amir Husain — Founder of Vroha"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Dark gradient overlay at bottom so text is readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />

            {/* Name overlay on photo */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-amber-400 text-xs tracking-widest uppercase font-semibold mb-1">
                Founder
              </p>
              <h3 className="text-white text-2xl font-bold mb-0.5">
                Syed Amir Husain
              </h3>
              <p className="text-gray-400 text-sm">
                Founder &amp; Career Strategist · Vroha
              </p>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/syed-amir-husain/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white border border-white/20 hover:border-amber-400 hover:text-amber-400 px-4 py-2 rounded-full transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT — Story side */}
          <div className="md:w-[55%] bg-gray-900 p-8 md:p-12 flex flex-col justify-center">

            {/* Pull quote */}
            <p className="text-amber-400 text-xl md:text-2xl font-semibold leading-snug mb-8 border-l-4 border-amber-500 pl-5">
              "Talented people were losing opportunities — not because they lacked skills,
              but because they were invisible."
            </p>

            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>
                I started my career as a{" "}
                <span className="text-white font-medium">bench sales recruiter</span> — the person
                on the other side of the screen who decides which profiles to call and which to
                scroll past. After 4 years across multiple domains, one thing became painfully
                clear to me.
              </p>
              <p>
                I watched candidates on{" "}
                <span className="text-white font-medium">visa deadlines</span>, freshers with
                great potential, and experienced professionals all struggle with the same
                problem — their LinkedIn and resume didn&apos;t represent how good they actually
                were. Recruiters couldn&apos;t find them. And when they did, the profile
                didn&apos;t convert.
              </p>
              <p>
                That&apos;s why I built Vroha. To give every candidate the professional presence
                they deserve — optimized, targeted, and built the way a recruiter thinks.
              </p>
              <p className="text-white font-medium">
                Every profile I work on, I handle personally. No outsourcing. No templates.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { number: "4+", label: "Years experience" },
                { number: "500+", label: "Candidates helped" },
                { number: "15+", label: "Countries served" },
                { number: "10K+", label: "LinkedIn network" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-800 border border-white/10 rounded-xl px-4 py-3 text-center"
                >
                  <div className="text-xl font-bold text-amber-400">{stat.number}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}