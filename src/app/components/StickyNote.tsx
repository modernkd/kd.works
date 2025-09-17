interface StickyNoteProps {
  onClick: () => void;
}

export default function StickyNote({ onClick }: StickyNoteProps) {
  return (
    <div
      onClick={onClick}
      className="absolute left-[10%] top-[45%] h-[100px] w-[100px] bg-[#ffeb3b] border-[2px] border-[#f57c00] rounded-[5px] cursor-pointer z-[10] shadow-[2px_2px_5px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-[9px] font-bold text-[#333] text-center p-[3px] -rotate-[5deg]"
    >
      <div>📝</div>
      <div>Note</div>
    </div>
  );
}
