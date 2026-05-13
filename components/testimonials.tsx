"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    handle: "Software Engineer",
    company: "Microsoft",
    quote:
      "Vroha completely transformed my LinkedIn profile. Within 2 weeks of the optimization, I started receiving messages from recruiters at top tech companies. Landed my dream role at Microsoft!",
  },
  {
    name: "James Wilson",
    handle: "Data Analyst",
    company: "Deloitte",
    quote:
      "The resume writing service was exceptional. My new CV highlighted achievements I hadn&apos;t even considered important. The ATS optimization was key to getting past initial screening.",
  },
  {
    name: "Sarah Chen",
    handle: "Product Manager",
    company: "Amazon",
    quote:
      "The profile marketing service connected me directly with recruiters I never could have reached on my own. The team&apos;s network is incredible. Highly recommend!",
  },
  {
    name: "Ahmed Hassan",
    handle: "UX Designer",
    company: "Google",
    quote:
      "My portfolio website is stunning. It showcases my work perfectly and has become a conversation starter in every interview. Worth every penny!",
  },
  {
    name: "Emily Rodriguez",
    handle: "Marketing Director",
    company: "Salesforce",
    quote:
      "I was skeptical at first, but the results speak for themselves. The complete package transformed my professional presence and I landed a role with a 40% salary increase.",
  },
  {
    name: "Raj Patel",
    handle: "Cloud Architect",
    company: "AWS",
    quote:
      "The team understood exactly what cloud computing recruiters look for. My optimized profile now ranks high in LinkedIn searches for my expertise areas.",
  },
];

// Duplicate for infinite scroll effect
const allTestimonials = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            500+ professionals. Here is what they found.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Solo job seekers. Career changers. Tech professionals. All using Vroha to land better roles.
          </p>
        </motion.div>
      </div>

      {/* Scrolling testimonials */}
      <div className="relative">
        <div className="flex animate-marquee">
          {allTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] mx-3"
            >
              <div className="bg-card rounded-2xl border border-border p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-vroha-teal/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-vroha-teal">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.handle} | {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#enroll"
            className="inline-flex items-center rounded-full bg-foreground px-8 py-4 text-base font-medium text-background hover:bg-foreground/90 transition-colors"
          >
            Put Vroha to work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
