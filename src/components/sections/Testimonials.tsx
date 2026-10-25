"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { config } from "@/config";

const portraits = ["/images-media/avatar-stock-woman.jpg", "/images-media/avatar-stock-man.jpg"];

function Avatar({ name, index, small = false }: { name: string; index: number; small?: boolean }) {
    const size = small ? "h-9 w-9" : "h-11 w-11";
    return index % 3 === 2 ? (
        <span aria-hidden="true" className={`${size} inline-flex shrink-0 items-center justify-center rounded-full bg-[#DFE9FF] font-serif text-lg font-bold text-primary ring-2 ring-white`}>{name.charAt(0)}</span>
    ) : (
        <img src={portraits[index % 2]} alt="" title="Foto de stock ilustrativa" loading="lazy" width={44} height={44} className={`${size} shrink-0 rounded-full object-cover ring-2 ring-white`} />
    );
}

export function Testimonials() {
    const reviews = config.testimonials.filter((review) => review.rating >= 4);
    const track = useRef<HTMLDivElement>(null);

    const move = (direction: number) => {
        const el = track.current;
        if (!el) return;
        const cardWidth = el.querySelector("article")?.getBoundingClientRect().width ?? el.clientWidth;
        const end = el.scrollWidth - el.clientWidth;
        const target = direction > 0 && el.scrollLeft >= end - 2 ? 0
            : direction < 0 && el.scrollLeft <= 2 ? end : el.scrollLeft + direction * (cardWidth + 20);
        el.scrollTo({ left: target, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    };

    return (
        <section id="opiniones" aria-labelledby="reviews-title" className="relative bg-[#F3F5F9] py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
                    <img src="/images-media/google.svg" alt="Google" width={42} height={43} className="mx-auto mb-5 h-11 w-11" />
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Experiencias de nuestros pacientes</p>
                    <h2 id="reviews-title" className="font-serif text-4xl leading-[1.12] tracking-[-0.03em] text-navy md:text-5xl">Sonrisas que inspiran <span className="italic text-primary">confianza.</span></h2>
                    <p className="mt-4 text-sm leading-6 text-slate-600">Una selección de opiniones de 4 y 5 estrellas publicadas en Google Maps.</p>
                </div>

                <div className="grid items-stretch gap-5 md:grid-cols-[250px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)]">
                    <aside className="relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-2xl bg-primary p-7 text-white md:min-h-[330px] lg:p-8">
                        <div className="pointer-events-none absolute -bottom-16 -right-16 h-52 w-52 rounded-full border-[30px] border-white/10" />
                        <div className="relative">
                            <div className="mb-4 flex gap-1.5" aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
                            <p className="font-serif text-3xl leading-tight text-white">Buenas experiencias.<br /><span className="text-white/70">Historias reales.</span></p>
                        </div>
                        <div className="relative mt-9 flex items-center gap-4">
                            <div className="flex -space-x-2">{reviews.map((review, index) => <Avatar key={review.name} name={review.name} index={index} small />)}</div>
                            <div><strong className="block text-xl">{reviews.length}</strong><span className="text-[11px] text-white/80">reseñas seleccionadas</span></div>
                        </div>
                    </aside>

                    <div ref={track} tabIndex={0} role="region" aria-label="Reseñas destacadas; desplázate para ver más" className="review-slider flex min-w-0 snap-x snap-mandatory gap-5 overflow-x-auto rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
                        {reviews.map((review, index) => (
                            <article key={review.name} className="flex min-h-[330px] w-full shrink-0 snap-start flex-col rounded-2xl border border-white bg-white p-7 lg:w-[calc(50%_-_10px)] lg:p-8">
                                <span aria-hidden="true" className="h-10 font-serif text-6xl leading-none text-primary">“</span>
                                <div className="mb-4 mt-2 flex gap-1 text-primary" aria-label={`${review.rating} de 5 estrellas`}>{Array.from({ length: review.rating }, (_, i) => <Star key={i} aria-hidden="true" className="h-3 w-3 fill-current" />)}</div>
                                <p className="flex-1 text-sm leading-7 text-slate-600">{review.text}</p>
                                <div className="mt-7 flex items-center gap-3">
                                    <Avatar name={review.name} index={index} />
                                    <div className="min-w-0"><p className="text-sm font-semibold leading-5 text-navy">{review.name}</p><p className="mt-1 text-[11px] text-slate-500">Google Maps · resumen</p></div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-6 flex justify-center gap-3">
                    <button type="button" onClick={() => move(-1)} aria-label="Reseña anterior" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E0E7F3] bg-white text-navy transition hover:border-primary hover:text-primary"><ArrowLeft className="h-4 w-4" /></button>
                    <button type="button" onClick={() => move(1)} aria-label="Siguiente reseña" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E0E7F3] bg-white text-navy transition hover:border-primary hover:text-primary"><ArrowRight className="h-4 w-4" /></button>
                </div>
                <div className="mt-6 text-center">
                    <a href={config.googleMapsReviewUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline">Ver más en Google Maps <ArrowRight className="h-3.5 w-3.5" /></a>
                    <p className="mt-3 text-[10px] leading-5 text-slate-500">Reseñas resumidas. Las fotos de perfil son ilustrativas.</p>
                </div>
            </div>
        </section>
    );
}
