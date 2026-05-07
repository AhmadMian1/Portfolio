"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export function GradientButton({ children, className, href, onClick }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-slate-950",
    "bg-gradient-to-r from-cyan-400 to-indigo-400 transition-all duration-300",
    "hover:shadow-[0_0_32px_rgba(34,211,238,0.45)] hover:scale-[1.01]",
    className,
  );

  if (href) {
    return (
      <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href={href} className={classes}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} onClick={onClick} className={classes}>
      {children}
    </motion.button>
  );
}
