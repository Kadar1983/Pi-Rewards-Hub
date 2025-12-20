import { useState } from "react";
import { PiAuth } from "./PiAuth";

export default function Home() {
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      const authUser = await PiAuth();
      setUser(authUser.username);
    } catch (err) {
      alert(err);
    }
  };

  const claim = () => {
    if (!user) return alert("Login first!");
    alert("Reward claimed! (Placeholder)");
  };

  const features = [
    { name: "🏆 Rewards", link: "/rewards", color: "from-purple-400 to-blue-500" },
    { name: "💰 Withdraw", link: "/withdraw", color: "from-green-400 to-green-600" },
    { name: "🎮 Game", link: "/game", color: "from-pink-400 to-red-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 flex flex-col">
      {/* Header */}
      <header className="p-6 text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          🎁 Pi Rewards Hub
        </h1>
        <p className="text-gray-700 mt-2">{user ? `Logged in as ${user}` : "Not logged in"}</p>
      </header>

      {/* Main buttons */}
      <div className="flex flex-col items-center mt-6 gap-4 px-4">
        <button
          onClick={login}
          className="w-full max-w-sm py-3 bg-yellow-500 text-white font-bold rounded-xl shadow-lg transform hover:scale-105 transition"
        >
          {user ? "Switch Account" : "Login with Pi"}
        </button>

        <button
          onClick={claim}
          disabled={!user}
          className="w-full max-w-sm py-3 bg-green-500 text-white font-bold rounded-xl shadow-lg transform hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Claim Reward
        </button>

        <div className="grid grid-cols-1 gap-4 mt-6 w-full max-w-sm">
          {features.map((f) => (
            <a
              key={f.name}
              href={f.link}
              className={`block p-5 rounded-2xl shadow-lg text-white font-bold text-center text-lg bg-gradient-to-r ${f.color} transform hover:scale-105 transition`}
            >
              {f.name}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom navigation bar */}
      <footer className="mt-auto bg-white rounded-t-3xl shadow-lg flex justify-around py-4">
        {features.map((f) => (
          <a key={f.name} href={f.link} className="text-gray-600 hover:text-gray-900 font-semibold">
            {f.name.split(" ")[1]}
          </a>
        ))}
      </footer>
    </div>
  );
}
