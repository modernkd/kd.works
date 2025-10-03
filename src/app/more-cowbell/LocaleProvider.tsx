"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Locale } from "../../../i18n";
import { getCookieValue, setCookie } from "../../lib/cookieUtils";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  // Load locale from cookie on mount
  useEffect(() => {
    const savedLocale = getCookieValue("locale");
    if (savedLocale === "sv" || savedLocale === "en") {
      setLocale(savedLocale);
    }
  }, []);

  // Save locale to cookie when it changes
  useEffect(() => {
    setCookie("locale", locale, 365, "/");
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
