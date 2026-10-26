export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3002";
export const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
export function pageMetadata(title: string, description: string, path: string) {
  return {
    title: title + " | Dental Sunset",
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website" as const,
      locale: "es_MX",
      siteName: "Dental Sunset",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Dental Sunset — Una sonrisa que se siente bien" }],
    },
    twitter: { card: "summary_large_image" as const, title, description, images: ["/opengraph-image"] },
  };
}
