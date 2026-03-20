import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { getAllProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Hossein Darabi",
  description: "Selected projects in machine learning, iOS development, data analytics, and custom digital solutions.",
};

const projects = getAllProjects();

export default function ProjectsPage() {
  return (
    <div className="relative px-6 pt-28 pb-24 overflow-hidden">
      <div className="relative mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            title="Projects"
            subtitle="Selected work that reflects how I approach real problems — with technical depth and a focus on outcomes."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.08}>
              <Link href={`/projects/${project.slug}`} className="group block h-full">
                <div className="card shine-sweep flex h-full flex-col overflow-hidden">
                  <div className={`-mx-6 -mt-6 mb-6 h-36 bg-gradient-to-br ${project.coverGradient} relative flex items-end px-6 pb-4`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    <p className="relative text-xs font-medium tracking-wider text-accent-light/60 uppercase">{project.category}</p>
                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.github && (
                        <div className="rounded-full border border-white-1/10 p-1.5 text-white-1/20 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-accent-light group-hover:border-accent/30">
                          <Github size={12} />
                        </div>
                      )}
                      <div className="rounded-full border border-white-1/10 p-1.5 text-white-1/20 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-accent-light group-hover:border-accent/30">
                        <ArrowUpRight size={12} />
                      </div>
                    </div>
                  </div>
                  <p className="mb-2 text-xs text-light-gray/40">{project.role}</p>
                  <h3 className="mb-3 text-lg font-semibold text-white-1 transition-colors duration-300 group-hover:text-accent-light">{project.title}</h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-light-gray/55">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="rounded-md bg-white-1/[0.04] px-2.5 py-1 text-xs text-light-gray/45 transition-colors group-hover:text-light-gray/60">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
