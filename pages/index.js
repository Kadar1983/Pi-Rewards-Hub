import Link from "next/link";
import { useApp } from "../components/AppContext";

export default function Home() {
  const { user, login, points } = useApp();

  return (
    <div style={{
      maxWidth: 400,
      margin: "0 auto",
      padding: 20,
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh"
    }}>
      <h1>Pi Rewards Hub</h1>

      {!user ? (
        <button
          onClick={login}
          style={{
            padding: "10px 20px",
            fontSize: 18,
            marginTop: 20,
            cursor: "pointer"
          }}
        >
          Login with Pi
        </button>
      ) : (
        <>
          <p>مرحبا <strong>{user}</strong></p>
          <p>النقاط: <strong>{points}</strong></p>

          <div style={{ marginTop: 20 }}>
            <Link href="/game">
              <button style={{ padding: 10, margin: 5 }}>🎮 العب اللعبة</button>
            </Link>
            <Link href="/rewards">
              <button style={{ padding: 10, margin: 5 }}>🎁 المكافآت</button>
            </Link>
            <Link href="/withdraw">
              <button style={{ padding: 10, margin: 5 }}>💰 سحب</button>
            </Link>
            <Link href="/profile">
              <button style={{ padding: 10, margin: 5 }}>🧑‍💻 الملف الشخصي</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
            }
