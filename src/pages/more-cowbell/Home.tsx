import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Card from '../../components/modals/Card';
import PageContainer from '../../components/ui/PageContainer';
import { MetaTags } from '../../hooks/useMetaTags';
import styles from './MoreCowbellPage.module.css';

/**
 * Home page for the More Cowbell app that allows users to enter a room name.
 * Provides a form to input room name and navigate to the collaborative sound board room.
 */
export default function MoreCowbellHome() {
  const [roomName, setRoomName] = useState('');
  const { t } = useTranslation();
  const navigate = useNavigate();

  /**
   * Handles form submission to navigate to the specified room.
   * Trims whitespace and converts to lowercase for consistent room names.
   * @param e - The form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomName.trim()) {
      navigate(`/more-cowbell/room/${encodeURIComponent(roomName.toLowerCase().trim())}`);
    }
  };

  return (
    <>
      <MetaTags
        title="More Cowbell"
        description="Real-time collaborative emoji sound board app. Join a room and play sounds together with others in real-time using PartyKit."
        image="/room-screenshot.webp"
        url="/more-cowbell"
      />
      <PageContainer>
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
      </PageContainer>
    </>
  );
}
