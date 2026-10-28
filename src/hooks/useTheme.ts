import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  try {
    const storedTheme = window.localStorage.getItem('portfolio-theme');
    if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;
  } catch {
    // localStorage may be unavailable in private browsing contexts.
  }

  return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');

    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Theme still works when persistence is unavailable.
    }
  }, [theme]);

  return { theme, toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')) };
}
