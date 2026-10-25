"use client";

import { Hero, Stats, Features, Roadmap, Testimonials, CTA, Contact, FAQ, ServiceTicker } from "@/components/sections";

export function Home() {
    return (
        <main className="relative">
            <Hero />
            <Stats />
            <ServiceTicker />
            <Features />
            <Roadmap />
            <Testimonials />
            <CTA />
            <FAQ />
            <Contact />
        </main>
    );
}
