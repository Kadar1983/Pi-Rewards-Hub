import Link from "next/link";
import { useApp } from "../components/AppContext";

export default function Home() {
  const { user, login, points } = useApp();

  return (
    <div style={{ padding: 20 }}>
      <h1>Pi Rewards Hub</h1>

      {user ? (
        <>
          <p>مرحبا {user}</p>
          <p>النقاط: {points}</p>
          <br />
          <Link href="/game">🎮 العب اللعبة</Link>
          <br />
          <Link href="/rewards">🎁 المكافآت</Link>
          <br />
          <Link href="/withdraw">💰 سحب</Link>
        </>
      ) : (
        <button onClick={login}>Login with Pi</button>
      )}
    </div>
  );
    }
