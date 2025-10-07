import { useState, useEffect } from 'react';
import FreezerSection from '../components/FreezerSection';
import FridgeSection from '../components/FridgeSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useLocale } from '../hooks/useLocale';
import { useCookieState } from '../hooks/useCookieState';
import styles from './Fridge.module.css';

export default function Fridge() {
  const [isLeavingNote, setIsLeavingNote] = useState(false);
  const [locale, setLocale] = useLocale();
  const [isDarkMode, setIsDarkMode] = useCookieState<boolean>('darkMode', false);

  // Update theme attribute on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const handleNoteTaking = () => {
    setIsLeavingNote(!isLeavingNote);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleFridgeClick = () => {
    if (isLeavingNote) {
      setIsLeavingNote(false);
    }
  };

  return (
    <>
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
          <div className={styles.fridgeDoorContent}>
            <FreezerSection setLocale={setLocale} onDarkModeToggle={toggleDarkMode} isDarkMode={isDarkMode} />
            <FridgeSection isDarkMode={isDarkMode} handleNoteTaking={handleNoteTaking} isFormOpen={isLeavingNote} />
          </div>

          {/* Contact Form */}
          <ContactForm isVisible={isLeavingNote} onClose={() => setIsLeavingNote(false)} />
          <div className={styles.fridgeGlow} />
        </div>
      </main>
      <Footer locale={locale} onLocaleChange={setLocale} />
    </>
  );
}
