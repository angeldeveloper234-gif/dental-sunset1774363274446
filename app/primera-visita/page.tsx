import Link from "next/link";
import { PageIntro } from "@/components/content/PageIntro";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Tu primera visita dental",
  "Prepara tus preguntas y conoce los pasos de una primera valoración dental.",
  "/primera-visita",
);
export default function Page() {
  return (
    <main>
      <PageIntro
        title="Primero, conocernos."
        eyebrow="Primera visita"
        description="No hace falta llegar con todas las respuestas. Una buena conversación empieza con tus preguntas."
      />
      <section className="container mx-auto grid gap-10 px-6 py-16 lg:grid-cols-2">
        <div>
          <img
            src="/images-media/Paciente mujer en el dentista.jpg"
            alt="Escena ilustrativa de consulta dental"
            className="aspect-[1.2] w-full rounded-[2rem] object-cover"
          />
          <p className="mt-4 text-xs text-muted">
            Imagen ilustrativa de esta clínica ficticia.
          </p>
        </div>
        <div className="space-y-5">
          {[
            [
              "Antes de llegar",
              "Anota qué quieres consultar. Si tienes estudios previos, pregunta al profesional si es útil llevarlos. Comenta tus necesidades al organizar una cita real.",
            ],
            [
              "Durante la valoración",
              "Explica tus dudas, pide que te aclaren los hallazgos y conversa sobre las alternativas. Los antecedentes de salud se comparten en un entorno clínico privado.",
            ],
            [
              "Antes de decidir",
              "Solicita información sobre el alcance del plan, presupuesto, seguimiento y cuidados. Puedes pedir tiempo para entender una propuesta antes de aceptarla.",
            ],
          ].map(([title, text], i) => (
            <article
              key={title}
              className="rounded-2xl border border-navy/10 p-6"
            >
              <span className="text-xs font-bold text-primary">0{i + 1}</span>
              <h2 className="mb-3 mt-3 text-2xl">{title}</h2>
              <p className="text-sm leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-softblue py-14">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl">¿Prefieres empezar leyendo?</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-white"
              href="/blog/primera-consulta-dental"
            >
              Guía para tu primera consulta
            </Link>
            <Link
              className="rounded-full border border-primary/20 bg-white px-6 py-3 text-sm text-primary"
              href="/preguntas-frecuentes"
            >
              Preguntas frecuentes
            </Link>
            <Link
              className="rounded-full border border-primary/20 bg-white px-6 py-3 text-sm text-primary"
              href="/contact"
            >
              Conocer el contacto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
