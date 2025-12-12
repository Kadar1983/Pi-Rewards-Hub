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
        console.error(err);
        setError(err.response?.data?.message || "Error fetching rewards");
      }
    };
    fetchRewards();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Your Rewards</h1>
        {error && <p className="text-red-500">{error}</p>}
        <ul>
          {rewards.map((reward, index) => (
            <li key={index} className="border p-2 mb-2">
              {reward.name} - {reward.points} points
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Rewards;
