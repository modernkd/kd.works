"use client";

import styles from "./ConnectingScreen.module.css";

interface ConnectingScreenProps {
  room: string;
  nickname: string;
}

export default function ConnectingScreen({
  room,
  nickname,
}: ConnectingScreenProps) {
  return (
    <section className={styles.connectingScreen}>
      <div className={styles.connectingCard}>
        <h1 className={styles.connectingTitle}>Connecting to {room}...</h1>
        <p className={styles.connectingMessage}>Welcome, {nickname}!</p>
      </div>
    </section>
  );
}
