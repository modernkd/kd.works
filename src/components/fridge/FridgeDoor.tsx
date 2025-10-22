import FreezerSection from './FreezerSection';
import FridgeSection from './FridgeSection';
import type { FridgeTheme, QueuedSubmission } from '../../types';
import styles from './FridgeDoor.module.css';

interface FridgeDoorProps {
  setLocale: (newLocale: 'en' | 'sv') => void;
  onDarkModeToggle: () => void;
  isDarkMode: boolean;
  isFreezerOpen: boolean;
  onFreezerToggle: () => void;
  handleNoteTaking: () => void;
  isFormOpen: boolean;
  isFridgeOpen: boolean;
  onFridgeToggle: () => void;
  onThemeChange?: (theme: FridgeTheme) => void;
  queuedSubmissions?: QueuedSubmission[];
}

export default function FridgeDoor({
  setLocale,
  onDarkModeToggle,
  isDarkMode,
  isFreezerOpen,
  onFreezerToggle,
  handleNoteTaking,
  isFormOpen,
  isFridgeOpen,
  onFridgeToggle,
  onThemeChange,
  queuedSubmissions = [],
}: FridgeDoorProps) {
  return (
    <div className={styles.fridgecontent}>
      <FreezerSection
        setLocale={setLocale}
        onDarkModeToggle={onDarkModeToggle}
        isDarkMode={isDarkMode}
        isFreezerOpen={isFreezerOpen}
        onFreezerToggle={onFreezerToggle}
      />
      <FridgeSection
        isDarkMode={isDarkMode}
        handleNoteTaking={handleNoteTaking}
        isFormOpen={isFormOpen}
        isFridgeOpen={isFridgeOpen}
        onFridgeToggle={onFridgeToggle}
        onThemeChange={onThemeChange}
        queuedSubmissions={queuedSubmissions}
      />
    </div>
  );
}
