"use client";

import { useEffect, useRef } from "react";

interface TransparentVideoProps {
  src: string;
  className?: string;
}

export function TransparentVideo({ src, className }: TransparentVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const updatePlayback = () => {
      if (visible && !document.hidden && !reducedMotion.matches) {
        void video.play().catch(() => { /* Respect browser autoplay restrictions. */ });
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    }, { threshold: 0.05 });
    observer.observe(video);
    document.addEventListener("visibilitychange", updatePlayback);
    reducedMotion.addEventListener("change", updatePlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      reducedMotion.removeEventListener("change", updatePlayback);
      video.pause();
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <video
        ref={videoRef}
        src={src}
        className="pointer-events-none absolute inset-0 h-full w-full object-contain mix-blend-screen"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="AI automation product preview"
      />
    </div>
  );
}
