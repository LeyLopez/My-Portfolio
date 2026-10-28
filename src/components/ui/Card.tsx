import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: 'article' | 'div' | 'section';
}

export function Card({ as: Element = 'article', className = '', ...props }: CardProps) {
  return <Element className={`surface-card ${className}`} {...props} />;
}
