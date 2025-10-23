import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import svTranslations from './locales/sv.json';

/**
 * Translation resources object containing all available locales.
 * Each key represents a language code, and the value contains the translation data.
 */
const resources = {
  en: {
    translation: enTranslations,
  },
  sv: {
    translation: svTranslations,
  },
};

if (typeof window !== 'undefined') {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en',
      debug: false,
      interpolation: {
        escapeValue: false, // React already escapes values
      },
      detection: {
        order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
        caches: ['localStorage', 'cookie'],
      },
    });
}

export default i18n;
