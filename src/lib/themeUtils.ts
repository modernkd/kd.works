/**
 * Toggles the dark mode theme
 * @param isDarkMode - Current dark mode state
 * @returns New dark mode state (always returns the opposite of current state)
 */
export function toggleDarkMode(isDarkMode: boolean): boolean {
  return !isDarkMode;
}

/**
 * Applies dark mode theme to the document
 * @param isDarkMode - Whether dark mode should be enabled
 */
export function applyDarkModeTheme(isDarkMode: boolean): void {
  if (isDarkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

/**
 * Gets the current theme preference from localStorage
 * @returns boolean indicating if dark mode is enabled
 */
export function getThemePreference(): boolean {
  const stored = localStorage.getItem('darkMode');
  return stored === 'true';
}

/**
 * Sets the theme preference in localStorage
 * @param isDarkMode - Whether dark mode should be enabled
 */
export function setThemePreference(isDarkMode: boolean): void {
  localStorage.setItem('darkMode', isDarkMode.toString());
}
