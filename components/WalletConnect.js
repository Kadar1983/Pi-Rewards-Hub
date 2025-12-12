import React from "react";

const WalletConnect = () => {
  const handleConnect = () => {
    if (window.Pi) {
      window.Pi.request({ method: "connect" })
        .then(() => alert("Wallet connected!"))
        .catch((err) => alert("Connection failed: " + err.message));
    } else {
      alert("Pi Browser is required to connect wallet");
    }
  };

  return (
    <button
      onClick={handleConnect}
      className="bg-green-500 text-white px-4 py-2 rounded"
    >
      Connect Pi Wallet
    </button>
  );
};

export default WalletConnect;
