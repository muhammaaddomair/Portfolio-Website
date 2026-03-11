"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "button-primary"
      : "button-secondary";

  return (
    <motion.div whileHover={{ y: -4, scale: 1.03 }} transition={{ duration: 0.22, ease: "easeOut" }}>
      <Link
        href={href}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
          styles,
          className
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
