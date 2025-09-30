"use client";

import { useState, useRef, useEffect } from "react";
import { Locale } from "../../../i18n";
import styles from "./Footer.module.css";

interface FooterProps {
  locale?: Locale;
  onLocaleChange?: (locale: Locale) => void;
}

export default function Footer({ locale, onLocaleChange }: FooterProps) {
  return (
    <FooterContent
      locale={locale || "en"}
      onLocaleChange={onLocaleChange || (() => {})}
    />
  );
}

function FooterContent({
  locale,
  onLocaleChange,
}: {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLinks}>
            <a
              href="https://github.com/modernkd"
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
            <a
              href="https://kd.works"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              kd.works
            </a>
          </div>
          <div className={styles.languageDropdown} ref={dropdownRef}>
            <button
              className={styles.languageButton}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-label={`Switch language (currently ${
                locale === "en" ? "English" : "Svenska"
              })`}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <span className={styles.globeIcon}>🌐</span>
              <span className={styles.languageText}>
                {locale === "en" ? "English" : "Svenska"}
              </span>
              <span className={styles.caret}>▾</span>
            </button>

            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <button
                  className={`${styles.dropdownOption} ${
                    locale === "en" ? styles.active : ""
                  }`}
                  onClick={() => {
                    onLocaleChange("en");
                    setIsDropdownOpen(false);
                  }}
                >
                  English
                </button>
                <button
                  className={`${styles.dropdownOption} ${
                    locale === "sv" ? styles.active : ""
                  }`}
                  onClick={() => {
                    onLocaleChange("sv");
                    setIsDropdownOpen(false);
                  }}
                >
                  Svenska
                </button>
              </div>
            )}
          </div>
        </div>
        <p className={styles.footerCopyright}>
          © {new Date().getFullYear()} kd davis
        </p>
      </div>
    </footer>
  );
}
