import localFont from "next/font/local";

// Change this font definition to update the entire site, including the logo.
export const siteFont = localFont({
  src: [
    {
      path: "../../public/fonts/satoshi-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-brand",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
