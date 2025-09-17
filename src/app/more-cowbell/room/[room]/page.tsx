"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import PartySocket from "partysocket";
import { Howl } from "howler";
import { soundMap, emojis } from "@/lib/soundMap";
import { useParams } from "next/navigation";

import SignInForm from "./components/SignInForm";
import ConnectingScreen from "./components/ConnectingScreen";
import Message from "./components/Message";
import RoomHeader from "./components/RoomHeader";
import EmojiSoundBoard from "./components/EmojiSoundBoard";
import CustomSoundModal from "./components/CustomSoundModal";
import ManageCustomSoundsModal from "./components/ManageCustomSoundsModal";
import RoomNavigation from "./components/RoomNavigation";
import Footer from "@/app/components/Footer";

interface User {
  id: string;
  name: string;
}

interface Message {
  type: string;
  user?: User;
  users?: User[];
  emoji?: string;
  sound?: string;
}

interface AppMessage {
  id: string;
  text: string;
  type: "join" | "leave" | "sound" | "custom";
}

export default function RoomPage() {
  const params = useParams();
  const room = params.room as string;

  const [nickname, setNickname] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState<AppMessage[]>([]);
  const [customSounds, setCustomSounds] = useState<Record<string, string>>({});
  const [selectedEmoji, setSelectedEmoji] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showManageModal, setShowManageModal] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedSound, setSelectedSound] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const socketRef = useRef<PartySocket | null>(null);

  useEffect(() => {
    const savedNickname = localStorage.getItem("nickname");
    if (savedNickname) {
      setNickname(savedNickname);
      setIsSignedIn(true);
    }
  }, []);

  const connectToRoom = useCallback(
    (roomName: string) => {
      if (socketRef.current) {
        socketRef.current.close();
      }

      const isLocalhost =
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";
      const socket = new PartySocket({
        host: isLocalhost
          ? `${window.location.hostname}:54300`
          : "more-cowbell.modernkd.partykit.dev",
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
    },
    [nickname]
  );

  useEffect(() => {
    if (isSignedIn && room && nickname.trim()) {
      connectToRoom(room);
    }
  }, [isSignedIn, room, nickname, connectToRoom]);

  useEffect(() => {
    const timers = messages.map((msg) => {
      const timer = setTimeout(() => {
        setMessages((prev) => prev.filter((m) => m.id !== msg.id));
      }, 4000);
      return timer;
    });
    return () => timers.forEach(clearTimeout);
  }, [messages]);

  const handleSignIn = () => {
    if (nickname.trim()) {
      localStorage.setItem("nickname", nickname);
      setIsSignedIn(true);
    }
  };

  const handleMessage = (message: Message) => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    if (message.type === "usersList") {
      setUsers(message.users || []);
    } else if (message.type === "userJoined") {
      setUsers((prev) => [...prev, message.user!]);
      setMessages((prev) => [
        ...prev,
        {
          id,
          text: `${message.user?.name || "Someone"} joined the room`,
          type: "join",
        },
      ]);
    } else if (message.type === "userLeft") {
      setUsers((prev) => prev.filter((u) => u.id !== message.user!.id));
      setMessages((prev) => [
        ...prev,
        {
          id,
          text: `${message.user?.name || "Someone"} left the room`,
          type: "leave",
        },
      ]);
    } else if (message.type === "soundPlayed") {
      playSound(message.sound!);
      setMessages((prev) => [
        ...prev,
        {
          id,
          text: `${message.user?.name || "Someone"} played ${message.emoji}`,
          type: "sound",
        },
      ]);
    } else if (message.type === "customSoundAdded") {
      setCustomSounds((prev) => ({
        ...prev,
        [message.emoji!]: message.sound!,
      }));
      if (message.user) {
        setMessages((prev) => [
          ...prev,
          {
            id,
            text: `${message.user!.name} added a custom sound: ${
              message.emoji
            }`,
            type: "custom",
          },
        ]);
      }
    } else if (message.type === "customSoundDeleted") {
      const emoji = message.emoji!;
      setCustomSounds((prev) => {
        const newSounds = { ...prev };
        delete newSounds[emoji];
        return newSounds;
      });
      setMessages((prev) => [
        ...prev,
        {
          id,
          text: `Custom sound ${emoji} was deleted`,
          type: "custom",
        },
      ]);
    } else if (message.type === "customSoundUpdated") {
      setCustomSounds((prev) => ({
        ...prev,
        [message.emoji!]: message.sound!,
      }));
      if (message.user) {
        setMessages((prev) => [
          ...prev,
          {
            id,
            text: `${message.user!.name} updated custom sound: ${
              message.emoji
            }`,
            type: "custom",
          },
        ]);
      }
    }
  };

  const playSound = (soundFile: string) => {
    const src = soundFile.startsWith("data:")
      ? [soundFile]
      : [`/sounds/${soundFile}`];
    const sound = new Howl({
      src,
      volume: 0.5,
    });
    sound.play();
  };

  const handleEmojiClick = (emoji: string) => {
    const sound = soundMap[emoji] || customSounds[emoji];
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

  const onEmojiSelect = (emojiObject: { emoji: string }) => {
    setSelectedEmoji(emojiObject.emoji);
  };

  const handleUploadSubmit = () => {
    if (selectedEmoji && selectedFile && socketRef.current) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        if (isEditing) {
          socketRef.current!.send(
            JSON.stringify({
              type: "editCustomSound",
              emoji: selectedEmoji,
              sound: dataUrl,
            })
          );
        } else {
          socketRef.current!.send(
            JSON.stringify({
              type: "addCustomSound",
              emoji: selectedEmoji,
              sound: dataUrl,
            })
          );
        }
        closeModal();
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const openModal = () => {
    setShowModal(true);
    setSelectedEmoji("");
    setSelectedFile(null);
    setIsEditing(false);
    setSelectedSound(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const closeModal = () => {
    closeManageModal();
    setShowModal(false);
    setSelectedEmoji("");
    setSelectedFile(null);
    setIsEditing(false);
    setSelectedSound(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const openManageModal = () => {
    setShowManageModal(true);
  };

  const closeManageModal = () => {
    setShowManageModal(false);
  };

  const handleDelete = (emoji: string) => {
    if (socketRef.current) {
      socketRef.current.send(
        JSON.stringify({
          type: "deleteCustomSound",
          emoji,
        })
      );
    }
    closeManageModal();
  };

  const handleEdit = (emoji: string, sound: string) => {
    setSelectedEmoji(emoji);
    setSelectedSound(sound);
    setIsEditing(true);
    setShowModal(true);
    closeManageModal();
  };

  if (!isSignedIn) {
    return (
      <SignInForm
        room={room}
        nickname={nickname}
        setNickname={setNickname}
        onSignIn={handleSignIn}
      />
    );
  }

  if (!isConnected) {
    return <ConnectingScreen room={room} nickname={nickname} />;
  }

  return (
    <>
      <RoomNavigation />
      <main className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto">
          {messages
            .slice(-5)
            .reverse()
            .map((msg) => (
              <Message key={msg.id} text={msg.text} type={msg.type} />
            ))}

          <RoomHeader room={room} nickname={nickname} users={users} />

          <EmojiSoundBoard
            emojis={emojis}
            customSounds={customSounds}
            onEmojiClick={handleEmojiClick}
            onManageClick={openManageModal}
          />
        </div>
      </main>
      <Footer />

      <CustomSoundModal
        isOpen={showModal}
        isEditing={isEditing}
        selectedEmoji={selectedEmoji}
        selectedFile={selectedFile}
        onClose={closeModal}
        onEmojiSelect={onEmojiSelect}
        onFileChange={setSelectedFile}
        onSubmit={handleUploadSubmit}
      />

      <ManageCustomSoundsModal
        isOpen={showManageModal}
        customSounds={customSounds}
        onClose={closeManageModal}
        onAddClick={openModal}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
}
