"use client";

import Link from "next/link";
import styles from "./RoomNavigation.module.css";

export default function RoomNavigation() {
  return (
    <header className={styles.navigation}>
      <div className={styles.navigationContainer}>
        <Link href="/" className={styles.backLink}>
          ← Back to the fridge
        </Link>
      </div>
    </header>
  );
}
