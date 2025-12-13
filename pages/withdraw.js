import Layout from "../components/Layout";
import { useState, useEffect } from "react";

export default function Withdraw() {
  const [points, setPoints] = useState(0);
  const [converted, setConverted] = useState(0);

  useEffect(() => {
    const score = localStorage.getItem("pi_score");
    if (score) setPoints(Number(score));
  }, []);

  const convertPoints = () => {
    if (points === 0) return alert("No points to convert!");
    const piAmount = (points * 0.01).toFixed(5); // Placeholder rate
    setConverted(piAmount);
    alert(`Converted ${points} points → ${piAmount} π (Demo)`);
  };

  return (
    <Layout>
      <div className="card text-center">
        <h2 className="text-gold font-bold text-xl">💰 Convert Points to Pi</h2>
        <p className="mt-2 text-gray-400">Your points: {points}</p>
        <button onClick={convertPoints} className="btn-gold w-full mt-4">
          Convert to Pi
        </button>
        {converted > 0 && (
          <p className="mt-2 text-green-400">
            You have {converted} π (Demo)
          </p>
        )}
      </div>
    </Layout>
  );
    }
