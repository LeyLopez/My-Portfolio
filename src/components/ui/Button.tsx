import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
}

export function Button({ className = '', variant = 'primary', ...props }: ButtonProps) {
  const variantClass = variant === 'primary' ? 'bg-accent text-white hover:bg-accent/90' : 'border border-border text-foreground hover:bg-surface';

  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variantClass} ${className}`}
      {...props}
    />
  );
}
