export default function WalletConnect() {
  const connect = () => {
    if (typeof window !== "undefined" && window.Pi) {
      alert("Pi Wallet Connected (Demo)");
    } else {
      alert("Open in Pi Browser");
    }
  };

  return (
    <button onClick={connect} className="btn-gold w-full">
      Connect Pi Wallet
    </button>
  );
    }
