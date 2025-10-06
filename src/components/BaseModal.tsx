import React from 'react';
import styles from './BaseModal.module.css';

interface BaseModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function BaseModal({
  isOpen,
  title,
  onClose,
  children,
  footer,
}: BaseModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <dialog
        open={isOpen}
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalContent}>
          <header className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>{title}</h3>
            <button
              onClick={onClose}
              className={styles.closeButton}
              aria-label="Close modal"
            >
              ×
            </button>
          </header>

          <div className={styles.modalBody}>{children}</div>

          {footer && <footer className={styles.modalFooter}>{footer}</footer>}
        </div>
      </dialog>
    </div>
  );
}
