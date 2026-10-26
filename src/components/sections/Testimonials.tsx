"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star, Pause, Play } from "lucide-react";
import { demoReviews } from "@/content/demoReviews";
const reviews = demoReviews.filter((r) => r.rating >= 4);
const portraits = [
  "/images-media/avatar-stock-woman.jpg",
  "/images-media/avatar-stock-man.jpg",
];
function Avatar({ name, index }: { name: string; index: number }) {
  return index % 3 === 2 ? (
    <span
      aria-hidden="true"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-softblue text-sm font-bold text-primary ring-2 ring-white"
    >
      {name.charAt(0)}
    </span>
  ) : (
    <img
      src={portraits[index % 2]}
      alt=""
      loading="lazy"
      width="40"
      height="40"
      className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-white"
    />
  );
}
export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const section = useRef<HTMLElement>(null);
  const interactionUntil = useRef(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(true);
  const move = useCallback(
    (direction: number) => {
      const el = track.current;
      if (!el) return;
      const card =
        el.querySelector("article")?.getBoundingClientRect().width ??
        el.clientWidth;
      const end = el.scrollWidth - el.clientWidth;
      const target =
        direction > 0 && el.scrollLeft >= end - 3
          ? 0
          : direction < 0 && el.scrollLeft <= 3
            ? end
            : el.scrollLeft + direction * (card + 20);
      const wrapping = (direction > 0 && el.scrollLeft >= end - 3) || (direction < 0 && el.scrollLeft <= 3);
      el.scrollTo({ left: target, behavior: reduced || wrapping ? "instant" : "smooth" });
    },
    [reduced],
  );
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    if (section.current) observer.observe(section.current);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", update);
    };
  }, []);
  useEffect(() => {
    if (paused || !visible) return;
    const timer = setInterval(() => {
      if (!document.hidden && Date.now() > interactionUntil.current) move(1);
    }, 4500);
    return () => clearInterval(timer);
  }, [paused, visible, move]);
  const manual = (direction: number) => {
    interactionUntil.current = Date.now() + 13000;
    move(direction);
  };
  return (
    <section
      ref={section}
      id="opiniones"
      className="bg-[#F3F5F9] py-20 md:py-24"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <img
            src="/images-media/google.svg"
            alt="Google"
            width="42"
            height="43"
            className="mx-auto mb-5 h-10 w-10"
          />
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
            Experiencias que se comparten
          </p>
          <h2 className="text-4xl leading-tight md:text-5xl">
            Cada visita,
            <br />
            <span className="font-normal text-muted">
              una historia cercana.
            </span>
          </h2>
        </div>
        <div
          className="grid gap-5 md:grid-cols-[250px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)]"
        >
          <aside className="flex min-h-[260px] flex-col justify-between rounded-[2rem] bg-primary p-7 text-white">
            <div>
              <div className="mb-4 flex gap-1" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-4xl font-bold">
                {(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)}{" "}
                <span className="text-base font-normal text-white/70">/ 5</span>
              </p>
              <p className="mt-3 text-lg leading-7">
                Una experiencia
                <br />
                que da confianza.
              </p>
            </div>
            <div className="mt-8">
              <div className="mb-4 flex -space-x-2">
                {reviews.slice(0, 3).map((r, i) => (
                  <Avatar key={r.name} name={r.name} index={i} />
                ))}
              </div>
              <p className="text-sm">{reviews.length} opiniones compartidas</p>
            </div>
          </aside>
          <div
            ref={track}
            tabIndex={0}
            role="region"
            aria-label="Carrusel de opiniones"
            aria-live="off"
            onTouchStart={() => {
              interactionUntil.current = Date.now() + 13000;
            }}
            className="review-slider flex min-w-0 snap-x snap-mandatory gap-5 overflow-x-auto rounded-[2rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            {reviews.map((review, index) => (
              <article
                key={review.name}
                className="flex min-h-[340px] w-full shrink-0 snap-start flex-col rounded-[2rem] bg-white p-7 lg:w-[calc(50%_-_10px)]"
              >
                <span aria-hidden="true" className="h-10 text-6xl text-primary">
                  “
                </span>
                <div
                  className="my-4 flex gap-1 text-primary"
                  aria-label={review.rating + " de 5 estrellas"}
                >
                  {Array.from({ length: review.rating }, (_, i) => (
                    <Star
                      aria-hidden="true"
                      key={i}
                      className="h-3 w-3 fill-current"
                    />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-7 text-muted">
                  {review.text}
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <Avatar name={review.name} index={index} />
                  <div>
                    <p className="text-sm font-bold">{review.name}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-3">
          {[
            {
              label: "Reseña anterior",
              icon: ArrowLeft,
              action: () => manual(-1),
            },
            {
              label: paused
                ? "Activar reproducción automática"
                : "Pausar reproducción automática",
              icon: paused ? Play : Pause,
              action: () => setPaused(!paused),
            },
            {
              label: "Siguiente reseña",
              icon: ArrowRight,
              action: () => manual(1),
            },
          ].map(({ label, icon: Icon, action }) => (
            <button
              type="button"
              onClick={action}
              aria-label={label}
              key={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-white text-primary hover:bg-softblue"
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
