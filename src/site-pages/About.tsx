import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { config } from "@/config";
import { ClinicMetrics } from "@/components/sections/ClinicMetrics";

export function About() {
    const { branding, dynamicContent } = config;

    return (
        <main className="min-h-screen bg-white">
            <section className="container mx-auto grid items-center gap-10 px-6 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
                <div className="max-w-xl">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">Sobre nosotros</p>
                    <h1 className="font-display text-4xl leading-tight tracking-tight text-navy md:text-6xl">
                        Odontología con <span className="font-normal text-muted">trato humano</span>
                    </h1>
                    <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
                        En {branding.name} cuidamos tu sonrisa con una atención clara, cercana y centrada en ti. En {dynamicContent.city}, te acompañamos desde la primera consulta para que conozcas tus opciones y tomes cada decisión con confianza.
                    </p>
                    <Link href="/#ubicacion" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-primary/20 transition hover:bg-[#1756E8]">
                        <MapPin className="h-4 w-4" /> Ver ubicación
                    </Link>
                </div>
                <div className="relative mx-auto w-full max-w-lg rounded-[2rem] bg-softblue p-4 sm:p-6">
                    <img src="/images-media/Dentista de pie con los brazos cruzados.jpg" alt="Imagen ilustrativa de un profesional dental" className="aspect-[4/3] w-full rounded-[1.5rem] object-cover" />
                    <div className="absolute -bottom-4 left-8 rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-navy shadow-xl ring-1 ring-[#E5ECF8]">
                        {dynamicContent.localAnchor}<br />{dynamicContent.city}
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 pb-14"><ClinicMetrics /></div>
            <section className="bg-[#F7F9FF] py-14 md:py-20">
                <div className="container mx-auto grid gap-6 px-6 md:grid-cols-2">
                    {config.services.map((service) => (
                        <article key={service.id} className="rounded-3xl border border-[#E6ECF8] bg-white p-6 shadow-sm">
                            <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-xl text-white">{service.icon}</span>
                            <h2 className="font-display text-2xl font-semibold text-navy">{service.title}</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{service.solve}</p>
                        </article>
                    ))}
                </div>
                <div className="container mx-auto px-6 pt-8 text-center">
                    <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-[#1756E8]">Todos los tratamientos <ArrowRight className="h-4 w-4" /></Link>
                </div>
            </section>
        </main>
    );
}
