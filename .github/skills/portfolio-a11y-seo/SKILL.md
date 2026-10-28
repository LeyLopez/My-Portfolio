---
name: portfolio-a11y-seo
description: Accesibilidad WCAG 2.1 AA, SEO, metadatos, Open Graph, datos estructurados y rendimiento del portfolio. Usar al auditar, revisar o corregir accesibilidad, etiquetas meta, Lighthouse o cuando se agregue una sección o página nueva.
---

# Accesibilidad, SEO y rendimiento

## Accesibilidad (WCAG 2.1 AA)
- Landmarks: `<header>`, `<nav aria-label="...">`, `<main id="main">`, `<footer>`. Un solo `<main>` por página.
- Enlace "Saltar al contenido" como primer elemento enfocable.
- Un único `<h1>` por página y encabezados en orden sin saltos de nivel.
- Todo elemento interactivo se opera con teclado y muestra un `:focus-visible` claro (nunca `outline: none` sin reemplazo).
- Botones con `<button>`, enlaces con `<a>`; no uses `div` clicables.
- Iconos decorativos con `aria-hidden="true"`; iconos con significado, con texto accesible.
- Imágenes con `alt` útil; decorativas con `alt=""`.
- Cambio de idioma: botón con `aria-label` y estado actual anunciado; actualiza `document.documentElement.lang`.
- Cambio de ruta: mueve el foco al `<h1>` y actualiza `document.title`.
- Si usas pestañas (`Tabs`), sigue el patrón ARIA: `role="tablist"`, `tab`, `tabpanel`, flechas para navegar.
- Contraste ≥ 4.5:1 (texto) y ≥ 3:1 (componentes de UI), en claro y oscuro.
- Respeta `prefers-reduced-motion`.

## SEO
- En `index.html`: `<title>`, `meta description`, `theme-color`, `canonical`, favicon.
- Open Graph y Twitter Card (`og:title`, `og:description`, `og:image` de 1200×630, `og:locale`).
- `public/robots.txt` y `public/sitemap.xml` con las rutas del sitio.
- JSON-LD de tipo `Person` con nombre, puesto, ubicación y enlaces (LinkedIn, GitHub). No incluyas teléfono.
- `<title>` y descripción distintos por ruta (por ejemplo, con `react-helmet-async` o un hook propio).
- Aviso: al ser una SPA, los rastreadores ven menos contenido. Si el SEO es prioritario, evalúa prerenderizado (por ejemplo `vite-react-ssg`) en una fase posterior.

## Rendimiento
- Carga las rutas con `lazy`, imágenes con `loading="lazy"` y fuentes con `font-display: swap`.
- Meta: Lighthouse ≥ 90 en Performance, Accessibility, Best Practices y SEO.

## Cómo auditar
1. Revisa el código con las reglas anteriores y lista los hallazgos con su archivo.
2. Corrige lo que sea seguro corregir.
3. Pide ejecutar Lighthouse y axe DevTools sobre `npm run preview` y compara con las metas.
