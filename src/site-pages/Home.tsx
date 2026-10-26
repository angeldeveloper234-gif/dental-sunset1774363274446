"use client";

import { Hero, Stats, Features, Roadmap, Testimonials, CTA, Contact, FAQ, ServiceTicker } from "@/components/sections";

import {HomeJournal,FirstVisitPreview} from "@/components/sections/HomeJournal";

export function Home() {
    return (
        <main className="relative">
            <Hero />
            <Stats />
            <ServiceTicker />
            <Features />
            <Roadmap />
            <FirstVisitPreview />
            <Testimonials />
            <CTA />
            <FAQ />
            <HomeJournal />
            <Contact />
        </main>
    );
}
