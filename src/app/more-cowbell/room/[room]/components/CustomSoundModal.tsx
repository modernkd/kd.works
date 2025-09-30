"use client";

import { useRef } from "react";
import Picker from "emoji-picker-react";
import { useLocale } from "../../../LocaleProvider";
import { messages } from "../../../../../../i18n";
import styles from "./CustomSoundModal.module.css";

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
  const { locale } = useLocale();

  if (!isOpen) return null;

  const handleFileInputClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <dialog
        open={isOpen}
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalContent}>
          <header className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>
              {isEditing ? messages[locale].editCustomSound : messages[locale].addCustomSoundTitle}
            </h3>
            <button
              onClick={onClose}
              className={styles.closeButton}
              aria-label={messages[locale].closeModal}
            >
              ×
            </button>
          </header>

          <div className={styles.formGroup}>
            <label className={styles.label}>{messages[locale].selectEmoji}</label>
            <Picker onEmojiClick={onEmojiSelect} width="100%" height={350} />
            {selectedEmoji && (
              <p className={styles.emojiDisplay}>{selectedEmoji}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>{messages[locale].chooseAudioFile}</label>
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
                aria-label={messages[locale].chooseAudioFile}
              >
                {selectedFile ? selectedFile.name : messages[locale].chooseFile}
              </button>
            </div>
            {!selectedFile && <p className={styles.fileHint}>{messages[locale].noFileChosen}</p>}
          </div>

          <footer className={styles.modalFooter}>
            <button
              onClick={onSubmit}
              disabled={!selectedEmoji || !selectedFile}
              className={styles.submitButton}
              aria-label={`Upload sound`}
            >
              {messages[locale].uploadSound}
            </button>
            <button
              onClick={onClose}
              className={styles.cancelButton}
              aria-label={messages[locale].cancel}
            >
              {messages[locale].cancel}
            </button>
          </footer>
        </div>
      </dialog>
    </div>
  );
}
