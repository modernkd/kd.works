import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Card from '../../components/Card';
import styles from './MoreCowbellPage.module.css';

export default function MoreCowbellHome() {
  const [roomName, setRoomName] = useState('');
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomName.trim()) {
      navigate(`/more-cowbell/room/${encodeURIComponent(roomName.trim())}`);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Card>
        <h1 className={styles.title}>{t('moreCowbellTitle')}</h1>
        <p className={styles.description}>{t('moreCowbellDescription')}</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder={t('moreCowbellPlaceholder')}
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            {t('moreCowbellButton')}
          </button>
        </form>
        <p className={styles.hint}>{t('moreCowbellHint')}</p>
      </Card>
    </div>
  );
}
