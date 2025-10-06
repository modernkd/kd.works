import styles from './Magnet.module.css';

interface EagleMagnetProps {
  onClick: () => void;
}

export default function EagleMagnet({ onClick }: EagleMagnetProps) {
  return (
    <button onClick={onClick} className={styles.eagleMagnet}>
      🦅
    </button>
  );
}
