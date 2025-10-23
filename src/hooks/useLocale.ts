import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getCookieValue, setCookie } from '../lib/cookieUtils';

/**
 * Custom hook to manage the application locale with persistence in cookies and i18n integration.
 * @returns {[('en' | 'sv'), (newLocale: 'en' | 'sv') => void]} A tuple containing the current locale and a setter function.
 */
export function useLocale() {
  const [locale, setLocaleState] = useState<'en' | 'sv'>(() => {
    const savedLocale = getCookieValue('locale');
    return savedLocale === 'sv' ? 'sv' : 'en';
  });
  const { i18n } = useTranslation();

  const setLocale = (newLocale: 'en' | 'sv') => {
    setLocaleState(newLocale);
  };

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  useEffect(() => {
    setCookie('locale', locale, 365, '/');
  }, [locale]);

  return [locale, setLocale] as const;
}
