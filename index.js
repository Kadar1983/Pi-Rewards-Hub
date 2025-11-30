import React from "react";
import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        <h2>Welcome to Pi Rewards Hub</h2>
        <p>Manage your Pi Wallet and rewards easily.</p>
        <Link href="/login">
          <button style={{ padding: "10px 20px", marginTop: "20px" }}>Login</button>
        </Link>
      </main>
    </div>
  );
}