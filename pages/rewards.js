import { useState, useEffect } from "react";
import Layout from "../components/Layout";

export default function Rewards() {
  const [streak, setStreak] = useState(0);
  const [claimedToday, setClaimedToday] = useState(false);

  useEffect(() => {
    const savedStreak = localStorage.getItem("pi_streak");
    const lastClaim = localStorage.getItem("pi_last_claim");
    if (savedStreak) setStreak(Number(savedStreak));

    if (lastClaim) {
      const today = new Date().toDateString();
      setClaimedToday(lastClaim === today);
    }
  }, []);

  const claimReward = () => {
    if (claimedToday) return alert("You already claimed today!");
    const today = new Date().toDateString();
    const newStreak = streak + 1;

    setStreak(newStreak);
    setClaimedToday(true);

    localStorage.setItem("pi_streak", newStreak);
    localStorage.setItem("pi_last_claim", today);

    alert(`Daily reward claimed! Streak: ${newStreak}`);
  };

  return (
    <Layout>
      <div className="card text-center">
        <h2 className="text-gold font-bold text-xl">🎁 Daily Reward</h2>
        <p className="mt-2 text-gray-400">
          Your current streak: <strong>{streak}</strong> days
        </p>
        <button
          onClick={claimReward}
          className="btn-gold w-full mt-4 text-lg"
        >
          {claimedToday ? "Already Claimed" : "Claim Reward"}
        </button>
      </div>
    </Layout>
  );
}
