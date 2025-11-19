import { useState, useEffect } from 'react';
import FridgeDoor from '../components/fridge/FridgeDoor';
import ContactFormWrapper from '../components/modals/ContactFormWrapper';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';
import { useLocale } from '../hooks/useLocale';
import { useCookieState } from '../hooks/useCookieState';
import { MetaTags } from '../hooks/useMetaTags';
import { applyFridgeTheme } from '../utils/backgroundUtils';
import { toggleDarkMode } from '../lib/themeUtils';
import type { FridgeTheme, QueuedSubmission } from '../types';
import styles from './Fridge.module.css';

/**
 * Props for the Fridge component.
 */
interface FridgeProps {
  /** Initial state of whether the fridge door is open */
  initialIsFridgeOpen?: boolean;
  /** Initial state of whether the freezer door is open */
  initialIsFreezerOpen?: boolean;
}

/**
 * Fridge page component that renders an interactive fridge-themed contact page.
 * Features include door toggling, theme changes, and contact form functionality.
 */
export default function Fridge({ initialIsFridgeOpen = false, initialIsFreezerOpen = false }: FridgeProps) {
  const [isLeavingNote, setIsLeavingNote] = useState(false);
  const [locale, setLocale] = useLocale();
  const [isDarkMode, setIsDarkMode] = useCookieState<boolean>('darkMode', false);
  const [isFreezerOpen, setIsFreezerOpen] = useState(initialIsFreezerOpen);
  const [isFridgeOpen, setIsFridgeOpen] = useState(initialIsFridgeOpen);
  const [queuedSubmissions, setQueuedSubmissions] = useState<QueuedSubmission[]>([]);

  /**
   * Applies dark mode theme to the document when isDarkMode state changes.
   */
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  /**
   * Handles theme changes for the fridge by applying the selected theme.
   * @param theme - The fridge theme to apply
   */
  const handleThemeChange = (theme: FridgeTheme) => {
    applyFridgeTheme(theme);
  };

  /**
   * Toggles the note-taking state, showing/hiding the contact form.
   */
  const handleNoteTaking = () => {
    setIsLeavingNote(!isLeavingNote);
  };

  /**
   * Toggles the dark mode theme for the application.
   */
  const handleToggleDarkMode = () => {
    setIsDarkMode(toggleDarkMode(isDarkMode));
  };

  /**
   * Toggles the freezer door state. Closes fridge door if it's open.
   */
  const handleFreezerToggle = () => {
    setIsFreezerOpen(!isFreezerOpen);
    if (isFridgeOpen) {
      setIsFridgeOpen(false);
    }
  };

  /**
   * Toggles the fridge door state. Closes freezer door if it's open.
   */
  const handleFridgeToggle = () => {
    setIsFridgeOpen(!isFridgeOpen);
    if (isFreezerOpen) {
      setIsFreezerOpen(false);
    }
  };

  /**
   * Handles clicks on the fridge body. Closes the note-taking form if it's open.
   */
  const handleFridgeClick = () => {
    if (isLeavingNote) {
      setIsLeavingNote(false);
    }
  };

  return (
    <>
      <MetaTags
        title="Fridge"
        description="Interactive fridge-themed contact page with little easter eggs. Part of kd davis's creative portfolio website."
        image="/fridge-screenshot.webp"
        url="/fridge"
      />
      <Header
        showDarkModeToggle={true}
        isDarkMode={isDarkMode}
        showBackLink={false}
        onDarkModeToggle={handleToggleDarkMode}
        locale={locale}
        linkTo="/"
        linkText="Home"
      />
      {isLeavingNote && <div className={styles.backdrop} onClick={() => setIsLeavingNote(false)} />}
      <main className={styles.fridgeContainer}>
        <div className={`${styles.fridgeBody} ${isLeavingNote ? styles.open : ''}`} onClick={handleFridgeClick}>
          {/* Fridge shadow elements for visual depth */}
          <div className={styles.fridgeShadowLeft} />

          {/* Fridge highlight and top shadow for 3D effect */}
          <div className={styles.fridgeHighlightRight} />
          <div className={styles.fridgeTopShadow} />

          {/* Main fridge door component with all interactive functionality */}
          <FridgeDoor
            setLocale={setLocale}
            onDarkModeToggle={handleToggleDarkMode}
            isDarkMode={isDarkMode}
            isFreezerOpen={isFreezerOpen}
            onFreezerToggle={handleFreezerToggle}
            handleNoteTaking={handleNoteTaking}
            isFormOpen={isLeavingNote}
            isFridgeOpen={isFridgeOpen}
            onFridgeToggle={handleFridgeToggle}
            onThemeChange={handleThemeChange}
            queuedSubmissions={queuedSubmissions}
          />

          <div className={styles.fridgeGlow} />
        </div>
      </main>
      {/* Contact form wrapper for leaving notes */}
      <ContactFormWrapper
        isVisible={isLeavingNote}
        onClose={() => setIsLeavingNote(false)}
        onSubmissionQueued={(submission) => {
          setQueuedSubmissions((prev) => [...prev, submission]);
        }}
      />
      <Footer locale={locale} onLocaleChange={setLocale} />
    </>
  );
}
