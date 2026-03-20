"use client";

import { Home, User, Briefcase, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/TubelightNavbar";

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "About", url: "/about", icon: User },
  { name: "Projects", url: "/projects", icon: Briefcase },
  { name: "Contact", url: "/contact", icon: Mail },
];

export default function NavbarWrapper() {
  return <NavBar items={navItems} />;
}
