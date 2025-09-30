import { Locale, messages } from "../../../i18n";
import styles from "./StickyNote.module.css";

interface StickyNoteProps {
  onClick: () => void;
  locale: Locale;
}

export default function StickyNote({ onClick, locale }: StickyNoteProps) {
  const noteText = messages[locale].noteText;
  return (
    <div onClick={onClick} className={styles.stickyNote}>
      <div>{noteText}</div>
    </div>
  );
}
