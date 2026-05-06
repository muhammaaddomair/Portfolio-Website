import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";

const processSteps = [
  "Understand business workflow",
  "Design scalable system architecture",
  "Build MVP quickly",
  "Deploy on production VPS",
  "Provide maintenance and improvements"
];

const problemSolutions = [
  ["Manual billing", "Automated invoicing systems"],
  ["No email system", "High-volume outbound infrastructure"],
  ["Disconnected operations", "Centralized ERP systems"],
  ["Spreadsheet workflows", "Custom internal tools"]
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#f6ead8] px-5 pb-5">
      <div className="rounded-[2rem] bg-[#f6ead8] text-[#151515]">
        <Container className="py-14 sm:py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="mb-6 flex flex-col items-center">
                <h2 className="pp-mono text-4xl font-normal uppercase leading-[1] tracking-[-0.04em] text-black [text-shadow:0_-10px_28px_rgba(254,90,55,0.28),0_0_12px_rgba(254,90,55,0.18)] sm:text-6xl md:text-[80px]">
                  How I Work
                </h2>
                <div className="relative mt-2 h-1.5 w-28 rounded-full bg-[#FE5A37] shadow-[0_0_14px_rgba(254,90,55,0.92),0_0_34px_rgba(254,90,55,0.62),0_-12px_36px_rgba(254,90,55,0.22)] sm:w-36 md:w-44">
                  <div className="absolute left-1/2 top-1/2 h-10 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FE5A37]/45 blur-3xl sm:h-12 sm:w-52 md:h-14 md:w-60" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.04}>
              <p className="mx-auto max-w-3xl text-center text-lg font-semibold leading-[1.45] text-black sm:text-xl md:text-2xl">
                I work with businesses that need custom software, automation, backend infrastructure, and practical
                systems that can move from idea to daily use.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-10 grid gap-4 md:grid-cols-5">
                {processSteps.map((step, index) => (
                  <div key={step} className="rounded-[1rem] bg-white/55 p-5 shadow-[0_16px_34px_rgba(17,17,17,0.04)]">
                    <p className="pp-mono text-[11px] uppercase tracking-[0.2em] text-[#FE5A37]">0{index + 1}</p>
                    <p className="mt-4 text-base font-semibold leading-6 text-black">{step}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
                <div>
                  <p className="pp-mono text-[11px] uppercase tracking-[0.22em] text-[#8b8175]">Problems I Solve</p>
                  <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-black md:text-5xl">
                    I help businesses replace manual work with reliable systems.
                  </h3>
                </div>

                <div className="grid gap-3">
                  {problemSolutions.map(([problem, solution]) => (
                    <div key={problem} className="grid gap-3 rounded-[1rem] bg-white/60 p-4 shadow-[0_16px_34px_rgba(17,17,17,0.04)] sm:grid-cols-[0.85fr,1.15fr] sm:items-center">
                      <p className="font-semibold text-black">{problem}</p>
                      <p className="text-sm font-medium leading-6 text-[#4d463f]">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mx-auto mt-14 max-w-3xl rounded-[1.2rem] bg-black px-6 py-7 text-center text-white shadow-[0_24px_54px_rgba(17,17,17,0.16)]">
                <p className="text-xl font-semibold leading-8 md:text-2xl">
                  Built and deployed production systems currently used in real environments.
                </p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  These systems are actively used by small businesses for daily operations.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  );
}
