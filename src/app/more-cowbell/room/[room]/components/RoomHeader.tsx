"use client";

interface RoomHeaderProps {
  room: string;
  nickname: string;
  users: { id: string; name: string }[];
}

function getDisplayNames(users: { id: string; name: string }[]) {
  const nameCounts = new Map<string, number>();
  users.forEach((u) => {
    nameCounts.set(u.name, (nameCounts.get(u.name) || 0) + 1);
  });

  return users.map((u) => {
    let display = u.name;
    const count = nameCounts.get(u.name);
    if (count && count > 1) {
      const sameNameUsers = users.filter((au) => au.name === u.name);
      const userIndex = sameNameUsers.findIndex((au) => au.id === u.id) + 1;
      display = u.name + ` (${userIndex})`;
    }
    return display.length > 25 ? display.substring(0, 25) + "..." : display;
  });
}

export default function RoomHeader({ room, nickname, users }: RoomHeaderProps) {
  return (
    <header className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h1 className="text-2xl font-bold mb-2">More Cowbell: {room}</h1>
      <p className="text-gray-800">Welcome, {nickname}!</p>
      <p className="text-sm text-gray-700">
        Users: {getDisplayNames(users).join(", ")}
      </p>
    </header>
  );
}
