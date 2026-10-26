"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { treatments } from "@/content/treatments";
export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState("");
  useEffect(() => { const value = new URLSearchParams(window.location.search).get("tratamiento"); if (value && treatments.some(t => t.slug === value)) setSelectedTreatment(value); }, []);
  return (
    <section id="contact" className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div id="ubicacion">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
              Hablemos
            </p>
            <h2 className="text-4xl leading-tight md:text-5xl">
              Tu próxima visita,
              <br />
              <span className="font-normal text-muted">un poco más cerca.</span>
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-muted">
              Cuéntanos qué te gustaría consultar. El primer paso es una
              conversación para conocer tus necesidades.
            </p>
            <div className="mt-7 flex items-start gap-3 text-sm">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <strong>Cabo San Lucas, Baja California Sur</strong>
                <p className="mt-1 text-muted">
                  Ubicación de referencia para esta clínica ficticia.
                </p>
              </div>
            </div>
            <div className="reveal-item mt-7 overflow-hidden rounded-[1.75rem] border border-[#DDE5F1] bg-softblue p-2">
              <iframe
                title="Mapa de referencia de Cabo San Lucas — clínica ficticia"
                src="https://maps.google.com/maps?q=Cabo%20San%20Lucas%2C%20Baja%20California%20Sur&z=13&output=embed"
                className="h-[310px] w-full rounded-[1.25rem] border-0 md:h-[350px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="flex items-center justify-between gap-3 px-3 py-3 text-xs text-muted">
                <span>Mapa ilustrativo · no es una sede real</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Cabo+San+Lucas"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir Cabo San Lucas en Google Maps"
                >
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                </a>
              </div>
            </div>
          </div>
          <div className="self-start rounded-[2rem] border border-[#E0E6EF] bg-[#F8FAFE] p-6 sm:p-9">
            <h3 className="text-2xl">Solicita información</h3>
            <p className="mb-7 mt-3 text-sm leading-6 text-muted">
              Formulario de demostración: no envía ni guarda datos. Utiliza
              información ficticia.
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >
              <label className="block text-sm font-medium">
                Nombre
                <input
                  required
                  name="name"
                  autoComplete="off"
                  placeholder="Tu nombre de ejemplo"
                  className="form-field"
                />
              </label>
              <label className="block text-sm font-medium">
                Correo electrónico
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="nombre@example.com"
                  className="form-field"
                />
              </label>
              <label className="block text-sm font-medium">
                ¿Qué te interesa?
                <select name="treatment" value={selectedTreatment} onChange={event => setSelectedTreatment(event.target.value)} className="form-field">
                  <option value="">Quiero una primera valoración</option>
                  {treatments.map((t) => (
                    <option key={t.slug} value={t.slug}>
                      {t.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium">
                Tu consulta
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Escribe una consulta de ejemplo, sin datos de salud."
                  className="form-field"
                />
              </label>
              <label className="flex items-start gap-3 text-xs leading-5 text-muted">
                <input
                  type="checkbox"
                  required
                  className="mt-1 accent-[#286CFD]"
                />
                <span>
                  He leído la{" "}
                  <Link
                    href="/politica-de-privacidad"
                    className="text-primary underline"
                  >
                    política de privacidad
                  </Link>{" "}
                  y entiendo que este formulario es una simulación.
                </span>
              </label>
              <button
                className="w-full rounded-full bg-primary px-6 py-4 text-sm font-bold text-white transition hover:bg-[#1756E8]"
                type="submit"
              >
                Probar solicitud
              </button>
              {submitted && (
                <div
                  role="status"
                  className="flex gap-3 rounded-xl border border-primary/20 bg-white p-4 text-sm leading-6"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    Solicitud de ejemplo completada. No se ha enviado ni
                    guardado información, y no se ha reservado una cita.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
