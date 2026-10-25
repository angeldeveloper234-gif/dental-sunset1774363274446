import { config } from "@/config";

export function ServiceTicker() {
    const services = config.services;

    return (
        <section aria-label="Tratamientos disponibles" className="overflow-hidden bg-primary py-4 text-white">
            <div className="dental-marquee flex w-max items-center" aria-hidden="true">
                {[0, 1].map((copy) => (
                    <div key={copy} className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
                        {services.map((service) => (
                            <span key={`${copy}-${service.id}`} className="inline-flex items-center gap-3 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs">
                                <span className="text-lg" aria-hidden="true">{service.icon}</span>
                                {service.title}
                                <span className="h-1.5 w-1.5 rounded-full bg-white/55" />
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
