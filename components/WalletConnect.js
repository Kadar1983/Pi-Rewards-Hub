import React, { useState } from "react";

const WalletConnect = () => {
  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    if (window.Pi) {
      window.Pi.request({ method: "connect" })
        .then(() => {
          setConnected(true);
          alert("Wallet connected!");
        })
        .catch((err) => alert("Connection failed: " + err.message));
    } else {
      alert("Pi Browser is required to connect wallet");
    }
  };

  return (
    <button
      onClick={handleConnect}
      className={`px-4 py-2 rounded-lg font-semibold ${
        connected
          ? "bg-green-500 text-white"
          : "bg-white text-blue-500 border border-blue-500"
      } hover:opacity-90 transition-opacity`}
    >
      {connected ? "Connected" : "Connect Wallet"}
    </button>
  );
};

export default WalletConnect;
