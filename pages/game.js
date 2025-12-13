import { useState, useEffect } from "react";
import Layout from "../components/Layout";

export default function Game() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("pi_score");
    if (saved) setScore(Number(saved));
  }, []);

  const tap = () => {
    const newScore = score + 1;
    setScore(newScore);
    localStorage.setItem("pi_score", newScore);
  };

  return (
    <Layout>
      <div className="card text-center">
        <h2 className="text-gold font-bold text-xl">🎮 Tap & Earn</h2>
        <p className="text-4xl my-6">{score}</p>
        <button
          className="btn-gold w-full text-lg active:scale-95 transition"
          onClick={tap}
        >
          TAP
        </button>
        <p className="text-xs text-gray-400 mt-4">
          Your score is saved automatically
        </p>
      </div>
    </Layout>
  );
    }
