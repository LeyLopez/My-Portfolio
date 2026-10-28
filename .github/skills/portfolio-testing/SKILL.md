---
name: portfolio-testing
description: Pruebas con Vitest y React Testing Library, incluidas pruebas de integridad de los datos del portfolio. Usar al escribir, corregir o ampliar pruebas, o al configurar el entorno de test.
---

# Pruebas del portfolio

## Herramientas
Vitest (entorno `jsdom`) · `@testing-library/react` · `@testing-library/user-event` · `@testing-library/jest-dom`. Archivos junto al código: `ProjectCard.test.tsx`.

## Qué probar (en este orden de prioridad)
1. **Integridad de datos** (`src/data/data.test.ts`):
   - Los `id` de proyectos son únicos y con formato slug.
   - Todo `LocalizedText` tiene `es` y `en` no vacíos.
   - Cada proyecto tiene al menos un `track` válido y ninguno usa `any`/campos desconocidos.
   - Los enlaces presentes empiezan por `https://` y no son `#`.
   - La Especialización figura con `inProgress: true`.
   - Ningún dato contiene un teléfono (regex de números de 10 dígitos o con `+57`).
2. **Componentes clave:** `ProjectCard` (muestra solo los enlaces existentes), `LanguageSwitcher` (cambia el idioma y el atributo `lang`), `ThemeToggle`, navegación por teclado de las tarjetas de área.
3. **Rutas:** cada ruta renderiza su `<h1>`; una ruta inexistente muestra la 404.

## Reglas
- Consulta por rol y por texto accesible (`getByRole`, `getByLabelText`); evita `data-testid` salvo que no haya alternativa.
- Interacciones con `userEvent`, no con `fireEvent`.
- Cada prueba es independiente; no dependas del orden.
- No pruebes detalles de implementación (estado interno, clases CSS).
- Los textos esperados en pruebas de UI se toman de los archivos de i18n, no se duplican.

## Scripts
```json
"test": "vitest run",
"test:watch": "vitest"
```

## Antes de dar la tarea por terminada
`npm run lint && npm run test && npm run build`.
