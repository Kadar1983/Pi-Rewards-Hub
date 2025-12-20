import { useState } from "react";

export default function Withdraw() {
  const [amount, setAmount] = useState("");

  const handleWithdraw = () => {
    if (!amount) return alert("Enter amount first!");
    alert(`Withdrawal request for ${amount} π submitted! (Placeholder)`);
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-3xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">💰 Withdraw</h1>
      <input
        type="number"
        placeholder="Amount to withdraw"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        onClick={handleWithdraw}
        className="w-full py-3 bg-green-500 text-white rounded-xl font-semibold shadow hover:bg-green-600 transition"
      >
        Withdraw
      </button>
    </div>
  );
          }
