import styles from "./StickyNote.module.css";

interface StickyNoteProps {
  onClick: () => void;
}

export default function StickyNote({ onClick }: StickyNoteProps) {
  return (
    <div onClick={onClick} className={styles.stickyNote}>
      <div>📝</div>
      <div>Note</div>
    </div>
  );
}
