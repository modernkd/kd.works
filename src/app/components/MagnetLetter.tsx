interface MagnetLetterProps {
  letter: string;
  color: string;
  onClick?: () => void;
}

export default function MagnetLetter({ letter, color }: MagnetLetterProps) {
  if (letter === " ") {
    return <span className="inline-block w-[0.5em]">&nbsp;</span>;
  }
  const baseShadow = `1px 1px`;
  const shadowColor = color
    .replace("#", "")
    .replace(/^(.{2})(.{2})(.{2})$/, (match, r, g, b) => {
      const darken = (hex: string) =>
        Math.max(0, parseInt(hex, 16) - 32)
          .toString(16)
          .padStart(2, "0");
      return `#${darken(r)}${darken(g)}${darken(b)}`;
    });

  const lighterShadow = color
    .replace("#", "")
    .replace(/^(.{2})(.{2})(.{2})$/, (match, r, g, b) => {
      const lighten = (hex: string) =>
        Math.min(255, parseInt(hex, 16) + 51)
          .toString(16)
          .padStart(2, "0");
      return `#${lighten(r)}${lighten(g)}${lighten(b)}`;
    });

  return (
    <span
      className="inline-block"
      style={{
        color,
        textShadow: `
          ${baseShadow} ${shadowColor},
          -1px -1px ${lighterShadow},
          -2px -2px 6px ${color
            .replace("#", "")
            .replace(/^(.{2})(.{2})(.{2})$/, (match, r, g, b) => {
              const evenDarker = (hex: string) =>
                Math.max(0, parseInt(hex, 16) - 16)
                  .toString(16)
                  .padStart(2, "0");
              return `#${evenDarker(r)}${evenDarker(g)}${evenDarker(b)}`;
            })},
          -2px -2px ${lighterShadow},
          -1px -2px ${lighterShadow},
          -1px -3px ${lighterShadow},
          -2px -4px ${lighterShadow},
          -2px -5px ${lighterShadow},
          -3px -6px ${lighterShadow},
          -4px -7px ${color
            .replace("#", "")
            .replace(/^(.{2})(.{2})(.{2})$/, (match, r, g, b) => {
              const darkest = (hex: string) =>
                Math.max(0, parseInt(hex, 16) - 64)
                  .toString(16)
                  .padStart(2, "0");
              return `#${darkest(r)}${darkest(g)}${darkest(b)}`;
            })},
          3px 4px 5px rgba(0,0,5,.4),
          -3px -4px 5px rgba(0,0,5,.2)
        `,
      }}
    >
      {letter}
    </span>
  );
}
