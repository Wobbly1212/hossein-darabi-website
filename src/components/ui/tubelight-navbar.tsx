"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  // Determine active tab from pathname
  const activeTab =
    items.find((item) => {
      if (item.url === "/") return pathname === "/";
      return pathname.startsWith(item.url);
    })?.name || items[0].name;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50",
        "sm:bottom-auto sm:top-0 sm:pt-6",
        className
      )}
      style={{ bottom: isMobile ? 'calc(env(safe-area-inset-bottom, 0px) + 0.75rem)' : undefined }}
    >
      <div className="flex items-center gap-1 border border-white-1/[0.08] bg-smoky-black/40 px-1.5 py-1.5 rounded-full shadow-lg backdrop-blur-xl">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-5 py-2 rounded-full transition-colors duration-300",
                "text-light-gray/60 hover:text-accent-light",
                isActive && "text-accent-light"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-accent/[0.08] rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {/* Desktop: lamp glow on top */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent rounded-t-full hidden sm:block">
                    <div className="absolute w-12 h-6 bg-accent/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-accent/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-accent/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                  {/* Mobile: lamp glow on bottom */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent rounded-b-full sm:hidden">
                    <div className="absolute w-12 h-6 bg-accent/20 rounded-full blur-md top-[-2px] -left-2" />
                    <div className="absolute w-8 h-6 bg-accent/20 rounded-full blur-md top-[-1px]" />
                    <div className="absolute w-4 h-4 bg-accent/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
