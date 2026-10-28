---
name: portfolio-deploy
description: Integración continua con GitHub Actions y despliegue del portfolio en Vercel, incluida la reescritura de rutas para SPA. Usar al crear el workflow de CI, configurar vercel.json, dominio, variables de entorno o publicar el sitio.
---

# CI/CD y despliegue

## CI (GitHub Actions)
Crea `.github/workflows/ci.yml` que se ejecute en cada `push` y `pull_request` hacia `main`:

```yaml
name: CI
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```
Verifica las versiones actuales de las actions y de Node LTS antes de fijarlas.

## Despliegue en Vercel
- Conecta el repositorio desde el panel de Vercel: framework **Vite**, build `npm run build`, salida `dist`.
- Cada pull request genera una vista previa; `main` publica producción.
- Como es una SPA con React Router, agrega `vercel.json` para que las rutas profundas no den 404:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
- Dominio propio: configúralo en Vercel y actualiza `canonical`, `og:url` y `sitemap.xml`.
- Variables de entorno: este proyecto no debería necesitar secretos. Si se agrega un formulario de contacto, usa un servicio externo y guarda las claves en Vercel, nunca en el repositorio.

## Alternativa: GitHub Pages
Requiere `base: '/<repo>/'` en `vite.config.ts`, un `404.html` que replique `index.html` y un workflow de publicación. Prefiere Vercel salvo que haya una razón para no usarlo.

## Lista de verificación previa a publicar
- [ ] `npm run lint && npm run test && npm run build` en verde.
- [ ] Lighthouse ≥ 90 en las cuatro categorías sobre `npm run preview`.
- [ ] Sin teléfono, datos de la empresa ni capturas sin anonimizar.
- [ ] Enlaces a repos y demos funcionan (sin `#`).
- [ ] Metadatos, `og:image`, `robots.txt` y `sitemap.xml` con la URL final.
- [ ] CV en PDF actualizado y enlazado.
