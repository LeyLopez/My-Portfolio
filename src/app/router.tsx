import { Link, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { HobbyCard } from '@/components/ui/HobbyCard';
import { ProfilePhoto } from '@/components/ui/ProfilePhoto';
import { Section } from '@/components/ui/Section';
import { areas, education, profile } from '@/data';
import { useLocalized } from '@/hooks/useLocalized';

const AreaPage = lazy(() => import('@/features/area/AreaPage').then((module) => ({ default: module.AreaPage })));
const ProjectPage = lazy(() => import('@/features/project/ProjectPage').then((module) => ({ default: module.ProjectPage })));

const areaPaths = { development: 'desarrollo', automation: 'automatizacion', data: 'datos' } as const;

function HomePage() {
  const { t } = useTranslation();
  const localized = useLocalized();

  return (
    <>
      <Header />
      <main>
        <section className="page-container grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="section-eyebrow">{t('home.eyebrow')}</p>
            <h1 className="max-w-4xl text-[clamp(2.75rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.04em]">{profile.name}</h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-muted">{t('home.heroDescription')}</p>
            <p className="mt-4 text-sm font-semibold text-accent">{localized(profile.location)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#areas"><Button type="button">{t('home.explore')}</Button></a>
              <a href="#contact"><Button variant="ghost" type="button">{t('home.contactCta')}</Button></a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <ProfilePhoto alt={profile.name} />
          </div>
        </section>
        <Section id="areas" eyebrow={t('home.areasEyebrow')} title={t('home.areasTitle')}>
          <div className="grid gap-4 md:grid-cols-3">
            {areas.map((area) => (
              <Link className="group" key={area.id} to={`/${areaPaths[area.id]}`}>
                <Card className="h-full p-6 transition-transform duration-200 group-hover:-translate-y-1 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-accent">
                  <Badge tone={area.id}>{localized(area.title)}</Badge>
                  <p className="mt-5 text-lg font-semibold">{localized(area.description)}</p>
                  <span className="mt-8 block text-sm font-semibold text-accent">{t('home.explore')} ↗</span>
                </Card>
              </Link>
            ))}
          </div>
        </Section>

        <Section id="about" eyebrow={t('home.aboutEyebrow')} title={t('home.aboutTitle')}>
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <p className="text-lg leading-8 text-muted">{localized(profile.academicStatus)}</p>
            <div className="space-y-4 text-lg leading-8">
              {profile.about.map((paragraph) => <p key={localized(paragraph)}>{localized(paragraph)}</p>)}
            </div>
          </div>
        </Section>

        <Section id="hobbies" eyebrow={t('home.hobbiesEyebrow')} title={t('home.hobbiesTitle')}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {profile.hobbies.map((hobby) => <HobbyCard hobby={hobby} key={hobby.id} />)}
          </div>
        </Section>

        <Section id="education" eyebrow={t('home.educationEyebrow')} title={t('home.educationTitle')}>
          <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
            {education.map((item) => (
              <Card className="flex items-start justify-between gap-4 p-5" key={item.id}>
                <div>
                  <h3 className="font-semibold">{localized(item.program)}</h3>
                  <p className="mt-1 text-sm text-muted">{item.institution}</p>
                </div>
                <div className="shrink-0 text-right text-sm text-muted">
                  <p>{item.period}</p>
                  {item.inProgress ? <Badge className="mt-2" tone="data">{t('home.inProgress')}</Badge> : null}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow={t('home.contactEyebrow')} title={t('home.contactTitle')}>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`}><Button type="button">{t('home.email')}</Button></a>
            {profile.links.map((link) => <a href={link.href} key={link.href} rel="noopener noreferrer" target="_blank"><Button variant="ghost" type="button">{localized(link.label)}</Button></a>)}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

function NotFoundPage() {
  const { t } = useTranslation();
  return <main className="page-container min-h-screen py-24"><h1 className="text-4xl font-bold">{t('common.notFound')}</h1><Link className="mt-6 inline-block text-accent underline" to="/">{t('common.backHome')}</Link></main>;
}

export function AppRouter() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<main className="page-container py-24" aria-busy="true"><p>{t('common.loading')}</p></main>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/desarrollo" element={<AreaPage track="development" />} />
        <Route path="/automatizacion" element={<AreaPage track="automation" />} />
        <Route path="/datos" element={<AreaPage track="data" />} />
        <Route path="/proyectos/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
