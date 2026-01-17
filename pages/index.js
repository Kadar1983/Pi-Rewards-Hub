import Link from "next/link";
import { useApp } from "@/components/AppContext";

export default function Home() {
  const { user, login, points } = useApp();

  return (
    <div style={{ padding: 20 }}>
      <h1>Pi Rewards Hub</h1>

      {user ? (
        <>
          <p>Welcome {user}</p>
          <p>Points: {points}</p>

          <Link href="/game">🎮 Play Game</Link>
          <br />
          <Link href="/rewards">🎁 Rewards</Link>
        </>
      ) : (
        <button onClick={login}>Login with Pi</button>
      )}
    </div>
  );
}
