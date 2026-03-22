"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6" style={{ minHeight: '100dvh' }}>
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 pt-28 pb-20 md:grid-cols-5 md:gap-16 md:pt-0 md:pb-0" style={{ minHeight: '100dvh' }}>
        {/* Left — Content (3 cols) */}
        <div className="md:col-span-3">
          {/* Availability status */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white-1/10 bg-white-1/[0.04] px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs text-light-gray/70">
              Open to opportunities
            </span>
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl leading-[1.02] font-normal text-white-1 md:text-7xl lg:text-[5.5rem]"
            >
              Hossein
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl leading-[1.02] font-normal md:text-7xl lg:text-[5.5rem]"
            >
              <span className="text-gradient">Darabi</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-5 flex items-center gap-3"
          >
            <div className="h-[1px] w-8 bg-accent/50" />
            <p className="text-sm font-medium tracking-[0.15em] text-accent-light/80 uppercase">
              Data Scientist & Developer
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-light-gray/80"
          >
            I design and build smart solutions using data science, machine learning,
            and modern development — from AI models to custom apps and digital products.
            Looking for my next challenge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/projects"
              className="btn-glow shine-sweep group inline-flex items-center gap-2 rounded-xl border border-accent/50 bg-accent/10 px-8 py-3.5 text-sm font-medium text-accent-light transition-all hover:border-accent hover:bg-accent/20 hover:shadow-lg hover:shadow-accent/10"
            >
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-white-1/10 px-8 py-3.5 text-sm font-medium text-light-gray transition-all hover:border-white-1/20 hover:text-white-1 hover:bg-white-1/[0.03]"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Right — Photo (2 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:col-span-2 md:block"
        >
          <div className="relative">
            {/* Outer glow halo */}
            <motion.div
              animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.02, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-10 rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, hsla(215, 90%, 60%, 0.06) 0%, transparent 70%)",
              }}
            />

            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-accent/15 via-transparent to-accent/5" />

            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-accent/10 bg-eerie-black-1">
              <Image
                src="/images/new.jpeg"
                alt="Hossein Darabi"
                width={480}
                height={480}
                className="absolute inset-0 h-full w-full object-cover object-top"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-smoky-black via-smoky-black/60 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute left-1/2 -translate-x-1/2 flex-col items-center gap-3 hidden md:flex md:bottom-16 bottom-24"
      >
        <span className="text-[10px] tracking-[0.3em] text-light-gray/25 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-accent/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
