import React, { createContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: string;
}

export function ThemeProvider({ children, initialTheme = 'light' }: ThemeProviderProps) {
  const [theme, setTheme] = useState(initialTheme);

  // Apply theme to document element
  React.useEffect(() => {
    const originalTheme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', theme);

    // Cleanup function to restore original theme
    return () => {
      if (originalTheme) {
        document.documentElement.setAttribute('data-theme', originalTheme);
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    };
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
