import type { MetadataRoute } from "next";
import { siteUrl, allowIndexing } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(allowIndexing
        ? { allow: "/", disallow: "/admin" }
        : { disallow: "/" }),
    },
    sitemap: siteUrl + "/sitemap.xml",
  };
}
