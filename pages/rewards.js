import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

export default function Rewards() {
  const [rewards, setRewards] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await axios.get("/api/rewards");
        setRewards(res.data || []);
      } catch (e) {
        setError("فشل تحميل المكافآت");
      }
    }
    load();
  }, []);

  return (
    <Layout>
      <div className="card">
        <h2 className="text-2xl font-bold mb-2">مركز المكافآت</h2>
        {error && <div className="text-red-400 mb-3">{error}</div>}
        <ul className="space-y-3">
          {rewards.map((r, i) => (
            <li key={i} className="p-3 rounded-lg bg-white/3 flex justify-between">
              <div>
                <div className="font-bold">{r.name}</div>
                <div className="text-sm text-muted">{r.description || ""}</div>
              </div>
              <div className="text-purple-300 font-bold">{r.points} pts</div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
