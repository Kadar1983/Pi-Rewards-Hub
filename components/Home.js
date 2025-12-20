import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  const login = async () => {
    if (!window.Pi) {
      alert("Pi SDK not loaded. Open this app in Pi Browser.");
      return;
    }

    try {
      const auth = await new Promise((resolve, reject) => {
        window.Pi.authenticate(
          ["username"],
          (auth) => resolve(auth),
          (err) => reject(err)
        );
      });
      setUser(auth.user.username);
      alert("Welcome " + auth.user.username);
    } catch (err) {
      alert("Login error: " + err);
    }
  };

  const claim = () => {
    alert("Claim Reward placeholder — API integration coming soon.");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">🎁 Pi Rewards Hub</h1>
      <p className="text-center mb-6">{user ? `Logged in as ${user}` : "Not logged in"}</p>

      <button
        onClick={login}
        className="w-full py-3 mb-4 bg-yellow-500 text-white rounded-lg font-semibold shadow hover:bg-yellow-600 transition"
      >
        {user ? "Switch Account" : "Login with Pi"}
      </button>

      <button
        onClick={claim}
        className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-green-600 transition"
        disabled={!user}
      >
        Claim Reward
      </button>

      <div className="mt-8 flex justify-around text-gray-500">
        <button>🏆 Rewards</button>
        <button>💰 Withdraw</button>
        <button>🎮 Game</button>
      </div>
    </div>
  );
          }
