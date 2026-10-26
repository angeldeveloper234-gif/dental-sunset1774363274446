import { About } from "../../src/site-pages/About";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Nuestra clínica",
  "Conoce la propuesta de atención y diseño de Dental Sunset, una clínica ficticia de demostración.",
  "/about",
);
export default function Page() {
  return <About />;
}
