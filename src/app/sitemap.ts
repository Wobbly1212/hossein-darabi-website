import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { getAllSlugs } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectSlugs = getAllSlugs();

  const staticPages = ["", "/about", "/projects", "/contact"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectPages = projectSlugs.map((slug) => ({
    url: `${siteConfig.url}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages];
}
