import { ChevronRight } from "lucide-react";
import Link from "next/link";

type CtaSectionProps = {
  title?: string;
  description?: string;
  buttonText?: string;
};

export function CtaSection({
  title = "Build Your Next System",
  description = "Whether you need automation, infrastructure, security, or a growth system, our team can map the right architecture and build path. Click the button below to request an appointment.",
  buttonText = "Get in Touch",
}: CtaSectionProps) {
  const isLegacyAutomationCta = title.includes("Automation");
  const displayTitle = isLegacyAutomationCta
    ? "Let's build something meaningful."
    : title;
  const displayDescription = isLegacyAutomationCta
    ? "I'm open to software engineering opportunities, technical collaborations, and interesting projects. If you're looking for someone who can build across the stack and turn ideas into production-ready systems, let's talk."
    : description;

  return (
    <section className="bg-white px-5 pb-0 pt-0 text-black sm:px-8 xl:px-16">
      <div className="relative flex min-h-[60vh] items-center justify-center overflow-hidden rounded-md bg-white px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.42),transparent_46%),radial-gradient(circle_at_18%_90%,rgba(192,132,252,0.25),transparent_34%),radial-gradient(circle_at_82%_82%,rgba(217,70,239,0.16),transparent_32%)]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <h2 className="text-5xl font-medium leading-none tracking-[-0.045em] text-black sm:text-6xl lg:text-7xl">
            {displayTitle}
          </h2>
          <p className="mx-auto mt-8 max-w-4xl text-lg font-semibold leading-8 text-black/60 sm:text-xl">
            {displayDescription}
          </p>
          <Link
            href="#contact"
            className="mt-9 inline-flex h-14 items-center justify-center gap-2 rounded bg-blue-600 px-7 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
          >
            {buttonText}
            <ChevronRight className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
