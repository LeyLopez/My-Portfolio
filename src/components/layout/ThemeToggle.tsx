import { useTheme } from '@/hooks/useTheme';
import { useTranslation } from 'react-i18next';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const label = theme === 'dark' ? t('nav.themeLight') : t('nav.themeDark');

  return (
    <button
      aria-label={label}
      className="theme-toggle"
      onClick={toggleTheme}
      title={label}
      type="button"
    >
      {theme === 'dark' ? '○' : '◐'}
    </button>
  );
}
