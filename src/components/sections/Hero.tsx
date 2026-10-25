import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { config } from "@/config";
import Link from "next/link";
import { BrandSparkles } from "@/components/ui/BrandSparkles";

export function Hero() {
    const { dynamicContent, branding } = config;
    const { city } = dynamicContent;

    return (
        <section id="inicio" className="relative isolate bg-white pt-0">
            <BrandSparkles className="absolute right-[4%] top-14 hidden h-20 w-20 text-primary/40 lg:block" />
            <div className="container relative mx-auto grid items-center gap-2 px-6 pb-0 pt-0 lg:min-h-[650px] lg:grid-cols-[1.04fr_.96fr] lg:gap-6 lg:pb-0 lg:pt-0">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="relative z-10 order-1 max-w-[640px] pb-5 pt-0 lg:pb-12 lg:pt-0"
                >
                    <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D7E6F5] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#315579] shadow-sm sm:text-[11px]">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        {branding.trade} <span aria-hidden="true">·</span> {city}
                    </p>

                    <h1 className="max-w-[15ch] font-serif text-[clamp(2.8rem,5.1vw,4.55rem)] font-bold leading-[1.04] tracking-[-0.04em] text-navy">
                        La <span className="italic text-primary">sonrisa</span> que mereces, con la tranquilidad que buscas.
                    </h1>

                    <p className="mt-6 max-w-[34rem] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                        Especialistas en odontología estética y avanzada. Experimenta un cuidado dental de clase mundial con el Dr. Benito y el Dr. César en el corazón de {city}.
                    </p>

                    <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
                        <Link href="#contact" className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_12px_26px_rgba(40,108,253,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#1756E8] hover:shadow-[0_16px_30px_rgba(40,108,253,0.28)] sm:w-auto">
                            Agendar cita <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>

                        <a href="#tratamientos" className="group inline-flex items-center gap-3 self-center text-left sm:self-auto">
                            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B7D2F0] bg-white text-primary transition-colors group-hover:bg-[#EDF5FD]">
                                <Play className="ml-0.5 h-4 w-4 fill-current" />
                            </span>
                            <span className="text-xs font-bold uppercase tracking-[0.16em] text-navy">Ver tratamientos</span>
                        </a>
                    </div>
                </motion.div>

                {/* La composición lateral y el acento azul retoman “Recursos para desarrollar una web desde cero con calidad.jpg”; el fondo claro y el aire editorial retoman “1.jpg”. El PNG se mantiene íntegro y alineado abajo. */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
                    className="relative order-2 mx-auto flex min-h-[340px] w-full max-w-[560px] items-end justify-center sm:min-h-[430px] lg:min-h-[650px] lg:max-w-none"
                >
                    <div className="pointer-events-none absolute bottom-[4%] left-[12%] right-[10%] h-[72%] rounded-full bg-[#286CFD]/10 blur-3xl sm:h-[78%]" />
                    <div className="pointer-events-none absolute bottom-[12%] right-[13%] h-20 w-20 rounded-full border border-[#286CFD]/10 bg-[#DDEBFF]/35 sm:h-28 sm:w-28" />
                    <img
                        src="/images-media/imagen-hero-transparent.png"
                        alt="Profesional odontológico con uniforme clínico"
                        className="relative z-10 block h-[340px] w-auto max-w-none self-end object-contain object-bottom drop-shadow-[0_16px_20px_rgba(26,68,112,0.12)] sm:h-[430px] lg:h-[650px]"
                    />
                </motion.div>
            </div>
        </section>
    );
}
