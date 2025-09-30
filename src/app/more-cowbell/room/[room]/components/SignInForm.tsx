"use client";

import { Locale, messages } from "../../../../../../i18n";

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
    <section style={{ backgroundColor: "var(--surface)" }}>
      <form
        style={{
          backgroundColor: "var(--background)",
          border: "1px solid var(--border)",
          color: "var(--text-primary)",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          onSignIn();
        }}
      >
        <h1 style={{ color: "var(--text-primary)" }}>
          {messages[locale].roomJoinTitle.replace("{room}", room)}
        </h1>
        <div className="mb-4">
          <label htmlFor="nickname" style={{ color: "var(--text-primary)" }}>
            {messages[locale].roomNicknameLabel}
          </label>
          <input
            id="nickname"
            type="text"
            placeholder={messages[locale].roomNicknamePlaceholder}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2"
            style={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
              color: "var(--text-primary)",
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: "var(--accent)" }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--accent-hover)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--accent)")
          }
        >
          {messages[locale].roomJoinButton}
        </button>
      </form>
    </section>
  );
}
