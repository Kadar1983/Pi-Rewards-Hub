import { useState } from "react";

export default function PiRewardsHub() {
  const [piID, setPiID] = useState("");
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");

  // تسجيل الدخول والمصادقة
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

  // إرسال Pi إلى التطبيق
  const sendPi = async () => {
    if (!amount || !user) {
      alert("Enter amount or login first!");
      return;
    }
    try {
      const tx = await window.Pi.makePayment({
        fromUser: user,
        toApp: "APP_WALLET_ADDRESS", // استبدل بمحفظة التطبيق الفعلية
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
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
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
          <button onClick={handleAuth} style={{ padding: 10, marginLeft: 10 }}>
            Login / Authenticate
          </button>
        </div>
      ) : (
        <div>
          <p>
            Welcome, <b>{user.PiID}</b>
          </p>
          <p>
            Balance: <b>{balance} π</b>
          </p>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ padding: 10, fontSize: 16, width: "60%" }}
          />
          <button onClick={sendPi} style={{ padding: 10, marginLeft: 10 }}>
            Send Pi
          </button>
        </div>
      )}
    </div>
  );
}


---
