"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type ButtonHTMLAttributes, type MouseEventHandler, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  labelClassName?: string;
  size?: "sm" | "md" | "lg";
  active?: boolean;
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  target?: string;
  rel?: string;
};

const sizeClasses = {
  sm: "gap-2 px-3.5 py-2 text-xs",
  md: "gap-3 px-5 py-3 text-sm",
  lg: "gap-3 px-6 py-3.5 text-sm"
};

function TextTrack({ children, className }: { children: ReactNode; className?: string }) {
  if (typeof children !== "string") {
    return <>{children}</>;
  }

  return (
    <span className={cn("header-text-wrap", className)}>
      <span className="header-text-track">
        <span className="header-text-line">{children}</span>
        <span className="header-text-line">{children}</span>
      </span>
    </span>
  );
}

export function Button({
  children,
  href,
  className,
  labelClassName,
  size = "md",
  active = false,
  fullWidth = false,
  onClick,
  type = "button",
  target,
  rel
}: ButtonProps) {
  const classes = cn(
    "header-pill pp-mono inline-flex items-center justify-center overflow-hidden uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5",
    sizeClasses[size],
    fullWidth && "w-full",
    active && "border-[#FE5A37] bg-[#FE5A37]",
    className
  );

  const content = <TextTrack className={labelClassName}>{children}</TextTrack>;
  const external = Boolean(href && /^(https?:)?\/\//.test(href));

  if (href && external) {
    return (
      <motion.a whileHover={{ y: -2 }} transition={{ duration: 0.22, ease: "easeOut" }} href={href} target={target} rel={rel} className={classes}>
        {content}
      </motion.a>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.22, ease: "easeOut" }} className={fullWidth ? "w-full" : undefined}>
        <Link href={href} target={target} rel={rel} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      type={type}
      onClick={onClick}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
