"use client";

import { messages } from "../../../../../../i18n";
import styles from "./ConnectingScreen.module.css";

interface ConnectingScreenProps {
  room: string;
  nickname: string;
  locale: "en" | "sv";
}

export default function ConnectingScreen({
  room,
  nickname,
  locale,
}: ConnectingScreenProps) {
  const connectingTo = messages[locale].connectingTo;
  const welcome = messages[locale].welcome;
  return (
    <section className={styles.connectingScreen}>
      <div className={styles.connectingCard}>
        <h1 className={styles.connectingTitle}>
          {connectingTo} {room}...
        </h1>
        <p className={styles.connectingMessage}>
          {welcome}, {nickname}!
        </p>
      </div>
    </section>
  );
}
