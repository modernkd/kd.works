interface MooseMagnetProps {
  onClick: () => void;
}

export default function MooseMagnet({ onClick }: MooseMagnetProps) {
  return (
    <button
      onClick={onClick}
      className="moose-magnet block text-white p-[10px_15px] rounded-[5px] text-[18px] font-bold text-center shadow-[2px_2px_5px_rgba(0,0,0,0.3)] border-none cursor-pointer w-max hover:scale-105 transition-transform"
      style={{
        background:
          "linear-gradient(to right, transparent 40%, #fecb00 40%, #fecb00 60%, transparent 60%), linear-gradient(to bottom, transparent 40%, #fecb00 40%, #fecb00 60%, transparent 60%), #005293",
      }}
    >
      🫎
    </button>
  );
}
