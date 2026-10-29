import { TransparentVideo } from "@/components/media/transparent-video";
import Image from "next/image";

type HeroAgentTabsProps = {
  visual?: "video" | "robot";
  title?: string;
  description?: string;
};

export function HeroAgentTabs({
  visual = "video",
  title = "I build practical software\nthat solves real problems.",
  description = "From backend APIs and SaaS platforms to AI-powered applications and automation, I build practical software that solves real problems. I focus on clean architecture, reliable systems, and products that are built to work in the real world.",
}: HeroAgentTabsProps) {
  return (
    <div className="relative z-10 mx-auto grid w-full max-w-[1280px] items-center gap-10 py-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-0">
      <div className="text-left">
        <h2
          className="max-w-xl whitespace-pre-line text-[36px] font-extrabold leading-none tracking-normal text-white lg:whitespace-pre"
        >
          {title}
        </h2>
        <p className="mt-6 max-w-xl text-[18px] leading-8 text-white/68">
          {description}
        </p>
      </div>

      <div className="relative min-h-[18rem] lg:min-h-[24rem]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {visual === "robot" ? (
            <div className="relative flex w-full max-w-[28rem] items-center justify-center overflow-hidden bg-black [mask-image:radial-gradient(ellipse_at_center,black_46%,rgba(0,0,0,0.86)_62%,transparent_82%)]">
              <Image
                src="/assets/animations/robot-assistant.gif"
                alt="AI automation robot assistant"
                width={980}
                height={700}
                unoptimized
                className="aspect-[1.35/1] w-full object-cover object-center brightness-110 contrast-125 drop-shadow-[0_32px_90px_rgba(37,99,235,0.28)]"
              />
            </div>
          ) : (
            <TransparentVideo
              src="/assets/videos/home-hero-primary.mp4"
              className="aspect-video w-full drop-shadow-[0_28px_70px_rgba(229,9,20,0.22)]"
            />
          )}
        </div>
      </div>
    </div>
  );
}
