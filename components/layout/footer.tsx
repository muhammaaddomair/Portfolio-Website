import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wideish text-[var(--color-text)]">{siteConfig.name}</p>
          <p className="text-sm leading-6 text-[var(--color-text-muted)]">{siteConfig.tagline}</p>
        </div>
        <div className="space-y-4">
          <nav className="flex flex-wrap gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-text-muted)]">Independent consulting practice</p>
        </div>
      </Container>
    </footer>
  );
}
