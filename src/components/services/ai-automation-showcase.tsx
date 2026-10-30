import AboutMeSection from "@/components/home/about-me-section";

import PortraitHero from "@/components/home/portrait-hero";
import "./landing-spacing.css";
import CTASection from "@/features/reference-projects/sections/shared/cta-section";

import { ProjectShowcaseSection } from "@/components/home/project-showcase-section";
import { ServicesSection } from "@/components/home/services-section";
import { type CSSProperties } from "react";
import {
  ArrowUp,
  Check,
  LoaderCircle,
  Mic,
  Plus,
  X,
} from "lucide-react";

const frictionItems = [
  "Manual handoffs slow every request",
  "Teams copy data between disconnected tools",
  "Leads and tickets wait for human routing",
  "Hard to see what is blocked or overdue",
  "Every process needs more effort to scale",
  "Customers feel the delay before you do",
];

const automationWins = [
  "Automated and clear intake workflows",
  "Systems update each other without busywork",
  "AI triage routes work to the right owner",
  "Live status, alerts, and audit trails",
  "Scale operations with a system that works for you",
  "Customers get faster, more consistent responses",
];

const contactInterestItems = ["AI Automation", "Business Website", "Web Application", "AI Chatbot", "Lead Generation", "CRM Workflow"];

const budgetItems = ["$500 - $1,000", "$1,000 - $1,500", "$1,500+"];

const heroPromptLines = [
  "Qualify every website lead, save the details to my CRM,",
  "then send a personalized follow-up and booking link.",
];

const heroExecutionTasks = [
  "Qualifying the new lead",
  "Updating the CRM pipeline",
  "Sending personalized follow-up",
];

const pixelLines = [
  { top: 18, left: 8, width: 42, delay: "0s", duration: "3.6s" },
  { top: 32, left: 28, width: 58, delay: "-1.6s", duration: "4.2s" },
  { top: 51, left: 2, width: 66, delay: "-0.8s", duration: "3.8s" },
  { top: 62, left: 44, width: 40, delay: "-2.4s", duration: "3.5s" },
  { top: 76, left: 16, width: 52, delay: "-1s", duration: "4s" },
  { top: 25, left: 68, width: 48, delay: "-2s", duration: "4.4s" },
  { top: 44, left: 82, width: 38, delay: "-2.8s", duration: "3.4s" },
  { top: 70, left: 72, width: 62, delay: "-1.4s", duration: "4.1s" },
];

function PixelMotionPanel({ featured = false }: { featured?: boolean }) {
  return (
    <div
      className={`relative h-36 overflow-hidden bg-transparent ${
        featured ? "sm:h-44" : "sm:h-36"
      }`}
    >
      {pixelLines.map((line, index) => (
        <span
          key={index}
          className="pixel-line"
          style={
            {
              "--line-top": `${line.top}%`,
              "--line-left": `${line.left}%`,
              "--line-width": `${line.width}px`,
              "--line-delay": line.delay,
              "--line-duration": line.duration,
            } as CSSProperties
          }
        />
      ))}
      {featured ? (
        <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-black shadow-[0_18px_50px_rgba(255,255,255,0.12)]">
          <span className="ml-1 h-0 w-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-black" />
        </span>
      ) : (
        <span className="question-drift absolute left-1/2 top-1/2 z-10 grid size-10 place-items-center rounded-full bg-white text-sm font-bold text-black shadow-[0_16px_40px_rgba(255,255,255,0.14)]">
          ?
        </span>
      )}
    </div>
  );
}

export function AutomationContactSection() {
  return (
    <section className="flex h-[90vh] overflow-hidden bg-white px-6 py-8 text-black sm:px-10 lg:py-10 xl:px-[120px]">
      <div className="mx-auto grid w-full max-w-[1500px] gap-10 self-center lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
        <div className="flex flex-col justify-between gap-10">
          <h2 className="max-w-xl text-[44px] font-medium leading-[1.08] tracking-[-0.06em] text-black sm:text-[54px] lg:text-[62px]">
            Tell me what you want to improve.
          </h2>

          <div>
            <p className="text-[18px] font-semibold tracking-[-0.04em]">
              Built with:
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-full border border-black/18 text-[10px] font-black">NEXT</span>
              <span className="grid size-12 place-items-center rounded-full border border-black/18 text-[10px] font-black">PY</span>
            </div>
          </div>
        </div>

        <form action="#" method="post" className="w-full">
          <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-[16px] font-semibold tracking-[-0.04em]">
                Name
              </span>
              <input
                name="name"
                type="text"
                placeholder="Evan"
                className="mt-4 h-8 w-full border-0 border-b border-black/20 bg-transparent px-0 text-[14px] text-black outline-none placeholder:text-black/22 focus:border-black"
              />
            </label>
            <label className="block">
              <span className="text-[16px] font-semibold tracking-[-0.04em]">
                Company
              </span>
              <input
                name="company"
                type="text"
                placeholder="Microsoft"
                className="mt-4 h-8 w-full border-0 border-b border-black/20 bg-transparent px-0 text-[14px] text-black outline-none placeholder:text-black/22 focus:border-black"
              />
            </label>
            <label className="block">
              <span className="text-[16px] font-semibold tracking-[-0.04em]">
                Your Email
              </span>
              <input
                name="email"
                type="email"
                placeholder="evan@microsoft.com"
                className="mt-4 h-8 w-full border-0 border-b border-black/20 bg-transparent px-0 text-[14px] text-black outline-none placeholder:text-black/22 focus:border-black"
              />
            </label>
            <label className="block">
              <span className="text-[16px] font-semibold tracking-[-0.04em]">
                Your Phone
              </span>
              <input
                name="phone"
                type="tel"
                placeholder="Your number phone"
                className="mt-4 h-8 w-full border-0 border-b border-black/20 bg-transparent px-0 text-[14px] text-black outline-none placeholder:text-black/22 focus:border-black"
              />
            </label>
          </div>

          <fieldset className="mt-8">
            <legend className="text-[16px] font-semibold tracking-[-0.04em]">
              I&apos;m interested in...
            </legend>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {contactInterestItems.map((item) => (
                <label key={item} className="cursor-pointer">
                  <input
                    type="checkbox"
                    name="interest"
                    value={item}
                    className="peer sr-only"
                  />
                  <span className="inline-flex h-11 items-center justify-center rounded-full border border-black/20 px-5 text-[15px] font-medium tracking-[-0.04em] transition peer-checked:border-black peer-checked:bg-black peer-checked:text-white hover:border-black">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-8">
            <legend className="text-[16px] font-semibold tracking-[-0.04em]">
              Project Budget (USD)
            </legend>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {budgetItems.map((item) => (
                <label key={item} className="cursor-pointer">
                  <input
                    type="radio"
                    name="budget"
                    value={item}
                    className="peer sr-only"
                  />
                  <span className="inline-flex h-11 w-full items-center justify-center rounded-full border border-black/20 px-6 text-[16px] font-medium tracking-[-0.04em] transition peer-checked:border-black peer-checked:bg-black peer-checked:text-white hover:border-black">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="mt-6 block">
            <span className="text-[16px] font-semibold tracking-[-0.04em]">
              Tell me about your project.
            </span>
            <textarea
              name="project"
              rows={3}
              placeholder="Write something concise..."
              className="mt-4 w-full resize-none border-0 border-b border-black/20 bg-transparent px-0 text-[14px] leading-6 text-black outline-none placeholder:text-black/22 focus:border-black"
            />
          </label>

          <button
            type="submit"
            className="mt-9 inline-flex h-13 w-full max-w-[420px] items-center justify-center rounded-full bg-black text-[18px] font-semibold tracking-[-0.04em] text-white transition hover:-translate-y-0.5 hover:bg-black/84"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export function AiAutomationShowcase() {
  return (
    <>
      <PortraitHero />
      <ProjectShowcaseSection />


      <ServicesSection />




      <AboutMeSection />

      <div id="cta-card" className="reference-projects">
        <CTASection />
      </div>
    </>
  );
}
