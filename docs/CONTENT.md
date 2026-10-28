# Contenido del portfolio (fuente de verdad)

> Este archivo contiene **todo el texto** que se muestra en el sitio. Cuando Copilot necesite contenido, debe leerlo de aquí (`#file:docs/CONTENT.md`) y trasladarlo a `src/data/`.
> Reglas: no inventar métricas, no incluir datos confidenciales de la empresa, no publicar el teléfono. Lo que esté entre `[corchetes]` es un dato pendiente (`TODO`).

## Slugs de proyectos (deben coincidir con `src/data/projects.ts`)

| Slug | Proyecto | Perfiles |
|---|---|---|
| `biblioteca-reservas` | Sistema de Reservas y Préstamos de Bibliotecas | desarrollo |
| `tournaments-pokeapi` | Tournaments DevOps – PokéAPI | desarrollo |
| `intelligent-pipeline-mlops` | Intelligent Pipeline – MLOps | desarrollo, datos |
| `hubspot-power-platform` | Integración HubSpot ↔ Power Platform | automatizacion |
| `flujos-operaciones` | Flujos Power Automate y N8N para Operaciones | automatizacion |
| `dashboard-operaciones` | Tablero de control Power BI | datos, automatizacion |
| `eda-python` | Análisis exploratorio con Python | datos |

---

## Presentación (hero)

**Ingeniera de Sistemas · Desarrolladora de software · Automatización de procesos · Análisis de datos**

📍 Santa Marta, Colombia
🎓 Cursando el último semestre de la **Especialización en Desarrollo de Software** (Universidad del Magdalena, grado previsto 2026)
📫 [leylopez2023@gmail.com](mailto:leylopez2023@gmail.com) · [LinkedIn](https://www.linkedin.com/in/leidis-lopez)

---

## Sobre mí

Soy Ingeniera de Sistemas, con formación complementaria en Análisis y Desarrollo de Software (SENA). A partir de esta formación, he construido un perfil que integra tres áreas que se fortalecen entre sí: el desarrollo de aplicaciones web full stack, APIs REST y despliegues con Docker; la automatización de flujos e integraciones entre plataformas mediante Power Platform, N8N y CRM; y el análisis de datos a través de dashboards, KPIs y análisis exploratorio con Power BI y Python.

Además, trabajo en entornos ágiles (Scrum) y colaboro con equipos multidisciplinarios. Por eso, mi enfoque no se limita a construir soluciones técnicas, sino que busca que sean útiles, medibles y sostenibles para las personas que las utilizan.

Finalmente, tengo una profunda admiración por la pasión con la que las mujeres se desempeñan en cualquier campo, especialmente en la ingeniería y el arte. Esa admiración también inspira mi manera de aprender, crear y aportar en cada proyecto.

## Navegación (tarjetas de la home)

| Área | Qué encontrarás | Ir a |
|---|---|---|
| 💻 **Desarrollo de software** | Apps full stack, APIs, autenticación, despliegue | [Ver sección](#-desarrollo-de-software) |
| ⚙️ **Automatización de procesos** | Flujos, integraciones, CRM, RPA | [Ver sección](#️-automatización-de-procesos) |
| 📊 **Análisis de datos** | Dashboards, KPIs, EDA, ML | [Ver sección](#-análisis-de-datos) |

---

## 💻 Desarrollo de software

### Competencias

| Categoría | Tecnologías |
|---|---|
| Backend | Java, Spring Boot, Spring Security (JWT), Node.js / Express, Python (FastAPI) |
| Frontend | React.js, JavaScript, TypeScript, HTML5, CSS3, Bootstrap |
| Bases de datos | PostgreSQL, MySQL, SQL Server |
| DevOps y despliegue | Docker, Docker Compose, Git/GitHub, Azure DevOps (CI/CD), Railway, Vercel |
| Calidad y diseño | JUnit, PyTest, Postman, Figma |
| Metodología | Scrum, trabajo colaborativo en equipo |

### Proyectos

#### 📚 Sistema de Reservas y Préstamos de Bibliotecas
Plataforma web para optimizar la gestión de reservas y préstamos.
- **Stack:** Spring Boot · Spring Security + JWT · React.js · Bootstrap · PostgreSQL · Figma
- **Qué hice:** backend con autenticación y roles de usuario, prototipo en Figma, interfaz en React y despliegue completo (backend y BD en Railway, frontend en Vercel).
- 🔗 [Repositorio](#) · 🌐 [Demo](#) · 📄 [Documentación](#)

#### 🏆 Tournaments DevOps – PokéAPI
API REST y frontend para gestionar torneos Pokémon, desarrollados en equipo.
- **Stack:** Spring Boot · PostgreSQL · Docker · React
- **Qué hice:** API REST colaborativa, integración de módulos de otros grupos (equipos y entrenadores), frontend responsivo y separación de responsabilidades entre frontend, backend y base de datos.
- 🔗 [Repositorio](#) · 🌐 [Demo](#)

#### 🤖 Intelligent Pipeline – Proyecto MLOps
Arquitectura modular para desplegar y experimentar con modelos de ML, deep learning y LLMs.
- **Stack:** FastAPI · scikit-learn · TensorFlow/Keras · MLflow · Gradio · Docker Compose
- **Qué hice:** servicios independientes con endpoints de inferencia y monitoreo, tracking de experimentos con MLflow, interfaz unificada en Gradio y despliegue reproducible con contenedores.
- 🔗 [Repositorio](#) · 📄 [Arquitectura](#)

---

## ⚙️ Automatización de procesos

### Competencias

| Categoría | Tecnologías y prácticas |
|---|---|
| Low-code / RPA | Microsoft Power Platform, Power Automate Desktop, Power Automate Cloud |
| Orquestación | N8N, webhooks, integración de APIs REST |
| CRM | HubSpot (Workflows y Webhooks) |
| Integración | Conexión de servicios y plataformas corporativas, sincronización de datos |
| Seguimiento | Power BI para monitorear los procesos automatizados |
| Trabajo con usuarios | Levantamiento de necesidades, soporte y adopción de las soluciones |

### Experiencia y casos

> Por confidencialidad, los casos se presentan con datos y nombres anonimizados.

#### 🔄 Integración HubSpot ↔ Power Platform
- **Problema:** `[describe el proceso manual o desconectado de antes]`
- **Solución:** workflows y webhooks de HubSpot conectados con soluciones en Power Platform.
- **Resultado:** `[ej. reducción de X horas/semana, X% menos errores de digitación]`
- 🖼️ [Diagrama del flujo](#)

#### 🤝 Flujos con Power Automate y N8N para el área de Operaciones
- **Problema:** `[tareas operativas y administrativas repetitivas]`
- **Solución:** flujos en Power Automate (Desktop y Cloud) y N8N que integran APIs y servicios externos.
- **Resultado:** `[métrica: tiempo ahorrado, procesos automatizados, usuarios beneficiados]`
- 🖼️ [Diagrama del flujo](#)

#### 🛠️ Mini-proyectos públicos *(en construcción)*
- `[Flujo en N8N que consume una API pública y notifica por correo/Telegram]`
- `[Flujo Power Automate de aprobación de solicitudes con formulario]`

---

## 📊 Análisis de datos

### Competencias

| Categoría | Tecnologías |
|---|---|
| Visualización y BI | Power BI (modelado, medidas, KPIs, dashboards) |
| Análisis | Python, Pandas, NumPy, análisis exploratorio de datos |
| Machine Learning | scikit-learn, TensorFlow/Keras, MLflow |
| Datos | SQL (PostgreSQL, MySQL, SQL Server), bases de datos NoSQL |

### Proyectos

#### 📈 Tablero de control para el área de Operaciones (Power BI)
- **Qué hice:** modelé y desarrollé un tablero de KPIs para seguimiento de procesos y apoyo a la toma de decisiones; luego lo mantuve y mejoré de forma continua.
- **Impacto:** `[qué decisiones se tomaron gracias al tablero]`
- 🖼️ [Capturas con datos anonimizados](#)

#### 🔍 Análisis exploratorio de datos con Python
- **Stack:** Python · Pandas · NumPy · Matplotlib/Seaborn
- **Dataset:** `[nombre y fuente]` · **Pregunta de negocio:** `[¿qué querías responder?]`
- 🔗 [Notebook](#)

#### 🤖 Intelligent Pipeline (MLOps)
Experimentación y seguimiento de modelos con MLflow. Ver el detalle en [Desarrollo de software](#-desarrollo-de-software).

---

## 🎓 Formación

| Programa | Institución | Periodo |
|---|---|---|
| Especialización en Desarrollo de Software *(en curso, último semestre)* | Universidad del Magdalena | 2026 |
| Ingeniería de Sistemas | Universidad del Magdalena | 2022 – 2026 |
| Tecnología en Análisis y Desarrollo de Software | SENA | 2023 – 2026 |
| Análisis exploratorio de datos en Python | SENA | 2024 |
| Implementación de bases de datos NoSQL | SENA | 2025 |
| Programación en C++ (Niveles I y II) | SENA | 2024 – 2025 |

**Idiomas:** Español (nativo) · Inglés (B2)

---

## 🧰 Stack completo

**Lenguajes:** Java · JavaScript · TypeScript · Python · SQL · C++
**Frameworks y librerías:** Spring Boot · React · Angular · Bootstrap · Node.js · Express · Django · FastAPI · Pandas · NumPy · scikit-learn · JUnit · PyTest
**Datos y BI:** PostgreSQL · MySQL · SQL Server · Power BI · MLflow
**Automatización:** Power Platform · Power Automate · N8N · HubSpot
**DevOps y herramientas:** Docker · Git · GitHub · Azure DevOps · Railway · Vercel · Postman · Figma

---

## 📬 Contacto

¿Quieres conversar sobre un proyecto o una oportunidad?
- ✉️ [leylopez2023@gmail.com](mailto:leylopez2023@gmail.com)
- 💼 [linkedin.com/in/leidis-lopez](https://www.linkedin.com/in/leidis-lopez)
- 🐙 [GitHub](https://github.com/LeyLopez)

---

<sub>Actualizado: octubre de 2026 · Los elementos entre `[corchetes]` son campos por completar.</sub>
