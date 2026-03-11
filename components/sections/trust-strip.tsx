"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { trustItems } from "@/lib/site";

export function TrustStrip() {
  const items = [...trustItems, ...trustItems];

  return (
    <section className="border-y border-[var(--color-border)] py-8">
      <Container className="space-y-5 overflow-hidden">
        <p className="max-w-3xl text-sm leading-6 text-[var(--color-text-muted)]">
          Systems delivered across SaaS platforms, internal tools, automation infrastructure, and enterprise software
          environments.
        </p>
        <div className="overflow-hidden">
          <motion.div
            className="flex min-w-max gap-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {items.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text)] backdrop-blur-xl"
                style={{
                  borderColor: "var(--color-border)",
                  background: "color-mix(in srgb, var(--color-card) 72%, transparent)"
                }}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
