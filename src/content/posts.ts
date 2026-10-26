import type { ContentSection, Source } from "./treatments";
export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  treatment: string;
  image: string;
  excerpt: string;
  sections: ContentSection[];
  sources: Source[];
}
export const posts: BlogPost[] = [
  {
    slug: "primera-consulta-dental",
    title: "Tu primera consulta dental: qué llevar y qué preguntar",
    category: "Primera visita",
    treatment: "odontologia-general",
    image: "blog-first-visit.webp",
    excerpt:
      "Una guía para llegar con tus dudas ordenadas y entender mejor la valoración.",
    sections: [
      [
        "Empieza por lo que te preocupa",
        "Antes de la cita, anota el motivo de tu consulta y las preguntas que no quieres olvidar. No necesitas conocer el nombre de un tratamiento para explicar qué sientes o qué te gustaría revisar. Puedes organizar tus notas en tres apartados: lo que ocurre, desde cuándo lo notas y lo que esperas resolver.",
      ],
      [
        "La revisión es una conversación",
        "Una consulta suele incluir preguntas sobre tu salud, hábitos y cambios en la boca, además de la exploración de dientes y encías. Comenta tus medicamentos y antecedentes relevantes directamente con el profesional. Si tienes estudios anteriores, pregunta al agendar si conviene llevarlos; no es necesario pedir nuevas pruebas por tu cuenta.",
      ],
      [
        "Sal con un siguiente paso claro",
        "Pide que te expliquen los hallazgos en lenguaje sencillo. Antes de aceptar un procedimiento, conviene conocer sus alternativas, alcance, presupuesto y seguimiento. Una propuesta escrita puede ayudarte a recordar lo conversado y a plantear nuevas dudas.",
      ],
      [
        "La próxima visita depende de ti",
        "La frecuencia de las revisiones se adapta a la salud bucal y al riesgo de cada persona. No asumas que todas las consultas deben separarse por el mismo número de meses. Si aparecen molestias entre controles, consulta antes de la fecha prevista. Lleva esta lista como ayuda para conversar, no como una indicación de tratamiento.",
      ],
    ],
    sources: [
      [
        "NHS · Qué ocurre en una revisión",
        "https://www.nhs.uk/live-well/healthy-teeth-and-gums/dental-check-ups/",
      ],
    ],
  },
  {
    slug: "rutina-higiene-dental",
    title: "Una rutina de higiene dental que puedas mantener",
    category: "Prevención",
    treatment: "limpieza-dental",
    image: "dental-editorial-ai.webp",
    excerpt:
      "Cepillado, limpieza entre dientes y pequeños hábitos para el día a día.",
    sections: [
      [
        "La constancia antes que la complicación",
        "Una rutina útil es la que puedes repetir. Reserva un momento por la mañana y otro antes de dormir. La recomendación general es cepillarse dos veces al día durante unos dos minutos con pasta fluorada. Si tienes necesidades particulares, tu dentista puede adaptar estas indicaciones.",
      ],
      [
        "Recorre toda la boca",
        "Usa un cepillo de cerdas suaves que permita llegar a todas las superficies. Limpia las caras exteriores, interiores y de masticación con movimientos suaves. Un cepillo manual o eléctrico puede funcionar; importa que puedas utilizarlo bien y que las cerdas no estén deterioradas.",
      ],
      [
        "El espacio entre los dientes también cuenta",
        "Las cerdas no alcanzan todos los espacios interdentales. La limpieza diaria entre dientes complementa el cepillado. Pregunta qué herramienta y tamaño te convienen, especialmente si llevas aparatos o restauraciones. No necesitas comprar todos los productos disponibles: una demostración profesional puede aclarar qué es realmente útil para ti.",
      ],
      [
        "Haz una revisión de tu rutina",
        "Observa qué parte te cuesta más: encontrar tiempo, alcanzar una zona o recordar la limpieza interdental. Lleva esa dificultad a la consulta. También puedes pedir que revisen tu técnica. Esta guía propone hábitos generales; no reemplaza el plan de higiene que recibas si tienes una condición específica.",
      ],
    ],
    sources: [
      [
        "ADA · Cepillado dental",
        "https://www.mouthhealthy.org/all-topics-a-z/brushing-your-teeth",
      ],
      [
        "NHS · Cómo mantener los dientes limpios",
        "https://www.nhs.uk/live-well/healthy-teeth-and-gums/how-to-keep-your-teeth-clean/",
      ],
    ],
  },
  {
    slug: "sangrado-encias",
    title: "¿Te sangran las encías? Lo que conviene consultar",
    category: "Encías",
    treatment: "periodoncia",
    image: "blog-gum-care.webp",
    excerpt:
      "Qué observar y cómo preparar la consulta sin intentar diagnosticarte en casa.",
    sections: [
      [
        "Un cambio que merece atención",
        "El sangrado al cepillarse, la inflamación o el enrojecimiento de las encías son motivos para pedir una revisión. También conviene comentar el mal aliento persistente o cambios en la posición aparente de las encías. Estos signos no bastan para saber cuál es el problema ni qué tratamiento necesita.",
      ],
      [
        "Anota lo que observas",
        "Registra cuándo comenzó, si ocurre en una zona o en varias y si hay dolor. No hace falta tomar fotografías ni compartir detalles de salud en formularios públicos. Es más útil llevar tus observaciones a una conversación privada con un profesional.",
      ],
      [
        "El cuidado depende de la evaluación",
        "La placa y el sarro pueden intervenir en la enfermedad de las encías. El profesional valorará su estado y podrá indicar orientación de higiene, limpieza u otras medidas según la situación. No todas las personas necesitan el mismo procedimiento.",
      ],
      [
        "No dejes pasar los cambios importantes",
        "Si notas dientes flojos o encías muy dolorosas e hinchadas, solicita atención dental pronta. Mientras organizas la consulta, evita sustituir la valoración por recomendaciones de redes sociales. Pregunta cómo cuidar cada zona y qué señales debes comunicar durante el seguimiento. Un plan claro incluye tanto la atención profesional como lo que puedes hacer en casa.",
      ],
    ],
    sources: [
      [
        "NHS · Síntomas y consulta por encías",
        "https://www.nhs.uk/conditions/gum-disease/",
      ],
      [
        "NIDCR · Enfermedad periodontal",
        "https://www.nidcr.nih.gov/health-info/gum-disease",
      ],
    ],
  },
  {
    slug: "blanqueamiento-dental-dudas",
    title: "Blanqueamiento dental: preguntas antes de decidir",
    category: "Estética",
    treatment: "estetica-dental",
    image: "blog-whitening.webp",
    excerpt:
      "Alcance, sensibilidad y expectativas: lo que merece una conversación previa.",
    sections: [
      [
        "No todas las manchas tienen el mismo origen",
        "La apariencia del diente puede cambiar por alimentos, tabaco, edad o lesiones. Por eso, elegir un tratamiento empieza por conocer la causa del cambio de color. Una fotografía o una comparación con otra sonrisa no permite saber qué opción te conviene.",
      ],
      [
        "Qué puede cambiar y qué no",
        "El blanqueamiento actúa sobre dientes naturales y no aclara de la misma manera coronas, carillas o implantes. Si tienes restauraciones visibles, coméntalo antes de decidir. El plan debe tener en cuenta toda la sonrisa, no solo un tono elegido en una imagen.",
      ],
      [
        "Habla sobre sensibilidad y mantenimiento",
        "Puede aparecer sensibilidad temporal. Pregunta cómo se supervisa el procedimiento, qué molestias debes comunicar y qué cuidados seguir. Los resultados no son permanentes y dependen de factores individuales; no conviene comparar promesas de tonos o duración sin una evaluación.",
      ],
      [
        "Tu lista para la consulta",
        "Puedes preguntar por la causa de las manchas, el estado de dientes y encías y las alternativas disponibles. Pide también el presupuesto completo y la explicación de los cuidados posteriores. No es necesario decidir en ese momento: comprender el procedimiento y sus límites ayuda a elegir con expectativas más realistas.",
      ],
    ],
    sources: [
      [
        "ADA · Dudas sobre blanqueamiento",
        "https://www.mouthhealthy.org/all-topics-a-z/teeth-whitening",
      ],
      [
        "NHS · Blanqueamiento",
        "https://www.nhs.uk/tests-and-treatments/teeth-whitening/",
      ],
    ],
  },
  {
    slug: "brackets-o-alineadores",
    title: "Brackets o alineadores: cómo conversar sobre tus opciones",
    category: "Ortodoncia",
    treatment: "ortodoncia",
    image: "blog-braces.webp",
    excerpt:
      "La elección empieza por tu mordida, tus hábitos y una valoración individual.",
    sections: [
      [
        "El diagnóstico va primero",
        "La ortodoncia no se limita a que los dientes se vean rectos. También considera cómo encajan al morder. Los espacios, el apiñamiento y algunas dificultades funcionales pueden motivar una evaluación. Ni una foto ni la preferencia por un aparato sustituyen ese estudio.",
      ],
      [
        "Dos formatos, distintas exigencias",
        "Los brackets son aparatos fijos; los alineadores son removibles. La opción adecuada depende del movimiento necesario y de las indicaciones del profesional. El uso responsable, la higiene y los controles forman parte del tratamiento, cualquiera que sea el formato.",
      ],
      [
        "Incluye el seguimiento en la comparación",
        "Pregunta cómo se revisarán los avances, qué sucede si algo molesta o se rompe y qué fase de retención se prevé. El precio inicial no describe por sí solo todo el proceso. Conviene aclarar qué consultas y dispositivos incluye una propuesta.",
      ],
      [
        "Lleva tus prioridades",
        "Explica si te preocupa la apariencia, la rutina de trabajo, la higiene o el tiempo de las visitas. Esas preferencias ayudan a conversar, aunque no determinan por sí solas la indicación clínica. Solicita un plan individual y evita dar por hecho un plazo porque alguien cercano terminó su tratamiento en cierto tiempo.",
      ],
    ],
    sources: [
      [
        "NHS · Aparatos de ortodoncia",
        "https://www.nhs.uk/tests-and-treatments/braces/",
      ],
      [
        "ADA · Objetivos de la ortodoncia",
        "https://www.mouthhealthy.org/all-topics-a-z/orthodontics",
      ],
    ],
  },
  {
    slug: "implantes-dentales-valoracion",
    title: "Implantes dentales: qué revisar en una valoración",
    category: "Rehabilitación",
    treatment: "implantes-protesis",
    image: "blog-implant-planning.webp",
    excerpt:
      "Conoce las etapas y las preguntas que ayudan a entender una propuesta.",
    sections: [
      [
        "Una alternativa que requiere planificación",
        "Un implante es un dispositivo colocado en el hueso para sostener una restauración. Puede ser una alternativa ante dientes ausentes, pero no es una solución universal. El profesional necesita conocer la salud de tu boca y tus antecedentes antes de proponerlo.",
      ],
      [
        "Habla de las etapas, no solo de la pieza",
        "La evaluación, la cirugía, la cicatrización y la restauración pueden ocurrir en momentos diferentes. Pide un esquema del proceso y pregunta qué podría modificarlo. También es importante entender los cuidados y las visitas de seguimiento.",
      ],
      [
        "Beneficios y riesgos en la misma conversación",
        "Pregunta por las alternativas y por las posibles complicaciones, incluida la falta de integración o problemas de cicatrización. Informa al profesional sobre medicamentos, enfermedades y consumo de tabaco. Estos datos deben tratarse en un entorno clínico privado, no en comentarios públicos.",
      ],
      [
        "Una propuesta que puedas entender",
        "Solicita que el presupuesto detalle las fases incluidas y cualquier procedimiento adicional que deba valorarse. Pregunta por el material, la restauración prevista y el mantenimiento. Esta lista sirve para ordenar dudas; la elección del tratamiento exige una evaluación y no debe basarse solamente en fotografías, promociones o testimonios.",
      ],
    ],
    sources: [
      [
        "FDA · Información para pacientes sobre implantes",
        "https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know",
      ],
    ],
  },
  {
    slug: "endodoncia-conservar-diente",
    title: "Endodoncia: por qué a veces se busca conservar el diente",
    category: "Tratamientos",
    treatment: "endodoncia",
    image: "blog-root-canal.webp",
    excerpt:
      "Una introducción al tratamiento de conductos y a su restauración posterior.",
    sections: [
      [
        "Qué se trata dentro del diente",
        "La pulpa es el tejido blando del interior del diente. Puede afectarse por caries, fracturas u otras lesiones. Cuando existe una infección, el profesional puede valorar un tratamiento de conductos para conservar la pieza, siempre que el caso lo permita.",
      ],
      [
        "El dolor no cuenta toda la historia",
        "Una molestia puede tener distintas causas. La exploración y las pruebas indicadas ayudan a determinar el problema. No conviene decidir por cuenta propia entre una endodoncia y una extracción a partir de la intensidad del dolor o de una experiencia ajena.",
      ],
      [
        "La restauración también forma parte del plan",
        "El tratamiento limpia y sella el interior del diente. Después puede necesitarse una restauración definitiva para protegerlo. Pregunta qué falta por completar y cómo se coordina el seguimiento; terminar una fase no siempre significa haber terminado todo el cuidado.",
      ],
      [
        "Preguntas para llevar contigo",
        "Pide que te expliquen por qué se recomienda el procedimiento, qué alternativas existen y qué pronóstico tiene la pieza. Consulta también qué molestias pueden aparecer y cuándo debes comunicarte con el profesional. La información general ayuda a comprender términos, pero el plan y las instrucciones deben adaptarse a tu situación.",
      ],
    ],
    sources: [
      [
        "NHS · Tratamiento de conductos",
        "https://www.nhs.uk/tests-and-treatments/root-canal-treatment/",
      ],
      [
        "ADA · Endodoncia y restauración",
        "https://www.mouthhealthy.org/all-topics-a-z/root-canals",
      ],
    ],
  },
  {
    slug: "primera-visita-dental-infantil",
    title: "La primera visita dental infantil, paso a paso",
    category: "Familias",
    treatment: "odontopediatria",
    image: "blog-child-hygiene.webp",
    excerpt:
      "Ideas para preparar una experiencia cercana y acompañar los primeros hábitos.",
    sections: [
      [
        "No hay que esperar a una molestia",
        "Los primeros dientes merecen cuidado aunque vayan a cambiar. Las recomendaciones generales proponen una visita cuando aparecen los primeros dientes o antes del primer cumpleaños. El profesional puede orientar a la familia y revisar el desarrollo de la boca.",
      ],
      [
        "Explica la visita con sencillez",
        "Habla de conocer a una persona que ayuda a cuidar los dientes. Evita anticipar experiencias que no sabes si ocurrirán. Lleva las preguntas de la familia y cuenta al equipo si el niño se siente nervioso o necesita más tiempo para familiarizarse.",
      ],
      [
        "La rutina se construye acompañando",
        "Los adultos deben ayudar y supervisar el cepillado. La cantidad de pasta y la técnica se adaptan a la edad; pide una demostración durante la consulta. Convertir el cuidado en una actividad previsible suele ser más práctico que acumular instrucciones difíciles de seguir.",
      ],
      [
        "Al terminar, acuerden el siguiente paso",
        "Pregunta qué observar en casa, cómo mantener la rutina y cuándo volver. Los dientes de leche participan en la alimentación, el habla y el espacio de los futuros dientes, así que su cuidado forma parte del desarrollo. Esta guía es general: cualquier dolor, lesión o cambio que te preocupe merece una consulta individual.",
      ],
    ],
    sources: [
      [
        "NHS · Dientes infantiles",
        "https://www.nhs.uk/live-well/healthy-teeth-and-gums/taking-care-of-childrens-teeth/",
      ],
      [
        "ADA · Por qué cuidar los dientes de leche",
        "https://www.mouthhealthy.org/all-topics-a-z/baby-teeth",
      ],
    ],
  },
];
