import styles from './MagnetLetter.module.css';

interface MagnetLetterProps {
  letter: string;
  color: string;
  onClick?: () => void;
}

export default function MagnetLetter({ letter, color }: MagnetLetterProps) {
  if (letter === ' ') {
    return <span className={styles.space}>&nbsp;</span>;
  }

  // Calculate shadow colors based on the letter color
  const shadowColor = color
    .replace('#', '')
    .replace(/^(.{2})(.{2})(.{2})$/, (match, r, g, b) => {
      const darken = (hex: string) =>
        Math.max(0, parseInt(hex, 16) - 32)
          .toString(16)
          .padStart(2, '0');
      return `#${darken(r)}${darken(g)}${darken(b)}`;
    });

  const lighterShadow = color
    .replace('#', '')
    .replace(/^(.{2})(.{2})(.{2})$/, (match, r, g, b) => {
      const lighten = (hex: string) =>
        Math.min(255, parseInt(hex, 16) + 51)
          .toString(16)
          .padStart(2, '0');
      return `#${lighten(r)}${lighten(g)}${lighten(b)}`;
    });

  const evenDarker = color
    .replace('#', '')
    .replace(/^(.{2})(.{2})(.{2})$/, (match, r, g, b) => {
      const darken = (hex: string) =>
        Math.max(0, parseInt(hex, 16) - 16)
          .toString(16)
          .padStart(2, '0');
      return `#${darken(r)}${darken(g)}${darken(b)}`;
    });

  const darkest = color
    .replace('#', '')
    .replace(/^(.{2})(.{2})(.{2})$/, (match, r, g, b) => {
      const darken = (hex: string) =>
        Math.max(0, parseInt(hex, 16) - 64)
          .toString(16)
          .padStart(2, '0');
      return `#${darken(r)}${darken(g)}${darken(b)}`;
    });

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
