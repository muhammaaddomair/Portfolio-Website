"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitHubIcon, IndeedIcon, LinkedInIcon, XIcon } from "@/components/icons/social-icons";
import { Container } from "@/components/ui/container";
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
  const isHomePage = pathname === "/";
  const isCvPage = pathname === "/cv";

  if ((isHomePage || isCvPage) && !embedded) {
    return null;
  }

  const footerPanel = (
    <div className="rounded-[1.3rem] border border-white/10 bg-[rgba(28,20,18,0.82)] px-4 py-4 text-white shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-[22px] sm:px-5 md:px-8 md:py-5">
      <div className="flex min-h-[72px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-base font-semibold">
            M
          </span>
          <div>
            <p className="text-base font-semibold tracking-tight">{siteConfig.name}</p>
            <p className="pp-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
              Independent consulting practice
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 md:justify-center">
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

        <div className="flex flex-wrap items-center gap-3">
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
