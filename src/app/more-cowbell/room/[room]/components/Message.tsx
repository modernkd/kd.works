import styles from "./Message.module.css";

interface MessageProps {
  text: string;
  type: "join" | "leave" | "sound" | "custom";
}

export default function Message({ text, type }: MessageProps) {
  const messageClass = type === "custom" ? styles.custom : styles.default;

  return (
    <article className={`${styles.message} ${messageClass}`}>{text}</article>
  );
}
