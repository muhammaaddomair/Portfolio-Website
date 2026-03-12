import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";

export function AboutSection() {
  return (
    <section className="bg-[var(--color-bg)] px-5 pb-5">
      <div className="min-h-[calc(100vh-40px)] rounded-[2rem] bg-[var(--color-bg)] text-[#151515]">
        <Container className="flex min-h-[calc(100vh-40px)] items-center justify-center py-20">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="mb-6 flex flex-col items-center">
                <h2 className="pp-mono text-[80px] font-normal uppercase leading-[1] tracking-[-0.04em] text-black [text-shadow:0_-10px_28px_rgba(254,90,55,0.28),0_0_12px_rgba(254,90,55,0.18)]">
                  About Me
                </h2>
                <div className="relative mt-2 h-1.5 w-44 rounded-full bg-[#FE5A37] shadow-[0_0_14px_rgba(254,90,55,0.92),0_0_34px_rgba(254,90,55,0.62),0_-12px_36px_rgba(254,90,55,0.22)]">
                  <div className="absolute left-1/2 top-1/2 h-14 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FE5A37]/45 blur-3xl" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.04}>
              <p className="mx-auto max-w-3xl text-2xl font-semibold leading-[1.45] text-black">
                I design software systems, automation workflows, and digital infrastructure that help modern businesses
                operate with more clarity and scale.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-black">
                <p>
                My work sits at the intersection of product engineering, backend architecture, and process automation.
                I focus on building systems that are commercially useful, technically durable, and easier for teams to
                operate over time.
                </p>
                <p>
                That means less platform sprawl, clearer technical direction, and infrastructure decisions that support
                growth instead of becoming friction later. The goal is always the same: turn complexity into controlled,
                scalable execution.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  );
}
