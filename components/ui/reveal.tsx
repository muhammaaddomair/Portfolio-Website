"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp } from "@/lib/animations";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
