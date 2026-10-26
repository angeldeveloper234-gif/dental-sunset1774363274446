export type ContentSection = [string, string];
export type Source = [string, string];
export interface Treatment {
  slug: string;
  title: string;
  short: string;
  image: string;
  intro: string;
  sections: ContentSection[];
  questions: string[];
  sources: Source[];
}
export const treatments: Treatment[] = [
  {
    slug: "odontologia-general",
    title: "Odontología general",
    short: "Un buen comienzo para cuidar tu salud bucal.",
    image: "Dentista examinando los dientes del paciente femenino.jpg",
    intro:
      "La consulta general permite revisar dientes, encías y hábitos de higiene. Es el punto de partida para entender qué necesita tu boca y conversar sobre los siguientes pasos.",
    sections: [
      [
        "Una revisión con contexto",
        "Una revisión dental combina la exploración de la boca con preguntas sobre salud, molestias y hábitos. La frecuencia de seguimiento depende del riesgo individual; no existe un calendario único para todas las personas.",
      ],
      [
        "Prevención y restauración",
        "Cuando hay una caries, el tratamiento depende de su extensión. La evaluación permite distinguir lesiones iniciales de cavidades que requieren restauración y valorar si hacen falta otras pruebas.",
      ],
      [
        "Qué puedes preguntar",
        "Comenta cuándo comenzó la molestia, qué la desencadena y qué te preocupa. Pide una explicación del diagnóstico, de las alternativas y del seguimiento antes de tomar una decisión.",
      ],
    ],
    questions: [
      "¿Qué hallazgos requieren atención ahora?",
      "¿Qué puedo mejorar en mi rutina?",
      "¿Cuándo conviene mi próxima revisión?",
    ],
    sources: [
      [
        "NHS · Revisiones dentales",
        "https://www.nhs.uk/live-well/healthy-teeth-and-gums/dental-check-ups/",
      ],
      [
        "NIDCR · Caries dental",
        "https://www.nidcr.nih.gov/health-info/tooth-decay",
      ],
    ],
  },
  {
    slug: "limpieza-dental",
    title: "Limpieza y prevención",
    short: "Hábitos cotidianos y cuidado profesional.",
    image: "dentista-tratando-pacientes-con-dientes.jpg",
    intro:
      "La prevención combina cuidados en casa y revisiones profesionales. La limpieza indicada para cada persona depende de la acumulación de placa y del estado de sus encías.",
    sections: [
      [
        "No todas las limpiezas son iguales",
        "La limpieza profesional y el tratamiento periodontal no son intercambiables. Si existe afectación de las encías, puede necesitarse una valoración más amplia y un plan específico.",
      ],
      [
        "Entre una visita y otra",
        "El cepillado con pasta fluorada y la higiene entre dientes ayudan a controlar la placa. La técnica y las herramientas deben ajustarse a tus necesidades.",
      ],
      [
        "Un plan claro antes de empezar",
        "Pregunta qué incluye la sesión, si se identificaron zonas que requieren otro tratamiento y cómo será el seguimiento. La atención preventiva no debe confundirse con una promesa de resultados estéticos.",
      ],
    ],
    questions: [
      "¿Qué tipo de limpieza necesito?",
      "¿Cómo limpio los espacios entre mis dientes?",
      "¿Qué cuidados debo mantener después?",
    ],
    sources: [
      [
        "NHS · Higiene dental",
        "https://www.nhs.uk/live-well/healthy-teeth-and-gums/how-to-keep-your-teeth-clean/",
      ],
      [
        "NHS · Salud de las encías",
        "https://www.nhs.uk/conditions/gum-disease/",
      ],
    ],
  },
  {
    slug: "estetica-dental",
    title: "Estética dental",
    short: "Opciones para el color y la apariencia de tu sonrisa.",
    image: "Un primer plano de los instrumentos dentales.jpg",
    intro:
      "Hablar de estética dental empieza por tus objetivos y por la salud de tu boca. No todas las manchas ni todos los cambios de apariencia se resuelven con el mismo procedimiento.",
    sections: [
      [
        "Blanqueamiento con valoración",
        "El blanqueamiento puede aclarar dientes naturales. Las coronas, prótesis e implantes no cambian de color del mismo modo, por lo que la planificación debe considerar las restauraciones existentes.",
      ],
      [
        "Expectativas realistas",
        "Puede aparecer sensibilidad y el efecto no es permanente. Conviene revisar dientes y encías y conocer los límites antes de iniciar un tratamiento.",
      ],
      [
        "Decidir sin prisa",
        "Lleva tus dudas sobre el tono, el mantenimiento y las alternativas. Si te interesan carillas u otras restauraciones, pide una explicación específica de sus indicaciones y de los cambios que implican.",
      ],
    ],
    questions: [
      "¿Cuál es la causa del cambio de color?",
      "¿Mis restauraciones afectan al resultado?",
      "¿Qué mantenimiento exige la opción propuesta?",
    ],
    sources: [
      [
        "NHS · Blanqueamiento dental",
        "https://www.nhs.uk/tests-and-treatments/teeth-whitening/",
      ],
    ],
  },
  {
    slug: "ortodoncia",
    title: "Ortodoncia",
    short: "Alineación y mordida, con un plan individual.",
    image: "treatment-orthodontics.webp",
    intro:
      "La ortodoncia estudia la posición de los dientes y cómo encajan al morder. El objetivo es valorar una mordida funcional, además de la apariencia de la sonrisa.",
    sections: [
      [
        "Más que alinear dientes",
        "El apiñamiento, los espacios y algunas alteraciones de la mordida pueden motivar una consulta. La exploración y los registros permiten definir si hay una indicación de tratamiento.",
      ],
      [
        "Brackets y alineadores",
        "Existen aparatos fijos y removibles. La elección depende del caso y de la capacidad de seguir las indicaciones; no todas las opciones son adecuadas para cualquier paciente.",
      ],
      [
        "El seguimiento importa",
        "Los controles y la retención forman parte del proceso. Antes de comenzar, pregunta cómo se supervisará la evolución y qué cuidados necesitarás al terminar.",
      ],
    ],
    questions: [
      "¿Qué problema de mordida se busca corregir?",
      "¿Qué alternativas son viables en mi caso?",
      "¿Cómo serán los controles y la retención?",
    ],
    sources: [
      [
        "ADA · Ortodoncia",
        "https://www.mouthhealthy.org/all-topics-a-z/orthodontics",
      ],
    ],
  },
  {
    slug: "implantes-protesis",
    title: "Implantes y prótesis",
    short: "Alternativas para reponer dientes ausentes.",
    image: "treatment-implants.webp",
    intro:
      "Cuando falta un diente, conviene conocer las alternativas de rehabilitación. Un implante, un puente o una prótesis removible responden a situaciones y necesidades diferentes.",
    sections: [
      [
        "Qué es un implante",
        "Es un soporte colocado mediante cirugía en el hueso para sostener una restauración dental. La evaluación incluye el estado de la boca y la salud general.",
      ],
      [
        "Un proceso por etapas",
        "La colocación, la cicatrización y la restauración definitiva pueden requerir varias fases. Los tiempos se determinan individualmente; no debe suponerse que todos los casos se resuelven en una visita.",
      ],
      [
        "Preguntas para comparar opciones",
        "Solicita un plan que explique las fases, las alternativas, el mantenimiento y el presupuesto. Conocer esos detalles ayuda a valorar la propuesta con calma.",
      ],
    ],
    questions: [
      "¿Qué alternativas tengo además del implante?",
      "¿Cuáles son las etapas previstas?",
      "¿Qué seguimiento y mantenimiento se necesitan?",
    ],
    sources: [
      [
        "ADA · Implantes dentales",
        "https://www.mouthhealthy.org/all-topics-a-z/implants",
      ],
    ],
  },
  {
    slug: "endodoncia",
    title: "Endodoncia",
    short: "Evaluación del interior del diente y su conservación.",
    image: "treatment-endodontics.webp",
    intro:
      "Cuando la pulpa dental está afectada, puede valorarse un tratamiento de conductos. Su finalidad es tratar el interior del diente y conservarlo cuando sea posible.",
    sections: [
      [
        "Primero, identificar la causa",
        "Una caries profunda, una fractura o un traumatismo pueden afectar la pulpa. El dolor por sí solo no permite decidir qué tratamiento necesitas: hace falta una evaluación.",
      ],
      [
        "En qué consiste",
        "El procedimiento elimina tejido afectado, limpia y sella los conductos. Después se planifica la restauración que protegerá el diente.",
      ],
      [
        "Después del tratamiento",
        "El seguimiento y la restauración final son parte importante del plan. Solicita instrucciones individualizadas y consulta si aparecen molestias que te preocupen.",
      ],
    ],
    questions: [
      "¿Es posible conservar esta pieza?",
      "¿Qué restauración necesitará después?",
      "¿Qué señales debo comunicar durante el seguimiento?",
    ],
    sources: [
      [
        "ADA · Tratamientos de conductos",
        "https://www.mouthhealthy.org/all-topics-a-z/root-canals",
      ],
    ],
  },
  {
    slug: "periodoncia",
    title: "Cuidado de las encías",
    short: "Atención a los tejidos que sostienen tu sonrisa.",
    image: "treatment-gums.webp",
    intro:
      "Las encías también necesitan atención. El sangrado, la inflamación o los cambios persistentes merecen una revisión para conocer su causa y el cuidado adecuado.",
    sections: [
      [
        "Señales que conviene comentar",
        "Informa si tus encías sangran, si notas mal aliento persistente o si algún diente parece moverse. Una revisión permite distinguir diferentes problemas y valorar su alcance.",
      ],
      [
        "Un cuidado según la situación",
        "La atención puede incluir orientación de higiene, limpieza profesional y otros procedimientos según la gravedad. El seguimiento ayuda a revisar la respuesta.",
      ],
      [
        "Tu rutina cuenta",
        "La higiene diaria y los controles forman parte del cuidado a largo plazo. Pide una demostración de la técnica y de las herramientas indicadas para ti.",
      ],
    ],
    questions: [
      "¿Qué está causando el sangrado?",
      "¿Qué zonas necesitan atención específica?",
      "¿Cómo mediremos la evolución?",
    ],
    sources: [
      [
        "NIDCR · Enfermedad de las encías",
        "https://www.nidcr.nih.gov/health-info/gum-disease",
      ],
    ],
  },
  {
    slug: "odontopediatria",
    title: "Odontología infantil",
    short: "Primeras visitas y hábitos que crecen con ellos.",
    image: "treatment-pediatric.webp",
    intro:
      "La atención infantil acompaña el desarrollo de los dientes y ayuda a las familias a construir una rutina de cuidado. Las primeras visitas también permiten familiarizarse con la consulta.",
    sections: [
      [
        "Desde los primeros dientes",
        "Los dientes de leche ayudan a comer, hablar y mantener espacio para los definitivos. Su cuidado no debe posponerse por ser temporales.",
      ],
      [
        "Una experiencia acompañada",
        "Preparar la visita con un lenguaje sencillo y positivo puede ayudar. Cuenta al profesional cómo se siente el niño y qué dudas tiene la familia.",
      ],
      [
        "Rutinas adaptadas a su edad",
        "La higiene requiere ayuda y supervisión de una persona adulta. El profesional puede orientar sobre el cepillo, la cantidad de pasta y la técnica apropiada.",
      ],
    ],
    questions: [
      "¿Cómo debemos ayudar con el cepillado?",
      "¿Cuándo conviene la próxima revisión?",
      "¿Cómo preparar una visita tranquila?",
    ],
    sources: [
      [
        "ADA · Dientes de leche",
        "https://www.mouthhealthy.org/all-topics-a-z/baby-teeth",
      ],
      [
        "NHS · Cuidado dental infantil",
        "https://www.nhs.uk/live-well/healthy-teeth-and-gums/taking-care-of-childrens-teeth/",
      ],
    ],
  },
];
export const mainPages = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Nuestra clínica" },
  { href: "/services", label: "Tratamientos" },
  ...treatments.map((t) => ({
    href: "/tratamientos/" + t.slug,
    label: t.title,
  })),
  { href: "/primera-visita", label: "Primera visita" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/contact", label: "Contacto y ubicación" },
  { href: "/blog", label: "Blog dental" },
  { href: "/reservar", label: "Reservar cita" },
];
