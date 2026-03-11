import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="space-y-12">
        {(eyebrow || title || description) && (
          <div className="max-w-3xl space-y-5">
            {eyebrow ? (
              <p className="text-xs font-medium uppercase tracking-wideish text-[var(--color-accent)]">{eyebrow}</p>
            ) : null}
            {title ? (
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-5xl">{title}</h2>
            ) : null}
            {description ? (
              <p className="text-base leading-7 text-[var(--color-text-muted)] md:text-lg">{description}</p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
