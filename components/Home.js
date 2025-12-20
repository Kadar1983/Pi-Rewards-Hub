import { useState } from "react";
import { PiAuth } from "./PiAuth";

export default function Home() {
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      const authUser = await PiAuth();
      setUser(authUser.username);
      alert("Welcome " + authUser.username);
    } catch (err) {
      alert(err);
    }
  };

  const claim = () => {
    if (!user) return alert("Login first!");
    alert("Claim Reward placeholder — API integration coming soon.");
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-3xl shadow-lg text-center">
      <h1 className="text-3xl font-bold mb-4">🎁 Pi Rewards Hub</h1>
      <p className="mb-6">{user ? `Logged in as ${user}` : "Not logged in"}</p>
      <button onClick={login} className="w-full py-3 mb-4 bg-yellow-500 text-white rounded-xl shadow hover:bg-yellow-600">Login with Pi</button>
      <button onClick={claim} className="w-full py-3 bg-green-500 text-white rounded-xl shadow hover:bg-green-600" disabled={!user}>Claim Reward</button>
    </div>
  );
}
