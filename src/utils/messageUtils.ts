interface AppMessage {
  id: string;
  text: string;
  type: 'join' | 'leave' | 'sound' | 'custom';
}

export function addMessage(
  setMessages: React.Dispatch<React.SetStateAction<AppMessage[]>>,
  text: string,
  type: AppMessage['type']
) {
  const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
  setMessages((prev) => [...prev, { id, text, type }]);
}
