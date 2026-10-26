import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { treatments } from "@/content/treatments";
import { ToothIcon } from "@/components/ui/BrandLogo";
import { BrandSparkles } from "@/components/ui/BrandSparkles";
export function Features() {
  return (
    <section id="tratamientos" className="relative py-20 md:py-24">
      <BrandSparkles className="absolute right-[6%] top-16 hidden h-20 w-20 text-primary/10 md:block" />
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.16em] text-primary">
            Cuidado para cada etapa
          </p>
          <h2 className="text-4xl leading-tight md:text-5xl">
            Encuentra tu punto de partida.
            <br />
            <span className="font-normal text-muted">
              Hablemos de lo que necesitas.
            </span>
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-muted">
            Conoce ocho áreas de atención dental y prepara tus preguntas antes
            de una valoración.
          </p>
        </div>
        <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
          {treatments.map((t) => (
            <article
              key={t.slug}
              className="group flex flex-col rounded-[1.5rem] border border-[#DCE7F2] bg-white shadow-sm"
            >
              <div className="relative aspect-[1.35] shrink-0">
                <div className="absolute inset-0 overflow-hidden rounded-t-[1.5rem]">
                  <img
                    src={"/images-media/" + t.image}
                    alt={t.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="absolute -bottom-6 left-5 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-primary text-white shadow-lg shadow-primary/20">
                  <ToothIcon />
                </span>
              </div>
              <div className="flex flex-1 flex-col px-5 pb-6 pt-12">
                <h3 className="text-xl font-bold">{t.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {t.short}
                </p>
                <Link
                  href={"/tratamientos/" + t.slug}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 px-4 py-2.5 text-xs font-bold text-primary transition hover:bg-primary hover:text-white"
                >
                  Conocer más <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
