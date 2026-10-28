# Portfolio web — Leidis Daniela López Castaño

Portfolio personal construido con **React + TypeScript**. Presenta mi perfil en tres áreas: **Desarrollo de software**, **Automatización de procesos** y **Análisis de datos**.

> 🎯 Este README es el documento de trabajo del proyecto: define qué se construye, con qué stack, en qué orden y cómo usar GitHub Copilot. El **contenido** del portfolio (textos, proyectos, skills) vive en [`docs/CONTENT.md`](docs/CONTENT.md) y es la única fuente de verdad.

**Estado:** 🚧 en desarrollo · **Autora:** Leidis Daniela López Castaño (Ingeniera de Sistemas, cursando el último semestre de la Especialización en Desarrollo de Software, Universidad del Magdalena).

---

## 1. Objetivos

1. Mostrar evidencia verificable (repos, demos, capturas, métricas) para tres perfiles: desarrollo, automatización y datos.
2. Que un reclutador entienda en menos de 30 segundos quién soy y pueda ir directo al área que le interesa.
3. Que el propio portfolio demuestre buenas prácticas: código tipado, tests, accesibilidad, CI/CD y despliegue.
4. Que esté disponible en **español e inglés**.

## 2. Stack

| Capa | Tecnología |
|---|---|
| Build | Vite |
| UI | React (última versión estable) + TypeScript en modo `strict` |
| Estilos | Tailwind CSS + variables CSS para el tema |
| Rutas | React Router |
| i18n | react-i18next |
| Animación (opcional) | Framer Motion, respetando `prefers-reduced-motion` |
| Calidad | ESLint, Prettier, Vitest, React Testing Library |
| CI/CD | GitHub Actions + Vercel |

## 3. Arquitectura de información

```
/                  Inicio: presentación + las 3 áreas + contacto
/desarrollo        Competencias y proyectos de desarrollo
/automatizacion    Competencias y casos de automatización
/datos             Competencias y proyectos de datos
/proyectos/:id     Detalle de un proyecto (opcional, fase 5)
```

Un proyecto puede aparecer en varias áreas (por ejemplo, *Intelligent Pipeline MLOps* en desarrollo y datos), por eso cada proyecto declara una lista de `tracks`.

## 4. Estructura de carpetas

```
portfolio-react/
├── README.md
├── docs/
│   └── CONTENT.md                  # contenido fuente del portfolio
├── .github/
│   ├── copilot-instructions.md     # reglas generales para Copilot
│   ├── skills/                     # Agent Skills de Copilot (ver sección 9)
│   └── workflows/ci.yml            # se crea en la fase 8
├── public/
├── src/
│   ├── app/                        # App.tsx, router.tsx, providers
│   ├── components/
│   │   ├── ui/                     # Button, Card, Badge, Section, Tabs
│   │   └── layout/                 # Header, Footer, LanguageSwitcher, ThemeToggle
│   ├── features/
│   │   ├── home/
│   │   ├── development/
│   │   ├── automation/
│   │   └── data/
│   ├── data/                       # contenido tipado (projects.ts, skills.ts, ...)
│   ├── hooks/
│   ├── i18n/                       # config + locales/{es,en}/common.json
│   ├── styles/
│   └── types/portfolio.ts
└── package.json
```

## 5. Modelo de datos

Todo el contenido se escribe en `src/data/` con estos tipos (`src/types/portfolio.ts`). Los componentes **no** llevan textos de contenido incrustados.

```ts
export type TrackId = 'development' | 'automation' | 'data';
export type Lang = 'es' | 'en';
export type LocalizedText = Record<Lang, string>;

export interface ProjectLinks {
  repo?: string;
  demo?: string;
  docs?: string;
  cover?: string; // ruta en /public o assets
}

export interface Project {
  id: string;                       // slug único; ver tabla de slugs en docs/CONTENT.md, p. ej. "biblioteca-reservas"
  tracks: TrackId[];
  title: LocalizedText;
  summary: LocalizedText;
  role: LocalizedText;
  stack: string[];
  highlights: LocalizedText[];
  links: ProjectLinks;
  status: 'done' | 'in-progress' | 'planned';
  period?: string;                  // "Nov 2024 – Abr 2025"
}

export interface SkillGroup {
  track: TrackId;
  category: LocalizedText;
  items: string[];
}

export interface Experience {
  id: string;
  role: LocalizedText;
  organization: string;
  period: string;
  tracks: TrackId[];
  highlights: LocalizedText[];
}

export interface Education {
  id: string;
  program: LocalizedText;
  institution: string;
  period: string;
  inProgress?: boolean;             // true para la Especialización
}
```

## 6. Requisitos

### Funcionales
- Hero con nombre, titular, estado académico, ubicación y enlaces (LinkedIn, GitHub, correo).
- Tres tarjetas de entrada a las áreas, con navegación por teclado.
- Cada página de área: competencias agrupadas por categoría + lista de proyectos o casos.
- Tarjeta de proyecto: título, resumen, stack, estado, enlaces (solo se muestran los que existen).
- Sección de formación con la especialización marcada como **en curso**.
- Cambio de idioma ES/EN y de tema claro/oscuro, ambos persistentes.
- Formulario de contacto **o** botón `mailto:` (decidir en la fase 3).

### No funcionales
- Responsive mobile-first (320 px en adelante).
- Accesibilidad WCAG 2.1 AA y Lighthouse ≥ 90 en las cuatro categorías.
- Sin datos sensibles: **no** publicar teléfono, datos internos de la empresa ni capturas con información real de clientes.
- Carga rápida: imágenes optimizadas y con `loading="lazy"`.

## 7. Plan de trabajo

Cada fase termina con `npm run lint && npm run test && npm run build` en verde.

- [ ] **Fase 0 — Setup:** Vite + React + TS, Tailwind, ESLint/Prettier, alias `@/`, estructura de carpetas.
- [ ] **Fase 1 — Datos y tipos:** `types/portfolio.ts` y `src/data/*` a partir de `docs/CONTENT.md`.
- [ ] **Fase 2 — Diseño base:** tokens de color y tipografía, modo oscuro, componentes `ui/` y `layout/`.
- [ ] **Fase 3 — Inicio:** hero, tarjetas de las 3 áreas, sobre mí, contacto.
- [ ] **Fase 4 — Páginas de área:** desarrollo, automatización y datos, con sus competencias y proyectos.
- [ ] **Fase 5 — Detalle de proyecto** (opcional) con galería y enlaces.
- [ ] **Fase 6 — i18n:** ES/EN para interfaz y contenido.
- [ ] **Fase 7 — Accesibilidad y SEO:** landmarks, metadatos, Open Graph, JSON-LD.
- [ ] **Fase 8 — Tests y CI:** Vitest, Testing Library, workflow de GitHub Actions.
- [ ] **Fase 9 — Despliegue y pulido:** Vercel, dominio, completar enlaces y métricas.

## 8. Contenido pendiente (no lo puede inventar Copilot)

- [ ] Enlaces a repositorios y demos de los tres proyectos de desarrollo.
- [ ] Métricas reales de los casos de automatización (horas ahorradas, procesos, usuarios).
- [ ] Diagramas anonimizados de los flujos (HubSpot ↔ Power Platform, Power Automate, N8N).
- [ ] Capturas del dashboard de Power BI con datos anonimizados.
- [ ] Al menos un proyecto público de análisis de datos (EDA con Python y/o dashboard con datos abiertos).
- [ ] URL de GitHub y confirmar el nombre exacto de la empresa para la experiencia.
- [ ] Foto o avatar (opcional) y CV en PDF descargable.

## 9. Trabajar con GitHub Copilot

Este repositorio incluye contexto para Copilot en dos niveles:

| Archivo | Para qué sirve |
|---|---|
| `.github/copilot-instructions.md` | Reglas que Copilot lee siempre (stack, convenciones, definición de terminado). |
| `.github/skills/<nombre>/SKILL.md` | Agent Skills: instrucciones especializadas que Copilot carga solo cuando la tarea las necesita. |

**Skills incluidas**

| Skill | Se activa cuando… |
|---|---|
| `portfolio-content-model` | Pasas contenido de `docs/CONTENT.md` a datos tipados. |
| `react-conventions` | Creas componentes, hooks, rutas o estructura. |
| `portfolio-ui-design` | Diseñas estilos, layout, tema o animaciones. |
| `portfolio-a11y-seo` | Revisas accesibilidad, metadatos o rendimiento. |
| `portfolio-i18n` | Agregas textos o cambias de idioma. |
| `portfolio-testing` | Escribes o corriges pruebas. |
| `portfolio-deploy` | Configuras CI/CD o despliegue. |

Usa **modo agente** en VS Code para que Copilot las descubra y las active. También puedes pedirlas explícitamente: *"Usa la skill portfolio-content-model para…"*.

### Prompts sugeridos por fase

**Fase 0**
> Inicializa el proyecto según el README: Vite + React + TypeScript estricto, Tailwind, React Router, ESLint, Prettier y alias `@/`. Crea la estructura de carpetas de la sección 4 con archivos mínimos.

**Fase 1**
> Lee `docs/CONTENT.md` y genera `src/types/portfolio.ts` y los archivos de `src/data/` (projects, skills, experience, education, profile) con textos en español e inglés. Donde el contenido tenga `[corchetes]` deja el campo opcional vacío, no inventes datos.

**Fase 2**
> Crea el sistema de diseño: variables CSS de color con una paleta de acento distinta por área (desarrollo, automatización, datos), tema claro/oscuro y los componentes `Button`, `Card`, `Badge`, `Section` y `Tabs` accesibles.

**Fase 3 y 4**
> Construye la página de inicio y las tres páginas de área consumiendo únicamente `src/data/`. Muestra los enlaces de proyecto solo si existen y marca la especialización como "en curso".

**Fase 6**
> Configura react-i18next con español como idioma por defecto, un `LanguageSwitcher` accesible, y un hook `useLocalized` para los `LocalizedText` de `src/data/`.

**Fase 7**
> Audita accesibilidad y SEO del proyecto: landmarks, orden de encabezados, contraste, `lang` dinámico, metadatos Open Graph y JSON-LD de tipo Person. Corrige lo que encuentres.

**Fase 8**
> Agrega pruebas con Vitest y Testing Library: integridad de `src/data/` y los componentes principales. Crea `.github/workflows/ci.yml` con lint, test y build.

**Fase 9**
> Prepara el despliegue en Vercel con reescritura SPA y documenta los pasos en el README.

## 10. Scripts

```bash
npm install        # dependencias
npm run dev        # servidor de desarrollo
npm run lint       # ESLint
npm run test       # Vitest
npm run build      # build de producción
npm run preview    # previsualizar el build
```

## 11. Cuando termine el proyecto

Reemplaza este README por uno público (qué es, captura, stack, cómo correrlo, enlace al sitio) y deja este plan en `docs/PLAN.md`.

## 12. Contacto

✉️ [leylopez2023@gmail.com](mailto:leylopez2023@gmail.com) · 💼 [linkedin.com/in/leidis-lopez](https://www.linkedin.com/in/leidis-lopez)
