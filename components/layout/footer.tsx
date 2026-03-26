"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GitHubIcon, IndeedIcon, LinkedInIcon, XIcon } from "@/components/icons/social-icons";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { navItems, siteConfig } from "@/lib/site";

type FooterProps = {
  embedded?: boolean;
};

const socialItems = [
  {
    href: siteConfig.socialLinks.github,
    label: "GitHub",
    Icon: GitHubIcon
  },
  {
    href: siteConfig.socialLinks.linkedin,
    label: "LinkedIn",
    Icon: LinkedInIcon
  },
  {
    href: siteConfig.socialLinks.indeed,
    label: "Indeed",
    Icon: IndeedIcon
  },
  {
    href: siteConfig.socialLinks.x,
    label: "X",
    Icon: XIcon
  }
];

export function Footer({ embedded = false }: FooterProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = pathname === "/";
  const isCvPage = pathname === "/cv";

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  if ((isHomePage || isCvPage) && !embedded) {
    return null;
  }

  const footerPanel = (
    <div className="rounded-[1.3rem] border border-white/10 bg-[rgba(28,20,18,0.82)] px-4 py-4 text-white shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-[22px] sm:px-5 md:px-8 md:py-5">
      <div className="relative flex min-h-[72px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-3 md:justify-start">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:h-14 sm:w-14">
              <Image
                src="/images/logo.png"
                alt={`${siteConfig.name} logo`}
                width={88}
                height={88}
                className="h-16 w-16 object-contain sm:h-20 sm:w-20"
              />
            </span>
            <div>
              <p className="text-base font-semibold tracking-tight">{siteConfig.name}</p>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 hover:border-[#FE5A37] hover:text-[#FE5A37]"
              aria-label={mobileMenuOpen ? "Close footer menu" : "Open footer menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-footer-menu"
            >
              <span className="flex h-4 w-5 flex-col justify-between">
                <span
                  className={cn(
                    "block h-px w-full bg-current transition-transform duration-300",
                    mobileMenuOpen && "translate-y-[7px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "block h-px w-full bg-current transition-opacity duration-300",
                    mobileMenuOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "block h-px w-full bg-current transition-transform duration-300",
                    mobileMenuOpen && "-translate-y-[7px] -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </div>

        <nav className="hidden flex-wrap items-center gap-x-5 gap-y-3 md:justify-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="pp-mono text-[12px] uppercase tracking-[0.18em] text-white/72 transition-colors duration-300 hover:text-[#FE5A37] sm:text-[13px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-wrap items-center gap-3 md:flex">
          {socialItems.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FE5A37] hover:bg-white"
            >
              <Icon className="h-[20px] w-[20px]" />
            </Link>
          ))}
        </div>

        <AnimatePresence>
          {mobileMenuOpen ? (
            <motion.div
              id="mobile-footer-menu"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute bottom-[calc(100%+0.75rem)] right-0 z-10 w-[min(280px,calc(100vw-3rem))] md:hidden"
            >
              <div className="rounded-[1.2rem] border border-white/10 bg-[rgba(28,20,18,0.94)] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-[22px]">
                <nav className="flex flex-col">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="pp-mono rounded-[0.95rem] px-4 py-3 text-sm uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-white/5 hover:text-[#FE5A37]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-3 flex items-center gap-3 border-t border-white/10 pt-3">
                  {socialItems.map(({ href, label, Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      aria-label={label}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FE5A37] hover:bg-white"
                    >
                      <Icon className="h-[20px] w-[20px]" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );

  if (embedded) {
    return footerPanel;
  }

  return (
    <footer className="px-5 pb-5 pt-8 md:pt-10">
      <Container>{footerPanel}</Container>
    </footer>
  );
}
