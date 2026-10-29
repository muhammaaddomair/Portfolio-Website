"use client";

import { Plus } from "lucide-react";
import { type ReactNode, useState } from "react";

const faqs = [
  {
    question: "What kinds of systems do you build?",
    answer:
      "We build AI automation, backend infrastructure, security, revenue, conversion, product, cloud, data, and support systems.",
  },
  {
    question: "Can you work with our existing stack?",
    answer:
      "Yes. We integrate with CRMs, APIs, databases, cloud platforms, websites, internal tools, payment systems, and existing workflows.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Focused systems can show value within weeks, while larger infrastructure, security, or product builds are planned in clear phases.",
  },
  {
    question: "Do you handle security as part of the build?",
    answer:
      "Yes. We design around access control, secure architecture, audit logging, monitoring, IAM, and practical compliance readiness.",
  },
  {
    question: "Can you improve revenue and conversion systems?",
    answer:
      "Yes. We build lead generation, outreach, funnels, CRM pipelines, analytics, high-conversion websites, and performance systems.",
  },
  {
    question: "Do you build internal tools and dashboards?",
    answer:
      "Yes. We create operational dashboards, internal systems, portals, KPI views, data pipelines, and custom workflow tools.",
  },
  {
    question: "Can you maintain and scale systems after launch?",
    answer:
      "Yes. We support continuous development, SLA-based maintenance, AI enhancements, performance optimization, and system scaling.",
  },
  {
    question: "How do we get started?",
    answer:
      "We start with a discovery call, map the highest-value system opportunities, then define the architecture and first build phase.",
  },
];

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items?: readonly FaqItem[];
  heading?: ReactNode;
};

export function FaqSection({
  items = faqs,
  heading = (
    <>
      <span className="text-white">FAQs.</span> We&apos;ve answered some of the
      most common questions below about how we work and what to expect.
    </>
  ),
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-4 py-24 text-black sm:px-8">
      <div className="mx-auto w-full max-w-[1440px]">
        <h2 className="w-full text-[48px] font-medium leading-[1.18] tracking-[-0.045em] text-black/42 [&_span]:!text-black">
          {heading}
        </h2>

        <div className="mt-20 space-y-2">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-md bg-[#f2f2f2]"
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-controls={answerId}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 px-7 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-[20px] font-medium tracking-[-0.045em] transition ${
                      isOpen ? "text-black" : "text-black/58"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <Plus
                    className={`size-5 shrink-0 text-black/60 transition duration-300 ${
                      isOpen ? "rotate-45 text-black" : ""
                    }`}
                    strokeWidth={1.8}
                  />
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="max-w-5xl px-7 pb-7 text-[16px] leading-7 text-black/60">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
