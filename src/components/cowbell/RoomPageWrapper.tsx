import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PartySocket from 'partysocket';
import { Howl } from 'howler';
import { soundMap, emojis } from '../../lib/soundMap';
import { addMessage } from '../../utils/messageUtils';

// Play cowbell sound when entering the room
const playCowbellSound = () => {
  const sound = new Howl({
    src: ['/sounds/gotta-have-more-cowbell.mp3'],
    volume: 0.7,
  });
  sound.play();
};

import SignInForm from '../modals/SignInForm';
import ConnectingScreen from '../modals/ConnectingScreen';
import Message from './Message';
import RoomHeader from './RoomHeader';
import EmojiSoundBoard from './EmojiSoundBoard';
import CustomSoundModal from '../modals/CustomSoundModal';
import ManageCustomSoundsModal from '../modals/ManageCustomSoundsModal';
import styles from '../../pages/more-cowbell/room/RoomPage.module.css';

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
  type: 'join' | 'leave' | 'sound' | 'custom';
}

export interface RoomPageWrapperProps {
  roomOverride?: string;
  // Props for controlling state externally
  initialNickname?: string;
  initialIsSignedIn?: boolean;
  initialIsConnected?: boolean;
  initialUsers?: User[];
  initialMessages?: AppMessage[];
  initialCustomSounds?: Record<string, string>;
  onStateChange?: (state: {
    nickname: string;
    isSignedIn: boolean;
    isConnected: boolean;
    users: User[];
    messages: AppMessage[];
    customSounds: Record<string, string>;
  }) => void;
}

export default function RoomPageWrapper({
  roomOverride,
  initialNickname = roomOverride ? 'Storybook User' : '',
  initialIsSignedIn = !!roomOverride,
  initialIsConnected = !!roomOverride,
  initialUsers = roomOverride ? [{ id: 'storybook-user', name: 'Storybook User' }] : [],
  initialMessages = [],
  initialCustomSounds = {},
  onStateChange,
}: RoomPageWrapperProps = {}) {
  const { room: paramRoom } = useParams<{ room: string }>();
  const room = roomOverride || paramRoom;
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!roomOverride && !room) {
      navigate('/more-cowbell');
    }
  }, [room, roomOverride, navigate]);

  // Play cowbell sound when component mounts (user enters room)
  useEffect(() => {
    if (room && !roomOverride) {
      playCowbellSound();
    }
  }, [room, roomOverride]);

  const [nickname, setNickname] = useState(initialNickname);
  const [isSignedIn, setIsSignedIn] = useState(initialIsSignedIn);
  const [isConnected, setIsConnected] = useState(initialIsConnected);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [messages, setMessages] = useState<AppMessage[]>(initialMessages);
  const [customSounds, setCustomSounds] = useState<Record<string, string>>(initialCustomSounds);
  const [selectedEmoji, setSelectedEmoji] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showManageModal, setShowManageModal] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const socketRef = useRef<PartySocket | null>(null);

  // Notify parent of state changes
  useEffect(() => {
    onStateChange?.({
      nickname,
      isSignedIn,
      isConnected,
      users,
      messages,
      customSounds,
    });
  }, [nickname, isSignedIn, isConnected, users, messages, customSounds, onStateChange]);

  const handleMessage = useCallback(
    (message: Message) => {
      if (message.type === 'usersList') {
        setUsers(message.users || []);
      } else if (message.type === 'userJoined') {
        setUsers((prev) => [...prev, message.user!]);
        addMessage(setMessages, t('userJoinedRoom', { name: message.user?.name || 'Someone' }), 'join');
      } else if (message.type === 'userLeft') {
        setUsers((prev) => prev.filter((u) => u.id !== message.user!.id));
        addMessage(setMessages, t('userLeftRoom', { name: message.user?.name || 'Someone' }), 'leave');
      } else if (message.type === 'soundPlayed') {
        playSound(message.sound!);
        addMessage(
          setMessages,
          t('userPlayedSound', {
            name: message.user?.name || 'Someone',
            emoji: message.emoji,
          }),
          'sound'
        );
      } else if (message.type === 'customSoundAdded') {
        setCustomSounds((prev) => ({
          ...prev,
          [message.emoji!]: message.sound!,
        }));
        if (message.user) {
          addMessage(
            setMessages,
            t('userAddedCustomSound', {
              name: message.user!.name,
              emoji: message.emoji,
            }),
            'custom'
          );
        }
      } else if (message.type === 'customSoundDeleted') {
        const emoji = message.emoji!;
        setCustomSounds((prev) => {
          const newSounds = { ...prev };
          delete newSounds[emoji];
          return newSounds;
        });
        addMessage(setMessages, t('customSoundDeleted', { emoji }), 'custom');
      } else if (message.type === 'customSoundUpdated') {
        setCustomSounds((prev) => ({
          ...prev,
          [message.emoji!]: message.sound!,
        }));
        if (message.user) {
          addMessage(
            setMessages,
            t('userUpdatedCustomSound', {
              name: message.user!.name,
              emoji: message.emoji,
            }),
            'custom'
          );
        }
      }
    },
    [t]
  );

  const playSound = (soundFile: string) => {
    const src = soundFile.startsWith('data:') ? [soundFile] : [`/sounds/${soundFile}`];
    const sound = new Howl({
      src,
      volume: 0.5,
    });
    sound.play();
  };

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname && !roomOverride) {
      setNickname(savedNickname);
      setIsSignedIn(true);
    }
  }, [roomOverride]);

  // Online/offline detection
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Load custom sounds from localStorage
  useEffect(() => {
    if (!roomOverride) {
      const savedCustomSounds = localStorage.getItem(`customSounds_${room}`);
      if (savedCustomSounds) {
        try {
          setCustomSounds(JSON.parse(savedCustomSounds));
        } catch (error) {
          console.error('Failed to parse saved custom sounds:', error);
        }
      }
    }
  }, [room, roomOverride]);

  useEffect(() => {
    if (isSignedIn && room && nickname.trim() && !roomOverride) {
      if (isOnline) {
        // Online: connect to PartyKit
        if (socketRef.current) {
          socketRef.current.close();
        }

        const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        const socket = new PartySocket({
          host: isLocalhost ? `${window.location.hostname}:54300` : 'more-cowbell.modernkd.partykit.dev',
          room: room,
        });

        socket.addEventListener('open', () => {
          setIsConnected(true);
          socket.send(JSON.stringify({ type: 'join', name: nickname }));
        });

        socket.addEventListener('message', (event) => {
          const message: Message = JSON.parse(event.data);
          handleMessage(message);
        });

        socket.addEventListener('close', () => {
          setIsConnected(false);
        });

        socketRef.current = socket;
      } else {
        // Offline: simulate connection
        setIsConnected(true);
        addMessage(setMessages, t('offlineModeMessage'), 'join');
      }
    }
  }, [isSignedIn, room, nickname, handleMessage, isOnline, t, roomOverride]);

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
      localStorage.setItem('nickname', nickname);
      setIsSignedIn(true);
    }
  };

  const handleEmojiClick = (emoji: string) => {
    const sound = soundMap[emoji] || customSounds[emoji];
    if (sound) {
      if (!isOnline || !socketRef.current) {
        // Play locally only when offline
        playSound(sound);
      }
      if (isOnline && socketRef.current) {
        // Send to server if online
        socketRef.current.send(
          JSON.stringify({
            type: 'sound',
            emoji,
            sound,
          })
        );
      } else {
        // Offline: show local message
        addMessage(setMessages, t('playedSoundOffline', { emoji }), 'sound');
      }
    }
  };

  const onEmojiSelect = (emojiObject: { emoji: string }) => {
    setSelectedEmoji(emojiObject.emoji);
  };

  const handleUploadSubmit = () => {
    if (selectedEmoji && selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        setCustomSounds((prev) => {
          const newSounds = { ...prev, [selectedEmoji]: dataUrl };
          if (!roomOverride) {
            localStorage.setItem(`customSounds_${room}`, JSON.stringify(newSounds));
          }
          return newSounds;
        });
        if (isOnline && socketRef.current) {
          // Send to server if online
          socketRef.current.send(
            JSON.stringify({
              type: isEditing ? 'editCustomSound' : 'addCustomSound',
              emoji: selectedEmoji,
              sound: dataUrl,
            })
          );
        } else {
          // Offline: show local message
          addMessage(
            setMessages,
            t(isEditing ? 'customSoundUpdatedOffline' : 'customSoundAddedOffline', { emoji: selectedEmoji }),
            'custom'
          );
        }
        closeModal();
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const openModal = () => {
    closeManageModal();
    setShowModal(true);
    setSelectedEmoji('');
    setSelectedFile(null);
    setIsEditing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const closeModal = () => {
    closeManageModal();
    setShowModal(false);
    setSelectedEmoji('');
    setSelectedFile(null);
    setIsEditing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const openManageModal = () => {
    setShowManageModal(true);
  };

  const closeManageModal = () => {
    setShowManageModal(false);
  };

  const handleDelete = (emoji: string) => {
    setCustomSounds((prev) => {
      const newSounds = { ...prev };
      delete newSounds[emoji];
      if (!roomOverride) {
        localStorage.setItem(`customSounds_${room}`, JSON.stringify(newSounds));
      }
      return newSounds;
    });
    if (isOnline && socketRef.current) {
      // Send to server if online
      socketRef.current.send(
        JSON.stringify({
          type: 'deleteCustomSound',
          emoji,
        })
      );
    } else {
      // Offline: show local message
      addMessage(setMessages, t('customSoundDeletedOffline', { emoji }), 'custom');
    }
    closeManageModal();
  };

  const handleEdit = (emoji: string) => {
    setSelectedEmoji(emoji);
    setIsEditing(true);
    setShowModal(true);
    closeManageModal();
  };

  if (!room) {
    return null;
  }

  if (!isSignedIn) {
    return <SignInForm room={room} nickname={nickname} setNickname={setNickname} onSignIn={handleSignIn} />;
  }

  if (!isConnected) {
    return <ConnectingScreen room={room} nickname={nickname} />;
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.messages}>
          {messages
            .slice(-5)
            .reverse()
            .map((msg) => (
              <Message key={msg.id} text={msg.text} type={msg.type} />
            ))}
        </div>

        <RoomHeader room={room || ''} nickname={nickname} users={users} isOnline={isOnline} />

        <EmojiSoundBoard
          emojis={emojis}
          customSounds={customSounds}
          onEmojiClick={handleEmojiClick}
          onManageClick={openManageModal}
          filterFoodEmojis={true}
        />
      </div>

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
    </main>
  );
}
