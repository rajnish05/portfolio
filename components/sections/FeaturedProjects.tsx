"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { GlassCard } from "@/components/shared/GlassCard";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <SectionWrapper id="projects" className="px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Section 03 — Projects
        </motion.h2>
        <motion.p
          className="mb-10 text-center text-2xl font-bold md:text-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Project Work
        </motion.p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <GlassCard className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02]">
                <div className="relative h-32 overflow-hidden rounded-[1rem] bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-sky-500/30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(15,23,42,0.4),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(15,23,42,0.7),transparent_55%)]" />
                  <div className="absolute inset-0 translate-y-4 bg-[linear-gradient(to_right,rgba(255,255,255,0.35),transparent_60%)] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 text-xs font-medium text-slate-100">
                    {project.role}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold md:text-lg">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground md:text-sm">
                    {project.description}
                  </p>
                  {project.outcome && (
                    <p className="mt-3 text-xs text-emerald-400/90">
                      Outcome: {project.outcome}
                    </p>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-slate-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-3 text-xs md:text-sm">
                    
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
