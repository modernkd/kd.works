"use client";

interface SignInFormProps {
  room: string;
  nickname: string;
  setNickname: (name: string) => void;
  onSignIn: () => void;
}

export default function SignInForm({
  room,
  nickname,
  setNickname,
  onSignIn,
}: SignInFormProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md"
        onSubmit={(e) => {
          e.preventDefault();
          onSignIn();
        }}
      >
        <h1 className="text-2xl font-bold mb-4">Join Room: {room}</h1>
        <div className="mb-4">
          <label
            htmlFor="nickname"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Enter your nickname
          </label>
          <input
            id="nickname"
            type="text"
            placeholder="Enter your nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          Join
        </button>
      </form>
    </section>
  );
}
