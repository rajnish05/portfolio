"use client";

import { motion } from "framer-motion";
import { ExternalLink, Braces, QrCode, Code } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { GlassCard } from "@/components/shared/GlassCard";
import { developerTools } from "@/data/tools";
import { cn } from "@/lib/utils";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Braces,
  QrCode,
  Code,
};

export function DeveloperToolsSection() {
  return (
    <SectionWrapper id="tools" className="px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-4 text-center text-2xl font-bold md:text-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Developer Tools Playground
        </motion.h2>
        <motion.p
          className="mb-12 text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Tools I built for developers and daily workflows.
        </motion.p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {developerTools.map((tool, i) => {
            const Icon = icons[tool.icon] ?? Code;
            return (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="flex h-full flex-col">
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold">{tool.title}</h3>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {tool.description}
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    {tool.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:underline"
                  >
                    Open tool
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
