"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

type Country = "india" | "usa" | "uk" | "canada" | "australia" | "uae";

const countryLabels: Record<Country, string> = {
  india: "India",
  usa: "USA",
  uk: "UK",
  canada: "Canada",
  australia: "Australia",
  uae: "UAE",
};

const pricing: Record<
  Country,
  {
    linkedin: string;
    resume: string;
    marketing: string;
    portfolio: string;
    starterBundle: string;
    proBundle: string;
    eliteBundle: string;
  }
> = {
  india: {
    linkedin: "₹3,999",
    resume: "₹4,999",
    marketing: "₹7,999",
    portfolio: "₹11,999",
    starterBundle: "₹8,499",
    proBundle: "₹14,999",
    eliteBundle: "₹24,999",
  },
  usa: {
    linkedin: "$89",
    resume: "$139",
    marketing: "$389",
    portfolio: " ",
    starterBundle: "$199",
    proBundle: "$229",
    eliteBundle: "$559",
  },
  uk: {
    linkedin: "£69",
    resume: "£119",
    marketing: "£349",
    portfolio: " ",
    starterBundle: "£159",
    proBundle: "£209",
    eliteBundle: "£529",
  },
  canada: {
    linkedin: "C$129",
    resume: "C$179",
    marketing: "C$429",
    portfolio: " ",
    starterBundle: "C$259",
    proBundle: "C$309",
    eliteBundle: "C$759",
  },
  australia: {
    linkedin: "A$119",
    resume: "A$199",
    marketing: "A$449",
    portfolio: " ",
    starterBundle: "A$269",
    proBundle: "A$349",
    eliteBundle: "A$749",
  },
  uae: {
    linkedin: "AED 299",
    resume: "AED 499",
    marketing: "AED 1299",
    portfolio: " ",
    starterBundle: "AED 659",
    proBundle: "AED 799",
    eliteBundle: "AED 1,999",
  },
};

const plans = [
  {
    name: "Starter",
    description: "Quick profile enhancement",
    priceKey: "starterBundle" as const,
    features: ["LinkedIn Profile Optimisation", "Resume / CV Writing"],
    popular: false,
  },
  {
    name: "Pro",
    description: "Complete transformation",
    priceKey: "proBundle" as const,
    features: [
      "LinkedIn Profile Optimisation",
      "Resume / CV Writing",
      "2 revision round",
    ],
    popular: true,
  },
  {
    name: "Elite",
    description: "Full-service premium",
    priceKey: "eliteBundle" as const,
    features: [
      "All 3 Services Included",
      "5 revisions",
    ],
    popular: false,
  },
];

export function Pricing() {
  const [selectedCountry, setSelectedCountry] = useState<Country>("usa");

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            Simple, transparent pricing.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose individual services or save with bundles. Pricing varies by region.
          </p>
        </motion.div>

        {/* Country Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-secondary">
            {(Object.keys(countryLabels) as Country[]).map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCountry === country
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {countryLabels[country]}
              </button>
            ))}
          </div>
        </div>

        {/* Individual Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm text-muted-foreground text-center mb-6">Individual services</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "LinkedIn", key: "linkedin" as const },
              { name: "Resume", key: "resume" as const },
              { name: "Marketing", key: "marketing" as const },
              { name: "Portfolio", key: "portfolio" as const },
            ].map((service) => (
              <div
                key={service.key}
                className="bg-card rounded-xl border border-border p-5 text-center"
              >
                <p className="text-sm text-muted-foreground mb-1">{service.name}</p>
                <p className="text-xl font-semibold text-foreground">
                  {pricing[selectedCountry][service.key]}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bundle Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-card rounded-2xl border p-8 relative ${
                plan.popular ? "border-foreground" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-foreground px-4 py-1 text-xs font-medium text-background">
                    Most popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <span className="text-3xl font-semibold text-foreground">
                  {pricing[selectedCountry][plan.priceKey]}
                </span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-vroha-teal flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                href="#enroll"
                className={`block w-full text-center rounded-full py-3 text-sm font-medium transition-colors ${
                  plan.popular
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                Get started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
