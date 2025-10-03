"use client";

import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import styles from "./Header.module.css";
import { Locale, messages } from "../../../i18n";

interface HeaderProps {
  showDarkModeToggle?: boolean;
  isDarkMode?: boolean;
  onDarkModeToggle?: () => void;
  locale: Locale;
}

export default function Header({
  showDarkModeToggle = false,
  isDarkMode = false,
  onDarkModeToggle,
  locale,
}: HeaderProps) {
  const backToFridgeText = messages[locale].backToFridge;
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <span className={styles.navigationContainer}>
          <h1 className={styles.siteTitle}>kd davis</h1>
          <Link href="/" className={styles.backLink}>
            ← {backToFridgeText}
          </Link>
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
