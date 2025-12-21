import { useApp } from "../components/AppContext";

export default function Game() {
  const { addPoints } = useApp();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">🎮 Tap Game</h1>
      <button
        onClick={() => addPoints(10)}
        className="px-10 py-6 text-xl font-bold bg-purple-500 text-white rounded-3xl shadow"
      >
        TAP +10
      </button>
    </div>
  );
          }
