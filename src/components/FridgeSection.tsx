import MagnetText from './MagnetText';
import FamilyWhiteboard from './FamilyWhiteboard';
import styles from './FridgeSection.module.css';
import StickyNote from './StickyNote';
import FridgeHandle from './FridgeHandle';
import { useTranslation } from 'react-i18next';

interface FridgeSectionProps {
  isDarkMode: boolean;
  handleNoteTaking: () => void;
  isFormOpen: boolean;
}

export default function FridgeSection({
  isDarkMode,
  handleNoteTaking,
  isFormOpen,
}: FridgeSectionProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.fridgeSection}>
      <div className={styles.fridgeContent}>
        <div className={styles.fridgeHandleContainer}>
          <FridgeHandle />
        </div>
        <div className={styles.magnetTextContainer}>
          <MagnetText text={t('fridgeMainText')} size="medium" />
        </div>
        <div
          className={`${styles.stickyNoteContainer} ${isFormOpen ? styles.hidden : ''}`}
        >
          <StickyNote onClick={handleNoteTaking} />
        </div>

        {/* Family Whiteboard */}
        <div className={styles.whiteboardContainer}>
          <FamilyWhiteboard isDarkMode={isDarkMode} />
        </div>
        <div className={styles.fridgeHighlightRight} />
      </div>
    </div>
  );
}
