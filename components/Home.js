import { useState } from "react";
import { useRouter } from "next/router";
import { useApp } from "./AppContext";

export default function Home() {
  const [logged, setLogged] = useState(false);
  const router = useRouter();
  const { points } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 to-blue-100">

      {/* HEADER */}
      <div className="p-6 text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          🎁 Pi Rewards Hub
        </h1>
        <p className="mt-2 text-gray-700">
          {logged ? `Logged in • ${points} pts` : "Not logged in"}
        </p>
      </div>

      {/* MAIN */}
      <div className="flex-1 px-6">
        <button
          onClick={() => setLogged(true)}
          className="w-full py-3 mb-4 bg-yellow-500 text-white font-bold rounded-2xl shadow"
        >
          {logged ? "Logged" : "Login"}
        </button>

        <button
          onClick={() => alert("Reward claimed 🎉")}
          disabled={!logged}
          className="w-full py-3 mb-6 bg-green-500 text-white font-bold rounded-2xl shadow disabled:opacity-50"
        >
          Claim Reward
        </button>

        <div className="grid gap-4">
          <Card title="🏆 Rewards" onClick={() => router.push("/rewards")} />
          <Card title="💰 Withdraw" onClick={() => router.push("/withdraw")} />
          <Card title="🎮 Game" onClick={() => router.push("/game")} />
          <Card title="👤 Profile" onClick={() => router.push("/profile")} />
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="flex justify-around bg-white py-4 rounded-t-3xl shadow-lg">
        <Nav label="Rewards" onClick={() => router.push("/rewards")} />
        <Nav label="Withdraw" onClick={() => router.push("/withdraw")} />
        <Nav label="Game" onClick={() => router.push("/game")} />
        <Nav label="Profile" onClick={() => router.push("/profile")} />
      </div>
    </div>
  );
}

function Card({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-5 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold shadow-lg"
    >
      {title}
    </button>
  );
}

function Nav({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="font-semibold text-gray-700"
    >
      {label}
    </button>
  );
    }
