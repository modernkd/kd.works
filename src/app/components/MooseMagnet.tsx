import styles from "./Magnet.module.css";

interface MooseMagnetProps {
  onClick: () => void;
}

export default function MooseMagnet({ onClick }: MooseMagnetProps) {
  return (
    <button onClick={onClick} className={styles.mooseMagnet}>
      🫎
    </button>
  );
}
