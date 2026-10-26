import { motion } from "framer-motion";
import { config } from "@/config";
import { MapPin, CheckCircle2 } from "lucide-react";
import { Philosophy } from "./Philosophy";
import { ClinicMetrics } from "./ClinicMetrics";

export function Stats() {
    const highlights = [
        { value: "Odontología", label: "Estética y avanzada" },
        { value: config.dynamicContent.city, label: "Ubicación" },
        { value: "+15 años", label: "De experiencia" },
    ];

    return (
        <>
            <section id="datos-destacados" aria-label="Datos destacados de Dental Sunset" className="bg-primary text-white">
                <div className="container mx-auto grid grid-cols-3 divide-x divide-white/20 px-4 py-5 sm:px-6 sm:py-6">
                    {highlights.map((item) => (
                        <div key={item.label} className="flex min-w-0 flex-col items-center justify-center px-2 text-center sm:px-5">
                            <strong className="font-display text-[clamp(.9rem,3.6vw,2.5rem)] font-semibold leading-tight tracking-tight">
                                {item.value}
                            </strong>
                            <span className="mt-2 max-w-[10rem] text-[8px] font-bold uppercase leading-[1.35] tracking-[0.1em] text-white/85 sm:text-[10px] sm:tracking-[0.16em]">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section id="sobre-nosotros" className="relative scroll-mt-32 bg-softblue py-20 md:py-24">
                <Philosophy />
                <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
                    <div className="relative mx-auto w-full max-w-[520px]">
                        <motion.div
                            initial={{ opacity: 1, scale: 0.97 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.55 }}
                            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#DCEBFA]"
                        >
                            <img
                                src="/images-media/Dentista de pie con los brazos cruzados.jpg"
                                alt="Profesional dental en una fotografía ilustrativa"
                                className="h-full w-full object-cover"
                            />

                            <div className="absolute bottom-5 left-5 right-5 z-10 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_12px_28px_rgba(18,63,120,0.12)] sm:bottom-7 sm:left-auto sm:right-5 sm:w-64">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E6F0FB]">
                                        <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-display text-base font-bold leading-tight text-navy">Nos encuentras en</p>
                                        <p className="mt-1 text-[11px] font-medium tracking-wide text-slate-600">{config.dynamicContent.localAnchor}, {config.dynamicContent.city}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 1, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="mb-5 flex items-center gap-4">
                                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">La experiencia Sunset</span>
                                <div className="h-px flex-1 bg-navy/15" />
                            </div>

                            <h2 className="mb-7 font-display text-3xl leading-[1.1] text-navy sm:text-4xl md:text-5xl">
                                Excelencia en odontología con <span className="font-normal text-muted">trato humano</span>
                            </h2>

                            <p className="mb-8 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                                Dental Sunset es una clínica odontológica en Cabo San Lucas. En esta página puedes conocer algunos tratamientos y contactar al equipo para consultar la atención que necesitas.
                            </p>

                            <div className="mb-8"><ClinicMetrics /></div>
                            <ul className="space-y-5">
                                {[
                                    {
                                        title: "Odontología estética y avanzada",
                                        desc: "Consulta las opciones de atención disponibles en la clínica."
                                    },
                                    {
                                        title: "Tratamientos odontológicos",
                                        desc: "Revisa la información de cada tratamiento y plantea tus dudas al equipo."
                                    },
                                    {
                                        title: "Ubicación en Cabo San Lucas",
                                        desc: "Conoce el mapa de referencia y la experiencia de contacto de la demo."
                                    }
                                ].map((item) => (
                                    <li key={item.title} className="flex gap-3">
                                        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
                                            <CheckCircle2 className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-bold text-navy">{item.title}</h3>
                                            <p className="max-w-sm text-sm leading-6 text-slate-600">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
