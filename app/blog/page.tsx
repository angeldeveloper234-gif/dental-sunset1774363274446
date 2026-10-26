import { PageIntro } from "@/components/content/PageIntro";
import { ArticleCards } from "@/components/content/ArticleCards";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Blog de salud dental",
  "Ocho guías sobre higiene, encías, ortodoncia, implantes y primeras visitas. Información general con fuentes sanitarias.",
  "/blog",
);
export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Blog dental"
        title="Aprender a cuidar tu sonrisa."
        description="Respuestas claras para conversar mejor en consulta. Ocho guías de salud bucal, con referencias y sin promesas de resultados."
      />
      <section className="container mx-auto px-6 py-16">
        <ArticleCards />
        <p className="mt-10 text-center text-xs leading-6 text-muted">
          Contenido educativo de una clínica ficticia. No sustituye diagnóstico
          ni atención profesional.
        </p>
      </section>
    </main>
  );
}
