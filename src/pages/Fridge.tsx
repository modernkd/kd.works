import { useState, useEffect } from 'react';
import FridgeDoor from '../components/fridge/FridgeDoor';
import ContactFormWrapper from '../components/modals/ContactFormWrapper';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';
import { useLocale } from '../hooks/useLocale';
import { useCookieState } from '../hooks/useCookieState';
import { MetaTags } from '../hooks/useMetaTags';
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

  // Update theme attribute on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  // Handle theme changes from fridge items
  const handleThemeChange = (theme: string) => {
    // Apply theme-specific CSS variables
    const root = document.documentElement;
    switch (theme) {
      case 'red':
        root.style.setProperty('--fridge-body-bg', '#ff4444');
        root.style.setProperty('--fridge-border', '#cc0000');
        root.style.setProperty('--fridge-bg-primary', '#ffe6e6');
        root.style.setProperty('--fridge-shadow', '#cc0000');
        break;
      case 'orange':
        root.style.setProperty('--fridge-body-bg', '#f57b34');
        root.style.setProperty('--fridge-border', '#ff8c00');
        root.style.setProperty('--fridge-bg-primary', '#fff4e6');
        root.style.setProperty('--fridge-shadow', '#ff8c00');
        break;
      case 'blue':
        root.style.setProperty('--fridge-body-bg', '#4444ff');
        root.style.setProperty('--fridge-border', '#0000cc');
        root.style.setProperty('--fridge-bg-primary', '#e6e6ff');
        root.style.setProperty('--fridge-shadow', '#0000cc');
        break;
      case 'yellow':
        root.style.setProperty('--fridge-body-bg', '#ffff44');
        root.style.setProperty('--fridge-border', '#cccc00');
        root.style.setProperty('--fridge-bg-primary', '#ffffe6');
        root.style.setProperty('--fridge-shadow', '#cccc00');
        break;
      default:
        // Reset to default orange theme
        root.style.setProperty('--fridge-body-bg', '#f57b34');
        root.style.setProperty('--fridge-border', '#ff8c00');
        root.style.setProperty('--fridge-bg-primary', '#fff4e6');
        root.style.setProperty('--fridge-shadow', '#ff8c00');
        break;
    }
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
          <FridgeDoor
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
          />

          {/* Contact Form */}
          <ContactFormWrapper isVisible={isLeavingNote} onClose={() => setIsLeavingNote(false)} />
          <div className={styles.fridgeGlow} />
        </div>
      </main>
      <Footer locale={locale} onLocaleChange={setLocale} />
    </>
  );
}
