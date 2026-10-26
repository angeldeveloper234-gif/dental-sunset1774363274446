import { motion } from "framer-motion";
import { config } from "@/config";

export function Roadmap() {
    const { roadmap } = config.dynamicContent;

    return (
        <section id="proceso" className="scroll-mt-32 bg-softblue py-20 md:py-24">
            <div className="container mx-auto px-6">
                <div className="mb-10 grid gap-5 md:mb-14 md:grid-cols-[minmax(0,1fr)_20rem] md:items-end">
                    <div className="max-w-2xl">
                        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.18em] text-primary">Tu experiencia</span>
                        <h2 className="font-display text-4xl leading-[1.08] text-navy md:text-5xl">
                            El camino hacia tu <span className="font-normal text-muted">mejor sonrisa</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm leading-6 text-slate-600">
                        Contacta directamente a la clínica para consultar sobre un tratamiento y coordinar una visita.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                    {roadmap.map((item: { step: string; title: string; desc: string }, index) => (
                        <motion.article
                            key={item.step}
                            initial={{ opacity: 1, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-64px" }}
                            transition={{ delay: index * 0.08, duration: 0.45 }}
                            className="relative z-0 rounded-[1.5rem] border border-white/80 bg-white p-5 shadow-[0_8px_24px_rgba(18,63,120,0.06)] sm:p-7"
                        >
                            <div className="mb-6 flex items-center gap-3">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-white shadow-[0_8px_18px_rgba(18,98,184,0.22)]">
                                    {item.step}
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                                    Paso {item.step}
                                </span>
                            </div>
                            <h3 className="mb-3 font-display text-2xl font-bold leading-tight text-navy">
                                {item.title}
                            </h3>
                            <p className="text-sm leading-6 text-slate-600">{item.desc}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
