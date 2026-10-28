import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Section } from '@/components/ui/Section';
import { SkillGroup } from '@/components/ui/SkillGroup';
import { areas, projects, skills } from '@/data';
import { useLocalized } from '@/hooks/useLocalized';
import type { TrackId } from '@/types/portfolio';

interface AreaPageProps {
  track: TrackId;
}

export function AreaPage({ track }: AreaPageProps) {
  const { t } = useTranslation();
  const localized = useLocalized();
  const areaProjects = projects.filter((project) => project.tracks.includes(track));
  const areaSkills = skills.filter((skill) => skill.track === track);
  const areaName = localized(areas.find((area) => area.id === track)?.title ?? { es: '', en: '' });

  useEffect(() => {
    document.title = `${areaName} | Leidis Lopez Castaño`;
  }, [areaName]);

  return (
    <>
      <Header />
      <main>
        <section className="page-container py-16 sm:py-24">
          <Link className="text-sm font-semibold text-accent underline-offset-4 hover:underline" to="/">← {t('common.backHome')}</Link>
          <h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,7vw,5.75rem)] font-bold leading-[0.95] tracking-[-0.04em]">{areaName}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{t(`areas.${track}.description`)}</p>
        </section>
        <Section eyebrow={t('areas.skillsEyebrow')} title={t('areas.skillsTitle')}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {areaSkills.map((skill) => <SkillGroup key={localized(skill.category)} skillGroup={skill} />)}
          </div>
        </Section>
        <Section eyebrow={t('areas.projectsEyebrow')} title={t('areas.projectsTitle')}>
          {areaProjects.length > 0 ? <div className="grid gap-5 lg:grid-cols-2">{areaProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div> : <p className="text-muted">{t('areas.emptyProjects')}</p>}
        </Section>
      </main>
      <Footer />
    </>
  );
}
