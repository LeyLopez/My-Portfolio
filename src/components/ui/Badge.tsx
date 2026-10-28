import type { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'development' | 'automation' | 'data';
}

export function Badge({ className = '', tone = 'neutral', ...props }: BadgeProps) {
  return <span className={`badge badge-${tone} ${className}`} {...props} />;
}
