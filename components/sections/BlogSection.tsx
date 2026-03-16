"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { GlassCard } from "@/components/shared/GlassCard";
import { blogPosts } from "@/data/blog-posts";

export function BlogSection() {
  return (
    <SectionWrapper id="blog" className="px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-12 text-center text-2xl font-bold md:text-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Blog
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <GlassCard className="h-full transition hover:border-accent/30">
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <time dateTime={post.date}>{post.date}</time>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
