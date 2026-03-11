"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{
        y: scrolled ? -2 : 0
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute left-5 right-5 top-5 z-50"
    >
      <div
        className={cn(
          "flex items-center justify-between gap-6 rounded-[1.3rem] border px-6 py-5 transition-all duration-300 md:px-8",
          scrolled
            ? "border-white/10 bg-[rgba(28,20,18,0.74)] shadow-[0_18px_60px_rgba(0,0,0,0.26)] backdrop-blur-[22px]"
            : "border-white/10 bg-[rgba(28,20,18,0.58)] shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-[22px]"
        )}
      >
        <Link href="/" className="flex min-w-0 items-center gap-3 text-white">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-lg">
            M
          </span>
          <div>
            <div className="text-xl font-semibold tracking-tight">{siteConfig.name}</div>
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
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="header-pill pp-mono gap-2 px-4 py-3 text-sm uppercase tracking-[0.14em]"
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
          <Link
            href="/contact"
            className="header-pill pp-mono gap-3 px-5 py-3 text-sm uppercase tracking-[0.14em] transition-transform duration-300 hover:-translate-y-0.5"
          >
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
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
