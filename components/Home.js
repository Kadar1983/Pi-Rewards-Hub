import { useState } from "react";
import { PiAuth } from "./PiAuth";
import { useRouter } from "next/router";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const login = async () => {
    try {
      const authUser = await PiAuth();
      setUser(authUser.username);
      alert(`Welcome ${authUser.username}`);
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  const claim = () => {
    if (!user) return alert("Login first!");
    alert("Reward claimed!");
  };

  const navigate = (path) => router.push(path);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
        🎁 Pi Rewards Hub
      </h1>

      <p className="mb-6">{user ? `Logged in as ${user}` : "Not logged in"}</p>

      <button
        onClick={login}
        className="w-full max-w-sm py-3 mb-4 bg-yellow-500 text-white font-bold rounded-xl shadow hover:bg-yellow-600 transition"
      >
        {user ? "Switch Account" : "Login with Pi"}
      </button>

      <button
        onClick={claim}
        disabled={!user}
        className="w-full max-w-sm py-3 mb-6 bg-green-500 text-white font-bold rounded-xl shadow hover:bg-green-600 transition disabled:opacity-50"
      >
        Claim Reward
      </button>

      <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
        <button onClick={() => navigate("/rewards")} className="p-5 rounded-2xl shadow-lg text-white font-bold text-center text-lg bg-gradient-to-r from-purple-400 to-blue-500 transform hover:scale-105 transition">
          🏆 Rewards
        </button>
        <button onClick={() => navigate("/withdraw")} className="p-5 rounded-2xl shadow-lg text-white font-bold text-center text-lg bg-gradient-to-r from-purple-400 to-blue-500 transform hover:scale-105 transition">
          💰 Withdraw
        </button>
        <button onClick={() => navigate("/game")} className="p-5 rounded-2xl shadow-lg text-white font-bold text-center text-lg bg-gradient-to-r from-purple-400 to-blue-500 transform hover:scale-105 transition">
          🎮 Game
        </button>
      </div>
    </div>
  );
      }
