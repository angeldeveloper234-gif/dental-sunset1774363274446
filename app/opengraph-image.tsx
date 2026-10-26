import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const alt = "Dental Sunset — Una sonrisa que se siente bien. Odontología en Cabo San Lucas.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [font, photo, logo] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/satoshi-social-700.ttf")),
    readFile(join(process.cwd(), "public/images-media/social-portrait.png")),
    readFile(join(process.cwd(), "app/icon.svg")),
  ]);
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#F3F6FF", fontFamily: "Satoshi", color: "#292D34", padding: 48, position: "relative" }}>
      <div style={{ display: "flex", flexDirection: "column", width: 650, paddingRight: 36, justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src={`data:image/svg+xml;base64,${logo.toString("base64")}`} width={62} height={62} />
          <span style={{ fontSize: 32, letterSpacing: -1 }}>Dental Sunset</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 24 }}>
          <span style={{ fontSize: 17, letterSpacing: 3, color: "#286CFD", marginBottom: 22 }}>TU SONRISA, EN BUENAS MANOS</span>
          <span style={{ fontSize: 72, lineHeight: 1.06, letterSpacing: -3 }}>Una sonrisa</span>
          <span style={{ fontSize: 72, lineHeight: 1.06, letterSpacing: -3, color: "#286CFD" }}>que se siente</span>
          <span style={{ fontSize: 72, lineHeight: 1.06, letterSpacing: -3, color: "#286CFD" }}>bien.</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 19, color: "#626D7F" }}>
          <span style={{ width: 9, height: 9, borderRadius: 9, background: "#286CFD" }} />
          Odontología · Cabo San Lucas
        </div>
      </div>
      <div style={{ display: "flex", width: 454, height: 534, background: "#286CFD", borderRadius: "120px 32px 120px 32px", overflow: "hidden", position: "relative" }}>
        <img src={`data:image/png;base64,${photo.toString("base64")}`} width={454} height={534} style={{ objectFit: "cover", objectPosition: "53% center" }} />
        <div style={{ position: "absolute", bottom: 30, left: 28, display: "flex", background: "white", color: "#286CFD", padding: "14px 24px", borderRadius: 28, fontSize: 20 }}>Cerca de ti. Siempre.</div>
      </div>
      <svg width="72" height="72" viewBox="0 0 72 72" style={{ position: "absolute", top: 18, right: 28 }}><path d="M36 0Q38 34 72 36Q38 38 36 72Q34 38 0 36Q34 34 36 0Z" fill="#286CFD" /></svg>
    </div>,
    { ...size, fonts: [{ name: "Satoshi", data: font, weight: 700, style: "normal" }] },
  );
}
