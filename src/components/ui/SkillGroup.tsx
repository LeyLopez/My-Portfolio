import { Badge } from '@/components/ui/Badge';
import { TechnologyIcon } from '@/components/ui/TechnologyIcon';
import type { SkillGroup as SkillGroupData } from '@/types/portfolio';
import { useLocalized } from '@/hooks/useLocalized';

interface SkillGroupProps {
  skillGroup: SkillGroupData;
}

export function SkillGroup({ skillGroup }: SkillGroupProps) {
  const localized = useLocalized();

  return (
    <article>
      <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-muted">{localized(skillGroup.category)}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {skillGroup.items.map((item) => <Badge key={item}><TechnologyIcon technology={item} />{item}</Badge>)}
      </div>
    </article>
  );
}
