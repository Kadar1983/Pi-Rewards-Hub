import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleWithdraw = async () => {
    if (!amount) {
      setMessage("Please enter an amount");
      return;
    }

    try {
      const response = await axios.post("/api/withdraw", { amount });
      if (response && response.data) {
        setMessage(response.data.message || "Withdrawal request submitted!");
      } else {
        setMessage("Unexpected response from server");
      }
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message || "Error occurred during withdrawal"
      );
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
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={handleWithdraw}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Withdraw
      </button>
      {message && <p className="mt-4">{message}</p>}
    </Layout>
  );
};

export default Withdraw;
