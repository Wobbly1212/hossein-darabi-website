"use client";

import { Brain, Lightbulb, BarChart3, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { useIsMobile } from "@/hooks/useIsMobile";

const capabilities = [
  {
    icon: Brain,
    title: "Machine Learning & Predictive Modeling",
    description:
      "Building models that forecast, classify, and surface hidden patterns in complex datasets — from tabular data to large-scale pipelines.",
    tech: ["Python", "Scikit-learn", "TensorFlow", "XGBoost"],
    num: "01",
  },
  {
    icon: Lightbulb,
    title: "Custom Solution Design",
    description:
      "Designing tailored solutions for real problems — whether it's a system architecture, a data workflow, a strategy, or a product concept. Not limited to code.",
    tech: ["Problem Framing", "System Design", "Strategy", "Prototyping"],
    num: "02",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Insights",
    description:
      "Transforming raw data into clear, actionable insights. Building dashboards, reports, and visualizations that help teams make better decisions.",
    tech: ["SQL", "Pandas", "Power BI", "Statistical Analysis"],
    num: "03",
  },
  {
    icon: Code2,
    title: "Digital Products & Development",
    description:
      "Building apps, websites, and AI-powered digital tools — from concept to production. iOS apps, web platforms, and custom automations.",
    tech: ["Swift", "Next.js", "Python", "APIs"],
    num: "04",
  },
];

export default function Capabilities() {
  const isMobile = useIsMobile();

  return (
    <section className="relative px-6 py-28">
      <div className="section-divider mx-auto mb-20 max-w-5xl" />

      <div className="relative mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionHeading
            title="What I Do"
            subtitle="I combine technical depth with a product mindset to build solutions that actually work."
          />
        </AnimatedSection>

        <div className="mt-14 space-y-0">
          {capabilities.map((cap, i) => (
            <AnimatedSection key={cap.title} delay={i * 0.1}>
              <motion.div
                whileHover={isMobile ? undefined : { x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="group relative border-b border-white-1/[0.06] py-8 transition-all first:border-t"
              >
                {/* Blue left accent — visible on mobile, hover-only on desktop */}
                <div className="absolute top-0 left-0 h-full w-0.5 bg-accent/30 md:bg-accent md:origin-top md:scale-y-0 transition-transform duration-300 md:group-hover:scale-y-100" />

                {/* Subtle row glow on hover — desktop only */}
                <div className="absolute inset-0 -left-4 rounded-r-xl bg-gradient-to-r from-accent/[0.03] to-transparent opacity-0 transition-opacity duration-400 md:group-hover:opacity-100" />

                <div className="relative flex gap-4 md:gap-6 pl-4 md:pl-6">
                  <span className="hidden font-mono text-[11px] text-accent/25 transition-colors duration-300 group-hover:text-accent/60 sm:block">
                    {cap.num}
                  </span>

                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-accent/15 md:border-accent/[0.1] bg-accent/[0.06] md:bg-accent/[0.04] text-accent/60 md:text-accent/40 transition-all duration-400 md:group-hover:border-accent/20 md:group-hover:bg-accent/[0.1] md:group-hover:text-accent-light md:group-hover:shadow-lg md:group-hover:shadow-accent/5">
                    <cap.icon size={20} strokeWidth={1.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-white-1 transition-colors duration-300 md:group-hover:text-accent-light">
                      {cap.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-light-gray/60">
                      {cap.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cap.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white-1/[0.06] md:border-transparent bg-white-1/[0.04] px-2.5 py-1 text-xs text-light-gray/50 md:text-light-gray/45 transition-all duration-300 md:group-hover:border-white-1/[0.08] md:group-hover:text-light-gray/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
