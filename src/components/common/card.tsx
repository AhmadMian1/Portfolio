import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-[0_10px_45px_rgba(2,6,23,0.35)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
