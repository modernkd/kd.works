import MagnetText from "./MagnetText";
import FamilyWhiteboard from "./FamilyWhiteboard";
import { messages, Locale } from "../../../i18n";
import styles from "./FridgeSection.module.css";
import StickyNote from "./StickyNote";
import FridgeHandle from "./FridgeHandle";

interface FridgeSectionProps {
  locale: Locale;
  isDarkMode: boolean;
  handleNoteTaking: () => void;
}

export default function FridgeSection({
  locale,
  isDarkMode,
  handleNoteTaking,
}: FridgeSectionProps) {
  const mainText = messages[locale].mainText;

  return (
    <div className={styles.fridgeSection}>
      <div className={styles.fridgeContent}>
        <div className={styles.fridgeHandleContainer}>
          <FridgeHandle />
        </div>
        <div className={styles.magnetTextContainer}>
          <MagnetText text={mainText} size="medium" />
        </div>
        <div className={styles.stickyNoteContainer}>
          <StickyNote onClick={handleNoteTaking} />
        </div>

        {/* Family Whiteboard */}
        <div className={styles.whiteboardContainer}>
          <FamilyWhiteboard isDarkMode={isDarkMode} locale={locale} />
        </div>
        <div className={styles.fridgeHighlightRight} />
      </div>
    </div>
  );
}
