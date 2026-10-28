import type { ReactNode } from 'react';

interface SectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  id?: string;
}

export function Section({ eyebrow, title, description, children, id }: SectionProps) {
  return (
    <section className="section-shell" id={id}>
      <div className="mb-8 max-w-2xl">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2 className="section-title">{title}</h2>
        {description ? <p className="mt-3 text-base leading-7 text-muted">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
