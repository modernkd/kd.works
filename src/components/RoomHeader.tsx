import { useTranslation } from 'react-i18next';
import styles from './RoomHeader.module.css';

interface RoomHeaderProps {
  room: string;
  nickname: string;
  users: { id: string; name: string }[];
}

function getDisplayNames(users: { id: string; name: string }[]) {
  const nameCounts = new Map<string, number>();
  users.forEach((u) => {
    nameCounts.set(u.name, (nameCounts.get(u.name) || 0) + 1);
  });

  return users.map((u) => {
    let display = u.name;
    const count = nameCounts.get(u.name);
    if (count && count > 1) {
      const sameNameUsers = users.filter((au) => au.name === u.name);
      const userIndex = sameNameUsers.findIndex((au) => au.id === u.id) + 1;
      display = u.name + ` (${userIndex})`;
    }
    return display.length > 25 ? display.substring(0, 25) + '...' : display;
  });
}

export default function RoomHeader({ room, nickname, users }: RoomHeaderProps) {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{t('roomTitle', { room })}</h1>
      <p className={styles.welcomeText}>{t('roomWelcome', { nickname })}</p>
      <p className={styles.usersText}>{t('roomUsers', { users: getDisplayNames(users).join(', ') })}</p>
    </header>
  );
}
