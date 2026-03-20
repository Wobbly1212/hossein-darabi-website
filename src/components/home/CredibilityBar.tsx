"use client";

import { Briefcase, GraduationCap, Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const credentials = [
  { icon: Briefcase, label: "Lead Data Scientist", detail: "Thesis Research Project" },
  { icon: GraduationCap, label: "M.Sc. Data Science", detail: "Ongoing" },
  { icon: Award, label: "Apple Developer Academy", detail: "Graduate" },
  { icon: BookOpen, label: "7+ Years", detail: "Math & Data Education" },
];

export default function CredibilityBar() {
  return (
    <section className="relative px-6 py-12">
      <div className="section-divider mx-auto mb-12 max-w-5xl" />

      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl border border-white-1/[0.06] bg-white-1/[0.02] px-8 py-8 backdrop-blur-sm">
            {/* Animated top glow line */}
            <motion.div
              animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 h-[1px] w-full"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, transparent 0%, transparent 30%, hsla(215, 90%, 60%, 0.2) 50%, transparent 70%, transparent 100%)",
                backgroundSize: "200% 100%",
              }}
            />

            <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10 sm:gap-y-6">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group flex items-center gap-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/[0.08] bg-accent/[0.04] text-accent/50 transition-all duration-400 group-hover:border-accent/20 group-hover:bg-accent/[0.1] group-hover:text-accent-light group-hover:shadow-md group-hover:shadow-accent/5">
                    <cred.icon size={15} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white-1">{cred.label}</p>
                    <p className="text-[11px] text-light-gray/40">{cred.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
