"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/config";

export default function ContactCTA() {
  return (
    <section className="relative px-6 py-32 pb-40 overflow-hidden">
      <div className="section-divider mx-auto mb-20 max-w-4xl" />

      {/* Background glow */}
      <motion.div
        animate={{ opacity: [0.03, 0.06, 0.03], scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-full max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(ellipse, hsla(215, 90%, 60%, 0.8) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-[0.25em] text-accent/60 uppercase">
            Let&apos;s work together
          </p>
          <h2 className="font-display mt-6 text-4xl text-white-1 md:text-5xl lg:text-6xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-light-gray/70">
            I&apos;m open to collaborations, job opportunities, and interesting
            problems. Whether you need AI solutions, data analytics, or a
            custom digital product.
          </p>
          <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="btn-glow shine-sweep group inline-flex items-center gap-2 rounded-xl border border-accent/50 bg-accent/10 px-10 py-4 text-sm font-medium text-accent-light transition-all hover:border-accent hover:bg-accent/20 hover:shadow-lg hover:shadow-accent/10"
            >
              Get in Touch
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <span className="text-sm text-light-gray/30">or</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-light-gray/70 underline decoration-white-1/10 underline-offset-4 transition-colors hover:text-accent-light hover:decoration-accent/30"
            >
              {siteConfig.email}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
