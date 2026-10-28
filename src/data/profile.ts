import type { Profile } from '@/types/portfolio';

export const profile: Profile = {
  name: 'Leidis Lopez Castaño',
  headline: {
    es: 'Ingeniera de Sistemas · Desarrolladora de software · Automatización de procesos · Análisis de datos',
    en: 'Systems Engineer · Software Developer · Process Automation · Data Analysis',
  },
  location: {
    es: 'Santa Marta, Colombia',
    en: 'Santa Marta, Colombia',
  },
  academicStatus: {
    es: 'Cursando el último semestre de la Especialización en Desarrollo de Software en la Universidad del Magdalena, con grado previsto en 2026.',
    en: 'Currently completing the final semester of the Software Development Specialization at Universidad del Magdalena, with graduation expected in 2026.',
  },
  email: 'leylopez2023@gmail.com',
  links: [
    {
      label: { es: 'LinkedIn', en: 'LinkedIn' },
      href: 'https://www.linkedin.com/in/leidis-lopez',
    },
    {
      label: { es: 'GitHub', en: 'GitHub' },
      href: 'https://github.com/LeyLopez',
    },
  ],
  about: [
    {
      es: 'Soy Ingeniera de Sistemas, con formación complementaria en Análisis y Desarrollo de Software (SENA). A partir de esta formación, he construido un perfil que integra tres áreas que se fortalecen entre sí: el desarrollo de aplicaciones web full stack, APIs REST y despliegues con Docker; la automatización de flujos e integraciones entre plataformas mediante Power Platform, N8N y CRM; y el análisis de datos a través de dashboards, KPIs y análisis exploratorio con Power BI y Python.',
      en: 'I am a Systems Engineer with additional training in Software Analysis and Development (SENA). Building on this background, I have developed a profile that brings together three mutually reinforcing areas: full-stack web applications, REST APIs, and Docker deployments; workflow and platform automation through Power Platform, N8N, and CRM tools; and data analysis through dashboards, KPIs, and exploratory analysis with Power BI and Python.',
    },
    {
      es: 'Además, trabajo en entornos ágiles (Scrum) y colaboro con equipos multidisciplinarios. Por eso, mi enfoque no se limita a construir soluciones técnicas, sino que busca que sean útiles, medibles y sostenibles para las personas que las utilizan.',
      en: 'I also work in agile environments (Scrum) and collaborate with multidisciplinary teams. Therefore, my approach goes beyond building technical solutions: I aim to make them useful, measurable, and sustainable for the people who use them.',
    },
    {
      es: 'Finalmente, tengo una profunda admiración por la pasión con la que las mujeres se desempeñan en cualquier campo, especialmente en la ingeniería y el arte. Esa admiración también inspira mi manera de aprender, crear y aportar en cada proyecto.',
      en: 'Finally, I deeply admire the passion with which women pursue every field, especially engineering and the arts. That admiration also inspires the way I learn, create, and contribute to each project.',
    },
  ],
  hobbies: [
    {
      id: 'reading',
      title: { es: 'Leer', en: 'Reading' },
      description: { es: 'Explorar nuevas ideas a través de los libros.', en: 'Exploring new ideas through books.' },
    },
    {
      id: 'languages',
      title: { es: 'Aprender idiomas', en: 'Learning languages' },
      description: { es: 'Practicar idiomas para conectar con más personas y culturas.', en: 'Practicing languages to connect with more people and cultures.' },
    },
    {
      id: 'drawing',
      title: { es: 'Dibujar', en: 'Drawing' },
      description: { es: 'Desarrollar la creatividad observando y creando.', en: 'Developing creativity through observation and making.' },
    },
    {
      id: 'exercise',
      title: { es: 'Hacer ejercicio', en: 'Exercising' },
      description: { es: 'Mantener el equilibrio y la energía en el día a día.', en: 'Maintaining balance and energy in everyday life.' },
    },
  ],
};

export const areas = [
  {
    id: 'development',
    title: { es: 'Desarrollo de software', en: 'Software development' },
    description: { es: 'Apps full stack, APIs, autenticación, despliegue', en: 'Full-stack apps, APIs, authentication, deployment' },
  },
  {
    id: 'automation',
    title: { es: 'Automatización de procesos', en: 'Process automation' },
    description: { es: 'Flujos, integraciones, CRM, RPA', en: 'Workflows, integrations, CRM, RPA' },
  },
  {
    id: 'data',
    title: { es: 'Análisis de datos', en: 'Data analysis' },
    description: { es: 'Dashboards, KPIs, EDA, ML', en: 'Dashboards, KPIs, EDA, ML' },
  },
] as const;
