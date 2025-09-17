"use client";

import Link from "next/link";

export default function RoomNavigation() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 mb-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link
          href="https://kd.works"
          className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
        >
          ← Back to kd.works
        </Link>
        <div className="text-sm text-gray-600">More Cowbell Room</div>
      </div>
    </header>
  );
}
