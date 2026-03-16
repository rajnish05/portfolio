"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { experience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <SectionWrapper id="experience" className="px-4 md:px-6">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-12 text-center text-2xl font-bold md:text-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-translate-x-px" />
          {experience.map((job, i) => (
            <motion.div
              key={job.role + job.company}
              className="relative flex gap-8 pb-12 last:pb-0 md:gap-12"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="absolute left-4 h-3 w-3 -translate-x-1/2 rounded-full bg-accent md:left-1/2"
                style={{ top: "0.4rem" }}
              />
              <div
                className={`ml-10 flex-1 md:ml-0 ${
                  i % 2 === 1 ? "md:order-2 md:pl-12" : "md:pr-12 md:text-right"
                }`}
              >
                <div
                  className={`flex items-start gap-3 ${
                    i % 2 === 1 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {job.logo && (
                    <div className="relative mt-1 h-9 w-24 shrink-0 opacity-80">
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div className={i % 2 === 1 ? "md:text-left" : ""}>
                    <p className="text-sm font-medium text-accent">
                      {job.period}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">{job.role}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                </div>
                <ul
                  className={`mt-3 space-y-1 text-sm text-muted-foreground ${
                    i % 2 === 1 ? "md:list-inside" : "md:list-inside md:text-right"
                  }`}
                >
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="hidden flex-1 md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
