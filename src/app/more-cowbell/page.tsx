"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { messages } from "../../../i18n";
import { useLocale } from "./LocaleProvider";
import Card from "../components/Card";
import styles from "./MoreCowbellPage.module.css";

export default function MoreCowbellPage() {
  const [roomName, setRoomName] = useState("");
  const { locale } = useLocale();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomName.trim()) {
      router.push(`/more-cowbell/room/${encodeURIComponent(roomName.trim())}`);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Card>
        <h1 className={styles.title}>{messages[locale].moreCowbellTitle}</h1>
        <p className={styles.description}>
          {messages[locale].moreCowbellDescription}
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder={messages[locale].moreCowbellPlaceholder}
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            {messages[locale].moreCowbellButton}
          </button>
        </form>
        <p className={styles.hint}>{messages[locale].moreCowbellHint}</p>
      </Card>
    </div>
  );
}
