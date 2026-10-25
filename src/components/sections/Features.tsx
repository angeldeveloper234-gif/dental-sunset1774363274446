import { motion } from "framer-motion";
import { config } from "@/config";
import { ArrowRight } from "lucide-react";
import { BrandSparkles } from "@/components/ui/BrandSparkles";

const serviceImages = [
    "/images-media/Dentista examinando los dientes del paciente femenino.jpg",
    "/images-media/Ortodoncista con guantes de látex manipulando equipos dentales.jpg",
    "/images-media/Un primer plano de los instrumentos dentales.jpg",
    "/images-media/dentista-tratando-pacientes-con-dientes.jpg",
];

export function Features() {
    const { services } = config;

    return (
        <section id="tratamientos" className="relative bg-white py-20 md:py-24">
            <BrandSparkles className="absolute right-[6%] top-20 hidden h-24 w-24 rotate-12 text-primary/10 md:block" />
            <div className="container mx-auto px-6">
                <div className="mb-10 max-w-3xl md:mb-14">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-[2px] w-8 rounded-full bg-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                            Nuestros tratamientos
                        </span>
                    </div>
                    <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-navy md:text-5xl">
                        Excelencia en odontología <span className="italic text-primary">con un toque humano.</span>
                    </h2>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                        Conoce los tratamientos de Dental Sunset y encuentra el punto de partida para tu atención.
                    </p>
                </div>

                {/* “1.jpg” inspira el espacio y el ritmo de las tarjetas; la referencia azul inspira las imágenes y los controles azules independientes debajo de cada foto. */}
                <div className="grid grid-cols-1 gap-x-5 gap-y-11 pt-6 sm:grid-cols-2 xl:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.id}
                            initial={{ opacity: 1, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-64px" }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="group relative z-0 mt-0 flex h-full flex-col rounded-[1.5rem] border border-[#DCE7F2] bg-white shadow-[0_8px_24px_rgba(18,63,120,0.06)] transition-shadow duration-300 hover:z-20 hover:shadow-[0_16px_36px_rgba(18,63,120,0.12)]"
                        >
                            <div className="relative z-0 aspect-[1.35/1] min-h-0 w-full shrink-0 rounded-t-[1.5rem] bg-[#EAF2FA]">
                                <div className="absolute inset-0 overflow-hidden rounded-t-[1.5rem]">
                                    <img
                                        src={serviceImages[index] ?? serviceImages[0]}
                                        alt={service.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                    />
                                </div>
                                <div className="absolute -bottom-6 left-6 z-30 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-[#286CFD] text-2xl leading-none text-white shadow-[0_8px_18px_rgba(40,108,253,0.3)] ring-1 ring-[#286CFD]/20">
                                    <span aria-hidden="true">{service.icon}</span>
                                </div>
                            </div>

                            <div className="relative z-10 flex flex-1 flex-col px-5 pb-6 pt-12 sm:px-6 sm:pt-12">
                                <h3 className="mb-2 font-serif text-xl font-bold leading-tight text-navy">
                                    {service.title}
                                </h3>
                                <p className="flex-1 text-sm leading-6 text-slate-600">
                                    {service.solve}
                                </p>
                                <a
                                    href="/services"
                                    className="relative z-20 mt-5 inline-flex min-h-10 w-fit items-center gap-2 rounded-full border border-[#B8D0EA] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    aria-label={`Saber más sobre ${service.title}`}
                                >
                                    Saber más <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
