"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/data/projects";

const projects = getFeaturedProjects();

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const router = useRouter();
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isMobile || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      x.set(px - 0.5);
      y.set(py - 0.5);
      ref.current.style.setProperty("--mouse-x", `${px * 100}%`);
      ref.current.style.setProperty("--mouse-y", `${py * 100}%`);
    },
    [x, y, isMobile]
  );

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isMobile ? undefined : { rotateX, rotateY, transformPerspective: 800 }}
      className={isMobile ? "" : "will-change-transform"}
    >
      <div
        role="link"
        tabIndex={0}
        onClick={() => router.push(`/projects/${project.slug}`)}
        onKeyDown={(e) => { if (e.key === "Enter") router.push(`/projects/${project.slug}`); }}
        className="group block h-full cursor-pointer"
      >
        <div className="card shine-sweep relative flex h-full flex-col overflow-hidden">
          {/* Large faded number */}
          <span className="pointer-events-none absolute top-4 right-6 font-display text-7xl leading-none text-white-1/[0.03] md:text-white-1/[0.03] transition-all duration-500 select-none group-hover:text-white-1/[0.06]">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Cover gradient */}
          <div
            className={`-mx-6 -mt-6 mb-6 h-44 bg-gradient-to-br ${project.coverGradient} relative flex items-end px-6 pb-5`}
          >
            <div className="relative flex items-center gap-2">
              <span className="font-mono text-[10px] text-accent-light/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs font-medium tracking-wider text-accent-light/70 uppercase">
                {project.role}
              </span>
            </div>

            <div className="absolute top-5 right-5 flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-full border border-white-1/10 p-2 text-white-1/30 opacity-100 md:opacity-0 transition-all duration-300 md:group-hover:opacity-100 hover:text-accent-light hover:border-accent/30"
                >
                  <Github size={14} />
                </a>
              )}
              <div className="rounded-full border border-white-1/10 p-2 text-white-1/30 opacity-100 md:opacity-0 transition-all duration-300 md:group-hover:opacity-100 md:group-hover:text-accent-light md:group-hover:border-accent/30">
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>

          <h3 className="mb-3 text-lg font-semibold text-white-1 transition-colors duration-300 group-hover:text-accent-light">
            {project.title}
          </h3>
          <p className="mb-6 flex-1 text-sm leading-relaxed text-light-gray/60">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white-1/[0.08] md:border-transparent bg-white-1/[0.04] px-2.5 py-1 text-xs text-light-gray/50 md:text-light-gray/45 transition-all duration-300 md:group-hover:border-white-1/[0.08] md:group-hover:text-light-gray/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  return (
    <section className="relative px-6 py-16">
      <div className="section-divider mx-auto mb-12 max-w-5xl" />

      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <div className="flex items-end justify-between">
            <SectionHeading
              title="Selected Work"
              subtitle="A few projects that reflect how I approach problems."
            />
            <Link
              href="/projects"
              className="hidden items-center gap-1 text-sm text-accent-light transition-colors hover:text-accent md:flex"
            >
              View all
              <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <AnimatedSection className="md:col-span-2">
            <ProjectCard project={projects[0]} index={0} />
          </AnimatedSection>
          {projects.slice(1).map((project, i) => (
            <AnimatedSection key={project.slug} delay={(i + 1) * 0.12}>
              <ProjectCard project={project} index={i + 1} />
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-accent-light transition-colors hover:text-accent"
          >
            View all projects
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
