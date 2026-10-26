import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ToothIcon } from "@/components/ui/BrandLogo";

export function Philosophy() {
  return (
    <div className="container mx-auto mb-16 px-6 md:mb-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#E0E6EF] bg-white px-6 py-12 text-center sm:px-10 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rotate-45 rounded-[3rem] border border-primary/[0.06]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rotate-45 rounded-[3rem] border border-primary/[0.06]"
        />
        <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
          Nuestra forma de cuidar
        </p>
        <h2 className="relative mx-auto max-w-[980px] text-[clamp(1.7rem,3.1vw,2.8rem)] font-medium leading-[1.22] tracking-[-0.045em] text-muted">
          <span className="font-bold text-navy">Cuidamos tu sonrisa</span>{" "}
          <span className="inline-flex translate-y-1 items-center rounded-full border border-primary/10 bg-softblue px-3 py-1 align-baseline">
            <ToothIcon className="h-6 w-6 text-primary md:h-8 md:w-8" />
          </span>{" "}
          con atención cercana y un enfoque humano, para que cada visita se
          sienta{" "}
          <span className="font-bold text-navy">más cómoda y tranquila.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-muted">
          Un espacio para conversar, resolver tus dudas y dar el siguiente paso
          en el cuidado de tu sonrisa.
        </p>
        <Link
          href="/about"
          className="mt-7 inline-flex items-center gap-5 rounded-full bg-primary py-2 pl-5 pr-2 text-xs font-bold text-white transition hover:bg-[#1756E8]"
        >
          Conoce Dental Sunset
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </div>
  );
}
