"use client";

import { useLocale } from "../../../LocaleProvider";
import { messages } from "../../../../../../i18n";
import styles from "./EmojiSoundBoard.module.css";

interface EmojiSoundBoardProps {
  emojis: string[];
  customSounds: Record<string, string>;
  onEmojiClick: (emoji: string) => void;
  onManageClick: () => void;
}

export default function EmojiSoundBoard({
  emojis,
  customSounds,
  onEmojiClick,
  onManageClick,
}: EmojiSoundBoardProps) {
  const allEmojis = [...emojis, ...Object.keys(customSounds)];
  const { locale } = useLocale();

  return (
    <section className={styles.soundBoard}>
      <div className={styles.header}>
        <h2 className={styles.title}>{messages[locale].emojiSoundsTitle}</h2>
        <button
          onClick={onManageClick}
          className={styles.manageButton}
          aria-label={`Manage custom sounds`}
        >
          {messages[locale].manageCustomSoundsButton}
        </button>
      </div>

      <div className={styles.emojiGrid} role="grid">
        {allEmojis.map((emoji) => (
          <button
            key={emoji}
            onClick={() => onEmojiClick(emoji)}
            className={styles.emojiButton}
            aria-label={`${messages[locale].playSoundFor} ${emoji}`}
            role="gridcell"
          >
            {emoji}
          </button>
        ))}
      </div>
    </section>
  );
}
