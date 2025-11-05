import React from 'react';
import styles from './Tooltip.module.css';

interface TooltipProps {
  message: string;
  isVisible: boolean;
  position?: 'top-right' | 'center' | 'relative-above';
}

export default function Tooltip({ message, isVisible, position = 'top-right' }: TooltipProps) {
  if (!isVisible) return null;

  return (
    <div className={`${styles.tooltip} ${styles[position]}`}>
      <div className={styles.tooltipContent}>{message}</div>
    </div>
  );
}
