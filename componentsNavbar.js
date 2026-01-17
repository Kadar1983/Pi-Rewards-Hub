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
      backgroundColor: "#4caf50",
      position: "fixed",
      bottom: 0,
      width: "100%",
      maxWidth: 400,
      margin: "0 auto",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      color: "white"
    }}>
      <Link href="/">
        <button style={{ background: "none", color: "white", border: "none" }}>🏠 Home</button>
      </Link>
      <Link href="/game">
        <button style={{ background: "none", color: "white", border: "none" }}>🎮 Game</button>
      </Link>
      <Link href="/rewards">
        <button style={{ background: "none", color: "white", border: "none" }}>🎁 Rewards</button>
      </Link>
      <Link href="/withdraw">
        <button style={{ background: "none", color: "white", border: "none" }}>💰 Withdraw</button>
      </Link>
      <Link href="/profile">
        <button style={{ background: "none", color: "white", border: "none" }}>🧑‍💻 Profile</button>
      </Link>
    </nav>
  );
}