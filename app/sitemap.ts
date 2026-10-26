import type { MetadataRoute } from "next";
import { mainPages } from "@/content/treatments";
import { posts } from "@/content/posts";
import { siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...mainPages.map((p) => p.href),
    ...posts.map((p) => "/blog/" + p.slug),
    "/terminos-y-condiciones",
    "/politica-de-privacidad",
  ].map((path) => ({
    url: siteUrl + path,
    lastModified: new Date("2026-10-25"),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/blog/") ? 0.6 : 0.8,
  }));
}
