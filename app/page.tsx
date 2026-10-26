import { Home } from "../src/site-pages/Home";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Clínica dental en Cabo San Lucas",
  "Tu sonrisa, en buenas manos. Conoce nuestros tratamientos dentales y una atención cercana, clara y a tu ritmo en Cabo San Lucas.",
  "/",
);
export default function Page() {
  return <Home />;
}
