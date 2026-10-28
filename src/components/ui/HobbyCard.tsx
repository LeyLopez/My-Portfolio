import { BookOpen, Dumbbell, Languages, Pencil } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { useLocalized } from '@/hooks/useLocalized';
import type { Hobby, HobbyId } from '@/types/portfolio';

interface HobbyCardProps {
  hobby: Hobby;
}

const hobbyIcons = {
  reading: BookOpen,
  languages: Languages,
  drawing: Pencil,
  exercise: Dumbbell,
} satisfies Record<HobbyId, typeof BookOpen>;

export function HobbyCard({ hobby }: HobbyCardProps) {
  const localized = useLocalized();
  const Icon = hobbyIcons[hobby.id];

  return (
    <Card className="group p-5 transition-transform duration-200 hover:-translate-y-1">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
        <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
      </div>
      <h3 className="mt-5 text-lg font-bold">{localized(hobby.title)}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{localized(hobby.description)}</p>
    </Card>
  );
}