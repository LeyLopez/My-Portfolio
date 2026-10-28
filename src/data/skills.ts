import type { SkillGroup } from '@/types/portfolio';

export const skills: SkillGroup[] = [
  { track: 'development', category: { es: 'Backend', en: 'Backend' }, items: ['Java', 'Spring Boot', 'Spring Security (JWT)', 'Node.js / Express', 'Python (FastAPI)'] },
  { track: 'development', category: { es: 'Frontend', en: 'Frontend' }, items: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap'] },
  { track: 'development', category: { es: 'Bases de datos', en: 'Databases' }, items: ['PostgreSQL', 'MySQL', 'SQL Server'] },
  { track: 'development', category: { es: 'DevOps y despliegue', en: 'DevOps and deployment' }, items: ['Docker', 'Docker Compose', 'Git/GitHub', 'Azure DevOps (CI/CD)', 'Railway', 'Vercel'] },
  { track: 'development', category: { es: 'Calidad y diseño', en: 'Quality and design' }, items: ['JUnit', 'PyTest', 'Postman', 'Figma'] },
  { track: 'development', category: { es: 'Metodología', en: 'Methodology' }, items: ['Scrum', 'Trabajo colaborativo en equipo'] },
  { track: 'automation', category: { es: 'Low-code / RPA', en: 'Low-code / RPA' }, items: ['Microsoft Power Platform', 'Power Automate Desktop', 'Power Automate Cloud'] },
  { track: 'automation', category: { es: 'Orquestación', en: 'Orchestration' }, items: ['N8N', 'webhooks', 'integración de APIs REST'] },
  { track: 'automation', category: { es: 'CRM', en: 'CRM' }, items: ['HubSpot (Workflows y Webhooks)'] },
  { track: 'automation', category: { es: 'Integración', en: 'Integration' }, items: ['Conexión de servicios y plataformas corporativas', 'sincronización de datos'] },
  { track: 'automation', category: { es: 'Seguimiento', en: 'Monitoring' }, items: ['Power BI para monitorear los procesos automatizados'] },
  { track: 'automation', category: { es: 'Trabajo con usuarios', en: 'User collaboration' }, items: ['Levantamiento de necesidades', 'soporte y adopción de las soluciones'] },
  { track: 'data', category: { es: 'Visualización y BI', en: 'Visualization and BI' }, items: ['Power BI (modelado, medidas, KPIs, dashboards)'] },
  { track: 'data', category: { es: 'Análisis', en: 'Analysis' }, items: ['Python', 'Pandas', 'NumPy', 'análisis exploratorio de datos'] },
  { track: 'data', category: { es: 'Machine Learning', en: 'Machine Learning' }, items: ['scikit-learn', 'TensorFlow/Keras', 'MLflow'] },
  { track: 'data', category: { es: 'Datos', en: 'Data' }, items: ['SQL (PostgreSQL, MySQL, SQL Server)', 'bases de datos NoSQL'] },
];
