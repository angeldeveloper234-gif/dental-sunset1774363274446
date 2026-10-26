// Replace these URLs when adapting the template to another business.
export const booking = {
  path: "/reservar",
  provider: "AgendaPro",
  whatsappNumber: "5493873529421",
  url: "https://dentalsunset.agendapro.com/ar",
  embedUrl: "https://agendapro.com/iframe/overview/13ec9c49-676f-4688-a2c9-466c5c1f5bcb",
};

export function whatsappBookingUrl(service?: string) {
  const message = service
    ? `Hola, quisiera agendar una consulta de ${service} en Dental Sunset. ¿Qué horarios tienen disponibles?`
    : "Hola, quisiera agendar una cita en Dental Sunset. ¿Qué horarios tienen disponibles?";
  return `https://wa.me/${booking.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
