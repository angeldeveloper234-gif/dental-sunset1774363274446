import { CalendarDays, ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/content/PageIntro";
import { booking, whatsappBookingUrl } from "@/lib/booking";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Reserva tu cita", "Elige tu servicio y consulta los horarios disponibles en la agenda online de Dental Sunset.", booking.path);

export default function BookingPage() {
  return (
    <main>
      <PageIntro eyebrow="Reserva online" title="Un espacio para tu sonrisa." description="Elige el servicio, encuentra tu horario y sigue los pasos para agendar tu visita." />
      <section className="bg-white py-10 md:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <a href="#agenda-online" className="rounded-3xl border border-primary/20 bg-softblue p-6 transition hover:border-primary">
              <span className="text-lg font-bold text-primary">Reservar online →</span>
              <p className="mt-2 text-sm leading-6 text-muted">Elige tu servicio y horario directamente en AgendaPro.</p>
            </a>
            <a href={whatsappBookingUrl()} target="_blank" rel="noopener noreferrer" className="rounded-3xl border border-primary/20 bg-white p-6 transition hover:border-primary">
              <span className="text-lg font-bold text-primary">Agendar por WhatsApp ↗</span>
              <p className="mt-2 text-sm leading-6 text-muted">Conversa con nosotros para coordinar tu visita y resolver tus dudas.</p>
            </a>
          </div>
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-softblue text-primary"><CalendarDays className="h-5 w-5" /></span>
              <div><h2 className="text-xl font-bold">Agenda tu próxima visita</h2><p className="mt-1 text-sm text-muted">Consulta servicios y disponibilidad en {booking.provider}.</p></div>
            </div>
            <a href={booking.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-primary">Abrir agenda en otra pestaña <ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <div id="agenda-online" className="scroll-mt-36 overflow-hidden rounded-3xl border border-primary/15 bg-[#F4F7FD] p-1 shadow-[0_12px_45px_rgba(40,108,253,0.06)] sm:p-2">
            <iframe src={booking.embedUrl} title="Reservas online de Dental Sunset en AgendaPro" className="block h-[850px] w-full rounded-[20px] border-0 bg-white md:h-[900px]" referrerPolicy="strict-origin-when-cross-origin" />
          </div>
          <p className="mt-5 text-sm leading-6 text-muted">Si la agenda no carga, puedes abrirla en otra pestaña. Revisa la sede y la zona horaria indicadas por AgendaPro antes de confirmar.</p>
        </div>
      </section>
    </main>
  );
}
