"use client";

interface CustomSound {
  emoji: string;
  sound: string;
}

interface ManageCustomSoundsModalProps {
  isOpen: boolean;
  customSounds: Record<string, string>;
  onClose: () => void;
  onAddClick: () => void;
  onEdit: (emoji: string, sound: string) => void;
  onDelete: (emoji: string) => void;
}

export default function ManageCustomSoundsModal({
  isOpen,
  customSounds,
  onClose,
  onAddClick,
  onEdit,
  onDelete,
}: ManageCustomSoundsModalProps) {
  if (!isOpen) return null;

  const soundEntries: CustomSound[] = Object.entries(customSounds).map(
    ([emoji, sound]) => ({
      emoji,
      sound,
    })
  );

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <dialog
        open={isOpen}
        className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <header className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">Manage Custom Sounds</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close modal"
            >
              ×
            </button>
          </header>

          {soundEntries.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No custom sounds yet.
            </p>
          ) : (
            <ul className="space-y-3 mb-4" role="list">
              {soundEntries.map(({ emoji, sound }) => (
                <li
                  key={emoji}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded"
                  role="listitem"
                >
                  <span
                    className="text-2xl mr-2"
                    aria-label={`Emoji: ${emoji}`}
                  >
                    {emoji}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEdit(emoji, sound)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors text-sm"
                      aria-label={`Edit sound for ${emoji}`}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(emoji)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors text-sm"
                      aria-label={`Delete sound for ${emoji}`}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <footer className="pt-4">
            <button
              onClick={onAddClick}
              className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
              aria-label="Add new custom sound"
            >
              Add Custom Sound
            </button>
          </footer>
        </div>
      </dialog>
    </div>
  );
}
