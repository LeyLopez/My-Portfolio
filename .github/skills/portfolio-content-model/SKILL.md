---
name: portfolio-content-model
description: Convierte el contenido de docs/CONTENT.md en datos tipados dentro de src/data y src/types. Usar al crear o modificar proyectos, skills, experiencia, formación o textos del perfil, y siempre que un componente necesite contenido.
---

# Modelo de contenido del portfolio

## Fuente de verdad
- El contenido vive en `docs/CONTENT.md`. Léelo antes de generar datos. La tabla de slugs de ese archivo define los `id` de los proyectos.
- Los componentes nunca incluyen textos de contenido: consumen `src/data/*.ts`.

## Archivos
```
src/types/portfolio.ts     # tipos (ver README, sección 5)
src/data/profile.ts        # nombre, titular, ubicación, enlaces, estado académico
src/data/skills.ts         # SkillGroup[]
src/data/projects.ts       # Project[]
src/data/experience.ts     # Experience[]
src/data/education.ts      # Education[]
src/data/index.ts          # reexporta todo
```

## Reglas
1. Tipos: `TrackId = 'development' | 'automation' | 'data'`. El contenido usa "desarrollo/automatizacion/datos"; mapea siempre a estos ids.
2. Todo texto visible es `LocalizedText` con `es` y `en` no vacíos.
3. Los `[corchetes]` de `CONTENT.md` son datos pendientes: deja el campo **opcional y ausente**; no escribas placeholders como "TODO" dentro del texto visible.
4. No inventes métricas, enlaces, fechas ni nombres de empresa. Si falta algo, déjalo fuera y repórtalo al final de tu respuesta como lista de pendientes.
5. Un proyecto puede tener varios `tracks`. El `id` es un slug en minúsculas con guiones, único.
6. Estado académico: la Especialización se marca con `inProgress: true`.
7. Los enlaces opcionales (`repo`, `demo`, `docs`, `cover`) solo se renderizan si existen.
8. Nunca incluyas el teléfono ni datos confidenciales de la empresa.
9. Nombres de tecnologías en `stack` e `items` van tal cual, sin traducir.

## Ejemplo
```ts
// src/data/projects.ts
import type { Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    id: 'biblioteca-reservas',
    tracks: ['development'],
    title: {
      es: 'Sistema de Reservas y Préstamos de Bibliotecas',
      en: 'Library Reservation and Loan System',
    },
    summary: {
      es: 'Plataforma web para optimizar la gestión de reservas y préstamos.',
      en: 'Web platform to streamline library reservations and loans.',
    },
    role: { es: 'Desarrolladora Full Stack Junior', en: 'Junior Full Stack Developer' },
    stack: ['Spring Boot', 'Spring Security', 'JWT', 'React', 'Bootstrap', 'PostgreSQL', 'Figma'],
    highlights: [
      {
        es: 'Autenticación con JWT y gestión de roles.',
        en: 'JWT authentication and role management.',
      },
    ],
    links: {},
    status: 'done',
    period: 'Nov 2024 – Abr 2025',
  },
];
```

## Verificación
Después de generar datos, confirma que existe una prueba de integridad (ver skill `portfolio-testing`) y que `npm run build` compila sin errores de tipos.
