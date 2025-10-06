import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DarkModeToggle from './DarkModeToggle';
import styles from './Header.module.css';

interface HeaderProps {
  showDarkModeToggle?: boolean;
  isDarkMode?: boolean;
  onDarkModeToggle?: () => void;
  locale?: 'en' | 'sv';
  linkTo?: string;
  linkText?: string;
  showBackLink?: boolean;
}

export default function Header({
  showDarkModeToggle = false,
  isDarkMode = false,
  onDarkModeToggle,
  linkTo = '/',
  linkText,
  showBackLink = true,
}: HeaderProps) {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <span className={styles.navigationContainer}>
          <Link to="/" className={styles.siteTitle}>
            <h1>kd davis</h1>
          </Link>
          {showBackLink && (
            <Link to={linkTo} className={styles.backLink}>
              ← {linkText || t('backToFridge')}
            </Link>
          )}
        </span>
        {showDarkModeToggle && onDarkModeToggle && (
          <div className={styles.darkModeToggleContainer}>
            <DarkModeToggle
              isDarkMode={isDarkMode}
              onToggle={onDarkModeToggle}
            />
          </div>
        )}
      </div>
    </header>
  );
}
