"use client";

import { Brain, Lightbulb, BarChart3, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

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
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="group relative border-b border-white-1/[0.06] py-8 transition-all first:border-t"
              >
                {/* Blue left accent on hover */}
                <div className="absolute top-0 left-0 h-full w-0.5 origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100" />

                {/* Subtle row glow on hover */}
                <div className="absolute inset-0 -left-4 rounded-r-xl bg-gradient-to-r from-accent/[0.03] to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                <div className="relative flex gap-6 pl-6">
                  <span className="hidden font-mono text-[11px] text-accent/25 transition-colors duration-300 group-hover:text-accent/60 sm:block">
                    {cap.num}
                  </span>

                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-accent/[0.1] bg-accent/[0.04] text-accent/40 transition-all duration-400 group-hover:border-accent/20 group-hover:bg-accent/[0.1] group-hover:text-accent-light group-hover:shadow-lg group-hover:shadow-accent/5">
                    <cap.icon size={20} strokeWidth={1.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-white-1 transition-colors duration-300 group-hover:text-accent-light">
                      {cap.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-light-gray/60">
                      {cap.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cap.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-transparent bg-white-1/[0.04] px-2.5 py-1 text-xs text-light-gray/45 transition-all duration-300 group-hover:border-white-1/[0.08] group-hover:text-light-gray/70"
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
