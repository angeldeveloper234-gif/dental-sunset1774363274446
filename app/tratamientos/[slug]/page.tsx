import Link from "next/link";
import { notFound } from "next/navigation";
import { treatments } from "@/content/treatments";
import { posts } from "@/content/posts";
import { pageMetadata } from "@/lib/site";
import { PageIntro } from "@/components/content/PageIntro";
import { BrandSparkles } from "@/components/ui/BrandSparkles";
export const dynamicParams = false;
export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = treatments.find((t) => t.slug === slug);
  return t
    ? pageMetadata(
        t.title + " en Cabo San Lucas",
        t.short,
        "/tratamientos/" + slug,
      )
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = treatments.find((t) => t.slug === slug);
  if (!t) notFound();
  return (
    <main>
      <PageIntro title={t.title} description={t.intro} eyebrow="Tratamientos" />
      <section className="container mx-auto grid gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr] lg:py-20">
        <div>
          <img
            src={"/images-media/" + t.image}
            alt={"Imagen ilustrativa: " + t.title}
            className="mb-10 aspect-[1.6] w-full rounded-[2rem] object-cover"
          />
          {t.sections.map(([title, text]) => (
            <div className="mb-9" key={title}>
              <h2 className="mb-3 text-2xl">{title}</h2>
              <p className="leading-8 text-muted">{text}</p>
            </div>
          ))}
          <div className="border-t border-navy/10 pt-6 text-xs leading-6 text-muted">
            <p>
              Información general: no sustituye una valoración profesional. Esta
              clínica es una demostración ficticia.
            </p>
            <p className="mt-3 font-bold">Referencias</p>
            {t.sources.map(([label, url]) => (
              <a
                className="block text-primary hover:underline"
                key={url}
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <aside className="space-y-6 lg:sticky lg:top-36 lg:self-start">
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-softblue p-7">
            <BrandSparkles className="absolute -right-2 -top-2 h-20 w-20 text-primary/10" />
            <h2 className="text-2xl">Lleva estas preguntas</h2>
            <ul className="my-6 space-y-4">
              {t.questions.map((q, i) => (
                <li className="flex gap-3 text-sm leading-6" key={q}>
                  <span className="font-bold text-primary">0{i + 1}</span>
                  {q}
                </li>
              ))}
            </ul>
            <Link
              href={"/contact?tratamiento=" + t.slug}
              className="block rounded-full bg-primary px-5 py-4 text-center text-sm font-bold text-white"
            >
              Consultar por este tratamiento
            </Link>
          </div>
          <div className="rounded-[2rem] border border-navy/10 p-7">
            <h2 className="text-lg">Para seguir leyendo</h2>
            {posts
              .filter((p) => p.treatment === t.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={"/blog/" + p.slug}
                  className="mt-4 block text-sm leading-6 text-primary hover:underline"
                >
                  {p.title} ↗
                </Link>
              ))}
            <Link href="/services" className="mt-5 block text-sm text-muted">
              Ver todos los tratamientos →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
