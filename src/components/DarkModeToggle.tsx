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
        <svg width="32" height="32" viewBox="0 0 32 32" className={`${styles.toggleIcon} ${styles.expandIcon}`}>
          <defs>
            <clipPath id={`moon-cutout-${isDarkMode ? 'dark' : 'light'}`}>
              <path d="M0-11h25a1 1 0 0017 13v30H0Z" />
            </clipPath>
          </defs>
          <g clipPath={`url(#moon-cutout-${isDarkMode ? 'dark' : 'light'})`}>
            {/* Sun for light mode */}
            {!isDarkMode && <circle cx="16" cy="16" r="8.4" fill="#ffd700" className={styles.celestialBody} />}
            {/* Crescent moon for dark mode */}
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
                {/* Crescent moon shape using path */}
                <path
                  d="M 24.4 16 A 8.4 8.4 0 0 1 16 24.4 A 8.4 8.4 0 0 1 7.6 16 A 8.4 8.4 0 0 1 16 7.6 A 6 6 0 0 0 24.4 16 Z"
                  fill="url(#moonGradient)"
                  filter="url(#moonShadow)"
                />
                {/* Moon craters for texture */}
                <circle cx="12" cy="12" r="1.2" fill="#e0e0e0" opacity="0.8" />
                <circle cx="18" cy="14" r="0.8" fill="#e0e0e0" opacity="0.6" />
                <circle cx="14" cy="18" r="1" fill="#e0e0e0" opacity="0.7" />
              </g>
            )}
            {/* Sun rays for light mode */}
            {!isDarkMode && (
              <>
                <g stroke="#ff8c00" strokeWidth="1.5" fill="none" className={styles.sunRays}>
                  <line x1="16" y1="4" x2="16" y2="8" />
                  <line x1="16" y1="24" x2="16" y2="28" />
                  <line x1="4" y1="16" x2="8" y2="16" />
                  <line x1="24" y1="16" x2="28" y2="16" />
                  <line x1="8.7" y1="8.7" x2="11.3" y2="11.3" />
                  <line x1="20.7" y1="20.7" x2="23.3" y2="23.3" />
                  <line x1="23.3" y1="8.7" x2="20.7" y2="11.3" />
                  <line x1="11.3" y1="20.7" x2="8.7" y2="23.3" />
                </g>
              </>
            )}
          </g>
        </svg>
      </div>
    </button>
  );
}
