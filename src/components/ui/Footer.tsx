import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

interface FooterProps {
  locale?: 'en' | 'sv';
  onLocaleChange?: (locale: 'en' | 'sv') => void;
}

export default function Footer({ locale = 'en', onLocaleChange }: FooterProps) {
  return <FooterContent locale={locale} onLocaleChange={onLocaleChange || (() => {})} />;
}

function FooterContent({
  locale,
  onLocaleChange,
}: {
  locale: 'en' | 'sv';
  onLocaleChange: (locale: 'en' | 'sv') => void;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  /**
   * Changes the application language and closes the dropdown.
   * @param newLocale - The new locale to switch to ('en' or 'sv')
   */
  const handleLanguageChange = (newLocale: 'en' | 'sv') => {
    i18n.changeLanguage(newLocale);
    onLocaleChange(newLocale);
    setIsDropdownOpen(false);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLinks}>
            <a
              href="https://github.com/modernkd/kd.works"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kd-davis"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              LinkedIn
            </a>
            <Link to="/" className={styles.footerLink}>
              kd.works
            </Link>
          </div>
          <div className={styles.languageDropdown} ref={dropdownRef}>
            <button
              className={styles.languageButton}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-label={`Switch language (currently ${locale === 'en' ? 'English' : 'Svenska'})`}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <span className={styles.globeIcon}>🌐</span>
              <span className={styles.languageText}>{locale === 'en' ? 'English' : 'Svenska'}</span>
              <span className={styles.caret}>▾</span>
            </button>

            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <button
                  className={`${styles.dropdownOption} ${locale === 'en' ? styles.active : ''}`}
                  onClick={() => handleLanguageChange('en')}
                >
                  English
                </button>
                <button
                  className={`${styles.dropdownOption} ${locale === 'sv' ? styles.active : ''}`}
                  onClick={() => handleLanguageChange('sv')}
                >
                  Svenska
                </button>
              </div>
            )}
          </div>
        </div>
        <p className={styles.footerCopyright}>© {new Date().getFullYear()} kd davis</p>
      </div>
    </footer>
  );
}
