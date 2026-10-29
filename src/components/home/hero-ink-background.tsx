"use client";

import { useReducedMotion } from "framer-motion";

const clouds = [
  { color: "#58b5e9", x: 260, y: 300, rx: 480, ry: 290, dx: 170, dy: 220, duration: 23 },
  { color: "#9c7be6", x: 790, y: 240, rx: 420, ry: 360, dx: -240, dy: 180, duration: 29 },
  { color: "#ec8ac5", x: 1170, y: 500, rx: 410, ry: 330, dx: -210, dy: -170, duration: 26 },
  { color: "#6ed0cd", x: 550, y: 820, rx: 490, ry: 280, dx: 230, dy: -210, duration: 31 },
  { color: "#789ce9", x: 720, y: 580, rx: 300, ry: 200, dx: -160, dy: 160, duration: 19 },
];

export default function HeroInkBackground() {
  const reducedMotion = useReducedMotion();
  return (
    <svg aria-hidden="true" className="hero-ink-background" viewBox="0 0 1440 1100" preserveAspectRatio="none" focusable="false">
      <defs>
        <filter id="hero-ink-water" x="-35%" y="-35%" width="170%" height="170%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.005 0.009" numOctaves="3" seed="8" result="currents">
            {!reducedMotion && <animate attributeName="baseFrequency" values="0.005 0.009;0.009 0.005;0.006 0.012;0.005 0.009" dur="12s" repeatCount="indefinite" />}
          </feTurbulence>
          <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="softInk" />
          <feDisplacementMap in="softInk" in2="currents" scale="150" xChannelSelector="R" yChannelSelector="G">
            {!reducedMotion && <animate attributeName="scale" values="110;190;140;110" dur="8s" repeatCount="indefinite" />}
          </feDisplacementMap>
          <feGaussianBlur stdDeviation="5" />
        </filter>
        {clouds.map((cloud, index) => (
          <radialGradient id={`hero-ink-${index}`} key={cloud.color}>
            <stop offset="0" stopColor={cloud.color} stopOpacity="0.88" />
            <stop offset="0.45" stopColor={cloud.color} stopOpacity="0.65" />
            <stop offset="0.78" stopColor={cloud.color} stopOpacity="0.25" />
            <stop offset="1" stopColor={cloud.color} stopOpacity="0" />
          </radialGradient>
        ))}
      </defs>
      <g filter="url(#hero-ink-water)" className="hero-smoke-stream">
        {[...clouds, ...clouds].map((cloud, index) => (
          <ellipse key={`${cloud.color}-${index}`} cx={cloud.x + (index >= clouds.length ? 1800 : 0)} cy={cloud.y} rx={cloud.rx} ry={cloud.ry} fill={`url(#hero-ink-${index % clouds.length})`} style={{ mixBlendMode: "multiply" }}>
            {!reducedMotion && <>

              <animate attributeName="cy" values={`${cloud.y};${cloud.y + cloud.dy};${cloud.y - cloud.dy * 0.4};${cloud.y}`} dur={`${(cloud.duration + 5) / 3}s`} repeatCount="indefinite" calcMode="spline" keyTimes="0;0.33;0.66;1" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1" />
              <animate attributeName="ry" values={`${cloud.ry};${cloud.ry * 0.7};${cloud.ry * 1.18};${cloud.ry}`} dur={`${(cloud.duration + 2) / 3}s`} repeatCount="indefinite" />
            </>}
          </ellipse>
        ))}
      </g>
    </svg>
  );
}
