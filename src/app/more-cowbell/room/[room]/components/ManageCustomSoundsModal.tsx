"use client";

import styles from "./ManageCustomSoundsModal.module.css";

interface CustomSound {
  emoji: string;
  sound: string;
}

interface ManageCustomSoundsModalProps {
  isOpen: boolean;
  customSounds: Record<string, string>;
  onClose: () => void;
  onAddClick: () => void;
  onEdit: (emoji: string, sound: string) => void;
  onDelete: (emoji: string) => void;
}

export default function ManageCustomSoundsModal({
  isOpen,
  customSounds,
  onClose,
  onAddClick,
  onEdit,
  onDelete,
}: ManageCustomSoundsModalProps) {
  if (!isOpen) return null;

  const soundEntries: CustomSound[] = Object.entries(customSounds).map(
    ([emoji, sound]) => ({
      emoji,
      sound,
    })
  );

  return (
    <div className={styles.overlay} onClick={onClose}>
      <dialog
        open={isOpen}
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalContent}>
          <header className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>Manage Custom Sounds</h3>
            <button
              onClick={onClose}
              className={styles.closeButton}
              aria-label="Close modal"
            >
              ×
            </button>
          </header>

          {soundEntries.length === 0 ? (
            <p className={styles.emptyState}>No custom sounds yet.</p>
          ) : (
            <ul className={styles.soundList} role="list">
              {soundEntries.map(({ emoji, sound }) => (
                <li key={emoji} className={styles.soundItem} role="listitem">
                  <span className={styles.emoji} aria-label={`Emoji: ${emoji}`}>
                    {emoji}
                  </span>
                  <div className={styles.buttonGroup}>
                    <button
                      onClick={() => onEdit(emoji, sound)}
                      className={styles.editButton}
                      aria-label={`Edit sound for ${emoji}`}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(emoji)}
                      className={styles.deleteButton}
                      aria-label={`Delete sound for ${emoji}`}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <footer className={styles.modalFooter}>
            <button
              onClick={onAddClick}
              className={styles.addButton}
              aria-label="Add new custom sound"
            >
              Add Custom Sound
            </button>
          </footer>
        </div>
      </dialog>
    </div>
  );
}
