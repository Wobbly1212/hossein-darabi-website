import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getProjectBySlug, getAllSlugs } from "@/data/projects";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return { title: `${project.title} — Hossein Darabi`, description: project.overview };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="relative px-6 pt-28 pb-24 overflow-hidden">
      <div className="relative mx-auto max-w-3xl">
        <AnimatedSection>
          <Link href="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-light-gray/50 transition-colors hover:text-accent-light">
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div className={`-mx-2 mb-8 h-44 rounded-2xl bg-gradient-to-br ${project.coverGradient} relative flex items-end overflow-hidden px-8 pb-6`}>
            <p className="relative text-xs font-medium tracking-wider text-accent-light/80 uppercase">
              {project.category} &middot; {project.role}
            </p>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full border border-white-1/10 bg-smoky-black/40 px-3 py-1.5 text-xs text-white-1/60 backdrop-blur-sm transition-colors hover:text-accent-light hover:border-accent/30">
                <Github size={14} /> View Code
              </a>
            )}
          </div>

          <h1 className="text-3xl font-bold text-white-1 md:text-4xl">{project.title}</h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-md border border-white-1/[0.06] bg-white-1/[0.03] px-2.5 py-1 text-xs text-light-gray/50">{tag}</span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-12">
          <p className="text-base leading-relaxed text-light-gray/80">{project.overview}</p>
        </AnimatedSection>

        {[
          { title: "The Problem", content: project.problem },
          { title: "The Approach", content: project.approach },
        ].map((section) => (
          <AnimatedSection key={section.title} delay={0.15} className="mt-12">
            <h2 className="text-xl font-semibold text-white-1">{section.title}</h2>
            <div className="mt-2 h-0.5 w-10 rounded-full bg-gradient-to-r from-accent/80 to-accent/20" />
            <p className="mt-4 text-sm leading-relaxed text-light-gray/65">{section.content}</p>
          </AnimatedSection>
        ))}

        {[
          { title: "Technical Details", items: project.technical },
          { title: "Outcomes", items: project.outcomes },
        ].map((section) => (
          <AnimatedSection key={section.title} delay={0.15} className="mt-12">
            <h2 className="text-xl font-semibold text-white-1">{section.title}</h2>
            <div className="mt-2 h-0.5 w-10 rounded-full bg-gradient-to-r from-accent/80 to-accent/20" />
            <ul className="mt-4 space-y-3">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-light-gray/65">
                  <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/50" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        ))}

        <AnimatedSection delay={0.2} className="mt-16">
          <div className="card shine-sweep text-center">
            <p className="text-base text-light-gray/65">Interested in working together on something similar?</p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-xl border border-accent/50 bg-accent/10 px-8 py-3 text-sm font-medium text-accent-light transition-all hover:bg-accent/20 hover:shadow-lg hover:shadow-accent/10">
              Let&apos;s Talk
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
