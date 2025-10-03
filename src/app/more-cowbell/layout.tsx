"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LocaleProvider } from "./LocaleProvider";
import { useLocale } from "./LocaleProvider";

function MoreCowbellLayoutContent({ children }: { children: React.ReactNode }) {
  const { locale, setLocale } = useLocale();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  // Apply dark mode to document when it changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
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
      />
      <main>{children}</main>
      <Footer
        locale={locale}
        onLocaleChange={(newLocale) => setLocale(newLocale)}
      />
    </>
  );
}

export default function MoreCowbellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocaleProvider>
      <MoreCowbellLayoutContent>{children}</MoreCowbellLayoutContent>
    </LocaleProvider>
  );
}
