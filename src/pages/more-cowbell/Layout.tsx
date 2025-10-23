import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import { useLocale } from '../../hooks/useLocale';
import { useCookieState } from '../../hooks/useCookieState';
import { toggleDarkMode } from '../../lib/themeUtils';

/**
 * Layout component for the More Cowbell section of the app.
 * Provides consistent header, footer, and theme management for all More Cowbell pages.
 */
export default function MoreCowbellLayout() {
  const [locale, setLocale] = useLocale();
  const [isDarkMode, setIsDarkMode] = useCookieState<boolean>('darkMode', false);

  /**
   * Applies dark mode theme to the document when isDarkMode state changes.
   */
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  /**
   * Toggles the dark mode theme for the application.
   */
  const handleToggleDarkMode = () => {
    setIsDarkMode(toggleDarkMode(isDarkMode));
  };

  return (
    <>
      <Header
        showDarkModeToggle={true}
        isDarkMode={isDarkMode}
        onDarkModeToggle={handleToggleDarkMode}
        locale={locale}
        showBackLink={false}
      />
      <main>
        <Outlet />
      </main>
      <Footer locale={locale} onLocaleChange={(newLocale) => setLocale(newLocale)} />
    </>
  );
}
