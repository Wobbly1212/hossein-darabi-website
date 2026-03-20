"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About", num: "01" },
  { href: "/projects", label: "Projects", num: "02" },
  { href: "/contact", label: "Contact", num: "03" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-gold via-vegas-gold to-gold"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-jet/30 bg-smoky-black/80 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <motion.span
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-jet bg-eerie-black-1 font-display text-sm text-gold transition-colors group-hover:border-gold/40 group-hover:shadow-md group-hover:shadow-gold/10"
            >
              H
            </motion.span>
            <span className="text-sm font-medium text-white-1 transition-colors group-hover:text-gold">
              Hossein Darabi
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group relative flex items-center gap-1.5 py-2 text-sm transition-colors duration-300 hover:text-gold ${
                    isActive(link.href)
                      ? "font-medium text-gold"
                      : "text-light-gray/60"
                  }`}
                >
                  <span className="font-mono text-[10px] text-gold/40 transition-colors duration-300 group-hover:text-gold/80">
                    {link.num}
                  </span>
                  {link.label}
                  {/* Hover underline */}
                  <span
                    className={`absolute -bottom-0 left-0 h-px bg-gold transition-all duration-300 ${
                      isActive(link.href)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-eerie-black-1 md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="absolute block h-0.5 w-5 bg-light-gray transition-colors"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="absolute block h-0.5 w-5 bg-light-gray"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="absolute block h-0.5 w-5 bg-light-gray transition-colors"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden border-t border-jet/30 backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col gap-1 bg-smoky-black/95 px-6 py-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-base transition-all hover:bg-eerie-black-1/80 ${
                        isActive(link.href)
                          ? "font-medium text-gold"
                          : "text-light-gray"
                      }`}
                    >
                      <span className="font-mono text-xs text-gold/40">
                        {link.num}
                      </span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
