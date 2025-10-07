import { useTranslation } from 'react-i18next';
import BaseModal from './BaseModal';
import styles from './ManageCustomSoundsModal.module.css';

interface CustomSound {
  emoji: string;
  sound: string;
}

interface ManageCustomSoundsModalProps {
  isOpen: boolean;
  customSounds: Record<string, string>;
  onClose: () => void;
  onAddClick: () => void;
  onEdit: (emoji: string) => void;
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
  const { t } = useTranslation();

  const soundEntries: CustomSound[] = Object.entries(customSounds).map(([emoji, sound]) => ({
    emoji,
    sound,
  }));

  const footer = (
    <button onClick={onAddClick} className={styles.addButton} aria-label={`Add new custom sound`}>
      {t('addCustomSound')}
    </button>
  );

  return (
    <BaseModal isOpen={isOpen} title={t('manageCustomSoundsTitle')} onClose={onClose} footer={footer}>
      {soundEntries.length === 0 ? (
        <p className={styles.emptyState}>{t('noCustomSounds')}</p>
      ) : (
        <ul className={styles.soundList} role="list">
          {soundEntries.map(({ emoji }) => (
            <li key={emoji} className={styles.soundItem} role="listitem">
              <span className={styles.emoji} aria-label={`Emoji: ${emoji}`}>
                {emoji}
              </span>
              <div className={styles.buttonGroup}>
                <button
                  onClick={() => onEdit(emoji)}
                  className={styles.editButton}
                  aria-label={`Edit sound for ${emoji}`}
                >
                  {t('editSound')}
                </button>
                <button
                  onClick={() => onDelete(emoji)}
                  className={styles.deleteButton}
                  aria-label={`Delete sound for ${emoji}`}
                >
                  {t('deleteSound')}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </BaseModal>
  );
}
