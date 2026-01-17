import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link href="/">🏠 Home</Link>
      <Link href="/game">🎮 Game</Link>
      <Link href="/rewards">🎁 Rewards</Link>
      <Link href="/withdraw">💰 Withdraw</Link>
      <Link href="/profile">🧑‍💻 Profile</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-around",
    padding: 10,
    background: "#0288d1",
    color: "#fff",
    fontWeight: "bold",
  },
};
