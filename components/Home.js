import { useState } from "react";
import { PiAuth } from "./PiAuth";

export default function Home() {
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      const authUser = await PiAuth();
      setUser(authUser.username);
      alert(`Welcome ${authUser.username}`);
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-50 to-blue-50 p-6">
      <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
        🎁 Pi Rewards Hub
      </h1>

      <p className="mb-6">{user ? `Logged in as ${user}` : "Not logged in"}</p>

      <button
        onClick={login}
        className="w-64 py-3 mb-4 bg-yellow-500 text-white font-bold rounded-xl shadow hover:bg-yellow-600 transition"
      >
        {user ? "Switch Account" : "Login with Pi"}
      </button>

      <button
        onClick={() => alert("Claim Reward")}
        disabled={!user}
        className="w-64 py-3 mb-6 bg-green-500 text-white font-bold rounded-xl shadow hover:bg-green-600 transition disabled:opacity-50"
      >
        Claim Reward
      </button>
    </div>
  );
    }
