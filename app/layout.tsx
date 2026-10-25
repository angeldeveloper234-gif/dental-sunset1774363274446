import type { Metadata } from "next";
import "../src/index.css";
import { SiteFrame } from "../src/components/SiteFrame";

export const metadata: Metadata = {
  title: "Dental Sunset | Odontología de excelencia",
  description: "Atención dental de calidad con tecnología moderna y un trato humano.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans antialiased text-navy">
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
