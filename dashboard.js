import React, { useState, useEffect } from "react";
import Header from "../components/Header";

export default function Dashboard() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const storedBalance = localStorage.getItem("piBalance") || 0;
    setBalance(storedBalance);
  }, []);

  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        <h2>Dashboard</h2>
        <p>Your Pi Balance: {balance}</p>
        <button
          style={{ padding: "10px 20px", marginTop: "10px" }}
          onClick={() => setBalance(parseInt(balance) + 1)}
        >
          Claim 1 Pi
        </button>
      </main>
    </div>
  );
}