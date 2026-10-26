import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { ArticleCards } from "@/components/content/ArticleCards";
import { BrandSparkles } from "@/components/ui/BrandSparkles";
export function FirstVisitPreview() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FD] py-20 md:py-24">
      <BrandSparkles className="absolute right-8 top-8 h-20 w-20 text-primary/15" />
      <div className="container mx-auto grid items-center gap-10 px-6 lg:grid-cols-2">
        <div className="reveal-item overflow-hidden rounded-[2rem]">
          <img
            src="/images-media/Paciente mujer en el dentista.jpg"
            alt="Imagen ilustrativa de una consulta dental"
            loading="lazy"
            className="aspect-[1.15] w-full object-cover"
          />
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[.15em] text-primary">
            Tu primera visita
          </p>
          <h2 className="text-4xl leading-tight tracking-tight md:text-5xl">
            Ven con preguntas.
            <br />
            <span className="font-normal text-muted">
              Empecemos por escucharte.
            </span>
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-muted">
            Conocer el proceso antes de llegar ayuda. Prepara tus dudas y
            descubre qué conversar durante una valoración.
          </p>
          <ul className="my-7 space-y-3">
            {[
              "Cuéntanos qué te gustaría revisar.",
              "Conoce las opciones antes de decidir.",
              "Llévate un siguiente paso claro.",
            ].map((text) => (
              <li
                key={text}
                className="reveal-item flex items-center gap-3 text-sm"
              >
                <Check className="h-5 w-5 text-primary" />
                {text}
              </li>
            ))}
          </ul>
          <Link
            className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-bold text-white"
            href="/primera-visita"
          >
            Prepara tu primera visita <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function HomeJournal() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.15em] text-primary">
              El blog de tu sonrisa
            </p>
            <h2 className="max-w-xl text-4xl leading-tight md:text-5xl">
              Información que ayuda.
              <br />
              <span className="font-normal text-muted">
                Sin complicaciones.
              </span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            Explorar los 8 artículos <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <ArticleCards limit={3} />
      </div>
    </section>
  );
}
