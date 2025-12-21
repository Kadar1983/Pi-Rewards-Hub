import { useApp } from "../components/AppContext";

export default function Rewards() {
  const { points } = useApp();
  const level = Math.floor(points / 100) + 1;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">🏆 Rewards</h1>
      <p className="text-xl">Points: {points}</p>
      <p className="text-xl">Level: {level}</p>
    </div>
  );
    }
