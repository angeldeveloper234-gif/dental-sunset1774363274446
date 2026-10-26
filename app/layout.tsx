import type { Metadata } from "next";
import "../src/index.css";
import { SiteFrame } from "../src/components/SiteFrame";
import { siteFont } from "../src/theme/typography";

import { siteUrl, allowIndexing } from "../src/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: { index: allowIndexing, follow: true },
  alternates: { canonical: "/" },
  title: "Dental Sunset | Odontología de excelencia",
  description:
    "Atención dental de calidad con tecnología moderna y un trato humano.",
};

const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dental Sunset",
  url: siteUrl,
  image: siteUrl + "/opengraph-image",
  logo: siteUrl + "/icon.svg",
  description:
    "Clínica dental en Cabo San Lucas con atención cercana: odontología general, limpieza, estética, ortodoncia, implantes, endodoncia y periodoncia.",
  areaServed: "Cabo San Lucas, Baja California Sur",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cabo San Lucas",
    addressRegion: "Baja California Sur",
    addressCountry: "MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={siteFont.variable}>
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans antialiased text-navy">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
        />
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
