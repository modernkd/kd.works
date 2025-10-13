import { useTranslation } from 'react-i18next';
import Card from './Card';
import PageContainer from '../ui/PageContainer';
import styles from './ConnectingScreen.module.css';

interface ConnectingScreenProps {
  room: string;
  nickname: string;
}

export default function ConnectingScreen({ room, nickname }: ConnectingScreenProps) {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Card>
        <h1 className={styles.title}>
          {t('connectingTo')} {room}...
        </h1>
        <p className={styles.welcomeText}>
          {t('welcome')}, {nickname}!
        </p>
      </Card>
    </PageContainer>
  );
}
