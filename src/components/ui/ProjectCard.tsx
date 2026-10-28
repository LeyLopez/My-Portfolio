import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { TechnologyIcon } from '@/components/ui/TechnologyIcon';
import { useLocalized } from '@/hooks/useLocalized';
import type { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();
  const localized = useLocalized();
  const statusKey = project.status === 'in-progress' ? 'inProgress' : project.status;
  const links = [
    ['repo', project.links.repo, t('projects.links.repo')],
    ['demo', project.links.demo, t('projects.links.demo')],
    ['docs', project.links.docs, t('projects.links.docs')],
  ] as const;

  return (
    <Card className="flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold leading-tight">{localized(project.title)}</h3>
        <Badge tone={project.tracks[0]}>{t(`projects.status.${statusKey}`)}</Badge>
      </div>
      <p className="mt-4 leading-7 text-muted">{localized(project.summary)}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((technology) => <Badge key={technology}><TechnologyIcon technology={technology} />{technology}</Badge>)}
      </div>
      {project.highlights.length > 0 ? (
        <ul className="mt-6 space-y-3 border-t border-border pt-5 text-sm leading-6">
          {project.highlights.map((highlight, index) => <li className="flex gap-3" key={`${project.id}-highlight-${index}`}><span className="text-accent" aria-hidden="true">+</span><span>{localized(highlight)}</span></li>)}
        </ul>
      ) : null}
      {links.some(([, href]) => href) ? (
        <div className="mt-auto flex flex-wrap gap-4 border-t border-border pt-5">
          {links.map(([kind, href, label]) => href ? <a className="text-sm font-semibold text-accent underline-offset-4 hover:underline" href={href} key={kind} rel="noopener noreferrer" target="_blank">{label}<span className="sr-only"> {t('common.openExternal')}</span></a> : null)}
        </div>
      ) : null}
    </Card>
  );
}
