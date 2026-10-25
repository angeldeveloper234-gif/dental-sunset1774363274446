import { CalendarCheck, Phone, Check, Sparkles } from "lucide-react";
import { config } from "@/config";
import Link from "next/link";
import { BrandSparkles } from "@/components/ui/BrandSparkles";
import { ToothPhoto, toothOutline } from "@/components/ui/ToothPhoto";

export function CTA() {
    return (
        <section id="agenda" className="relative isolate scroll-mt-20 overflow-hidden bg-[#286CFD] py-16 text-white md:py-20">
            <svg aria-hidden="true" viewBox="0 0 400 440" className="pointer-events-none absolute -left-28 -top-32 h-[34rem] w-[30rem] -rotate-12 text-white/[0.06]"><path d={toothOutline} fill="none" stroke="currentColor" strokeWidth="12" /></svg>
            <div className="pointer-events-none absolute -right-20 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="container relative mx-auto grid items-center gap-8 px-6 md:grid-cols-[1.1fr_.9fr] md:gap-2">
                <div className="relative z-20 max-w-3xl text-center md:py-8 md:text-left">
                    <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/75">Dental Sunset · Cabo San Lucas</span>
                    <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-white md:text-5xl lg:text-6xl">
                        Agenda tu valoración y da el siguiente paso con confianza.
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85 md:mx-0 md:text-lg">
                        Contacta al equipo de la clínica para consultar disponibilidad y elegir tu tratamiento.
                    </p>
                    <ul className="mx-auto mt-6 grid w-fit gap-3 text-left text-sm text-white/90 md:mx-0">
                        {["Consulta por el tratamiento que necesitas", "Coordina tu visita directamente con la clínica", "Encuéntranos en Cabo San Lucas"].map((text) => (
                            <li key={text} className="flex items-center gap-3"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20"><Check className="h-3 w-3" /></span>{text}</li>
                        ))}
                    </ul>
                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                        <Link href="/contact" className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-xs font-bold uppercase tracking-[0.14em] text-[#174DAD] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#F2F6FF]">
                            <CalendarCheck className="mr-2 h-4 w-4" /> Agendar cita
                        </Link>
                        <a href={`https://wa.me/${config.demoUser.whatsapp.replace("+", "")}`} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/55 px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white/10">
                            <Phone className="mr-2 h-4 w-4" /> WhatsApp
                        </a>
                    </div>
                </div>

                <div className="relative mx-auto aspect-[1.05/1] w-full max-w-[490px]" aria-label="Composición decorativa con fotografías dentales">
                    <div className="pointer-events-none absolute inset-[10%] rounded-full bg-white/10 blur-3xl" />
                    <ToothPhoto src="/images-media/dentista-tratando-pacientes-con-dientes.jpg" className="absolute right-0 top-0 h-[94%] w-[87%] rotate-6 drop-shadow-[0_20px_28px_rgba(9,35,94,0.2)]" />
                    <ToothPhoto src="/images-media/Dentista examinando los dientes del paciente femenino.jpg" className="absolute -left-[1%] bottom-[3%] z-10 h-[48%] w-[44%] -rotate-12 drop-shadow-xl" />
                    <BrandSparkles className="absolute left-[3%] top-[5%] h-[23%] w-[23%] text-white" />
                    <BrandSparkles className="absolute right-0 bottom-[20%] h-[12%] w-[12%] rotate-12 text-[#B8D8FF]" />
                    <div className="absolute bottom-[3%] right-[6%] z-20 flex h-24 w-24 flex-col items-center justify-center rounded-full border-[5px] border-[#286CFD] bg-[#152542] text-center text-white shadow-xl sm:h-28 sm:w-28">
                        <Sparkles className="mb-1 h-5 w-5 text-[#8FB7FF]" /><span className="text-[8px] font-bold uppercase leading-4 tracking-[0.15em]">Tu próxima<br />sonrisa</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
