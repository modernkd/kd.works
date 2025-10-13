import { useRef, lazy, Suspense } from 'react';
import BaseModal from './BaseModal';
import styles from './CustomSoundModal.module.css';
import { useTranslation } from 'react-i18next';

// Lazy load the emoji picker to reduce initial bundle size
const Picker = lazy(() => import('emoji-picker-react'));

interface CustomSoundModalProps {
  isOpen: boolean;
  isEditing: boolean;
  selectedEmoji: string;
  selectedFile: File | null;
  onClose: () => void;
  onEmojiSelect: (emojiObject: { emoji: string }) => void;
  onFileChange: (file: File | null) => void;
  onSubmit: () => void;
}

export default function CustomSoundModal({
  isOpen,
  isEditing,
  selectedEmoji,
  selectedFile,
  onClose,
  onEmojiSelect,
  onFileChange,
  onSubmit,
}: CustomSoundModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  const handleFileInputClick = () => {
    fileInputRef.current?.click();
  };

  const footer = (
    <>
      <button
        onClick={onSubmit}
        disabled={!selectedEmoji || !selectedFile}
        className={styles.submitButton}
        aria-label={`Upload sound`}
      >
        {t('uploadSound')}
      </button>
      <button onClick={onClose} className={styles.cancelButton} aria-label={t('cancel')}>
        {t('cancel')}
      </button>
    </>
  );

  return (
    <BaseModal
      isOpen={isOpen}
      title={isEditing ? t('editCustomSound') : t('addCustomSoundTitle')}
      onClose={onClose}
      footer={footer}
    >
      <div className={styles.formGroup}>
        <label className={styles.label}>{t('selectEmoji')}</label>
        <Suspense fallback={<div className={styles.pickerLoading}>Loading emoji picker...</div>}>
          <Picker onEmojiClick={onEmojiSelect} width="100%" height={350} />
        </Suspense>
        {selectedEmoji && <p className={styles.emojiDisplay}>{selectedEmoji}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>{t('chooseAudioFile')}</label>
        <div className={styles.fileInput}>
          <input
            type="file"
            ref={fileInputRef}
            accept="audio/*"
            onChange={(e) => onFileChange(e.target.files?.[0] || null)}
            className={styles.hiddenInput}
          />
          <button
            type="button"
            onClick={handleFileInputClick}
            className={styles.fileButton}
            aria-label={t('chooseAudioFile')}
          >
            {selectedFile ? selectedFile.name : t('chooseFile')}
          </button>
        </div>
        {!selectedFile && <p className={styles.fileHint}>{t('noFileChosen')}</p>}
      </div>
    </BaseModal>
  );
}
