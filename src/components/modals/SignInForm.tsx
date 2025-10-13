import { useTranslation } from 'react-i18next';
import Card from './Card';
import PageContainer from '../ui/PageContainer';
import styles from './SignInForm.module.css';

interface SignInFormProps {
  room: string;
  nickname: string;
  setNickname: (name: string) => void;
  onSignIn: () => void;
}

export default function SignInForm({ room, nickname, setNickname, onSignIn }: SignInFormProps) {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Card>
        <h1 className={styles.title}>{t('roomJoinTitle', { room })}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSignIn();
          }}
          className={styles.form}
        >
          <input
            id="nickname"
            type="text"
            placeholder={t('roomNicknamePlaceholder')}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            {t('roomJoinButton')}
          </button>
        </form>
      </Card>
    </PageContainer>
  );
}
