"use client";

import { useRef } from "react";
import Picker from "emoji-picker-react";

interface CustomSoundModalProps {
  isOpen: boolean;
  isEditing: boolean;
  selectedEmoji: string;
  selectedFile: File | null;
  onClose: () => void;
  onEmojiSelect: (emojiObject: { emoji: string }) => void;
  onFileChange: (file: File | null) => void;
  onSubmit: () => void;
}

export default function CustomSoundModal({
  isOpen,
  isEditing,
  selectedEmoji,
  selectedFile,
  onClose,
  onEmojiSelect,
  onFileChange,
  onSubmit,
}: CustomSoundModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileInputClick = () => {
    fileInputRef.current?.click();
  };

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
            <h3 className="font-semibold text-lg">
              {isEditing ? "Edit Custom Sound" : "Add Custom Sound"}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close modal"
            >
              ×
            </button>
          </header>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Emoji
            </label>
            <Picker onEmojiClick={onEmojiSelect} width="100%" height={350} />
            {selectedEmoji && (
              <p className="text-center mt-2 text-lg">{selectedEmoji}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose Audio File
            </label>
            <div className="relative">
              <input
                type="file"
                ref={fileInputRef}
                accept="audio/*"
                onChange={(e) => onFileChange(e.target.files?.[0] || null)}
                className="hidden"
              />
              <button
                type="button"
                onClick={handleFileInputClick}
                className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors flex items-center justify-center"
                aria-label="Choose audio file"
              >
                {selectedFile ? selectedFile.name : "Choose file..."}
              </button>
            </div>
            {!selectedFile && (
              <p className="text-xs text-gray-500 mt-1">No file chosen</p>
            )}
          </div>

          <footer className="flex gap-2 pt-4">
            <button
              onClick={onSubmit}
              disabled={!selectedEmoji || !selectedFile}
              className="flex-1 bg-green-500 text-white p-2 rounded hover:bg-green-600 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
              aria-label="Upload sound"
            >
              Upload
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
              aria-label="Cancel"
            >
              Cancel
            </button>
          </footer>
        </div>
      </dialog>
    </div>
  );
}
