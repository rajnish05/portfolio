"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { GlassCard } from "@/components/shared/GlassCard";
import { sectionTitle, fadeInUpShort, staggerContainer, viewportOnce } from "@/lib/motion";

const highlights = [
  {
    title: "React Native Leadership",
    subtitle: "Senior engineer & team lead",
    points: [
      "Lead React Native delivery across gaming and AI products.",
      "Review critical changes, mentor engineers, and improve team practices.",
      "Shape mobile architecture and technical direction for new features.",
    ],
  },
  {
    title: "Product Impact",
    subtitle: "Revenue & engagement",
    points: [
      "Built and scaled apps that contributed to a 30% revenue uplift.",
      "Shipped experiences that improved retention and session length.",
      "Collaborate closely with product/design to balance UX and delivery speed.",
    ],
  },
  {
    title: "Camera, Payments & DevTools",
    subtitle: "Deep platform expertise",
    points: [
      "Implemented Vision Camera pipelines with multi-focus, OCR, and QR/Barcode.",
      "Integrated secure IAP, Paddle, and Stripe subscriptions in production apps.",
      "Created internal tools that speed up debugging, profiling, and releases.",
    ],
  },
];

export function CareerHighlightsSection() {
  return (
    <SectionWrapper id="career-highlights" className="px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-4 text-center text-2xl font-bold md:text-3xl"
          variants={sectionTitle}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          Career Highlights
        </motion.h2>
        <motion.p
          className="mx-auto mb-10 max-w-2xl text-center text-sm text-muted-foreground md:text-base"
          variants={fadeInUpShort}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          A quick snapshot of the outcomes I care about most as a Senior React Native engineer.
        </motion.p>
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {highlights.map((item) => (
            <motion.div key={item.title} variants={fadeInUpShort}>
              <GlassCard className="h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {item.subtitle}
                </p>
                <h3 className="mt-2 text-base font-semibold md:text-lg">{item.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

