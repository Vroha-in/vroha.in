"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const agencies = [
  { name: "Robert Half", href: "https://www.linkedin.com/company/robert-half-international/" },
  { name: "Persona", href: "https://www.linkedin.com/company/personatalent/" },
  { name: "ManpowerGroup", href: "https://www.linkedin.com/company/manpowergroup/" },
  { name: "Talentoma", href: "https://www.linkedin.com/company/talentoma/" },
  { name: "CareerXperts", href: "https://www.linkedin.com/company/careerxperts-consulting/" },
  { name: "Randstad", href: "https://www.linkedin.com/company/randstadusa/" },
  { name: "Michael Page", href: "https://www.linkedin.com/company/michael-page/" },
];

const allAgencies = [...agencies, ...agencies];

export function AgencyMarquee() {
  return (
    <section className="py-16 overflow-hidden border-t border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-10 px-4"
      >
        <p className="text-sm text-muted-foreground">
          Your profile, promoted to top recruitment agencies
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee">
          {allAgencies.map((agency, index) => (
            <Link
              key={index}
              href={agency.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-6"
            >
              <div className="px-6 py-3 rounded-full border border-border hover:border-muted-foreground transition-colors">
                <span className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                  {agency.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
