"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

type MotionGroupProps = {
  children: ReactNode;
  className?: string;
};

export function MotionGroup({ children, className }: MotionGroupProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
