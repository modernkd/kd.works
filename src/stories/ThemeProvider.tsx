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

/**
 * Theme provider component for managing application theme state.
 * Provides theme context to child components and manages theme persistence.
 * @param {ThemeProviderProps} props - Component props
 * @returns {JSX.Element} Theme context provider
 */
export function ThemeProvider({ children, initialTheme = 'light' }: ThemeProviderProps) {
  // Detect if running in Storybook environment
  const isStorybook =
    typeof window !== 'undefined' && window.location?.hostname === 'localhost' && window.location?.port === '6006';

  // Initialize theme state - force light theme in Storybook for consistency
  const [theme, setTheme] = useState(isStorybook ? 'light' : initialTheme);

  // Apply theme to document element and handle cleanup
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
