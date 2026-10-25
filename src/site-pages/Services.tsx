"use client";

import { Features, CTA } from "@/components/sections";

export function Services() {
    return (
        <main className="min-h-screen bg-white">
            <section className="bg-[#F7F9FF] px-6 py-14 md:py-20">
                <div className="container mx-auto max-w-4xl text-center">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">
                        Especialidades
                    </span>
                    <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-navy md:text-6xl">
                        Soluciones <span className="text-primary">dentales</span>
                    </h1>
                    <p className="text-base leading-relaxed text-slate-600 md:text-xl">
                        Desde limpiezas preventivas hasta rehabilitaciones orales completas.
                    </p>
                </div>
            </section>
            <Features />
            <CTA />
        </main>
    );
}
