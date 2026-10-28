---
name: portfolio-ui-design
description: Diseño visual del portfolio con Tailwind CSS, tema claro y oscuro, tipografía, tarjetas de proyecto, layout responsive y animaciones. Usar al crear o modificar estilos, componentes visuales, el tema o el diseño de una sección.
---

# Diseño de interfaz del portfolio

## Principios
- Un portfolio profesional, sobrio y con personalidad. Evita el aspecto de plantilla genérica: jerarquía tipográfica clara, mucho espacio en blanco y una paleta coherente.
- Mobile-first: diseña desde 320 px y amplía con `sm`, `md`, `lg`.
- El contenido manda: el visitante debe llegar a un proyecto en dos clics o menos.

## Tema
- Define los colores como variables CSS en `src/styles/tokens.css` y exponlas a Tailwind (`theme.extend.colors`).
- Tokens mínimos: `--bg`, `--surface`, `--text`, `--muted`, `--border`, `--accent`.
- Cada área tiene su acento (sugerido; confirma con la autora antes de fijarlo):
  - Desarrollo → índigo / violeta
  - Automatización → ámbar / naranja
  - Datos → verde azulado / esmeralda
- Modo oscuro: respeta `prefers-color-scheme` en la primera visita, permite alternar manualmente (clase `dark` en `<html>`) y guarda la preferencia en `localStorage` dentro de `try/catch`.
- Contraste mínimo 4.5:1 en texto normal en ambos temas.

## Tipografía
- Máximo dos familias (una para títulos y una para texto). Fuentes autoalojadas o del sistema; evita bloquear el render.
- Escala fluida con `clamp()` para el `h1` del hero.

## Componentes clave
- **Card de área (home):** icono, título, una línea de descripción, enlace claro. Toda la tarjeta es clicable y enfocable.
- **ProjectCard:** título, resumen, `Badge` por tecnología, estado (`done`, `in-progress`, `planned`) y enlaces solo si existen.
- **SkillGroup:** categoría + badges; no uses barras de porcentaje (no aportan información real).
- **Timeline de formación:** la Especialización se marca visualmente como "en curso".
- **Estados vacíos:** si un proyecto no tiene demo o repo, no muestres botones deshabilitados; simplemente omítelos.

## Movimiento
- Animaciones breves (150–300 ms), con propósito (entrada de secciones, hover).
- Todo movimiento se desactiva con `@media (prefers-reduced-motion: reduce)`.

## Imágenes
- Usa `width` y `height` para evitar saltos de layout, `loading="lazy"` y formatos modernos (WebP/AVIF). Todas con `alt` descriptivo.
- Las capturas de dashboards deben estar anonimizadas.
