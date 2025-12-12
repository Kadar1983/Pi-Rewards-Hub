import React, { useState } from "react";

export default function WalletConnect() {
  const [connected, setConnected] = useState(false);

  const handleConnect = async () => {
    if (typeof window !== "undefined" && window.Pi && typeof window.Pi.request === "function") {
      try {
        await window.Pi.request({ method: "connect" });
        setConnected(true);
        alert("Wallet connected (Pi Browser).");
      } catch (e) {
        console.error(e);
        alert("Failed to connect Pi Wallet.");
      }
    } else {
      const ok = confirm("Pi Browser not detected. Enable demo wallet for preview?");
      if (ok) {
        setConnected(true);
        alert("Demo wallet enabled.");
      }
    }
  };

  return (
    <button onClick={handleConnect} className={connected ? "px-3 py-2 rounded-lg bg-green-500 text-white" : "px-3 py-2 rounded-lg border"}>
      {connected ? "Connected" : "Connect Wallet"}
    </button>
  );
}
