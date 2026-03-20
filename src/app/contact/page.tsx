import type { Metadata } from "next";
import { Github, Linkedin } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";

import { siteConfig } from "@/lib/config";
const EMAIL = siteConfig.email;

export const metadata: Metadata = {
  title: "Contact — Hossein Darabi",
  description:
    "Get in touch for collaborations, job opportunities, or interesting data science and development projects.",
};

export default function ContactPage() {
  return (
    <div className="relative px-6 pt-28 pb-24 overflow-hidden">
      <div className="relative mx-auto max-w-4xl">
        <AnimatedSection>
          <SectionHeading
            title="Get in Touch"
            subtitle="I'm open to collaborations, job opportunities, and interesting problems. Drop me a message and I'll get back to you."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-12 md:grid-cols-5">
          <AnimatedSection className="md:col-span-3" delay={0.1}>
            <ContactForm />
          </AnimatedSection>

          <AnimatedSection className="md:col-span-2" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-white-1">Email</h3>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-1 block text-sm text-accent-light transition-colors hover:text-accent"
                >
                  {EMAIL}
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white-1">Connect</h3>
                <div className="mt-3 flex gap-4">
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white-1/[0.08] bg-white-1/[0.03] px-4 py-2.5 text-xs text-light-gray/60 transition-all hover:border-accent/20 hover:text-light-gray hover:bg-accent/[0.04]"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white-1/[0.08] bg-white-1/[0.03] px-4 py-2.5 text-xs text-light-gray/60 transition-all hover:border-accent/20 hover:text-light-gray hover:bg-accent/[0.04]"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white-1">
                  What I can help with
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {[
                    "Machine learning & AI integration",
                    "Data analytics & dashboards",
                    "iOS & mobile app development",
                    "Custom digital tools & automations",
                    "Predictive modeling",
                    "Solution design & consulting",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-light-gray/65">
                      <span className="block h-1 w-1 rounded-full bg-accent/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
