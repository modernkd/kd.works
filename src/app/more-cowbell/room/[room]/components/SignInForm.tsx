"use client";

import { Locale, messages } from "../../../../../../i18n";
import Card from "../../../../components/Card";
import styles from "./SignInForm.module.css";

interface SignInFormProps {
  room: string;
  nickname: string;
  setNickname: (name: string) => void;
  onSignIn: () => void;
  locale: Locale;
}

export default function SignInForm({
  room,
  nickname,
  setNickname,
  onSignIn,
  locale,
}: SignInFormProps) {
  return (
    <section className={styles.formSection}>
      <Card>
        <h1 className={styles.title}>
          {messages[locale].roomJoinTitle.replace("{room}", room)}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSignIn();
          }}
          className={styles.form}
        >
          <input
            id="nickname"
            type="text"
            placeholder={messages[locale].roomNicknamePlaceholder}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            {messages[locale].roomJoinButton}
          </button>
        </form>
      </Card>
    </section>
  );
}
