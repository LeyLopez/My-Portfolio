---
name: react-conventions
description: Convenciones de React, TypeScript, rutas y estructura de carpetas del portfolio. Usar al crear componentes, páginas, hooks, rutas, providers o al reorganizar archivos.
---

# Convenciones de React y TypeScript

## Estructura
```
src/
  app/           App.tsx, router.tsx, providers
  components/ui/       componentes genéricos (Button, Card, Badge, Section, Tabs)
  components/layout/   Header, Footer, LanguageSwitcher, ThemeToggle
  features/<area>/     home, development, automation, data (páginas + componentes propios)
  data/  hooks/  i18n/  styles/  types/
```
- Un componente compartido entre áreas va en `components/`; uno usado solo por un área va en su `features/<area>/`.
- Un archivo por componente, con el mismo nombre en PascalCase: `ProjectCard.tsx`.

## Reglas de código
- TypeScript `strict`. Prohibido `any`; usa `unknown` y estrecha el tipo.
- Componentes funcionales, **exports nombrados** (sin `export default`, salvo las páginas cargadas con `lazy`).
- Props con `interface ComponentNameProps`. Desestructura en la firma.
- Estado mínimo: si se puede derivar de props o de `src/data`, no uses `useState`.
- Lógica reutilizable en hooks `useXxx` dentro de `src/hooks/`.
- No uses `useMemo`/`useCallback` por defecto; solo con una razón medida.
- Listas con `key` estable (el `id` del dato), nunca el índice si el orden puede cambiar.
- Imports con alias `@/`. Orden: librerías, alias `@/`, relativos, estilos.
- Maneja los casos vacíos (sin proyectos, sin enlaces) en lugar de renderizar secciones rotas.

## Rutas (React Router)
```
/  ·  /desarrollo  ·  /automatizacion  ·  /datos  ·  /proyectos/:id
```
- Carga las páginas con `React.lazy` y `Suspense`.
- Incluye una ruta `*` con página 404 y enlace de vuelta al inicio.
- Al cambiar de ruta, lleva el foco al `<h1>` de la nueva página y actualiza `document.title`.

## Enlaces
- Internos con `<Link>`; externos con `<a target="_blank" rel="noopener noreferrer">`.
- Un enlace que abre en otra pestaña lo indica con texto accesible.

## Calidad
- ESLint (`@typescript-eslint`, `react-hooks`, `jsx-a11y`) y Prettier deben pasar sin warnings.
- Un componente no debería superar ~150 líneas; si crece, divídelo.

## Al terminar una tarea
Ejecuta `npm run lint && npm run test && npm run build` y reporta el resultado.
