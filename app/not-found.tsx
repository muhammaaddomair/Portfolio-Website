import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-32 md:py-40">
      <div className="premium-card-strong max-w-3xl space-y-6 p-10 md:p-12">
        <p className="text-xs font-medium uppercase tracking-wideish text-[var(--color-accent)]">404</p>
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-text)] md:text-6xl">Requested page not found</h1>
        <p className="text-base leading-7 text-[var(--color-text-muted)] md:text-lg">
          The page may have moved, the link may be outdated, or the requested route has not been published yet.
        </p>
        <Link href="/" className="button-secondary inline-flex rounded-full px-6 py-3 text-sm font-medium">
          Return Home
        </Link>
      </div>
    </Container>
  );
}
