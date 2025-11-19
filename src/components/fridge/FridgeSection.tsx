import React, { useState, useRef, useEffect } from 'react';
import MagnetText from './magnets/MagnetText';
import FamilyWhiteboard from './FamilyWhiteboard';
import StickyNotesWrapper from './StickyNotesWrapper';
import Tooltip from '../ui/Tooltip';

import type { FridgeTheme, QueuedSubmission } from '../../types';
import styles from './FridgeSection.module.css';
import { useTranslation } from 'react-i18next';
import { soundMap } from '../../lib/soundMap';
import { useBouncingKd } from '../../hooks/useBouncingKd';
import { useBouncingKdContext } from '../../contexts/BouncingKdContext';

interface FridgeSectionProps {
  isDarkMode: boolean;
  handleNoteTaking: () => void;
  isFormOpen: boolean;
  isFridgeOpen: boolean;
  onFridgeToggle: () => void;
  onThemeChange?: (theme: FridgeTheme) => void;
  queuedSubmissions?: QueuedSubmission[];
}

export default function FridgeSection({
  isDarkMode,
  handleNoteTaking,
  isFormOpen,
  isFridgeOpen,
  onFridgeToggle,
  onThemeChange,
  queuedSubmissions = [],
}: FridgeSectionProps) {
  const { t } = useTranslation();
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const tooltipTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { spawnBouncingKd } = useBouncingKd();
  const { bouncingKds } = useBouncingKdContext();

  useEffect(() => {
    return () => {
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
    };
  }, []);

  const handleMagnetMouseEnter = () => {
    tooltipTimeoutRef.current = setTimeout(() => {
      setIsTooltipVisible(true);
    }, 450);
  };

  const handleMagnetMouseLeave = () => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
      tooltipTimeoutRef.current = null;
    }
    setIsTooltipVisible(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFridgeOpen) {
      onFridgeToggle();
    }
  };

  const playSound = (emoji: string) => {
    const soundFile = soundMap[emoji] || 'sparkles.mp3';

    // Simple, direct approach - just try to play the sound
    const audio = new Audio(`/sounds/${soundFile}`);
    audio.volume = 0.5;

    audio.play().catch((error) => {
      console.error(`Failed to play ${soundFile} for ${emoji}:`, error);
      // Fallback to sparkles if the specific sound fails
      if (soundFile !== 'sparkles.mp3') {
        const fallbackAudio = new Audio('/sounds/sparkles.mp3');
        fallbackAudio.volume = 0.5;
        fallbackAudio.play().catch((fallbackError) => {
          console.error('Sparkles fallback also failed:', fallbackError);
        });
      }
    });
  };

  const handleItemClick = (emoji: string) => {
    setClickedItem(emoji);
    playSound(emoji);

    // Theme change logic
    if (onThemeChange) {
      switch (emoji) {
        case '🍎':
          onThemeChange('red');
          break;
        case '🥕':
          onThemeChange('orange');
          break;
        case '🫐':
          onThemeChange('blue');
          break;
        case '🍌':
          onThemeChange('yellow');
          break;
        case '🧃':
          onThemeChange('green');
          break;
        default:
          break;
      }
    }

    setTimeout(() => setClickedItem(null), 300);
  };

  const magnetRef = React.useRef<HTMLDivElement>(null);

  const handleKdMagnetClick = () => {
    if (magnetRef.current) {
      const rect = magnetRef.current.getBoundingClientRect();
      const position = {
        x: rect.left + rect.width / 2 - 25,
        y: rect.top + rect.height / 2 - 25,
      };
      spawnBouncingKd(position);
    } else {
      spawnBouncingKd();
    }
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
      tooltipTimeoutRef.current = null;
    }
  };

  return (
    <section className={styles.fridgeSection}>
      {/* Fridge Interior - stays behind */}
      <div className={`${styles.fridgeInterior} ${isFridgeOpen ? styles.visible : ''}`}>
        {/* Top Shelf */}
        <div className={`${styles.shelf} ${styles.topShelf}`} />
        <div className={`${styles.shelfItems} ${styles.topShelfItems}`}>
          <button
            className={`${styles.fridgeItem} ${styles.apple} ${clickedItem === '🍎' ? styles.clicked : ''}`}
            onClick={() => handleItemClick('🍎')}
            role="button"
            aria-label="Apple - click to change theme to red"
          >
            🍎
          </button>
          <button
            className={`${styles.fridgeItem} ${styles.banana} ${clickedItem === '🍌' ? styles.clicked : ''}`}
            onClick={() => handleItemClick('🍌')}
            role="button"
            aria-label="Banana - click to change theme to yellow"
          >
            🍌
          </button>
          <button
            className={`${styles.fridgeItem} ${styles.carrot} ${clickedItem === '🥕' ? styles.clicked : ''}`}
            onClick={() => handleItemClick('🥕')}
            role="button"
            aria-label="Carrot - click to change theme to orange"
          >
            🥕
          </button>
        </div>

        {/* Middle Shelf */}
        <div className={`${styles.shelf} ${styles.middleShelf}`} />
        <div className={`${styles.shelfItems} ${styles.middleShelfItems}`}>
          <button
            className={`${styles.fridgeItem} ${styles.duffBeer} ${clickedItem === '🍺' ? styles.clicked : ''}`}
            onClick={() => handleItemClick('🍺')}
            role="button"
            aria-label="Duff beer - click to play sound"
          >
            🍺
          </button>
          <button
            className={`${styles.fridgeItem} ${styles.orangeJuice} ${clickedItem === '🧃' ? styles.clicked : ''}`}
            onClick={() => handleItemClick('🧃')}
            role="button"
            aria-label="Orange juice - click to play sound"
          >
            🧃
          </button>
          <button
            className={`${styles.fridgeItem} ${styles.milk} ${clickedItem === '🥛' ? styles.clicked : ''}`}
            onClick={() => handleItemClick('🥛')}
            role="button"
            aria-label="Milk - click to play sound"
          >
            🥛
          </button>
        </div>

        {/* Bottom Shelf */}
        <div className={`${styles.shelf} ${styles.bottomShelf}`} />
        <div className={`${styles.shelfItems} ${styles.bottomShelfItems}`}>
          <button
            className={`${styles.fridgeItem} ${styles.pizza} ${clickedItem === '🍕' ? styles.clicked : ''}`}
            onClick={() => handleItemClick('🍕')}
            role="button"
            aria-label="Pizza slice - click to play sound"
          >
            🍕
          </button>
          <button
            className={`${styles.fridgeItem} ${styles.blueberries} ${clickedItem === '🫐' ? styles.clicked : ''}`}
            onClick={() => handleItemClick('🫐')}
            role="button"
            aria-label="Blueberries - click to change theme to blue"
          >
            🫐
          </button>
          <button
            className={`${styles.fridgeItem} ${styles.smoothie} ${clickedItem === '🥤' ? styles.clicked : ''}`}
            onClick={() => handleItemClick('🥤')}
            role="button"
            aria-label="Smoothie - click to play sound"
          >
            🥤
          </button>
        </div>
      </div>

      {/* Fridge Door - rotates */}
      <div className={`${styles.fridgeDoor} ${isFridgeOpen ? styles.open : ''}`} onClick={handleClick}>
        <div className={styles.fridgeContent}>
          <div className={styles.fridgeHandleContainer}>
            <div className={styles.fridgeHandle} onClick={() => onFridgeToggle()} />
          </div>
          <div className={styles.magnetTextContainer}>
            <MagnetText text={t('fridgeMainText')} size="medium" />
          </div>
          <div
            ref={magnetRef}
            onClick={handleKdMagnetClick}
            onMouseEnter={handleMagnetMouseEnter}
            onMouseLeave={handleMagnetMouseLeave}
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            <Tooltip
              message={t('pressEscapeToEndMadness')}
              isVisible={isTooltipVisible && bouncingKds.length > 0}
              position="relative-above"
            />
            <svg width="50" height="50" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m350 72.137c-183.55 0-332.88 158.86-332.88 347.86h21c0-175 139.91-326.86 311.88-326.86s311.88 151.86 311.88 326.86h21c0-189-149.32-347.86-332.88-347.86z"
                fill="black"
              />
              <path
                d="m484.7 423.79c-45.387 0-83.496 32.684-94.023 76.609-13.715-7.4141-29.008-11.445-44.645-11.445-14.035 0-27.707 3.1484-40.27 9.1289-11.289-42.75-48.852-74.289-93.441-74.289-53.488 0-97 45.324-97 101.03s43.512 101.03 97 101.03c53.488 0 97-45.324 97-101.03 0-1.6094-0.16016-3.1836-0.23047-4.7812 11.25-6.6094 23.91-10.078 36.945-10.078 14.883 0 29.406 4.6836 41.742 13.223-0.015625 0.55469-0.085938 1.0859-0.085938 1.6367 0 55.707 43.52 101.03 97.008 101.03s96.992-45.324 96.992-101.03c-0.003906-55.711-43.504-101.04-96.992-101.04zm-272.38 181.05c-41.91 0-76-35.902-76-80.031s34.098-80.031 76-80.031 76 35.902 76 80.031-34.09 80.031-76 80.031zm272.38 0c-41.91 0-76.008-35.902-76.008-80.031s34.098-80.031 76.008-80.031c41.902 0 75.992 35.902 75.992 80.031s-34.09 80.031-75.992 80.031z"
                fill="black"
              />
            </svg>
          </div>

          <StickyNotesWrapper isDarkMode={isDarkMode} queuedSubmissions={queuedSubmissions} />
          <div className={`${styles.stickyNoteContainer} ${isFormOpen ? styles.hidden : ''}`}>
            <div onClick={handleNoteTaking} className={styles.stickyNote}>
              <div>{t('stickyNoteText')}</div>
            </div>
          </div>

          {/* Family Whiteboard */}
          <div className={styles.whiteboardContainer}>
            <FamilyWhiteboard isDarkMode={isDarkMode} />
          </div>
          <div className={styles.fridgeHighlightRight} />
        </div>
      </div>
    </section>
  );
}
