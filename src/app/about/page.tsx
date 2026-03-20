import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About — Hossein Darabi",
  description:
    "Data scientist and developer with expertise in machine learning, iOS development, and custom digital solutions.",
};

const experience = [
  {
    period: "2023 — 2024",
    role: "Lead Data Scientist",
    context: "Thesis Research — Data Stream Classification",
    description:
      "Led research on supervised classification of data streams, focusing on how models handle concept drift in live environments. Designed experiments, evaluated algorithms, and delivered a complete thesis with practical findings.",
  },
  {
    period: "2024 — 2024",
    role: "Apple Developer Academy",
    context: "Apple",
    description:
      "Completed an intensive product development program. Learned design thinking, iOS development with Swift, and how to build products people actually want to use. Shipped two apps during the program.",
  },
  {
    period: "2023",
    role: "Data Analytics Intern",
    context: "Industry Experience",
    description:
      "Worked with real business data — generating insights, building reports, and supporting decision-making in a professional setting.",
  },
  {
    period: "2017 — Present",
    role: "Private Tutor",
    context: "Mathematics, Statistics & Data Science",
    description:
      "7+ years teaching math and data science. This experience shaped how I communicate complex ideas simply — a skill I use in every project.",
  },
];

const skills = {
  "Machine Learning & AI": [
    "Python", "Scikit-learn", "TensorFlow", "PyTorch", "XGBoost",
    "Deep Learning", "NLP", "LLMs & Prompt Engineering",
  ],
  "Data Science & Analytics": [
    "Pandas", "NumPy", "SQL", "Statistical Analysis",
    "Data Visualization", "Power BI", "Jupyter", "A/B Testing",
  ],
  "Development": [
    "Swift & SwiftUI", "Next.js", "TypeScript", "React",
    "REST APIs", "Git", "Docker", "CI/CD",
  ],
  "In-Demand Skills": [
    "Generative AI", "MLOps", "Cloud (AWS/GCP)", "Data Engineering",
    "Apache Spark", "dbt", "Airflow", "RAG Pipelines",
  ],
};

export default function AboutPage() {
  return (
    <div className="px-6 pt-28 pb-24">
      <div className="mx-auto max-w-4xl">
        {/* Intro with photo */}
        <AnimatedSection>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-accent/6 via-transparent to-transparent blur-2xl" />
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-accent/12 via-transparent to-accent/5" />
                <Image
                  src="/images/3.jpg"
                  alt="Hossein Darabi"
                  width={280}
                  height={350}
                  className="relative rounded-2xl border border-white-1/10 object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <SectionHeading title="About Me" />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-light-gray/75">
                <p>
                  I&apos;m Hossein — a data scientist and developer who likes building
                  things that work. My background spans machine learning, iOS development,
                  and data analytics, and I enjoy the space where these overlap.
                </p>
                <p>
                  I think the best solutions come from understanding the problem first and
                  the tools second. Whether I&apos;m training a classifier, designing an app,
                  or architecting a database — I care about clarity, usefulness, and getting
                  things done.
                </p>
                <p>
                  Currently finishing my M.Sc. in Data Science and looking for opportunities
                  where I can bring both technical skills and creative problem-solving to a team.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection className="mt-24">
          <SectionHeading title="Experience" />
          <div className="mt-10 space-y-0">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="group relative border-l border-white-1/[0.08] py-7 pl-8 transition-all first:pt-0 last:pb-0 hover:border-l-accent/30"
              >
                <div className="absolute top-[30px] left-[-5px] h-2.5 w-2.5 rounded-full border-2 border-accent/30 bg-smoky-black transition-all duration-400 first:top-0 group-hover:border-accent group-hover:bg-accent/20 group-hover:shadow-md group-hover:shadow-accent/15" />

                <p className="font-mono text-[11px] tracking-wider text-accent/40 transition-colors group-hover:text-accent/70">
                  {exp.period}
                </p>
                <h3 className="mt-1 text-base font-semibold text-white-1 transition-colors group-hover:text-accent-light">
                  {exp.role}
                </h3>
                <p className="text-xs text-light-gray/40">{exp.context}</p>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-light-gray/60">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Graduation Photos */}
        <AnimatedSection className="mt-14">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="group relative rounded-2xl border border-white-1/[0.06] bg-white-1/[0.02] p-3 transition-all duration-500 hover:border-accent/15 hover:bg-white-1/[0.04]">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/1.jpeg"
                  alt="University graduation — M.Sc. Data Science thesis defense"
                  width={600}
                  height={400}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-3 px-1 pb-1">
                <p className="text-sm font-medium text-white-1">B.Sc. Graduation</p>
                <p className="mt-0.5 text-xs text-light-gray/40">Supervised Classification of Data Streams</p>
              </div>
            </div>
            <div className="group relative rounded-2xl border border-white-1/[0.06] bg-white-1/[0.02] p-3 transition-all duration-500 hover:border-accent/15 hover:bg-white-1/[0.04]">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/2.jpeg"
                  alt="Apple Developer Academy graduation"
                  width={600}
                  height={400}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-3 px-1 pb-1">
                <p className="text-sm font-medium text-white-1">Apple Developer Academy</p>
                <p className="mt-0.5 text-xs text-light-gray/40">Graduate — iOS Development & Product Design</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection className="mt-24">
          <SectionHeading title="Technical Toolkit" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="mb-3 text-xs font-semibold tracking-wider text-white-1/50 uppercase">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white-1/[0.06] bg-white-1/[0.03] px-3 py-1.5 text-xs text-light-gray/55 transition-all duration-300 hover:border-accent/15 hover:text-light-gray/80 hover:bg-accent/[0.04]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Education — only M.Sc. */}
        <AnimatedSection className="mt-24">
          <SectionHeading title="Education" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="card shine-sweep">
              <p className="font-mono text-[10px] tracking-wider text-accent/50 uppercase">
                Ongoing
              </p>
              <h3 className="mt-2 text-base font-semibold text-white-1">
                M.Sc. in Data Science
              </h3>
              <p className="mt-1 text-sm text-light-gray/50">
                Focus on machine learning, data stream mining, and AI systems
              </p>
            </div>
            <div className="card shine-sweep">
              <p className="font-mono text-[10px] tracking-wider text-accent/50 uppercase">
                Completed
              </p>
              <h3 className="mt-2 text-base font-semibold text-white-1">
                B.Sc. in Data Science
              </h3>
              <p className="mt-1 text-sm text-light-gray/50">
                Thesis: Supervised Classification of Data Streams
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
