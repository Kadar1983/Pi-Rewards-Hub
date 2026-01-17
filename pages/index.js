import { useApp } from "../components/AppContext";
import Link from "next/link";

export default function Home() {
  const { user, login, points } = useApp();

  return (
    <div style={{
      padding: 20,
      textAlign: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>Pi Rewards Hub</h1>
      {!user ? (
        <button
          onClick={login}
          style={{
            padding: "10px 20px",
            fontSize: 18,
            marginTop: 20,
            borderRadius: 10,
            background: "linear-gradient(90deg, #4caf50, #81c784)",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Login with Pi
        </button>
      ) : (
        <>
          <p style={{ fontSize: 16 }}>مرحبا <strong>{user}</strong></p>
          <p style={{ fontSize: 16 }}>النقاط: <strong>{points}</strong></p>

          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 15 }}>
            <Link href="/game"><button className="card-btn">🎮 العب اللعبة</button></Link>
            <Link href="/rewards"><button className="card-btn">🎁 المكافآت</button></Link>
            <Link href="/withdraw"><button className="card-btn">💰 سحب</button></Link>
            <Link href="/profile"><button className="card-btn">🧑‍💻 الملف الشخصي</button></Link>
          </div>

          <style jsx>{`
            .card-btn {
              padding: 15px;
              border-radius: 15px;
              font-size: 16px;
              background: linear-gradient(90deg, #ff8a65, #ff7043);
              color: white;
              border: none;
              cursor: pointer;
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
              transition: transform 0.2s;
            }
            .card-btn:hover {
              transform: scale(1.05);
            }
          `}</style>
        </>
      )}
    </div>
  );
}
