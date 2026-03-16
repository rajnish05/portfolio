"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

export function GlassCard({
  className,
  children,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-xl p-6",
        hover &&
          "transition-all duration-300 hover:scale-[1.02] hover:border-white/15 hover:shadow-lg hover:shadow-accent/5",
        className
      )}
      whileHover={hover ? { y: -2 } : undefined}
    >
      {children}
    </motion.div>
  );
}
