import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wideish text-white">{siteConfig.name}</p>
          <p className="text-sm leading-6 text-white/60">{siteConfig.tagline}</p>
        </div>
        <div className="space-y-4">
          <nav className="flex flex-wrap gap-5">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/60 transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs uppercase tracking-[0.22em] text-white/40">Independent consulting practice</p>
        </div>
      </Container>
    </footer>
  );
}
