"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowDown, FileDown } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { fadeInUpShort, sectionTitle, staggerContainer } from "@/lib/motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center px-4 pt-24 pb-10 md:px-6">
      <div className="pointer-events-none absolute inset-x-0 top-20 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-gradient-to-r from-indigo-500/25 via-purple-500/20 to-sky-500/20 blur-3xl" />

      <motion.div
        className="hero-spotlight mx-auto flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row md:items-stretch"
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.08, 0.1)}
      >
        {/* Left: text / narrative */}
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={fadeInUpShort}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
            variants={fadeInUpShort}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Senior React Native &amp; DevTools Engineer</span>
          </motion.div>

          <motion.p
            className="mt-4 text-sm font-medium text-accent"
            variants={fadeInUpShort}
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
            variants={sectionTitle}
          >
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block bg-gradient-to-r from-slate-50 via-indigo-100 to-slate-50 bg-clip-text text-transparent"
            >
              {profile.name}
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-2 text-lg text-muted-foreground md:text-xl"
            variants={fadeInUpShort}
          >
            {profile.title} · {profile.experience}
          </motion.p>

          <motion.p
            className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base"
            variants={fadeInUpShort}
          >
            {profile.tagline} I design and ship production-ready React Native
            apps with secure subscriptions, WhatsApp-like real-time chat, and
            advanced camera pipelines that drive real business outcomes.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
            variants={fadeInUpShort}
          >
            <Link
              href="#projects"
              className={cn(
                "inline-flex h-11 items-center justify-center gap-2 rounded-lg px-6 text-base font-medium shadow-lg shadow-indigo-500/25",
                "bg-accent text-accent-foreground transition hover:translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/35"
              )}
            >
              View Projects
            </Link>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/15 px-6 text-base font-medium",
                "bg-white/5 text-foreground transition hover:bg-white/10 hover:border-white/30"
              )}
            >
              <FileDown className="h-4 w-4" />
              Download Resume
            </a>
            <Link
              href="#contact"
              className={cn(
                "inline-flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium",
                "text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              )}
            >
              Contact
            </Link>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center justify-center gap-6 md:justify-start"
            variants={fadeInUpShort}
          >
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.email}
              className="text-muted-foreground transition hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: engineering profile card */}
        <motion.div
          className="glass-card relative flex-1 rounded-2xl border border-white/10 p-6 md:p-8"
          variants={fadeInUpShort}
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-sky-500/30 blur-3xl" />
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20">
              <div className="absolute inset-0 rounded-full border border-white/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-indigo-500/40 via-slate-900 to-slate-900" />
              <div className="absolute inset-3 flex items-center justify-center rounded-full bg-slate-950 text-xs font-medium text-muted-foreground">
                RK
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Mobile · DevTools
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                React Native · Vision Camera · Performance
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
            <div className="rounded-xl bg-white/5 px-3 py-3">
              <p className="text-sm font-semibold text-accent">6+ yrs</p>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Senior experience
              </p>
            </div>
            <div className="rounded-xl bg-white/5 px-3 py-3">
              <p className="text-sm font-semibold text-accent">25+ apps</p>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Designed & shipped
              </p>
            </div>
            <div className="rounded-xl bg-white/5 px-3 py-3">
              <p className="text-sm font-semibold text-accent">Lead</p>
              <p className="mt-1 text-[11px] text-muted-foreground">
                React Native teams
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-black/40 p-4 text-xs text-muted-foreground">
            <p>
              Senior React Native engineer focused on building secure
              subscription flows, WhatsApp-like real-time chat and stories, and
              high-performance camera and image-processing pipelines. I also
              design internal developer tools that speed up debugging,
              profiling, and shipping production-ready mobile apps.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Link
          href="#highlights"
          className="inline-flex flex-col items-center gap-1 text-xs"
          aria-label="Scroll to highlights"
        >
          <span>Scroll to highlights</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
