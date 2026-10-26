import { treatments } from "@/content/treatments";
import { ToothIcon } from "@/components/ui/BrandLogo";

export function ServiceTicker() {
  // Both groups include identical trailing spacing to keep the loop seamless.
  const items = treatments;
  return (
    <section
      aria-label="Tratamientos disponibles"
      className="service-ticker overflow-hidden bg-primary text-white"
    >
      <ul className="sr-only">
        {treatments.map((service) => (
          <li key={service.slug}>{service.title}</li>
        ))}
      </ul>
      <div
        className="dental-marquee flex w-max items-center"
        aria-hidden="true"
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="ticker-group flex min-w-[100vw] shrink-0 items-center justify-around"
          >
            {items.map((service, index) => (
              <span
                key={`${service.slug}-${index}`}
                className="inline-flex shrink-0 items-center gap-5 whitespace-nowrap px-7 py-5 text-base font-medium tracking-[-0.01em] sm:gap-7 sm:px-9 sm:text-lg"
              >
                <ToothIcon className="h-7 w-7 shrink-0 text-white/85" />
                {service.title}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
