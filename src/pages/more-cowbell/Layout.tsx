import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLocale } from '../../hooks/useLocale';
import { useCookieState } from '../../hooks/useCookieState';

export default function MoreCowbellLayout() {
  const [locale, setLocale] = useLocale();
  const [isDarkMode, setIsDarkMode] = useCookieState<boolean>('darkMode', false);

  // Apply dark mode to document when it changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Header
        showDarkModeToggle={true}
        isDarkMode={isDarkMode}
        onDarkModeToggle={toggleDarkMode}
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
