import { Contact } from "../../src/site-pages/Contact";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Contacto y ubicación",
  "Prueba el contacto de la demo Dental Sunset y consulta el mapa de referencia de Cabo San Lucas.",
  "/contact",
);
export default function Page() {
  return <Contact />;
}
