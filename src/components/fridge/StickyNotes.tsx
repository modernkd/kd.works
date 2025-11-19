import { useState, useEffect } from 'react';
import styles from './StickyNotes.module.css';

interface Note {
  id: number;
  name: string;
  title: string;
  message: string;
  created_at: string;
  status: string;
}

interface StickyNotesProps {
  isDarkMode?: boolean;
  notes?: Note[];
  setNotes?: React.Dispatch<React.SetStateAction<Note[]>>;
  onFetchNotes?: () => Promise<Note[]>;
}

export default function StickyNotes({
  isDarkMode = false,
  notes: propNotes,
  setNotes: propSetNotes,
  onFetchNotes,
}: StickyNotesProps) {
  const [internalNotes, setInternalNotes] = useState<Note[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const notes = propNotes !== undefined ? propNotes : internalNotes;
  const setNotes = propSetNotes || setInternalNotes;

  useEffect(() => {
    if (propNotes === undefined && onFetchNotes) {
      onFetchNotes().then(setNotes).catch(console.error);
    }
  }, [propNotes, setNotes, onFetchNotes]);

  /**
   * Advances to the next note in the carousel.
   */
  const nextNote = () => {
    setCurrentIndex((prev) => (prev + 1) % notes.length);
  };

  /**
   * Goes back to the previous note in the carousel.
   */
  const prevNote = () => {
    setCurrentIndex((prev) => (prev - 1 + notes.length) % notes.length);
  };

  if (notes.length === 0) {
    return null;
  }

  const currentNote = notes[currentIndex];

  return (
    <div className={`${styles.stickyNotesContainer} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.stickyNote}>
        <div className={styles.noteHeader}>
          <h4 className={styles.noteTitle}>
            {currentNote.title}
            {currentNote.status !== 'approved' && <span className={styles.statusBadge}>({currentNote.status})</span>}
          </h4>
          <span className={styles.noteAuthor}>by {currentNote.name}</span>
        </div>
        <div className={styles.noteMessage}>{currentNote.message}</div>
        <div className={styles.noteDate}>{new Date(currentNote.created_at).toLocaleDateString()}</div>
      </div>

      {notes.length > 1 && (
        <div className={styles.navigation}>
          <button onClick={prevNote} className={styles.navButton}>
            ‹
          </button>
          <span className={styles.noteCounter}>
            {currentIndex + 1} / {notes.length}
          </span>
          <button onClick={nextNote} className={styles.navButton}>
            ›
          </button>
        </div>
      )}
    </div>
  );
}
