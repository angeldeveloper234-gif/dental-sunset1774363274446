import Link from "next/link";
import { DentalPattern } from "@/components/ui/DentalPattern";
export function PageIntro({
  title,
  description,
  eyebrow = "Dental Sunset",
}: {
  title: string;
  description: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-navy/5 bg-[#F4F7FD] py-12 md:py-20">
      <DentalPattern className="right-0 top-0 h-full w-1/3 text-primary/[0.07]" />
      <div className="container relative mx-auto px-6">
        <Link href="/" className="text-xs text-muted hover:text-primary">
          Inicio / {eyebrow}
        </Link>
        <p className="mb-4 mt-8 text-xs font-bold uppercase tracking-[.16em] text-primary">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.07] tracking-[-.045em] md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
