"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Loader2,
  Linkedin,
  FileText,
  Megaphone,
  Briefcase,
  CreditCard,
} from "lucide-react";
import emailjs from "@emailjs/browser";

// ─── Types ───────────────────────────────────────────────────────────────────

type Service = "linkedin" | "resume" | "marketing" | "portfolio";
type Country =
  | "India"
  | "United States"
  | "United Kingdom"
  | "Canada"
  | "Australia"
  | "UAE"
  | "Other";

// ─── Constants ────────────────────────────────────────────────────────────────

/** Single source of truth for the Wise payment URL. */
const WISE_PAYMENT_HANDLE = "https://wise.com/pay/me/syedamirhusain";

/** Admin inbox that receives every new enquiry. */
const ADMIN_EMAIL = "admin@vroha.in";

const currencyConfig: Record<
  Country,
  { currency: string; symbol: string; rate: number }
> = {
  India:           { currency: "INR", symbol: "₹",    rate: 83   },
  "United States": { currency: "USD", symbol: "$",    rate: 1    },
  "United Kingdom":{ currency: "GBP", symbol: "£",    rate: 0.79 },
  Canada:          { currency: "CAD", symbol: "C$",   rate: 1.36 },
  Australia:       { currency: "AUD", symbol: "A$",   rate: 1.53 },
  UAE:             { currency: "AED", symbol: "AED ", rate: 3.67 },
  Other:           { currency: "USD", symbol: "$",    rate: 1    },
};

const services: {
  id: Service;
  name: string;
  shortName: string;
  priceUSD: number;
  icon: React.ElementType;
}[] = [
  { id: "linkedin",  name: "LinkedIn Profile Optimisation", shortName: "LinkedIn",  priceUSD: 89,  icon: Linkedin  },
  { id: "resume",    name: "Resume / CV Writing",           shortName: "Resume",    priceUSD: 139, icon: FileText  },
  { id: "marketing", name: "Profile Marketing",             shortName: "Marketing", priceUSD: 389, icon: Megaphone },
  { id: "portfolio", name: "Portfolio Creation",            shortName: "Portfolio", priceUSD: 249, icon: Briefcase },
];

const countries: Country[] = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "UAE",
  "Other",
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Build the Wise deep-link for a given amount + reference. */
function buildWiseLink(amountUSD: number, desc: string, ref: string) {
  return (
    `${WISE_PAYMENT_HANDLE}` +
    `?amount=${amountUSD}` +
    `&currency=USD` +
    `&description=${encodeURIComponent(desc)}` +
    `&reference=${encodeURIComponent(ref)}`
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function EnrollmentForm() {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [formData, setFormData] = useState({
    name:        "",
    email:       "",
    country:     "United States" as Country,
    linkedinUrl: "",
    phone:       "",
    message:     "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted,  setIsSubmitted]  = useState(false);
  const [error,        setError]        = useState("");

  // ── Derived values ──────────────────────────────────────────────────────────

  const { currency, symbol, rate } =
    currencyConfig[formData.country] ?? currencyConfig["United States"];

  /** Raw total (USD) before any discount. */
  const rawTotalUSD = selectedServices.reduce((sum, id) => {
    const svc = services.find((s) => s.id === id);
    return sum + (svc?.priceUSD ?? 0);
  }, 0);

  /** 10 % bundle discount when 2+ services are selected. */
  const isDiscountApplied = selectedServices.length >= 2;

  /** Final USD price (rounded to 2 dp). */
  const finalUSD = isDiscountApplied
    ? Math.round(rawTotalUSD * 0.9 * 100) / 100
    : rawTotalUSD;

  /** Display prices in the user's local currency. */
  const rawLocalTotal   = Math.round(rawTotalUSD * rate);
  const finalLocalTotal = Math.round(finalUSD    * rate);

  const getLocalPrice = (priceUSD: number) => Math.round(priceUSD * rate);

  // ── Handlers ────────────────────────────────────────────────────────────────

  const toggleService = (id: Service) =>
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (selectedServices.length === 0) {
      setError("Please select at least one service.");
      return;
    }
    if (!formData.name || !formData.email || !formData.country) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceFullNames = selectedServices
        .map((id) => services.find((s) => s.id === id)?.name)
        .join(", ");

      const serviceShortNames = selectedServices
        .map((id) => services.find((s) => s.id === id)?.shortName)
        .join(", ");

      const discountLabel = isDiscountApplied
        ? "Yes – 10% bundle discount applied"
        : "No";

      const totalDisplay =
        `${symbol}${finalLocalTotal.toLocaleString()} ${currency}` +
        (currency !== "USD" ? ` (~$${finalUSD} USD)` : "") +
        (isDiscountApplied ? " (10% bundle discount)" : "");

      // ── 1. Admin notification ───────────────────────────────────────────────
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_email:       ADMIN_EMAIL,
          from_name:      formData.name,
          from_email:     formData.email,
          country:        formData.country,
          linkedin_url:   formData.linkedinUrl || "Not provided",
          phone:          formData.phone       || "Not provided",
          services:       serviceFullNames,
          discount:       discountLabel,
          total:          totalDisplay,
          message:        formData.message     || "No message provided",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // ── 2. Customer confirmation ─────────────────────────────────────────────
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONFIRMATION_TEMPLATE_ID!,
        {
          to_name:  formData.name,
          to_email: formData.email,
          services: serviceFullNames,
          discount: discountLabel,
          total:    `${symbol}${finalLocalTotal.toLocaleString()} ${currency}`,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // ── 3. Open Wise payment ─────────────────────────────────────────────────
      const ref  = `VROHA-${Date.now()}-${formData.name.split(" ")[0].toUpperCase()}`;
      const desc = `Vroha Services: ${serviceShortNames} – ${formData.name}`;
      window.open(buildWiseLink(finalUSD, desc, ref), "_blank");

      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError(
        `Something went wrong. Please try again or contact us directly at ${ADMIN_EMAIL}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Helpers for re-opening Wise on the success screen ─────────────────────

  const reopenWise = () => {
    const ref  = `VROHA-${Date.now()}-${formData.name.split(" ")[0].toUpperCase()}`;
    const shortNames = selectedServices
      .map((id) => services.find((s) => s.id === id)?.shortName)
      .join(", ");
    const desc = `Vroha Services: ${shortNames} – ${formData.name}`;
    window.open(buildWiseLink(finalUSD, desc, ref), "_blank");
  };

  // ── Success screen ──────────────────────────────────────────────────────────

  if (isSubmitted) {
    return (
      <section id="enroll" className="py-24 lg:py-32">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-2xl border border-border p-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-vroha-teal/10 flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-8 h-8 text-vroha-teal" />
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Almost there!
            </h3>

            <p className="text-muted-foreground mb-2">
              A Wise payment window should have opened. Complete your payment of{" "}
              <span className="font-semibold text-foreground">
                ${finalUSD} USD
              </span>{" "}
              to start your career transformation.
            </p>

            {isDiscountApplied && (
              <p className="text-sm text-vroha-teal mb-4">
                🎉 10% bundle discount has been applied to your total.
              </p>
            )}

            <p className="text-sm text-muted-foreground mb-6">
              Didn&apos;t see the payment window?{" "}
              <button
                onClick={reopenWise}
                className="text-vroha-teal hover:underline font-medium"
              >
                Click here to pay
              </button>
            </p>

            <div className="pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">
                Questions? Contact us at
              </p>
              <a
                href={`mailto:${ADMIN_EMAIL}`}
                className="text-sm text-vroha-teal hover:underline"
              >
                {ADMIN_EMAIL}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // ── Main form ───────────────────────────────────────────────────────────────

  return (
    <section id="enroll" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Select your services and tell us about yourself.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* ── Service selection ─────────────────────────────────────────── */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Select services
              </label>
              <p className="text-xs text-muted-foreground mb-4">
                Select 2 or more to unlock a 10% bundle discount.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service) => {
                  const selected = selectedServices.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                        selected
                          ? "border-foreground bg-secondary/50"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <service.icon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-foreground">
                          {service.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">
                          {symbol}
                          {getLocalPrice(service.priceUSD).toLocaleString()}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            selected
                              ? "border-foreground bg-foreground"
                              : "border-muted-foreground"
                          }`}
                        >
                          {selected && (
                            <Check className="w-2.5 h-2.5 text-background" />
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Order summary ─────────────────────────────────────────────── */}
            {selectedServices.length > 0 && (
              <div className="rounded-xl border border-border bg-secondary/30 p-4 space-y-3">
                {/* Service line items */}
                {selectedServices.map((id) => {
                  const svc = services.find((s) => s.id === id)!;
                  return (
                    <div key={id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{svc.name}</span>
                      <span className="text-foreground">
                        {symbol}{getLocalPrice(svc.priceUSD).toLocaleString()}
                      </span>
                    </div>
                  );
                })}

                {/* Divider */}
                <div className="border-t border-border pt-3 space-y-1">
                  {/* Subtotal (only shown when discount is active) */}
                  {isDiscountApplied && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-muted-foreground line-through">
                        {symbol}{rawLocalTotal.toLocaleString()} {currency}
                      </span>
                    </div>
                  )}

                  {/* Discount badge */}
                  {isDiscountApplied && (
                    <div className="flex justify-between text-sm">
                      <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                        {/* Using standard Tailwind green instead of custom vroha-teal
                            so it works without any extra config */}
                        <Check className="w-3.5 h-3.5" />
                        10% bundle discount
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                        −{symbol}
                        {(rawLocalTotal - finalLocalTotal).toLocaleString()}{" "}
                        {currency}
                      </span>
                    </div>
                  )}

                  {/* Total */}
                  <div className="flex items-baseline justify-between pt-1">
                    <span className="text-sm font-medium text-foreground">
                      Total
                    </span>
                    <div className="text-right">
                      <span className="text-lg font-semibold text-foreground">
                        {symbol}{finalLocalTotal.toLocaleString()} {currency}
                      </span>
                      {currency !== "USD" && (
                        <p className="text-xs text-muted-foreground">
                          ~${finalUSD} USD
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Personal details ──────────────────────────────────────────── */}
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Country <span className="text-destructive">*</span>
                  </label>
                  <select
                    required
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        country: e.target.value as Country,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
                  >
                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone{" "}
                    <span className="text-muted-foreground font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* LinkedIn */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  LinkedIn URL{" "}
                  <span className="text-muted-foreground font-normal">
                    (optional)
                  </span>
                </label>
                <input
                  type="url"
                  value={formData.linkedinUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, linkedinUrl: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              {/* Goals */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your goals{" "}
                  <span className="text-muted-foreground font-normal">
                    (optional)
                  </span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent resize-none"
                  placeholder="What role are you targeting? Any specific goals?"
                />
              </div>
            </div>

            {/* ── Error ─────────────────────────────────────────────────────── */}
            {error && (
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
                {error}
              </div>
            )}

            {/* ── Submit ────────────────────────────────────────────────────── */}
            <button
              type="submit"
              disabled={isSubmitting || selectedServices.length === 0}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing…
                </>
              ) : (
                <>
                  <CreditCard className="w-4 h-4" />
                  Proceed to payment
                  {selectedServices.length > 0 && (
                    <span className="ml-1">
                      ({symbol}{finalLocalTotal.toLocaleString()})
                    </span>
                  )}
                </>
              )}
            </button>

            {/* ── Trust note ────────────────────────────────────────────────── */}
            <p className="text-center text-xs text-muted-foreground">
              Secure payment via Wise · International transfers supported
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
