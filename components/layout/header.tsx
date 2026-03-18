"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [projectFormOpen, setProjectFormOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!projectFormOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProjectFormOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [projectFormOpen]);

  return (
    <>
      <motion.header
        animate={{
          y: scrolled ? -2 : 0
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute left-3 right-3 top-3 z-50 sm:left-5 sm:right-5 sm:top-5"
      >
        <div
          className={cn(
            "flex items-center justify-between gap-3 rounded-[1.1rem] border px-3 py-3 transition-all duration-300 sm:gap-4 sm:px-4 sm:py-4 md:rounded-[1.3rem] md:gap-6 md:px-8 md:py-5",
            scrolled
              ? "border-white/10 bg-[rgba(28,20,18,0.74)] shadow-[0_18px_60px_rgba(0,0,0,0.26)] backdrop-blur-[22px]"
              : "border-white/10 bg-[rgba(28,20,18,0.58)] shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-[22px]"
          )}
        >
          <Link href="/" className="flex min-w-0 items-center gap-3 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-base sm:h-10 sm:w-10 sm:text-lg">
              M
            </span>
            <div className="min-w-0">
              <div className="truncate text-base font-semibold tracking-tight sm:text-lg md:text-xl">{siteConfig.name}</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={active}
                  className={cn(
                    "pp-mono relative text-sm uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:text-[#FE5A37]",
                    active && "text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="header-pill pp-mono hidden gap-2 px-3 py-2.5 text-xs uppercase tracking-[0.14em] sm:inline-flex md:px-4 md:py-3 md:text-sm"
              aria-label="Select language"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="12" cy="12" r="8.5" />
                <path d="M3.8 12h16.4M12 3.5c2.4 2.3 3.7 5.3 3.7 8.5S14.4 18.2 12 20.5M12 3.5C9.6 5.8 8.3 8.8 8.3 12s1.3 6.2 3.7 8.5" />
              </svg>
              <span className="header-text-wrap">
                <span className="header-text-track">
                  <span className="header-text-line">EN</span>
                  <span className="header-text-line">EN</span>
                </span>
              </span>
            </button>
            <Button onClick={() => setProjectFormOpen(true)} className="gap-2 px-3 py-2.5 text-xs sm:gap-3 sm:px-5 sm:py-3 sm:text-sm">
              <span className="header-text-wrap">
                <span className="header-text-track">
                  <span className="header-text-line">Start a Project</span>
                  <span className="header-text-line">Start a Project</span>
                </span>
              </span>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M5 12h12" />
                <path d="m13 7 5 5-5 5" />
              </svg>
            </Button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {projectFormOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[rgba(8,6,5,0.58)] p-5 backdrop-blur-[10px]"
            onClick={() => setProjectFormOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[calc(100svh-2.5rem)] w-full max-w-[620px] overflow-y-auto rounded-[1.4rem] border border-white/10 bg-[rgba(28,20,18,0.9)] p-5 text-white shadow-[0_30px_100px_rgba(0,0,0,0.34)] backdrop-blur-[26px] sm:p-6 md:rounded-[1.8rem] md:p-8"
            >
              <div className="flex items-start justify-between gap-4 sm:gap-6">
                <div>
                  <p className="pp-mono text-[11px] uppercase tracking-[0.22em] text-white/55">Start a Project</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl md:text-4xl">
                    Let&apos;s talk about what you&apos;re building.
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 md:text-base">
                    Share a quick outline of your idea, platform, or system needs and I&apos;ll follow up with the next
                    step.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setProjectFormOpen(false)}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white/78 transition-colors duration-300 hover:border-[#FE5A37] hover:text-[#FE5A37]"
                  aria-label="Close project form"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="m7 7 10 10" />
                    <path d="M17 7 7 17" />
                  </svg>
                </button>
              </div>

              <form className="mt-6 sm:mt-8">
                <div className="grid gap-6">
                  <div>
                    <input
                      type="text"
                      className="h-12 w-full rounded-[1rem] border border-white/12 bg-white/5 px-4 text-[15px] text-white outline-none transition-all duration-300 placeholder:text-white/42 focus:border-[#FE5A37] focus:bg-white/8 sm:h-14"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      className="h-12 w-full rounded-[1rem] border border-white/12 bg-white/5 px-4 text-[15px] text-white outline-none transition-all duration-300 placeholder:text-white/42 focus:border-[#FE5A37] focus:bg-white/8 sm:h-14"
                      placeholder="Your Email"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={5}
                      className="w-full rounded-[1rem] border border-white/12 bg-white/5 px-4 py-4 text-[15px] text-white outline-none transition-all duration-300 placeholder:text-white/42 focus:border-[#FE5A37] focus:bg-white/8"
                      placeholder="Your Message"
                    />
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-white/48 sm:max-w-[55%]">Responses usually begin with a focused project conversation.</p>
                    <Button type="submit" className="h-11 w-full whitespace-nowrap gap-3 px-5 py-2 text-sm sm:w-auto">
                      Send Inquiry
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
                        <path d="M5 12h12" />
                        <path d="m13 7 5 5-5 5" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
