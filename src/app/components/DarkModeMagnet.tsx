import styles from "./DarkModeMagnet.module.css";

interface DarkModeMagnetProps {
  isDarkMode: boolean;
  onClick: () => void;
}

export default function DarkModeMagnet({
  isDarkMode,
  onClick,
}: DarkModeMagnetProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.darkModeMagnet} ${isDarkMode ? styles.dark : ""}`}
    >
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  );
}
