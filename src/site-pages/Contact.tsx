"use client";

import { Contact as ContactSection } from "@/components/sections";

import {PageIntro} from "@/components/content/PageIntro";

export function Contact() {
    return (
        <main className="min-h-screen bg-white">
            <PageIntro title="Estamos para escucharte." eyebrow="Contacto" description="Conoce la experiencia de contacto de Dental Sunset. Esta es una demostración de una clínica ficticia."/>
            <ContactSection />
        </main>
    );
}
