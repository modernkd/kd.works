"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-500">
          More Cowbell
        </h1>
        <p className="text-gray-600 mb-4 text-center">
          Enter a room name to start the party
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Room name (e.g., party-room)"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Join Room
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Share the room link with friends!
        </p>
      </div>
    </div>
  );
}
