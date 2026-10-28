import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { TechnologyIcon } from '@/components/ui/TechnologyIcon';
import { projects } from '@/data';
import { useLocalized } from '@/hooks/useLocalized';
import type { TrackId } from '@/types/portfolio';

const areaPaths: Record<TrackId, string> = {
  development: 'desarrollo',
  automation: 'automatizacion',
  data: 'datos',
};

const areaLabels: Record<TrackId, string> = {
  development: 'areas.development.label',
  automation: 'areas.automation.label',
  data: 'areas.data.label',
};

export function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const localized = useLocalized();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const project = projects.find((item) => item.id === id);

  useEffect(() => {
    if (!project) {
      document.title = `${t('common.notFound')} | Leidis Lopez Castaño`;
      return;
    }

    document.title = `${localized(project.title)} | Leidis Lopez Castaño`;
    headingRef.current?.focus();
  }, [localized, project, t]);

  if (!project) {
    return (
      <>
        <Header />
        <main className="page-container min-h-screen py-24">
          <h1 className="text-4xl font-bold" tabIndex={-1}>{t('projects.notFound')}</h1>
          <Link className="mt-6 inline-block text-accent underline-offset-4 hover:underline" to="/">{t('common.backHome')}</Link>
        </main>
        <Footer />
      </>
    );
  }

  const statusKey = project.status === 'in-progress' ? 'inProgress' : project.status;
  const links = [
    ['repo', project.links.repo, t('projects.links.repo')],
    ['demo', project.links.demo, t('projects.links.demo')],
    ['docs', project.links.docs, t('projects.links.docs')],
  ] as const;

  return (
    <>
      <Header />
      <main>
        <section className="page-container py-16 sm:py-24">
          <Link className="text-sm font-semibold text-accent underline-offset-4 hover:underline" to="/">← {t('common.backHome')}</Link>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {project.tracks.map((track) => <Link key={track} to={`/${areaPaths[track]}`}><Badge tone={track}>{t(areaLabels[track])}</Badge></Link>)}
            <Badge>{t(`projects.status.${statusKey}`)}</Badge>
          </div>
          <h1 className="mt-6 max-w-5xl text-[clamp(2.5rem,7vw,5.75rem)] font-bold leading-[0.95] tracking-[-0.04em]" ref={headingRef} tabIndex={-1}>{localized(project.title)}</h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-muted">{localized(project.summary)}</p>
          {project.period ? <p className="mt-4 text-sm font-semibold text-accent">{project.period}</p> : null}
        </section>

        <section className="page-container grid gap-8 pb-16 lg:grid-cols-[1.3fr_0.7fr] sm:pb-24">
          <Card className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold">{t('projects.detail.highlights')}</h2>
            <ul className="mt-6 space-y-4 leading-7">
              {project.highlights.map((highlight, index) => <li className="flex gap-3" key={`${project.id}-detail-${index}`}><span className="text-accent" aria-hidden="true">+</span><span>{localized(highlight)}</span></li>)}
            </ul>
          </Card>
          <Card className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold">{t('projects.detail.stack')}</h2>
            <div className="mt-6 flex flex-wrap gap-2">{project.stack.map((technology) => <Badge key={technology}><TechnologyIcon technology={technology} />{technology}</Badge>)}</div>
            {project.role ? <><h2 className="mt-8 text-2xl font-bold">{t('projects.detail.role')}</h2><p className="mt-3 leading-7 text-muted">{localized(project.role)}</p></> : null}
          </Card>
        </section>

        {links.some(([, href]) => href) ? (
          <section className="page-container pb-16 sm:pb-24">
            <Card className="flex flex-wrap items-center justify-between gap-5 p-6 sm:p-8">
              <h2 className="text-2xl font-bold">{t('projects.detail.links')}</h2>
              <div className="flex flex-wrap gap-3">{links.map(([kind, href, label]) => href ? <a href={href} key={kind} rel="noopener noreferrer" target="_blank"><Button variant="ghost" type="button">{label}<span className="sr-only"> {t('common.openExternal')}</span></Button></a> : null)}</div>
            </Card>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
