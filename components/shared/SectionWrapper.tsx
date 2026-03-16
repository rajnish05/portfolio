"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export function SectionWrapper({
  id,
  className,
  children,
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={cn("py-8 md:py-10", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
      variants={defaultVariants}
    >
      {children}
    </motion.section>
  );
}
