import { PAGES, SITE } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split("T")[0];
  return [
    { url: `${SITE}/`, lastModified: now, priority: 1 },
    { url: `${SITE}/contact-us.html`, lastModified: now, priority: 0.9 },
    ...PAGES.map((p) => ({
      url: `${SITE}/${p.path}/`,
      lastModified: now,
      priority: p.parents.length === 0 ? 0.8 : 0.7,
    })),
  ];
}
