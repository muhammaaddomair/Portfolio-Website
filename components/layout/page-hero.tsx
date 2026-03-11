import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHero({ eyebrow, title, description, actions }: PageHeroProps) {
  return (
    <section className="border-b border-[var(--color-border)] py-24 md:py-32">
      <div className="max-w-4xl space-y-6">
        <p className="text-xs font-medium uppercase tracking-wideish text-[var(--color-accent)]">{eyebrow}</p>
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-text)] md:text-6xl">{title}</h1>
        <p className="max-w-3xl text-base leading-7 text-[var(--color-text-muted)] md:text-lg">{description}</p>
        {actions ? <div className="flex flex-wrap gap-4 pt-2">{actions}</div> : null}
      </div>
    </section>
  );
}
