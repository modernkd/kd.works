import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import MagnetLetter from './MagnetLetter';
import styles from './MagnetText.module.css';

interface MagnetHeadingProps {
  text: string;
  size?: 'large' | 'medium';
  onLetterClick?: (letter: string) => void;
  onSave?: (newText: string) => void;
}

export default function MagnetText({ text, size = 'large', onLetterClick, onSave }: MagnetHeadingProps) {
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState(text);
  const [editValue, setEditValue] = useState(text);

  useEffect(() => {
    setCurrentText(text);
  }, [text]);

  // Define colors for each letter position
  const colors = ['#f6a746', '#00B9ED', '#ED5053', '#00AF4F', '#8E509F', '#F9DE00', '#f6a746'];

  const handleClick = () => {
    setIsEditing(true);
    setEditValue(currentText);
  };

  const handleSave = () => {
    const newText = editValue;
    setCurrentText(newText);
    onSave?.(newText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(currentText);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditValue(e.target.value);
  };

  const handleBlur = () => {
    handleSave();
  };

  if (isEditing) {
    return (
      <div className={`${styles.magnetHeading} ${styles[size]} ${styles.editing}`}>
        <div className={styles.editContainer}>
          <textarea
            className={styles.editTextarea}
            value={editValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            autoFocus
            placeholder={t('enterYourTextHere')}
          />
        </div>
        <div className={styles.editButtons}>
          <button onClick={handleSave} className={styles.saveButton}>
            {t('save')}
          </button>
          <button onClick={handleCancel} className={styles.cancelButton}>
            {t('cancel')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.magnetHeading} ${styles[size]}`} onClick={handleClick} style={{ cursor: 'pointer' }}>
      {currentText.split(/\s+/).map((word, wordIndex) => (
        <span key={wordIndex} className={styles.word}>
          {word.split('').map((letter, index) => (
            <MagnetLetter
              key={index}
              letter={letter}
              color={colors[index % colors.length]}
              onClick={onLetterClick ? () => onLetterClick(letter) : undefined}
            />
          ))}
          <MagnetLetter letter=" " color="transparent" />
        </span>
      ))}
    </div>
  );
}
