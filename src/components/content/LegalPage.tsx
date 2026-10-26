import Link from "next/link";
import { PageIntro } from "./PageIntro";
const terms = [
  [
    "1. Naturaleza de este sitio",
    "Dental Sunset es una clínica ficticia utilizada como ejemplo de diseño web. No presta servicios de salud ni representa una clínica real. La agenda externa de AgendaPro permite probar un flujo de reserva; una reserva de prueba no constituye una cita clínica ni la contratación de un tratamiento.",
  ],
  [
    "2. Uso de la demostración",
    "Puedes navegar por las páginas y probar el formulario con datos inventados. No introduzcas información real de pacientes, documentos, imágenes clínicas ni datos sensibles. La confirmación del formulario es una simulación y no crea una relación profesional o contractual.",
  ],
  [
    "3. Información de salud",
    "Los artículos y las páginas de tratamientos tienen finalidad educativa general. No constituyen diagnóstico, prescripción ni una recomendación individual. Para atender un problema de salud, consulta a un profesional habilitado; no utilices esta demo para solicitar atención.",
  ],
  [
    "4. Contenido ilustrativo",
    "Los testimonios, nombres y calificaciones son ficticios. Las fotografías son ilustrativas y algunas imágenes se generan con IA. La ubicación del mapa es de referencia. Los logotipos de terceros pertenecen a sus titulares y no implican afiliación ni respaldo.",
  ],
  [
    "5. Enlaces y recursos externos",
    "El sitio integra AgendaPro y puede enlazar a fuentes sanitarias, Google Maps y Angel Design Studio. Al utilizar esos recursos se aplican las condiciones de sus respectivos proveedores. La disponibilidad de servicios externos no depende de esta demostración.",
  ],
  [
    "6. Uso permitido",
    "No utilices la demo para suplantar a una clínica, enviar contenido ilícito o interferir con su funcionamiento. La existencia de contenido público no concede derechos sobre marcas o recursos de terceros.",
  ],
  [
    "7. Actualizaciones y consultas",
    "Estas condiciones describen esta versión de la demo y pueden actualizarse cuando cambie su funcionamiento. Para consultar sobre el proyecto, utiliza el sitio de Angel Design Studio enlazado en el pie. Antes de convertir la demo en un servicio real, deben sustituirse estos textos por condiciones adaptadas al titular y a la operación efectiva.",
  ],
];
const privacy = [
  [
    "1. Alcance de esta política",
    "Esta política describe la demostración ficticia Dental Sunset. No es el aviso de privacidad de una clínica real. No se ha habilitado la recepción de solicitudes clínicas, expedientes ni pagos.",
  ],
  [
    "2. Formulario de ejemplo",
    "Lo que escribes permanece temporalmente en los campos de tu navegador. El formulario no envía esos campos a un servidor ni los guarda en una base de datos. Al navegar fuera o recargar se pierde la simulación. Usa únicamente datos inventados y no escribas información de salud.",
  ],
  [
    "3. Datos técnicos",
    "Como en cualquier acceso web, el alojamiento puede recibir datos técnicos de conexión, como dirección IP, ruta solicitada y datos del navegador, conforme a su configuración. Esta versión no incorpora herramientas de publicidad ni analítica de terceros. Las fuentes se sirven desde el propio sitio.",
  ],
  [
    "4. AgendaPro, Google Maps y enlaces externos",
    "La página de reservas incorpora AgendaPro. Al cargar la agenda, el navegador se conecta con ese proveedor; cualquier dato enviado dentro de ella se procesa en AgendaPro y puede registrar una reserva en la cuenta de demostración. Usa datos inventados para probarla. Esto es independiente del formulario local de contacto, que no envía datos. La sección de contacto incorpora Google Maps. Ambos proveedores pueden tratar datos técnicos y utilizar cookies según sus propias políticas.",
  ],
  [
    "5. Almacenamiento y control del navegador",
    "Esta demo no guarda los campos del formulario ni utiliza almacenamiento local para conservar datos de contacto. Puedes gestionar o borrar las cookies y datos de sitios desde tu navegador. Los recursos de terceros, como el mapa, pueden tener sus propios mecanismos de almacenamiento.",
  ],
  [
    "6. Contacto sobre la demostración",
    "Para cuestiones sobre este ejemplo de sitio web, accede a Angel Design Studio mediante el enlace del pie. No envíes documentación personal o información clínica a esta demo. Cualquier tratamiento de datos en el sitio externo se rige por su propia política.",
  ],
  [
    "7. Adaptación a una clínica real",
    "Antes de publicar una versión operativa en México deben identificarse el responsable legal, su domicilio y el canal de privacidad; definir finalidades, datos tratados, transferencias, conservación, medidas de seguridad y procedimientos para ejercer derechos ARCO y revocar el consentimiento, según corresponda. El texto debe reflejar el funcionamiento real del servicio y revisarse profesionalmente.",
  ],
];
export function LegalPage({ kind }: { kind: "terms" | "privacy" }) {
  const privacyPage = kind === "privacy";
  return (
    <main>
      <PageIntro
        eyebrow="Información del sitio"
        title={
          privacyPage ? "Política de privacidad" : "Términos y condiciones"
        }
        description="Texto básico para esta demostración ficticia. Última actualización: 25 de octubre de 2026."
      />
      <section className="container mx-auto max-w-4xl px-6 py-14">
        <div className="mb-10 rounded-2xl border border-primary/15 bg-softblue p-5 text-sm leading-6">
          Este documento corresponde a la demo. No constituye un aviso legal
          completo para una clínica que atienda pacientes.
        </div>
        {(privacyPage ? privacy : terms).map(([title, text]) => (
          <section className="mb-8" key={title}>
            <h2 className="mb-3 text-xl">{title}</h2>
            <p className="leading-8 text-muted">{text}</p>
          </section>
        ))}
        {privacyPage && (
          <p className="mb-8 text-sm leading-7">
            Referencias:{" "}
            <a
              className="text-primary underline"
              href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf"
              target="_blank"
              rel="noreferrer"
            >
              legislación mexicana de datos personales
            </a>{" "}
            y{" "}
            <a
              className="text-primary underline"
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              política de Google
            </a>
            .
          </p>
        )}
        <Link
          href={
            privacyPage ? "/terminos-y-condiciones" : "/politica-de-privacidad"
          }
          className="text-sm font-bold text-primary"
        >
          {privacyPage
            ? "Consultar términos y condiciones"
            : "Consultar política de privacidad"}{" "}
          →
        </Link>
      </section>
    </main>
  );
}
