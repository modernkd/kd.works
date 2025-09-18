"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./MoreCowbellPage.module.css";

export default function MoreCowbellPage() {
  const [roomName, setRoomName] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomName.trim()) {
      router.push(`/more-cowbell/room/${encodeURIComponent(roomName.trim())}`);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <h1 className={styles.title}>More Cowbell</h1>
        <p className={styles.description}>
          Enter a room name to start the party
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Room name (e.g., party-room)"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Join Room
          </button>
        </form>
        <p className={styles.hint}>Share the room link with friends!</p>
      </div>
    </div>
  );
}
