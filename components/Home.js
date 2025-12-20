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
    alert("Claim Reward placeholder — API integration coming soon.");
  };

  const menuItems = [
    { name: "🏆 Rewards", link: "/rewards", color: "from-purple-400 to-blue-500" },
    { name: "💰 Withdraw", link: "/withdraw", color: "from-green-400 to-green-600" },
    { name: "🎮 Game", link: "/game", color: "from-pink-400 to-red-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-4 flex flex-col justify-between">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-purple-700">🎁 Pi Rewards Hub</h1>
        <p className="text-gray-600">{user ? `Logged in as ${user}` : "Not logged in"}</p>
      </header>

      <div className="flex flex-col gap-4">
        <button
          onClick={login}
          className="w-full py-3 bg-yellow-500 text-white rounded-xl font-bold shadow hover:bg-yellow-600 transition"
        >
          {user ? "Switch Account" : "Login with Pi"}
        </button>

        <button
          onClick={claim}
          className="w-full py-3 bg-green-500 text-white rounded-xl font-bold shadow hover:bg-green-600 transition"
          disabled={!user}
        >
          Claim Reward
        </button>

        <div className="grid grid-cols-1 gap-4 mt-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={`block p-4 rounded-xl text-white font-bold shadow-lg bg-gradient-to-r ${item.color} hover:scale-105 transition transform`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <footer className="flex justify-around py-4 mt-6 bg-white rounded-t-3xl shadow-lg">
        {menuItems.map((item) => (
          <a key={item.name} href={item.link} className="text-gray-600 hover:text-gray-900 text-lg">
            {item.name.split(" ")[1]}
          </a>
        ))}
      </footer>
    </div>
  );
}
