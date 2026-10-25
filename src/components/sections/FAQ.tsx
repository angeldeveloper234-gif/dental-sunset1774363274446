import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, HelpCircle } from "lucide-react";
import { config } from "@/config";
import { BrandSparkles } from "@/components/ui/BrandSparkles";

const faqs = [
    {
        q: "¿Dónde está Dental Sunset?",
        a: `La clínica está en ${config.dynamicContent.localAnchor}, ${config.dynamicContent.city}.`,
    },
    {
        q: "¿Cómo consulto disponibilidad?",
        a: `Comunícate con la clínica por WhatsApp al ${config.demoUser.whatsapp} para consultar horarios y coordinar tu visita.`,
    },
    {
        q: "¿Qué tratamientos ofrece la clínica?",
        a: `En el sitio puedes consultar información sobre ${config.services.map((service) => service.title.toLowerCase()).join(", ")}. Confirma con el equipo cuál es adecuado para tu caso.`,
    },
    {
        q: "¿Puedo preguntar por el precio de un tratamiento?",
        a: "Sí. Escríbele a la clínica para consultar el costo y los detalles del tratamiento que te interesa.",
    },
    {
        q: "¿Cómo llego a la clínica?",
        a: `${config.dynamicContent.localAnchor}, ${config.dynamicContent.city}. Puedes abrir la ubicación desde el enlace de Google Maps en la sección de contacto.`,
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 md:py-32 bg-ivory relative border-t border-navy/5">
            <BrandSparkles className="absolute left-[5%] top-20 hidden h-20 w-20 -rotate-12 text-primary/10 lg:block" />
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-peach font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Despeja tus dudas
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight">
                        Preguntas <span className="italic text-navy/70">Frecuentes</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div 
                            key={i} 
                            className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                                openIndex === i 
                                ? "bg-white border-peach/30 shadow-2xl shadow-navy/5" 
                                : "bg-white/40 border-navy/5 hover:border-peach/20"
                            }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex items-center justify-between w-full p-6 md:p-8 text-left transition-all group"
                            >
                                <div className="flex items-center gap-4 pr-8">
                                    <HelpCircle className={`w-5 h-5 transition-colors ${openIndex === i ? "text-peach" : "text-navy/30"}`} />
                                    <span className={`text-base md:text-lg font-bold font-sans tracking-tight transition-colors ${openIndex === i ? "text-navy" : "text-dark group-hover:text-navy"}`}>
                                        {faq.q}
                                    </span>
                                </div>
                                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === i ? "bg-peach text-navy rotate-45" : "bg-navy/5 text-navy hover:bg-navy/10"}`}>
                                    <Plus className="w-5 h-5" />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "circOut" }}
                                    >
                                        <div className="px-8 pb-8 md:px-14 md:pb-10">
                                            <div className="h-px w-full bg-navy/5 mb-6" />
                                            <p className="text-dark font-sans leading-relaxed text-sm md:text-base">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
