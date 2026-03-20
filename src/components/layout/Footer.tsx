"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const EMAIL = "innovator.h.darabi@gmail.com";

const socialLinks = [
  { href: "https://github.com/Wobbly1212", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/hosein-darabi-618349279", icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white-1/[0.05] bg-eerie-black-2/30 pb-20 sm:pb-0" style={{ paddingBottom: 'max(5rem, calc(env(safe-area-inset-bottom, 0px) + 5rem))' }}>
      {/* Animated top edge */}
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 h-[1px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent, transparent 30%, hsla(215, 90%, 60%, 0.12) 50%, transparent 70%, transparent)",
          backgroundSize: "200% 100%",
        }}
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-12 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white-1/10 bg-white-1/[0.03] font-display text-xs text-accent/60">
            H
          </span>
          <div>
            <Link href="/" className="text-sm font-medium text-white-1 transition-colors hover:text-accent-light">
              Hossein Darabi
            </Link>
            <p className="text-[11px] text-light-gray/30">Data Scientist & Developer</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="text-light-gray/30 transition-colors hover:text-accent-light"
              aria-label={label}
            >
              <Icon size={17} />
            </motion.a>
          ))}
        </div>

        <p className="text-[11px] text-light-gray/20">
          &copy; {new Date().getFullYear()} Hossein Darabi
        </p>
      </div>
    </footer>
  );
}
