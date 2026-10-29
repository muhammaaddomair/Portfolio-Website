"use client";

import Lottie from "lottie-react";

import RobotAnimation from "../../../public/animations/robot.json";
import { useModals } from "@/providers/modals-provider";

export default function StickyRobot() {
  const { openConnectModal } = useModals();

  return (
    <button
      type="button"
      onClick={openConnectModal}
      aria-label="Start a conversation"
      className="group fixed bottom-9 right-8 z-40 select-none rounded-full transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <div
        className="md:w-24 md:h-24 w-18 h-18 transform-gpu will-change-transform"
      >
        <Lottie
          aria-hidden="true"
          animationData={RobotAnimation}
          loop
          autoplay
          rendererSettings={{
            preserveAspectRatio: "xMidYMid meet",
          }}
        />
      </div>
      <span className="pointer-events-none absolute right-0 bottom-full mb-1 whitespace-nowrap rounded-md bg-black/80 px-2.5 py-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        Let&apos;s talk
      </span>
    </button>
  );
}
