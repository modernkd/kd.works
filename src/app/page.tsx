"use client";

import { useState, useEffect, useRef } from "react";
import PartySocket from "partysocket";
import { Howl } from "howler";
import { soundMap, emojis } from "@/lib/soundMap";

interface User {
  id: string;
  name: string;
}

interface Message {
  type: string;
  user?: User;
  emoji?: string;
  sound?: string;
}

export default function Home() {
  const [nickname, setNickname] = useState("");
  const [room, setRoom] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [lastMessage, setLastMessage] = useState<string>("");
  const [customSounds, setCustomSounds] = useState<Record<string, string>>({});
  const [selectedEmoji, setSelectedEmoji] = useState<string>("");
  const [showUpload, setShowUpload] = useState<boolean>(false);
  const socketRef = useRef<PartySocket | null>(null);

  useEffect(() => {
    const savedNickname = localStorage.getItem("nickname");
    if (savedNickname) {
      setNickname(savedNickname);
      setIsSignedIn(true);
    }

    const urlParams = new URLSearchParams(window.location.search);
    const roomParam = urlParams.get("room");
    if (roomParam) {
      setRoom(roomParam);
    }
  }, []);

  useEffect(() => {
    if (lastMessage) {
      const timer = setTimeout(() => {
        setLastMessage("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [lastMessage]);

  const handleSignIn = () => {
    if (nickname.trim()) {
      localStorage.setItem("nickname", nickname);
      setIsSignedIn(true);
    }
  };

  const handleJoinRoom = () => {
    if (room.trim()) {
      connectToRoom(room);
    }
  };

  const connectToRoom = (roomName: string) => {
    if (socketRef.current) {
      socketRef.current.close();
    }

    const socket = new PartySocket({
      host: "localhost:54300",
      room: roomName,
    });

    socket.addEventListener("open", () => {
      setIsConnected(true);
      socket.send(JSON.stringify({ type: "join", name: nickname }));
    });

    socket.addEventListener("message", (event) => {
      const message: Message = JSON.parse(event.data);
      handleMessage(message);
    });

    socket.addEventListener("close", () => {
      setIsConnected(false);
    });

    socketRef.current = socket;
  };

  const handleMessage = (message: Message) => {
    if (message.type === "userJoined") {
      setUsers((prev) => [...prev, message.user!]);
      setLastMessage(`${message.user!.name} joined the room`);
    } else if (message.type === "userLeft") {
      setUsers((prev) => prev.filter((u) => u.id !== message.user!.id));
      setLastMessage(`${message.user!.name} left the room`);
    } else if (message.type === "soundPlayed") {
      playSound(message.sound!);
      setLastMessage(`${message.user!.name} played ${message.emoji}`);
    }
  };

  const playSound = (soundFile: string) => {
    const sound = new Howl({
      src: [`/sounds/${soundFile}`],
      volume: 0.5,
    });
    sound.play();
  };

  const handleEmojiClick = (emoji: string) => {
    const sound = soundMap[emoji];
    if (socketRef.current && sound) {
      socketRef.current.send(
        JSON.stringify({
          type: "sound",
          emoji,
          sound,
        })
      );
    }
  };

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Sign In</h1>
          <input
            type="text"
            placeholder="Enter your nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <button
            onClick={handleSignIn}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Join Room</h1>
          <input
            type="text"
            placeholder="Enter room name"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <button
            onClick={handleJoinRoom}
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Join Room
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        {lastMessage && (
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4 rounded">
            {lastMessage}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h1 className="text-2xl font-bold mb-2">Sound Room: {room}</h1>
          <p className="text-gray-600">Welcome, {nickname}!</p>
          <p className="text-sm text-gray-500">
            Users: {users.map((u) => u.name).join(", ")}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Emoji Sounds</h2>
          <div className="grid grid-cols-5 gap-2">
            {emojis.map((emoji) => (
              <button
                key={emoji}
                onClick={() => handleEmojiClick(emoji)}
                className="text-4xl p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
