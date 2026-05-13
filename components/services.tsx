"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, FileText, Megaphone, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "linkedin",
    number: "01",
    icon: Linkedin,
    label: "LinkedIn",
    title: "The profile that gets noticed.",
    description:
      "Transform your LinkedIn from invisible to unforgettable. We optimize every element — headline, summary, experience, skills — so recruiters find you first and remember you longer.",
    features: [
      "Keyword-rich headline",
      "Strategic positioning",
      "Skills optimization",
      "Visibility boost",
      "Recruiter targeting",
      "Profile analytics",
    ],
  },
  {
    id: "resume",
    number: "02",
    icon: FileText,
    label: "Resume",
    title: "The document that opens doors.",
    description:
      "An ATS-friendly, achievement-focused resume that passes automated screening and impresses human reviewers. Built for the job you want, not the one you have.",
    features: [
      "ATS optimization",
      "Achievement focus",
      "Industry keywords",
      "Clean formatting",
      "Multiple versions",
      "Cover letter",
    ],
  },
  {
    id: "marketing",
    number: "03",
    icon: Megaphone,
    label: "Marketing",
    title: "The reach you can't get alone.",
    description:
      "We don't just optimize — we actively promote your profile to our network of recruiters and hiring managers at companies you actually want to work for.",
    features: [
      "Recruiter outreach",
      "Job matching",
      "Application support",
      "Interview prep",
      "Salary guidance",
      "Offer negotiation",
    ],
  },
  {
    id: "portfolio",
    number: "04",
    icon: Briefcase,
    label: "Portfolio",
    title: "The proof that seals the deal.",
    description:
      "A stunning portfolio website that showcases your work, tells your story, and gives you a professional edge that PDFs and LinkedIn profiles can't match.",
    features: [
      "Custom website",
      "Project showcases",
      "Mobile responsive",
      "SEO optimized",
      "Domain setup",
      "Easy updates",
    ],
  },
];

export function Services() {
  const [activeTab, setActiveTab] = useState("linkedin");
  const activeService = services.find((s) => s.id === activeTab)!;

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            The profile. The resume. The reach.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Four capabilities. One system. Start anywhere — Vroha carries your context forward.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === service.id
                  ? "bg-foreground text-background"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <span className="text-xs opacity-60">{service.number}</span>
              {service.label}
            </button>
          ))}
        </motion.div>

        {/* Content area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          >
            {/* Left: Description */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="number-badge bg-vroha-teal/10 text-vroha-teal">
                  {activeService.number}
                </span>
                <activeService.icon className="w-6 h-6 text-vroha-teal" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                {activeService.title}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {activeService.description}
              </p>

              <Link
                href="#enroll"
                className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-vroha-teal transition-colors"
              >
                Get started with {activeService.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Right: Features grid */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="grid grid-cols-2 gap-4">
                {activeService.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 py-3 px-4 rounded-lg bg-secondary/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-vroha-teal" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
