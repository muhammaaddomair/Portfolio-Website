"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-11 w-11 rounded-full border border-white/10 bg-white/5" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[var(--color-border-strong)] bg-[var(--color-card)]/70 text-[var(--color-text)] shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[0_0_0_1px_rgba(184,150,46,0.18),0_14px_38px_rgba(0,0,0,0.18)]"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0.92,
          rotate: isDark ? -10 : 0
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative h-5 w-5"
      >
        <motion.span
          initial={false}
          animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0.6 : 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2.4M12 19.1v2.4M4.93 4.93l1.7 1.7M17.37 17.37l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.93 19.07l1.7-1.7M17.37 6.63l1.7-1.7" />
          </svg>
        </motion.span>
        <motion.span
          initial={false}
          animate={{ opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.6 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M20.5 14.4A8.6 8.6 0 1 1 9.6 3.5a7.2 7.2 0 0 0 10.9 10.9Z" />
          </svg>
        </motion.span>
      </motion.div>
    </button>
  );
}
