import MagnetText from "./MagnetText";
import MooseMagnet from "./MooseMagnet";
import EagleMagnet from "./EagleMagnet";
import DarkModeMagnet from "./DarkModeMagnet";
import FridgeHandle from "./FridgeHandle";
import styles from "./FreezerSection.module.css";

import { Locale, messages } from "../../../i18n";

interface FreezerSectionProps {
  setLocale: (lang: Locale) => void;
  onDarkModeToggle: () => void;
  isDarkMode: boolean;
  locale: Locale;
}

export default function FreezerSection({
  setLocale,
  onDarkModeToggle,
  isDarkMode,
  locale,
}: FreezerSectionProps) {
  return (
    <div className={styles.freezerSection}>
      <a href="/more-cowbell" className={styles.cowbellMagnet}>
        🐮🛎️
      </a>

      <div className={styles.magnetTextContainer}>
        <MagnetText text={messages[locale].hiText} size="large" />
      </div>

      {/* Moose Magnet - Switches to Swedish */}
      <div className={styles.mooseMagnetContainer}>
        <MooseMagnet onClick={() => setLocale("sv")} />
      </div>

      {/* Eagle Magnet - Switches to English */}
      <div className={styles.eagleMagnetContainer}>
        <EagleMagnet onClick={() => setLocale("en")} />
      </div>

      <div className={styles.darkModeMagnetContainer}>
        <DarkModeMagnet isDarkMode={isDarkMode} onClick={onDarkModeToggle} />
      </div>
      <div className={styles.fridgeHandleContainer}>
        <FridgeHandle />
      </div>
      <div className={styles.freezerHighlightRight} />
    </div>
  );
}
