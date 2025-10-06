import { useTranslation } from 'react-i18next';
import styles from './StickyNote.module.css';

interface StickyNoteProps {
  onClick: () => void;
}

export default function StickyNote({ onClick }: StickyNoteProps) {
  const { t } = useTranslation();
  return (
    <div onClick={onClick} className={styles.stickyNote}>
      <div>{t('stickyNoteText')}</div>
    </div>
  );
}
