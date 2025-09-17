interface MessageProps {
  text: string;
  type: "join" | "leave" | "sound" | "custom";
}

export default function Message({ text, type }: MessageProps) {
  const baseClass = "p-4 mb-2 rounded border-l-4";
  const typeClass =
    type === "custom"
      ? "bg-green-100 border-green-500 text-green-700"
      : "bg-blue-100 border-blue-500 text-blue-700";

  return <article className={`${baseClass} ${typeClass}`}>{text}</article>;
}
