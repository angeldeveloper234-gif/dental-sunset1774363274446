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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={siteFont.variable}>
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans antialiased text-navy">
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
