import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleWithdraw = async () => {
    if (!amount || amount <= 0) {
      setMessage("Please enter a valid amount");
      return;
    }

    try {
      const response = await axios.post("/api/withdraw", { amount });
      setMessage(response.data.message || "Withdrawal requested!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error during withdrawal");
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Withdraw</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="border p-3 mb-4 w-full rounded-lg"
      />
      <button
        onClick={handleWithdraw}
        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform"
      >
        Withdraw
      </button>
      {message && <p className="mt-4 text-gray-700 dark:text-gray-200">{message}</p>}
    </Layout>
  );
};

export default Withdraw;
