import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import MagnetText from '../magnets/MagnetText';
import DarkModeToggle from '../ui/DarkModeToggle';
import styles from './FreezerSection.module.css';

interface FreezerSectionProps {
  setLocale: (lang: 'en' | 'sv') => void;
  onDarkModeToggle: () => void;
  isDarkMode: boolean;
  isFreezerOpen: boolean;
  onFreezerToggle: () => void;
}

export default function FreezerSection({
  setLocale,
  onDarkModeToggle,
  isDarkMode,
  isFreezerOpen,
  onFreezerToggle,
}: FreezerSectionProps) {
  const { t } = useTranslation();
  const snowContainerRef = useRef<HTMLDivElement>(null);

  /**
   * Handles click events on the freezer door to close it when open.
   * @param e - The mouse event
   */
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFreezerOpen) {
      onFreezerToggle();
    }
  };

  useEffect(() => {
    const snowContainer = snowContainerRef.current;
    if (!snowContainer) return;

    let snowflakes: { element: HTMLDivElement; x: number; y: number; speed: number; accumulated: boolean }[] = [];
    // Array to track individual snowflake elements and their animation state
    let animationId: number | undefined;
    let createInterval: number | undefined;

    /**
     * Creates a new snowflake element and adds it to the animation array.
     * Limits total snowflakes to 100 for performance reasons.
     */
    const createSnowflake = () => {
      if (snowflakes.length > 100) return; // Limit snowflakes for performance

      const snowflake = document.createElement('div');
      snowflake.className = styles.snowflake;
      snowflake.style.left = Math.random() * 100 + '%';
      snowflake.style.opacity = (Math.random() * 0.5 + 0.5).toString();
      snowflake.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
      snowContainer.appendChild(snowflake);

      snowflakes.push({
        element: snowflake,
        x: parseFloat(snowflake.style.left),
        y: -10,
        speed: Math.random() * 2 + 1,
        accumulated: false,
      });
    };

    /**
     * Animation loop that updates snowflake positions and handles accumulation at the bottom.
     */
    const animate = () => {
      snowflakes.forEach((flake) => {
        if (!flake.accumulated) {
          flake.y += flake.speed;
          flake.element.style.top = flake.y + 'px';

          const containerHeight = snowContainer.offsetHeight;
          if (flake.y >= containerHeight - 50) {
            flake.accumulated = true;
            flake.element.style.top = containerHeight - 50 + 'px';
            flake.element.style.animation = 'none'; // Stop animation
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    if (isFreezerOpen) {
      createInterval = window.setInterval(createSnowflake, 200);
      animate();
    } else {
      if (animationId !== undefined) {
        cancelAnimationFrame(animationId);
      }
      if (createInterval !== undefined) {
        clearInterval(createInterval);
      }
      snowflakes.forEach((flake) => {
        if (flake.element.parentNode) {
          flake.element.parentNode.removeChild(flake.element);
        }
      });
      snowflakes = [];
    }

    return () => {
      if (animationId !== undefined) {
        cancelAnimationFrame(animationId);
      }
      if (createInterval !== undefined) {
        clearInterval(createInterval);
      }
    };
  }, [isFreezerOpen]);

  return (
    <section className={styles.freezerSection}>
      {}
      <div className={`${styles.freezerInterior} ${isFreezerOpen ? styles.visible : ''}`}>
        <div ref={snowContainerRef} className={styles.snowContainer}></div>
        {isFreezerOpen && (
          <div className={styles.snowman}>
            <div className={styles.snowmanHead}>
              <div className={styles.snowmanEyes}></div>
              <div className={styles.snowmanNose}></div>
            </div>
            <div className={styles.snowmanBody}></div>
          </div>
        )}
      </div>

      {}
      <div className={`${styles.freezerDoor} ${isFreezerOpen ? styles.open : ''}`} onClick={handleClick}>
        <a href="/more-cowbell" className={styles.cowbellMagnet}>
          🐮🛎️
        </a>

        <div className={styles.magnetTextContainer}>
          <MagnetText text={t('hiText')} size="large" />
        </div>

        {}
        <div className={styles.mooseMagnetContainer}>
          <button onClick={() => setLocale('sv')} className={styles.mooseMagnet}>
            🫎
          </button>
        </div>

        {}
        <div className={styles.eagleMagnetContainer}>
          <button onClick={() => setLocale('en')} className={styles.eagleMagnet}>
            🦅
          </button>
        </div>

        <div className={styles.darkModeMagnetContainer}>
          <DarkModeToggle isDarkMode={isDarkMode} onToggle={onDarkModeToggle} />
        </div>
        <div className={styles.fridgeHandleContainer}>
          <div className={styles.fridgeHandle} onClick={() => onFreezerToggle()} />
        </div>
        <div className={styles.freezerHighlightRight} />
      </div>
    </section>
  );
}
