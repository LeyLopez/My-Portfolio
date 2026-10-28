import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from '@/i18n/locales/es/common.json';
import en from '@/i18n/locales/en/common.json';

function getInitialLanguage() {
  try {
    const storedLanguage = window.localStorage.getItem('portfolio-language');
    if (storedLanguage === 'es' || storedLanguage === 'en') return storedLanguage;
  } catch {
    // Continue with browser language detection.
  }

  return window.navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
}

void i18n.use(initReactI18next).init({
  resources: { es: { translation: es }, en: { translation: en } },
  lng: getInitialLanguage(),
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
});

i18n.on('languageChanged', (language) => {
  const normalizedLanguage = language.startsWith('en') ? 'en' : 'es';
  document.documentElement.lang = normalizedLanguage;
  try {
    window.localStorage.setItem('portfolio-language', normalizedLanguage);
  } catch {
    // Language switching still works when persistence is unavailable.
  }
});

document.documentElement.lang = i18n.language.startsWith('en') ? 'en' : 'es';

export { i18n };
