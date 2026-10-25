# Diseño y cambios visuales

Este proyecto usa Next.js App Router. La carpeta `app/` define las URLs y metadata; `src/site-pages/` contiene el contenido de cada página; `src/components/sections/` guarda secciones reutilizables; `src/index.css` define los estilos y tokens compartidos; `public/images-media/` contiene imágenes.

## Al integrar un diseño de Claude Design

1. Indicá la ruta a modificar: portada (`src/site-pages/Home.tsx`), filosofía (`About.tsx`), tratamientos (`Services.tsx`) o contacto (`Contact.tsx`).
2. Conservá `src/components/SiteFrame.tsx` como marco de navegación, pie, WhatsApp y contexto. Si el diseño cambia alguno de esos elementos, editá su componente en `src/components/sections/` o `src/components/ui/`.
3. Adaptá el marcado de la página objetivo. Para CSS aislado, creá un módulo `.module.css` junto al componente; usá `src/index.css` para tokens globales.
4. Colocá los recursos locales en `public/` y usá rutas como `/images-media/imagen.jpg`.
5. Incluí captura de escritorio y móvil, dimensiones y fuentes de referencia para comparar la integración visual.

Las rutas actuales son `/`, `/about`, `/services`, `/contact` y `/admin`.

## Referencias visuales de Dental Sunset

- `Downloads/Dental Sunset - referencias/1.jpg`: se toma como guía el fondo limpio, el espacio generoso y el orden claro de las tarjetas de tratamientos.
- `Downloads/Dental Sunset - referencias/Recursos para desarrollar una web desde cero con calidad.jpg`: se aprovechan la composición dividida del hero, la persona protagonista, la franja repetida de servicios y los iconos azules que cruzan el borde de las tarjetas.
- `Downloads/Modern Medical Website Design _ Healthcare UI_UX Concept.jpg`: aporta el azul intenso medido en la imagen (`#286CFD`), la portada de alto contraste con persona protagonista, el CTA azul y las secciones alternadas en blanco y azul. Esa paleta se refleja en el hero, navegación, acciones y cinta de tratamientos.
- Capturas compartidas en el hilo: se usan para detectar el encabezado cruzado con el hero, el aviso de WhatsApp encima de tarjetas/métricas y la necesidad de dejar toda la reseña en español.
- `public/images-media/imagen-hero-transparent.png`: se conserva el recurso original en el hero, completo, con `object-contain` y alineado al borde inferior, sin panel azul rectangular.
- Las tarjetas usan una proporción de foto común (`1.35 / 1`). El único elemento que cruza la unión foto/texto es la insignia circular azul; título y descripción permanecen en su posición normal.
- La navegación reúne Inicio, Sobre nosotros, Tratamientos, Ubicación y Contacto en un mismo menú. Las métricas numéricas sin fuente se reemplazaron por datos de categoría y ubicación confirmables.
- El azul de acento coincide con la referencia (`#286CFD`); las secciones alternan blanco, azul suave y franjas de tratamientos.

## Reseñas públicas

Se confirmó la ficha pública de [Dental Sunset en Google Maps](https://g.page/dentalsunsetcabo), que mostraba 4,5 estrellas y 92 opiniones el 22-10-2026. La vista pública expuso cinco reseñas con autor y calificación: dos de una estrella y tres de cinco estrellas. Desde el 25-10-2026, el componente filtra `rating >= 4` y muestra los tres resúmenes que cumplen el criterio, conservando los datos originales en configuración. Son resúmenes en español, no citas literales. El diseño usa una tarjeta azul de presentación y una fila de tarjetas blancas desplazable mediante flechas, teclado o gesto táctil. El enlace «Ver más en Google Maps» abre la ficha confirmada. La cifra de la tarjeta azul cuenta únicamente la selección visible, no el total de opiniones del negocio.

El icono `public/images-media/google.svg` es una copia del archivo suministrado por el usuario en Downloads. Los retratos son ilustrativos y así se informa debajo de las tarjetas; se alternan con una inicial. Fuentes de los archivos locales:

- `avatar-stock-woman.jpg`: https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=85
- `avatar-stock-man.jpg`: https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=85

## Ajustes visuales del 25-10-2026

- Las tarjetas de tratamientos tienen 48 px de espacio superior en el bloque de texto, dejando aire debajo de la insignia que sobresale 24 px. La proporción de las fotos sigue siendo uniforme.
- El CTA anterior a FAQ conserva su fondo azul. `ToothPhoto.tsx` recorta dos fotografías dentales existentes con una silueta SVG de diente, sin rasterizar ni generar imágenes nuevas. Las tres ventajas describen el contacto y la ubicación sin inventar credenciales.
- `BrandSparkles.tsx` aporta brillos SVG decorativos en hero, tratamientos, CTA y FAQ. Los recursos de fondo se posicionan de forma absoluta, no capturan eventos y se ocultan a lectores de pantalla.
- Capturas nuevas: `cards-oct25-desktop.png`, `reviews-oct25-desktop.png`, `reviews-oct25-mobile.png`, `cta-oct25-desktop.png` y `cta-oct25-mobile.png`, en la carpeta de revisión indicada abajo.

Capturas de revisión guardadas en `C:\Users\usuario\.codex\visualizations\2026\10\22\01a160ff-ca3d-7e42-b7ac-a5997eb32c60\dental-sunset-review\`:

- `home-full-desktop.png` y `home-full-mobile.png`: portada completa.
- `services-full-desktop.png` y `services-full-mobile.png`: página completa de tratamientos.
- `treatments-desktop.png` y `treatments-mobile.png`: vista enfocada en las tarjetas de la portada.

## Señales de pedidos de leads (WhatsApp, 22-10-2026)

Se revisó una ventana móvil de 30 días: 70 conversaciones clasificadas, con cobertura parcial (9 de 16 líneas; varias desconectadas o sin datos). En los historiales completos consultados, los contactos de clínicas preguntaron si la propuesta tenía costo, cuánto cobramos y pidieron que les contemos la idea. En climatización aceptaron recibir una muestra; también apareció una consulta que combina aire acondicionado y sistemas solares. No apareció una petición de pintura en esta muestra parcial, así que no se toma como señal confirmada.

Implicancias para los ejemplos: la demo dental debe llevar con claridad de tratamiento a valoración/cita y dejar el contacto a mano; las demos de climatización deben mostrar servicios concretos y una ruta directa a cotizar, contemplando instalaciones y energía solar cuando aplique. La muestra debe explicar qué incluye el ejemplo y cómo solicitar precio sin publicar tarifas que no estén verificadas. Mantener `Dental Sunset`, `Climax` y `ClimaPro` para las marcas que ya existen; reservar un nombre inventado para una demo de pintura hasta confirmar que ese rubro forma parte del portafolio.
