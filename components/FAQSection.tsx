"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to get my profile optimized?",
    answer:
      "We deliver within 3–5 business days for LinkedIn and Resume services. Portfolio creation may take 5–7 business days. Rush delivery is available — just mention it on WhatsApp.",
  },
  {
    question: "Do you work with freshers and students too?",
    answer:
      "Absolutely. We work with everyone — from fresh graduates to senior professionals. Your stage of career doesn't matter; we know how to position you at your best.",
  },
  {
    question: "How many revisions do I get?",
    answer:
      "The Starter plan includes 1 revision round. The Pro plan includes 2 revision rounds. The Elite plan includes 5 revision rounds. We work until you are completely satisfied.",
  },
  {
    question: "Do you outsource the work to someone else?",
    answer:
      "Never. Syed Amir Husain personally handles every profile. That's our core promise. No junior staff, no freelancers — just direct expert attention on your career.",
  },
  {
    question: "I'm on a visa and urgently need a job. Can you help?",
    answer:
      "Yes — this is actually one of the most common situations we handle. We understand visa deadlines and move quickly. Our Profile Marketing service directly contacts recruitment agencies on your behalf to get you visible fast.",
  },
  {
    question: "What countries do you serve?",
    answer:
      "We serve clients in 15+ countries including India, USA, UK, Canada, Australia, and UAE. Pricing is adjusted by region — check the pricing section for your country.",
  },
  {
    question: "What if I'm not happy with the result?",
    answer:
      "We offer revision rounds based on your plan, and we don't consider a project done until you're satisfied. If you have concerns, reach out on WhatsApp directly and we'll sort it out.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply scroll to the pricing section, choose your service or bundle, fill in the form, and proceed to payment. Or WhatsApp us directly if you have questions first.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">

        {/* Label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-3 text-center">
          Got questions?
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 leading-snug">
          Frequently asked questions
        </h2>
        <p className="text-center text-gray-500 text-base mb-14 max-w-xl mx-auto">
          Everything you need to know before getting started. Still have questions?{" "}
          <a
            href="https://wa.me/917007510168"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 hover:underline font-medium"
          >
            WhatsApp us
          </a>
          .
        </p>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
              >
                <span className="text-gray-900 font-medium text-base">
                  {faq.question}
                </span>
                <span className="text-amber-500 text-xl flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}