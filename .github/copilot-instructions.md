# Instrucciones para GitHub Copilot — Portfolio React

Proyecto: portfolio web personal de Leidis Daniela López Castaño, con tres áreas (desarrollo, automatización, análisis de datos). Lee `README.md` para el plan y `docs/CONTENT.md` para el contenido.

## Stack
Vite · React (última estable) · TypeScript `strict` · Tailwind CSS · React Router · react-i18next · Vitest + React Testing Library · ESLint + Prettier · GitHub Actions + Vercel.

## Reglas generales
- Código, nombres de variables, funciones, componentes y mensajes de commit en **inglés**. Documentación del repo en **español**.
- Componentes funcionales con hooks, **exports nombrados**, props tipadas con `interface`. Nada de `any`; si falta un tipo, créalo en `src/types/`.
- **Ningún texto de contenido va en los componentes.** El contenido sale de `src/data/` (tipado) y los textos de interfaz de `src/i18n/locales/`.
- Todo texto visible debe existir en **español e inglés**.
- Importa con el alias `@/` (apunta a `src/`).
- Tailwind para estilos; colores vía variables CSS del tema, no hex sueltos.
- Mobile-first, accesible (WCAG 2.1 AA) y con soporte de `prefers-reduced-motion` y modo oscuro.
- Commits con Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`, `chore:`).

## Contenido: lo que nunca debes hacer
- No inventes métricas, enlaces, nombres de empresas ni resultados. Si en `docs/CONTENT.md` algo está entre `[corchetes]`, deja el campo opcional y vacío.
- No publiques teléfono, datos internos de la empresa ni capturas con información real de clientes.
- No traduzcas nombres de tecnologías (Spring Boot, Power Automate, Docker…).

## Skills disponibles (en `.github/skills/`)
`portfolio-content-model` · `react-conventions` · `portfolio-ui-design` · `portfolio-a11y-seo` · `portfolio-i18n` · `portfolio-testing` · `portfolio-deploy`.
Úsalas cuando la tarea coincida con su descripción.

## Definición de terminado
Una tarea está lista cuando `npm run lint`, `npm run test` y `npm run build` pasan sin errores ni warnings nuevos, el cambio funciona en 320 px y en escritorio, y se puede usar con teclado.

## Antes de escribir mucho código
Si la petición es ambigua (por ejemplo, el diseño de una sección), propón un plan breve y espera confirmación en lugar de asumir.
