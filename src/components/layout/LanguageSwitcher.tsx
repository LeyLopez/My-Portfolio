import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const language = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'es';

  return (
    <div className="flex items-center gap-1" aria-label={t('nav.language')} role="group">
      {(['es', 'en'] as const).map((option) => (
        <button
          aria-pressed={language === option}
          className={`min-h-11 rounded px-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${language === option ? 'bg-accent text-white' : 'text-muted hover:text-foreground'}`}
          key={option}
          onClick={() => void i18n.changeLanguage(option)}
          type="button"
        >
          {option}
        </button>
      ))}
    </div>
  );
}
