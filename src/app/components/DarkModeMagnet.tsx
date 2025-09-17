interface DarkModeMagnetProps {
  isDarkMode: boolean;
  onClick: () => void;
}

export default function DarkModeMagnet({
  isDarkMode,
  onClick,
}: DarkModeMagnetProps) {
  return (
    <button
      onClick={onClick}
      className="dark-mode-magnet block text-white p-[10px_15px] rounded-[5px] text-[18px] font-bold text-center shadow-[2px_2px_5px_rgba(0,0,0,0.3)] border-none cursor-pointer w-max hover:scale-105 transition-transform"
      style={{
        background: isDarkMode ? "#4a4a4a" : "#FFD700",
      }}
    >
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  );
}
