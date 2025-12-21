import { useApp } from "../components/AppContext";

export default function Profile() {
  const { points, dark, toggleDark } = useApp();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">👤 Profile</h1>
      <p className="text-lg">Points: {points}</p>
      <button
        onClick={toggleDark}
        className="px-6 py-3 rounded-xl bg-black text-white"
      >
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}