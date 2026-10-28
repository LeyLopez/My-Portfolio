import { useTranslation } from 'react-i18next';
import type { Lang, LocalizedText } from '@/types/portfolio';

export function useLocalized() {
  const { i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'es') as Lang;
  return (text: LocalizedText) => text[lang];
}
