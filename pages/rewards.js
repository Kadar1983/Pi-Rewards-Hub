import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const Rewards = () => {
  const [rewards, setRewards] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const response = await axios.get("/api/rewards");
        if (response && response.data) {
          setRewards(response.data);
        } else {
          setError("Unexpected response from server");
        }
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching rewards");
      }
    };
    fetchRewards();
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Your Rewards</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <ul>
        {rewards.map((reward, index) => (
          <li key={index} className="border p-4 mb-2 rounded-lg bg-white dark:bg-gray-800 shadow">
            {reward.name} - {reward.points} points
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Rewards;
