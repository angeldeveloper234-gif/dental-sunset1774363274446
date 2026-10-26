# Dental Sunset: arquitectura de contenido

## Alcance

Demo de una clínica ficticia, según aclaración del usuario. **15 páginas principales + 8 artículos + 2 legales = 25 páginas públicas**. La ruta técnica preexistente /admin no forma parte del menú ni de este recuento.

La arquitectura se organizó por las tareas de un paciente: conocer la clínica, explorar una necesidad, entender un tratamiento, preparar una visita y contactar. No existe una lista universal obligatoria de 15 páginas; esta selección es una propuesta editorial para la demo.

## Las 15 páginas principales

| # | Página | URL | Propósito |
|---|---|---|---|
| 1 | Inicio | / | Presentación, acceso a tratamientos, proceso, reseñas, blog y contacto. |
| 2 | Nuestra clínica | /about | Concepto de atención, identidad y referencias visuales. |
| 3 | Tratamientos | /services | Índice de ocho especialidades con enlaces a sus páginas. |
| 4 | Odontología general | /tratamientos/odontologia-general | Un buen comienzo para cuidar tu salud bucal. |
| 5 | Limpieza y prevención | /tratamientos/limpieza-dental | Hábitos cotidianos y cuidado profesional. |
| 6 | Estética dental | /tratamientos/estetica-dental | Opciones para el color y la apariencia de tu sonrisa. |
| 7 | Ortodoncia | /tratamientos/ortodoncia | Alineación y mordida, con un plan individual. |
| 8 | Implantes y prótesis | /tratamientos/implantes-protesis | Alternativas para reponer dientes ausentes. |
| 9 | Endodoncia | /tratamientos/endodoncia | Evaluación del interior del diente y su conservación. |
| 10 | Cuidado de las encías | /tratamientos/periodoncia | Atención a los tejidos que sostienen tu sonrisa. |
| 11 | Odontología infantil | /tratamientos/odontopediatria | Primeras visitas y hábitos que crecen con ellos. |
| 12 | Primera visita | /primera-visita | Preparación, pasos y preguntas antes de decidir. |
| 13 | Preguntas frecuentes | /preguntas-frecuentes | Respuestas de atención y funcionamiento de la demo. |
| 14 | Contacto y ubicación | /contact | Formulario simulado y mapa de referencia. |
| 15 | Blog dental | /blog | Índice editorial con ocho artículos. |

## Ocho artículos adicionales

1. **Tu primera consulta dental: qué llevar y qué preguntar** — /blog/primera-consulta-dental
2. **Una rutina de higiene dental que puedas mantener** — /blog/rutina-higiene-dental
3. **¿Te sangran las encías? Lo que conviene consultar** — /blog/sangrado-encias
4. **Blanqueamiento dental: preguntas antes de decidir** — /blog/blanqueamiento-dental-dudas
5. **Brackets o alineadores: cómo conversar sobre tus opciones** — /blog/brackets-o-alineadores
6. **Implantes dentales: qué revisar en una valoración** — /blog/implantes-dentales-valoracion
7. **Endodoncia: por qué a veces se busca conservar el diente** — /blog/endodoncia-conservar-diente
8. **La primera visita dental infantil, paso a paso** — /blog/primera-visita-dental-infantil

Los artículos enlazan a su tratamiento, al índice del blog y a fuentes sanitarias. Contenido general, sin atribuirlo a médicos inexistentes ni prometer resultados. Fuentes editoriales: [ADA / MouthHealthy](https://www.mouthhealthy.org/all-topics-a-z/orthodontics), [NHS](https://www.nhs.uk/live-well/healthy-teeth-and-gums/dental-check-ups/), [NIDCR](https://www.nidcr.nih.gov/health-info/gum-disease) y [FDA](https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know). Cada página muestra sus enlaces específicos.

## Legales y carácter ficticio

- /terminos-y-condiciones y /politica-de-privacidad están fuera del recuento principal.
- Son textos básicos que describen la demo, no un aviso completo para una clínica real. La adaptación a México se orienta por el [texto vigente de la LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf).
- Se retiraron nombres de médicos, reseñas, teléfonos y redes de la clínica real consultada previamente. Los enlaces sociales llevan a la experiencia de contacto de ejemplo.
- El formulario valida campos pero no transmite ni almacena datos. El mapa conecta con Google y muestra Cabo San Lucas, no una sede real.
- Se eliminó la persistencia de nombre y correo del contexto local. No se añadieron herramientas de analítica.
- Las 32 reseñas, sus nombres y calificaciones son ficticios y están identificados. El logo de Google es una referencia visual; no se declara conexión ni afiliación y no se genera schema de puntuaciones.

## Diseño, rendimiento y movimiento

- Satoshi local sigue centralizada en src/theme/typography.ts.
- El texto sobre el hero se presenta sin cápsula, borde, punto ni espaciado de letras exagerado.
- Se añaden patrón dental SVG en cabeceras interiores, brillos discretos y entradas de contenido por IntersectionObserver. El contenido permanece visible sin JavaScript; se respeta movimiento reducido.
- El carrusel avanza cada 6,5 segundos mientras es visible. Pausa por hover, foco, pestaña oculta, control manual y movimiento reducido. Regresa al principio al llegar al final.
- Imagen generada por IA: public/images-media/dental-editorial-ai.webp. Original en C:/Users/usuario/.codex/generated_images/01a160ff-ca3d-7e42-b7ac-a5997eb32c60/exec-f5479312-546f-4caf-8b0b-1b3d4341dc42.png. Optimizada a 1400 × 788, ~41 KB. Las demás fotos son recursos ilustrativos existentes.

## SEO técnico

- Páginas estáticas, títulos y descripciones individuales, canonical, Open Graph, sitemap de 25 URLs y JSON-LD BlogPosting para artículos.
- El footer enlaza las 15 páginas, los 8 artículos y los 2 documentos legales; incluye el crédito exacto a [Angel Design Studio](https://www.angelstudiodigital.online/).
- Configurar NEXT_PUBLIC_SITE_URL con el dominio de despliegue. En desarrollo se usa http://localhost:3002.
- La demo tiene noindex por defecto para no posicionar una clínica ficticia como real. NEXT_PUBLIC_ALLOW_INDEXING=true permite activar la indexación deliberadamente al preparar una versión adecuada para publicar.
- No hay garantías de posicionamiento. Antes de convertirla en una clínica operativa, revisar identidad, servicios, contenido sanitario, formularios y política de datos.

## Verificación reproducible

Con localhost activo: node scripts/verify-site.mjs. Comprueba HTTP 200 de las 25 páginas, un H1 por página, títulos únicos, canonical correcto, todos los enlaces internos del footer, JSON-LD de artículos, sitemap y rutas inválidas 404.


## Actualización visual del 26/10/2026
12 fotografías generadas con IA y optimizadas a WebP (1400 px, calidad 86): cinco tratamientos y siete portadas de blog. Cada catálogo tiene ocho imágenes distintas. Prompts en public/images-media/AI-ASSETS.md. WhatsApp permanece fijo en todas las secciones, con z-index 60 y margen para safe-area; conserva el destino de contacto de la demo.

