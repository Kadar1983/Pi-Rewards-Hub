import { useState } from "react";

export default function PiRewardsHub() {
  const [piID, setPiID] = useState("");
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");

  const handleAuth = async () => {
    if (!window.Pi) {
      alert("Please open in Pi Browser!");
      return;
    }
    try {
      const authUser = await window.Pi.authenticate({ PiID: piID });
      setUser(authUser);
      const userBalance = await window.Pi.getBalance({ PiID: piID });
      setBalance(userBalance);
    } catch (err) {
      console.error(err);
      alert("Authentication failed. Check your Pi ID.");
    }
  };

  const sendPi = async () => {
    if (!amount || !user) {
      alert("Enter amount or login first!");
      return;
    }
    try {
      const tx = await window.Pi.makePayment({
        fromUser: user,
        toApp: "GCCHCMOZSM53I4SKWNO6CCJHOH5WXAPRPK3LLTXE6PCQTQWOV54LQVSP",
        amount: parseFloat(amount),
      });
      alert("Transaction Successful! TX ID: " + (tx && tx.id ? tx.id : "unknown"));
      const updatedBalance = await window.Pi.getBalance({ PiID: piID });
      setBalance(updatedBalance);
      setAmount("");
    } catch (err) {
      console.error(err);
      alert("Transaction failed.");
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Pi Rewards Hub</h1>
      {!user ? (
        <div>
          <input
            type="text"
            placeholder="Enter Pi ID"
            value={piID}
            onChange={(e) => setPiID(e.target.value)}
            style={{ padding: 10, fontSize: 16, width: "80%" }}
          />
          <button onClick={handleAuth} style={{ marginLeft: 10, padding: 10 }}>
            Login / Authenticate
          </button>
        </div>
      ) : (
        <div>
          <p>Welcome, <b>{user && user.PiID ? user.PiID : "User"}</b></p>
          <p>Balance: <b>{balance} π</b></p>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ padding: 10, fontSize: 16, width: "60%" }}
          />
          <button onClick={sendPi} style={{ marginLeft: 10, padding: 10 }}>
            Send Pi
          </button>
        </div>
      )}
    </div>
  );
}


---
