import Layout from "../components/Layout";
import PiAuth from "../components/PiAuth";
import WalletConnect from "../components/WalletConnect";
import { useState, useEffect } from "react";

export default function Home() {
  const [balance, setBalance] = useState(78.00441);

  return (
    <Layout>
      <div className="card mb-4">
        <h2 className="text-gold font-bold text-lg">Balance</h2>
        <p className="text-2xl mt-2">{balance.toFixed(5)} π</p>
        <WalletConnect />
        <PiAuth />
      </div>

      <div className="card">
        <h2 className="text-gold font-bold text-lg">Daily Rewards</h2>
        <p className="text-gray-400 mt-1">
          Claim your daily reward and keep your streak alive!
        </p>
        <button className="btn-gold w-full mt-3">Claim Now</button>
      </div>
    </Layout>
  );
  }
