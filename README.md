# Dental Sunset

Sitio odontológico construido con Next.js App Router.

## Desarrollo

```bash
npm install
npm run dev
```

El servidor local usa el puerto `3002`. Para generar y servir la versión de producción:

```bash
npm run build
npm start
```

## Rutas

- `/`: inicio
- `/about`: filosofía
- `/services`: tratamientos
- `/contact`: contacto
- `/admin`: panel de carga de casos

Las rutas viven en `app/`; las páginas se componen desde `src/site-pages/` y comparten el marco `src/components/SiteFrame.tsx`. Consultá [DESIGN_HANDOFF.md](./DESIGN_HANDOFF.md) para integrar diseños de Claude Design y referencias visuales.
