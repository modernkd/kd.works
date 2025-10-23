import { useEffect, useState } from 'react';
import styles from './DarkModeToggle.module.css';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export default function DarkModeToggle({ isDarkMode, onToggle }: DarkModeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * Handles the dark mode toggle with animation.
   * Sets animation state and calls the parent toggle function.
   */
  const handleToggle = () => {
    setIsAnimating(true);
    onToggle();
    setTimeout(() => setIsAnimating(false), 500);
  };

  if (!mounted) {
    return (
      <button className={styles.toggleButton} onClick={handleToggle}>
        <svg width="32" height="32" viewBox="0 0 32 32" className={styles.toggleIcon}>
          <circle cx="16" cy="16" r="8.4" fill="currentColor" />
        </svg>
      </button>
    );
  }

  return (
    <button
      className={`${styles.toggleButton} ${isAnimating ? styles.animating : ''}`}
      onClick={handleToggle}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title="Toggle theme"
    >
      <div className={`${styles.toggleContainer} ${isDarkMode ? styles.dark : styles.light}`}>
        <svg width="32" height="32" viewBox="0 0 64 64" className={`${styles.toggleIcon} ${styles.expandIcon}`}>
          <defs>
            <clipPath id={`moon-cutout-${isDarkMode ? 'dark' : 'light'}`}>
              <path d="M0-22h50a2 2 0 0034 26v60H0Z" />
            </clipPath>
          </defs>
          {}
          {!isDarkMode && (
            <g className={styles.sunIcon}>
              <g fill="#ffe62e">
                <path d="M20.5 59.7l7-7.2c-2.5-.5-4.8-1.5-6.9-2.9l-.1 10.1"></path>
                <path d="M43.5 4.3l-7 7.2c2.5.5 4.8 1.5 6.9 2.9l.1-10.1"></path>
                <path d="M4.3 43.5l10.1-.1C13 41.3 12 39 11.5 36.5l-7.2 7"></path>
                <path d="M59.7 20.5l-10.1.1c1.3 2.1 2.3 4.4 2.9 6.9l7.2-7"></path>
                <path d="M4.3 20.5l7.2 7c.5-2.5 1.5-4.8 2.9-6.9l-10.1-.1"></path>
                <path d="M59.7 43.5l-7.2-7c-.5 2.5-1.5 4.8-2.9 6.9l10.1.1"></path>
                <path d="M20.5 4.3l.1 10.1c2.1-1.3 4.4-2.3 6.9-2.9l-7-7.2"></path>
                <path d="M43.5 59.7l-.1-10.1C41.3 51 39 52 36.5 52.5l7 7.2"></path>
              </g>
              <g fill="#ffce31">
                <path d="M14.8 44l-4 9.3l9.3-4C18 47.8 16.2 46 14.8 44"></path>
                <path d="M49.2 20l4-9.3l-9.2 4c2 1.5 3.8 3.3 5.2 5.3"></path>
                <path d="M11.4 28.3L2 32l9.4 3.7c-.3-1.2-.4-2.4-.4-3.7s.1-2.5.4-3.7"></path>
                <path d="M52.6 35.7L62 32l-9.4-3.7c.2 1.2.4 2.5.4 3.7c0 1.3-.1 2.5-.4 3.7"></path>
                <path d="M20 14.8l-9.3-4l4 9.3c1.5-2.1 3.3-3.9 5.3-5.3"></path>
                <path d="M44 49.2l9.3 4l-4-9.3C47.8 46 46 47.8 44 49.2"></path>
                <path d="M35.7 11.4L32 2l-3.7 9.4c1.2-.2 2.5-.4 3.7-.4s2.5.1 3.7.4"></path>
                <path d="M28.3 52.6L32 62l3.7-9.4c-1.2.3-2.4.4-3.7.4s-2.5-.1-3.7-.4"></path>
                <circle cx="32" cy="32" r="19"></circle>
              </g>
            </g>
          )}
          <g clipPath={`url(#moon-cutout-${isDarkMode ? 'dark' : 'light'})`}>
            {}
            {isDarkMode && (
              <g className={styles.crescentMoon}>
                <defs>
                  <radialGradient id="moonGradient" cx="0.3" cy="0.3" r="0.8">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="70%" stopColor="#f0f0f0" />
                    <stop offset="100%" stopColor="#d0d0d0" />
                  </radialGradient>
                  <filter id="moonShadow">
                    <feDropShadow dx="0" dy="1" stdDeviation="0.5" floodColor="#00000020" />
                  </filter>
                </defs>
                {}
                <path
                  d="M 48.8 32 A 16.8 16.8 0 0 1 32 48.8 A 16.8 16.8 0 0 1 15.2 32 A 16.8 16.8 0 0 1 32 15.2 A 12 12 0 0 0 48.8 32 Z"
                  fill="url(#moonGradient)"
                  filter="url(#moonShadow)"
                />
                {}
                <circle cx="24" cy="24" r="2.4" fill="#e0e0e0" opacity="0.8" />
                <circle cx="36" cy="28" r="1.6" fill="#e0e0e0" opacity="0.6" />
                <circle cx="28" cy="36" r="2" fill="#e0e0e0" opacity="0.7" />
              </g>
            )}
          </g>
        </svg>
      </div>
    </button>
  );
}
