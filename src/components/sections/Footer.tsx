import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { mainPages, treatments } from "@/content/treatments";
import { posts } from "@/content/posts";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SocialLinks } from "@/components/ui/SocialLinks";
export function Footer() {
  const clinic = mainPages.filter((p) => !p.href.startsWith("/tratamientos/"));
  return (
    <footer className="border-t border-[#E4E8EF] bg-[#F5F7FB]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-between gap-6 border-b border-navy/10 py-12 md:flex-row md:items-center">
          <h2 className="max-w-xl text-3xl leading-tight sm:text-4xl">
            Tu próxima sonrisa
            <br />
            <span className="font-normal text-muted">
              empieza con una conversación.
            </span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-5 rounded-full bg-primary py-3 pl-6 pr-3 text-sm font-bold text-white"
          >
            Hablemos{" "}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-[1.2fr_.8fr_1fr_1.4fr]">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Dental Sunset, inicio">
              <BrandLogo />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-muted">
              Una experiencia dental cercana, clara y a tu ritmo.
            </p>
            <SocialLinks className="mt-5 w-fit rounded-full bg-primary px-2 py-1 text-white" />
            <p className="mt-5 max-w-xs text-xs leading-6 text-muted">
              Proyecto de demostración. Clínica, opiniones y perfiles ficticios.
              No se prestan servicios clínicos. La agenda permite probar el flujo de reserva.
            </p>
          </div>
          <nav aria-label="Páginas de la clínica">
            <h3 className="mb-5 text-sm font-bold">La clínica</h3>
            <ul className="space-y-3 text-sm text-muted">
              {clinic.map((p) => (
                <li key={p.href}>
                  <Link className="hover:text-primary" href={p.href}>
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Especialidades dentales">
            <h3 className="mb-5 text-sm font-bold">Tratamientos</h3>
            <ul className="space-y-3 text-sm text-muted">
              {treatments.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={"/tratamientos/" + t.slug}
                    className="hover:text-primary"
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav
            aria-label="Artículos del blog"
            className="col-span-2 lg:col-span-1"
          >
            <h3 className="mb-5 text-sm font-bold">Para seguir aprendiendo</h3>
            <ul className="grid gap-3 text-sm leading-6 text-muted sm:grid-cols-2 lg:grid-cols-1">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link href={"/blog/" + p.slug} className="hover:text-primary">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-5 border-t border-navy/10 py-6 text-xs leading-6 text-muted md:flex-row md:items-center md:justify-between">
          <div>
            <p>© {new Date().getFullYear()} Dental Sunset · Demo</p>
            <div className="mt-1 flex flex-wrap gap-x-4">
              <Link
                href="/terminos-y-condiciones"
                className="hover:text-primary"
              >
                Términos y condiciones
              </Link>
              <Link
                href="/politica-de-privacidad"
                className="hover:text-primary"
              >
                Política de privacidad
              </Link>
            </div>
          </div>
          <a
            href="https://www.angelstudiodigital.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-primary"
          >
            Desarrollado por{" "}
            <span className="font-bold text-primary">Angel Design Studio</span>{" "}
            ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
