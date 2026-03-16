"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { GlassCard } from "@/components/shared/GlassCard";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";
import { sectionTitle, viewportOnce, staggerContainer, fadeInUpShort } from "@/lib/motion";

export function SkillsSection() {
  const [activeGroup, setActiveGroup] = useState(0);
  const group = skillGroups[activeGroup];

  return (
    <SectionWrapper id="skills" className="px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-12 text-center text-2xl font-bold md:text-3xl"
          variants={sectionTitle}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          Skills
        </motion.h2>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {skillGroups.map((g, i) => (
            <button
              key={g.title}
              type="button"
              onClick={() => setActiveGroup(i)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-medium transition md:text-sm",
                activeGroup === i
                  ? "bg-accent text-accent-foreground"
                  : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
              )}
            >
              {g.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup}
            variants={staggerContainer(0.06, 0.05)}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {group.items.map((skill) => (
                <motion.div key={skill} variants={fadeInUpShort}>
                  <GlassCard className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-4 py-3 md:px-5 md:py-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {group.title}
                    </p>
                    <p className="mt-2 text-sm font-semibold md:text-base">
                      {skill}
                    </p>
                    <p className="mt-2 text-[11px] text-muted-foreground md:text-xs">
                      Part of my core {group.title.toLowerCase()} toolkit on real
                      projects.
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
