import { useState } from "react";
import { PiAuth } from "./PiAuth";

export default function Home() {
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      const authUser = await PiAuth();
      setUser(authUser.username);
    } catch (err) {
      alert("Login error: " + err);
    }
  };

  const claim = () => {
    if (!user) return alert("Login first!");
    alert("Claim Reward placeholder — API integration coming soon.");
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-3xl shadow-lg text-center">
      <h1 className="text-3xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">🎁 Pi Rewards Hub</h1>
      <p className="mb-6">{user ? `Logged in as ${user}` : "Not logged in"}</p>

      <button
        onClick={login}
        className="w-full py-3 mb-4 bg-yellow-500 text-white rounded-xl font-semibold shadow hover:bg-yellow-600 transition-all"
      >
        {user ? "Switch Account" : "Login with Pi"}
      </button>

      <button
        onClick={claim}
        className="w-full py-3 mb-6 bg-green-500 text-white rounded-xl font-semibold shadow hover:bg-green-600 transition-all"
      >
        Claim Reward
      </button>

      <div className="flex justify-around text-gray-500 text-lg">
        <button>🏆 Rewards</button>
        <button>💰 Withdraw</button>
        <button>🎮 Game</button>
      </div>
    </div>
  );
  }
