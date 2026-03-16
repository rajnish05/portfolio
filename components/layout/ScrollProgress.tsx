"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  );
}
