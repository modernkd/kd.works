import MagnetLetter from "./MagnetLetter";
import styles from "./MagnetText.module.css";

interface MagnetHeadingProps {
  text: string;
  size?: "large" | "medium";
  onLetterClick?: (letter: string) => void;
}

export default function MagnetText({
  text,
  size = "large",
  onLetterClick,
}: MagnetHeadingProps) {
  const fontSize = size === "large" ? "3rem" : "2rem";

  // Define colors for each letter position
  const colors = [
    "#F18829",
    "#00B9ED",
    "#ED5053",
    "#00AF4F",
    "#8E509F",
    "#F9DE00",
    "#F18829",
  ];

  return (
    <div className={`${styles.magnetHeading} ${styles[size]}`}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className={styles.word}>
          {word.split("").map((letter, index) => (
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
