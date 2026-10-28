import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        surface: 'var(--surface)',
        foreground: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        development: 'var(--accent-development)',
        automation: 'var(--accent-automation)',
        data: 'var(--accent-data)',
      },
    },
  },
  plugins: [],
} satisfies Config;
