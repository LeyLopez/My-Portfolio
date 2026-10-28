---
name: portfolio-i18n
description: Internacionalización español e inglés con react-i18next, hook useLocalized, selector de idioma y persistencia. Usar al agregar textos de interfaz, traducir contenido, crear el LanguageSwitcher o cambiar el idioma.
---

# Internacionalización (ES/EN)

## Dos tipos de texto
1. **Interfaz** (botones, etiquetas, navegación): archivos en `src/i18n/locales/{es,en}/common.json`, usados con `useTranslation()`.
2. **Contenido** (proyectos, experiencia, etc.): `LocalizedText` en `src/data/`, usado con el hook `useLocalized()`.

## Configuración
- `src/i18n/index.ts` con `react-i18next`: idioma por defecto `es`, `fallbackLng: 'es'`, `interpolation.escapeValue: false`.
- Detecta el idioma inicial en este orden: valor guardado en `localStorage` (con `try/catch`), idioma del navegador si empieza por `en`, y `es` por defecto.
- Al cambiar de idioma: guarda la preferencia y actualiza `document.documentElement.lang`.

## Claves
- Agrupadas por área y en inglés: `nav.home`, `nav.development`, `home.hero.cta`, `common.viewRepo`, `projects.status.inProgress`.
- Nada de concatenar frases traducidas; usa interpolación (`{{name}}`).
- Toda clave nueva se agrega **en ambos idiomas** en el mismo cambio.

## Hook de contenido
```ts
// src/hooks/useLocalized.ts
import { useTranslation } from 'react-i18next';
import type { Lang, LocalizedText } from '@/types/portfolio';

export function useLocalized() {
  const { i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'es') as Lang;
  return (text: LocalizedText) => text[lang];
}
```

## Reglas de traducción
- No traduzcas nombres de tecnologías, de productos ni de instituciones (Universidad del Magdalena, SENA).
- Usa "Especialización en Desarrollo de Software" ↔ "Specialization in Software Development"; "en curso" ↔ "in progress".
- El inglés debe sonar natural y profesional (nivel B2 de la autora); evita traducciones literales. Marca para revisión humana los textos más largos.
- Fechas con `Intl.DateTimeFormat` según el idioma.

## LanguageSwitcher
- Botón accesible con `aria-label` y texto visible "ES | EN"; el idioma activo se indica con `aria-pressed` o `aria-current`.
