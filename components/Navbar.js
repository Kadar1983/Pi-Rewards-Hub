import Link from "next/link";
import { useApp } from "./AppContext";

export default function Navbar() {
  const { user } = useApp();

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "10px 0",
      background: "linear-gradient(90deg, #4caf50, #81c784)",
      position: "fixed",
      bottom: 0,
      width: "100%",
      maxWidth: 400,
      margin: "0 auto",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      boxShadow: "0 -2px 5px rgba(0,0,0,0.2)",
      color: "white"
    }}>
      <Link href="/"><button className="nav-btn">🏠 Home</button></Link>
      <Link href="/game"><button className="nav-btn">🎮 Game</button></Link>
      <Link href="/rewards"><button className="nav-btn">🎁 Rewards</button></Link>
      <Link href="/withdraw"><button className="nav-btn">💰 Withdraw</button></Link>
      <Link href="/profile"><button className="nav-btn">🧑‍💻 Profile</button></Link>

      <style jsx>{`
        .nav-btn {
          background: none;
          color: white;
          border: none;
          font-size: 14px;
          cursor: pointer;
        }
        .nav-btn:hover {
          transform: scale(1.1);
          transition: transform 0.2s;
        }
      `}</style>
    </nav>
  );
  }
