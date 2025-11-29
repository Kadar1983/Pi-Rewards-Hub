import { useState } from "react";
import "./styles.css";

export default function PiRewardsHub() {
  const [piID, setPiID] = useState("");
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    if (!window.Pi) { alert("Please open in Pi Browser!"); return; }
    if (!piID) { alert("Please enter your Pi ID."); return; }
    setLoading(true);
    try {
      const authUser = await window.Pi.authenticate({ PiID: piID });
      setUser(authUser);
      const userBalance = await window.Pi.getBalance({ PiID: piID });
      setBalance(userBalance);
    } catch (err) {
      console.error(err);
      alert("Authentication failed. Check your Pi ID.");
    }
    setLoading(false);
  };

  const sendPi = async () => {
    if (!amount || !user) { alert("Enter amount or login first!"); return; }
    setLoading(true);
    try {
      const tx = await window.Pi.makePayment({
        fromUser: user,
        toApp: "APP_WALLET_ADDRESS",
        amount: parseFloat(amount),
      });
      alert("Transaction Successful! TX ID: " + tx.id);
      const updatedBalance = await window.Pi.getBalance({ PiID: piID });
      setBalance(updatedBalance);
      setAmount("");
    } catch (err) {
      console.error(err);
      alert("Transaction failed.");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Pi Rewards Hub</h1>

      {!user ? (
        <div>
          <input
            type="text"
            placeholder="Enter Pi ID"
            value={piID}
            onChange={(e) => setPiID(e.target.value)}
            disabled={loading}
          />
          <button onClick={handleAuth} disabled={loading}>
            {loading ? "Authenticating..." : "Login / Authenticate"}
          </button>
        </div>
      ) : (
        <div>
          <p className="balance">Welcome, <strong>{user.PiID}</strong></p>
          <p className="balance">Balance: <strong>{balance} π</strong></p>

          <input
            type="number"
            placeholder="Amount to Send"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            disabled={loading}
          />
          <button onClick={sendPi} disabled={loading}>
            {loading ? "Processing..." : "Send Pi"}
          </button>
        </div>
      )}
    </div>
  );
}


---
