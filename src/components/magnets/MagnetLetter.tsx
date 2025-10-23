import styles from './MagnetLetter.module.css';
import { darkenHex, lightenHex } from '../../lib/colorUtils';

interface MagnetLetterProps {
  letter: string;
  color: string;
  onClick?: () => void;
}

export default function MagnetLetter({ letter, color }: MagnetLetterProps) {
  if (letter === ' ') {
    return <span className={styles.space}>&nbsp;</span>;
  }

  const hex = color.replace('#', '');
  const r = hex.slice(0, 2);
  const g = hex.slice(2, 4);
  const b = hex.slice(4, 6);

  const shadowColor = `#${darkenHex(r)}${darkenHex(g)}${darkenHex(b)}`;
  const lighterShadow = `#${lightenHex(r)}${lightenHex(g)}${lightenHex(b)}`;
  const evenDarker = `#${darkenHex(r, 16)}${darkenHex(g, 16)}${darkenHex(b, 16)}`;
  const darkest = `#${darkenHex(r, 64)}${darkenHex(g, 64)}${darkenHex(b, 64)}`;

  return (
    <span
      className={styles.magnetLetter}
      style={
        {
          '--magnet-letter-color': color,
          '--shadow-dark': shadowColor,
          '--shadow-light': lighterShadow,
          '--shadow-darker': evenDarker,
          '--shadow-darkest': darkest,
        } as React.CSSProperties
      }
    >
      {letter}
    </span>
  );
}
