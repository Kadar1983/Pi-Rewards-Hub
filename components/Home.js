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
    <div className="flex flex-col items-center p-6">
      <button onClick={login}>{user ? "Switch Account" : "Login with Pi"}</button>
      <button onClick={claim} disabled={!user}>Claim Reward</button>
      <button onClick={() => navigate("/rewards")}>🏆 Rewards</button>
      <button onClick={() => navigate("/withdraw")}>💰 Withdraw</button>
      <button onClick={() => navigate("/game")}>🎮 Game</button>
    </div>
  );
    }
