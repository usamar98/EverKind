"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How quickly can care start?",
    answer:
      "In many cases we can begin arranging support within a few days after a care conversation and home assessment. Urgent situations are prioritised by the care coordination team."
  },
  {
    question: "Can we choose the same carer?",
    answer:
      "Consistency matters. We aim to build a small, familiar care team around each client so routines, preferences and relationships can settle naturally."
  },
  {
    question: "Do you support dementia care?",
    answer:
      "Yes. Dementia support is shaped around reassurance, familiar routines, safety at home and patient communication with the wider family."
  },
  {
    question: "Do you offer live-in care?",
    answer:
      "Yes. Live-in care is available for families who want continuous support at home without moving their loved one into residential care."
  },
  {
    question: "Is the care plan flexible?",
    answer:
      "Care plans are reviewed as needs change. Families can adjust visit times, frequency and support tasks with their care coordinator."
  },
  {
    question: "How is the cost decided?",
    answer:
      "Costs depend on the level of support, visit length, schedule and specialist needs. EverKind provides a custom quote after assessment, with no pressure."
  },
  {
    question: "Can family members receive updates?",
    answer:
      "Yes. With consent, families can receive regular updates so everyone understands how care is going and what has changed."
  }
];

export function FAQAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
      {faqs.map((faq, index) => {
        const isActive = active === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
              onClick={() => setActive(isActive ? -1 : index)}
              aria-expanded={isActive}
            >
              <span className="font-display text-2xl text-charcoal md:text-3xl">{faq.question}</span>
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-charcoal/10 text-forest">
                <ChevronDown
                  size={18}
                  strokeWidth={1.8}
                  className={`transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isActive ? (
                <motion.div
                  initial={{ gridTemplateRows: "0fr", opacity: 0 }}
                  animate={{ gridTemplateRows: "1fr", opacity: 1 }}
                  exit={{ gridTemplateRows: "0fr", opacity: 0 }}
                  transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                  className="grid"
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-6 text-base leading-7 text-muted md:text-lg">{faq.answer}</p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
