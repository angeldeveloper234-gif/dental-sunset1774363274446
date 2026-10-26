import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/content/posts";
import { treatments } from "@/content/treatments";
import { PageIntro } from "@/components/content/PageIntro";
import { pageMetadata, siteUrl } from "@/lib/site";
export const dynamicParams = false;
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return post ? pageMetadata(post.title, post.excerpt, "/blog/" + slug) : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const treatment = treatments.find((t) => t.slug === post.treatment)!;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: "2026-10-25",
    dateModified: "2026-10-25",
    inLanguage: "es-MX",
    mainEntityOfPage: siteUrl + "/blog/" + post.slug,
    image: siteUrl + "/images-media/" + encodeURIComponent(post.image),
    author: {
      "@type": "Organization",
      name: "Dental Sunset · proyecto de demostración",
    },
    publisher: {
      "@type": "Organization",
      name: "Dental Sunset · proyecto de demostración",
    },
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <PageIntro
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
      />
      <section className="container mx-auto grid gap-12 px-6 py-14 lg:grid-cols-[1fr_280px]">
        <article className="min-w-0">
          <p className="mb-6 text-xs text-muted">
            Equipo editorial de la demo · 25 de octubre de 2026 · 3 min de
            lectura
          </p>
          <img
            src={"/images-media/" + post.image}
            alt=""
            className="mb-10 aspect-[1.8] w-full rounded-[2rem] object-cover"
          />
          {post.sections.map(([title, text], i) => (
            <section key={title} id={"parte-" + i} className="mb-9">
              <h2 className="mb-4 text-2xl tracking-tight">{title}</h2>
              <p className="max-w-3xl text-base leading-8 text-muted">{text}</p>
            </section>
          ))}
          <div className="rounded-2xl border border-primary/10 bg-softblue p-6">
            <p className="text-sm leading-6">
              Contenido informativo, sin diagnóstico ni revisión clínica
              individual. Consulta a un profesional para valorar tu caso.
            </p>
            <h2 className="mb-3 mt-6 text-lg">Fuentes consultadas</h2>
            {post.sources.map(([label, url]) => (
              <a
                key={url}
                className="block text-sm leading-7 text-primary hover:underline"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {label} ↗
              </a>
            ))}
          </div>
        </article>
        <aside className="lg:sticky lg:top-36 lg:self-start">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
            En esta guía
          </p>
          <nav aria-label="Índice del artículo" className="space-y-3">
            {post.sections.map(([title], i) => (
              <a
                key={title}
                href={"#parte-" + i}
                className="block text-sm leading-6 text-muted hover:text-primary"
              >
                {title}
              </a>
            ))}
          </nav>
          <div className="mt-8 rounded-2xl bg-primary p-6 text-white">
            <h2 className="text-xl text-white">Conoce el tratamiento</h2>
            <Link
              href={"/tratamientos/" + treatment.slug}
              className="mt-5 block text-sm font-bold"
            >
              {treatment.title} →
            </Link>
          </div>
          <Link
            href="/blog"
            className="mt-6 block text-sm font-bold text-primary"
          >
            ← Volver al blog
          </Link>
        </aside>
      </section>
    </main>
  );
}
