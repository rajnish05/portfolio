"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { GlassCard } from "@/components/shared/GlassCard";
import { highlights } from "@/data/highlights";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function QuickHighlights() {
  return (
    <SectionWrapper id="highlights" className="px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-12 text-center text-2xl font-bold md:text-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Quick Highlights
        </motion.h2>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {highlights.map((h) => (
            <motion.div key={h.label} variants={item}>
              <GlassCard className="h-full flex flex-col justify-center">
                <p className="text-2xl font-bold text-accent md:text-3xl">
                  {h.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {h.label}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
