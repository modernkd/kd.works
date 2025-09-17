"use client";

interface ConnectingScreenProps {
  room: string;
  nickname: string;
}

export default function ConnectingScreen({
  room,
  nickname,
}: ConnectingScreenProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Connecting to {room}...</h1>
        <p className="text-gray-600">Welcome, {nickname}!</p>
      </div>
    </section>
  );
}
