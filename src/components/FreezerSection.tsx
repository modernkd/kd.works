import React from 'react';
import { useTranslation } from 'react-i18next';
import MagnetText from './MagnetText';
import MooseMagnet from './MooseMagnet';
import EagleMagnet from './EagleMagnet';
import DarkModeToggle from './DarkModeToggle';
import FridgeHandle from './FridgeHandle';
import styles from './FreezerSection.module.css';

interface FreezerSectionProps {
  setLocale: (lang: 'en' | 'sv') => void;
  onDarkModeToggle: () => void;
  isDarkMode: boolean;
}

export default function FreezerSection({ setLocale, onDarkModeToggle, isDarkMode }: FreezerSectionProps) {
  const { t } = useTranslation();
  return (
    <div className={styles.freezerSection}>
      <a href="/more-cowbell" className={styles.cowbellMagnet}>
        🐮🛎️
      </a>

      <div className={styles.magnetTextContainer}>
        <MagnetText text={t('hiText')} size="large" />
      </div>

      {/* Moose Magnet - Switches to Swedish */}
      <div className={styles.mooseMagnetContainer}>
        <MooseMagnet onClick={() => setLocale('sv')} />
      </div>

      {/* Eagle Magnet - Switches to English */}
      <div className={styles.eagleMagnetContainer}>
        <EagleMagnet onClick={() => setLocale('en')} />
      </div>

      <div className={styles.darkModeMagnetContainer}>
        <DarkModeToggle isDarkMode={isDarkMode} onToggle={onDarkModeToggle} />
      </div>
      <div className={styles.fridgeHandleContainer}>
        <FridgeHandle />
      </div>
      <div className={styles.freezerHighlightRight} />
    </div>
  );
}
