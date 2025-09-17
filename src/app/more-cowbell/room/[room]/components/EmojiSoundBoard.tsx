"use client";

interface EmojiSoundBoardProps {
  emojis: string[];
  customSounds: Record<string, string>;
  onEmojiClick: (emoji: string) => void;
  onManageClick: () => void;
}

export default function EmojiSoundBoard({
  emojis,
  customSounds,
  onEmojiClick,
  onManageClick,
}: EmojiSoundBoardProps) {
  const allEmojis = [...emojis, ...Object.keys(customSounds)];

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Emoji Sounds</h2>
        <button
          onClick={onManageClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          aria-label="Manage custom sounds"
        >
          Manage Custom Sounds
        </button>
      </div>

      <div
        className="flex flex-wrap flex-row w-110 m-auto justify-stretch items-stretch max-w-full"
        role="grid"
      >
        {allEmojis.map((emoji) => (
          <button
            key={emoji}
            onClick={() => onEmojiClick(emoji)}
            className="text-4xl p-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors flex items-center justify-between text-nowrap w-fit h-16 m-1"
            aria-label={`Play sound for ${emoji}`}
            role="gridcell"
          >
            {emoji}
          </button>
        ))}
      </div>
    </section>
  );
}
