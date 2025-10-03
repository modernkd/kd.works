"use client";

import { messages } from "../../../../../../i18n";
import Card from "../../../../components/Card";

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
    <Card variant="overlay" centered>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        {connectingTo} {room}...
      </h1>
      <p style={{ color: "var(--text-secondary)" }}>
        {welcome}, {nickname}!
      </p>
    </Card>
  );
}
