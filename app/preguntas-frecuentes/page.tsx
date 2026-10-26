import { PageIntro } from "@/components/content/PageIntro";
import { FAQ } from "@/components/sections/FAQ";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Preguntas frecuentes",
  "Resuelve dudas sobre primera visita, tratamientos y el funcionamiento de esta clínica de demostración.",
  "/preguntas-frecuentes",
);
export default function Page() {
  return (
    <main>
      <PageIntro
        title="Preguntar también es cuidarse."
        description="Información sobre el proceso y sobre esta demostración de sitio web dental."
        eyebrow="Preguntas frecuentes"
      />
      <FAQ full />
    </main>
  );
}
