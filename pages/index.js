import { useState, useEffect } from "react";

export default function PiRewardsHub() {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(null);
  const [amount, setAmount] = useState("");

  // تشغيل Pi SDK
  useEffect(() => {
    if (typeof window !== "undefined" && window.Pi) {
      window.Pi.init({ version: "2.0" });
    }
  }, []);

  // تسجيل الدخول
  const handleLogin = async () => {
    if (!window.Pi) {
      alert("Please open this app inside Pi Browser!");
      return;
    }

    try {
      const auth = await window.Pi.authenticate(
        { permissions: ["username", "payments"] },
        onIncompletePayment
      );
      setUser(auth.user);
    } catch (e) {
      console.error(e);
      alert("Authentication failed!");
    }
  };

  // جلب الرصيد
  const getBalance = async () => {
    try {
      const wallet = await window.Pi.getWallet();
      setBalance(wallet.balance);
    } catch (e) {
      console.error(e);
    }
  };

  // التعامل مع مدفوعات غير مكتملة
  const onIncompletePayment = (payment) => {
    console.log("Incomplete payment:", payment);
  };

  // إرسال Pi
  const sendPi = async () => {
    if (!amount) return alert("Enter an amount!");

    try {
      const payment = await window.Pi.createPayment({
        amount: parseFloat(amount),
        memo: "Pi Rewards Hub Payment",
        metadata: { test: true }
      });

      alert("Payment completed!");
      setAmount("");
      getBalance();
    } catch (e) {
      console.error(e);
      alert("Payment failed!");
    }
  };

  return (
    <div style={{ padding: 20, textAlign: "center", fontFamily: "Arial" }}>
      <h1>Pi Rewards Hub</h1>

      {!user ? (
        <>
          <button
            onClick={handleLogin}
            style={{ padding: 10, fontSize: 18 }}
          >
            Login with Pi
          </button>
        </>
      ) : (
        <>
          <h3>Welcome, {user.username}</h3>

          <button onClick={getBalance} style={{ padding: 10, marginBottom: 10 }}>
            Refresh Balance
          </button>

          {balance !== null && (
            <p><b>Balance:</b> {balance} π</p>
          )}

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ padding: 10, width: "60%" }}
          />

          <br /><br />

          <button onClick={sendPi} style={{ padding: 10, fontSize: 18 }}>
            Send Pi
          </button>
        </>
      )}
    </div>
  );
}


---
