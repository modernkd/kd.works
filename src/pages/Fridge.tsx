import { useState, useEffect } from 'react';
import TheWholeAppliance from '../components/fridge/TheWholeAppliance';
import ContactFormWrapper from '../components/modals/ContactFormWrapper';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';
import { useLocale } from '../hooks/useLocale';
import { useCookieState } from '../hooks/useCookieState';
import { MetaTags } from '../hooks/useMetaTags';
import { applyFridgeTheme } from '../utils/fridgeThemes';
import type { FridgeTheme, QueuedSubmission } from '../types';
import styles from './Fridge.module.css';

interface FridgeProps {
  initialIsFridgeOpen?: boolean;
  initialIsFreezerOpen?: boolean;
}

export default function Fridge({ initialIsFridgeOpen = false, initialIsFreezerOpen = false }: FridgeProps) {
  const [isLeavingNote, setIsLeavingNote] = useState(false);
  const [locale, setLocale] = useLocale();
  const [isDarkMode, setIsDarkMode] = useCookieState<boolean>('darkMode', false);
  const [isFreezerOpen, setIsFreezerOpen] = useState(initialIsFreezerOpen);
  const [isFridgeOpen, setIsFridgeOpen] = useState(initialIsFridgeOpen);
  const [queuedSubmissions, setQueuedSubmissions] = useState<QueuedSubmission[]>([]);

  // Update theme attribute on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  // Handle theme changes from fridge items
  const handleThemeChange = (theme: FridgeTheme) => {
    applyFridgeTheme(theme);
  };

  const handleNoteTaking = () => {
    setIsLeavingNote(!isLeavingNote);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleFreezerToggle = () => {
    setIsFreezerOpen(!isFreezerOpen);
    if (isFridgeOpen) {
      setIsFridgeOpen(false);
    }
  };

  const handleFridgeToggle = () => {
    setIsFridgeOpen(!isFridgeOpen);
    if (isFreezerOpen) {
      setIsFreezerOpen(false);
    }
  };

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
        onDarkModeToggle={toggleDarkMode}
        locale={locale}
        linkTo="/"
        linkText="Home"
      />
      {isLeavingNote && <div className={styles.backdrop} onClick={() => setIsLeavingNote(false)} />}
      <main className={styles.fridgeContainer}>
        <div className={`${styles.fridgeBody} ${isLeavingNote ? styles.open : ''}`} onClick={handleFridgeClick}>
          {/* Shadow Left */}
          <div className={styles.fridgeShadowLeft} />

          {/* Highlight Right */}
          <div className={styles.fridgeHighlightRight} />
          <div className={styles.fridgeTopShadow} />

          {/* Fridge Door Content */}
          <TheWholeAppliance
            setLocale={setLocale}
            onDarkModeToggle={toggleDarkMode}
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
      {/* Contact Form */}
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
