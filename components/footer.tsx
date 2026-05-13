"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 text-center border-b border-border"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight max-w-3xl mx-auto">
            Your career is only as strong as how you present it.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            You already know what role you want. Type it. Vroha handles everything after that.
          </p>
          <div className="mt-10">
            <Link
              href="#enroll"
              className="inline-flex items-center rounded-full bg-foreground px-8 py-4 text-base font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              Put Vroha to work
            </Link>
          </div>
        </motion.div>

        {/* Footer links */}
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Vroha"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-foreground">Vroha</span>
          </Link>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Link
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </Link>
            <a
              href="mailto:vrohainc@outlook.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Vroha
          </p>
        </div>
      </div>
    </footer>
  );
}
