"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollProgress } from "./ScrollProgress";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "#highlights", label: "Highlights" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#tools", label: "Tools" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState<string>("#highlights");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Track active section for desktop nav highlight
  useEffect(() => {
    const handler = () => {
      const offsets = navLinks
        .map((link) => {
          const id = link.href.replace("#", "");
          const el = document.getElementById(id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { href: link.href, top: rect.top };
        })
        .filter(Boolean) as { href: string; top: number }[];

      const current = offsets
        .filter((o) => o.top <= window.innerHeight * 0.35)
        .sort((a, b) => b.top - a.top)[0];

      if (current) setActive(current.href);
    };

    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <ScrollProgress />
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-40 border-b border-white/5 glass-card backdrop-blur-xl"
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link
            href="#"
            className="text-lg font-semibold text-foreground transition hover:opacity-80"
          >
            <span className="font-semibold">{profile.name.split(" ")[0]}</span>
            <span className="hidden text-xs text-muted-foreground sm:inline">
              · React Native &amp; DevTools
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => {
                  setOpen(false);
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={cn(
                  "relative text-sm text-muted-foreground transition hover:text-foreground",
                  active === link.href && "text-foreground"
                )}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-accent" />
                )}
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              <FileDown className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="rounded-lg p-2 text-foreground md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="glass-card border-t border-white/5 md:hidden"
            >
              <div className="flex flex-col gap-2 px-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-4 py-3 text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-accent-foreground"
                  onClick={() => setOpen(false)}
                >
                  <FileDown className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
