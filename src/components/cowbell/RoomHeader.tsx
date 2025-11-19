import { useTranslation } from 'react-i18next';
import styles from './RoomHeader.module.css';

interface RoomHeaderProps {
  room: string;
  nickname: string;
  users: { id: string; name: string }[];
  isOnline?: boolean;
}

/**
 * Generates display names for users, handling duplicates by adding indices.
 * @param users - Array of user objects with id and name properties
 * @returns Array of display names with duplicates numbered and truncated if too long
 */
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

export default function RoomHeader({ room, nickname, users, isOnline = true }: RoomHeaderProps) {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <span className={styles.titleRow}>
        <h1 className={styles.title}>
          <span>{t('roomTitle', { room })}</span>
        </h1>
        <span className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
          {isOnline ? '🟢 Connected' : '🔴 Offline'}
        </span>
      </span>
      <p className={styles.welcomeText}>{t('roomWelcome', { nickname })}</p>
      {isOnline ? (
        <p className={styles.usersText}>{t('roomUsers', { users: getDisplayNames(users).join(', ') })}</p>
      ) : (
        <p className={styles.usersText}>{t('offlineMode')}</p>
      )}
    </header>
  );
}
