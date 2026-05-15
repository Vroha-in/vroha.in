"use client";

import { motion } from "framer-motion";
import { Linkedin, Users, Award, Globe } from "lucide-react";

const stats = [
  { value: "8+", label: "Years experience", icon: Award },
  { value: "500+", label: "Candidates helped", icon: Users },
  { value: "10K+", label: "LinkedIn network", icon: Linkedin },
  { value: "15+", label: "Countries served", icon: Globe },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            Built by recruiters. For candidates.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vroha is led by an experienced bench sales recruiter with a proven track record 
            of placing candidates at top companies. We know what recruiters look for because 
            we&apos;ve been on both sides of the hiring table.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border p-8 text-center"
            >
              <stat.icon className="w-6 h-6 text-vroha-teal mx-auto mb-4" />
              <div className="text-3xl sm:text-4xl font-semibold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <blockquote className="text-xl sm:text-2xl text-foreground font-medium max-w-3xl mx-auto leading-relaxed">
            &ldquo;Every profile we optimize, every resume we write, every connection 
            we make is driven by one goal: helping you land the role you deserve.&rdquo;
          </blockquote>
          <p className="mt-6 text-muted-foreground">
            Vroha Team
          </p>
        </motion.div>
      </div>
    </section>
  );
}
