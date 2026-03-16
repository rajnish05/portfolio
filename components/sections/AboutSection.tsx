"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { fadeInUpShort, sectionTitle, viewportOnce, staggerContainer } from "@/lib/motion";

const summary = [
  "I'm a Senior React Native Engineer with over six years of experience designing, building, and shipping production mobile apps for Android and iOS. My work spans consumer products, gaming, and AI-powered camera experiences.",
  "I specialize in secure subscription flows, WhatsApp-style real-time chat and stories, and advanced Vision Camera pipelines for multi-focus capture, OCR, and QR/Barcode scanning. I care deeply about performance, smooth animations, and a polished UX.",
  "Beyond feature delivery, I lead teams, shape mobile architecture, and build internal tools that make developers faster—from debugging and profiling to release automation—so teams can ship high-quality apps with confidence.",
];

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="px-4 md:px-6">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-8 text-2xl font-bold md:text-3xl"
          variants={sectionTitle}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          About
        </motion.h2>
        <motion.div
          className="space-y-4 text-sm text-muted-foreground md:text-base"
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {summary.map((p, i) => (
            <motion.p
              key={i}
              className="leading-relaxed max-w-2xl"
              variants={fadeInUpShort}
            >
              {p}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
