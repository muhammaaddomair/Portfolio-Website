"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { siteConfig } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="p-5">
      <div className="relative h-[calc(100vh-40px)] overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.36)]">
        <Header />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative h-full overflow-hidden px-5 pb-10 pt-32 md:px-6 md:pb-12 md:pt-32"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/backgrounds/hero2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.48)_42%,rgba(0,0,0,0.3)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.06),transparent_28%),linear-gradient(180deg,rgba(6,6,6,0.34)_0%,rgba(0,0,0,0.22)_100%)]" />
          <div className="relative grid h-full gap-6 lg:grid-cols-[0.98fr,1.02fr] lg:items-center">
            <div className="mx-auto flex w-full max-w-2xl items-center self-center pt-24 md:pt-28">
              <div>
                <motion.p
                  variants={fadeUp}
                  className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white"
                >
                  <span>[</span>
                  Digital Systems Architect
                  <span>]</span>
                </motion.p>
                <motion.h1
                  variants={fadeUp}
                  className="mt-8 text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-7xl"
                >
                  Systems
                  <br />
                  That Scale
                </motion.h1>
                <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg leading-8 text-white">
                  {siteConfig.name} designs high-leverage digital platforms, backend systems, and automation architecture
                  for companies that need technical authority, clarity, and execution at a premium level.
                </motion.p>
                <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
                  <Button href="/projects" className="bg-white text-[#101010] hover:bg-[#f2ece4]">
                    View Projects
                  </Button>
                  <Button
                    href="/contact"
                    variant="secondary"
                    className="border-white/20 bg-black text-white hover:border-white/40 hover:text-white"
                  >
                    Get In Touch
                  </Button>
                </motion.div>
                <motion.p variants={fadeUp} className="mt-24 text-sm font-medium text-white">
                  Scroll for more
                </motion.p>
              </div>
            </div>
            <motion.div variants={fadeUp} className="hidden lg:block" />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(0,0,0,0.38),transparent)]" />
        </motion.div>
      </div>
    </section>
  );
}
