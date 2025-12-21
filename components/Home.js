import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [user, setUser] = useState(null);
  const [piReady, setPiReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.Pi) {
        setPiReady(true);
      } else {
        const script = document.createElement("script");
        script.src = "https://sdk.minepi.com/pi-sdk.js";
        script.async = true;
        script.onload = () => {
          if (window.Pi) window.Pi.init({ version: "2.0", sandbox: true });
          setPiReady(true);
        };
        document.body.appendChild(script);
      }
    }
  }, []);

  const login = async () => {
    if (!window.Pi) return alert("Please open in Pi Browser.");
    try {
      window.Pi.authenticate(["username"], (authUser) => {
        setUser(authUser.username);
        alert(`Welcome ${authUser.username}`);
      }, (err) => alert("Login failed: " + err));
    } catch (err) {
      alert(err.message);
    }
  };

  const claimReward = () => {
    if (!user) return alert("Login first!");
    alert("Reward claimed!");
  };

  const navigate = (path) => router.push(path);

  if (!piReady) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-700 to-blue-500 text-white font-bold text-center p-4">
        ⚠️ Loading Pi SDK... Please open in Pi Browser
      </div>
    );
  }

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
        onClick={claimReward}
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
