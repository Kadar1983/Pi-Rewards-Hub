import { useState } from "react";
import Layout from "@/components/Layout";

export default function Game() {
  const [score, setScore] = useState(0);

  return (
    <Layout>
      <div className="card text-center">
        <h2 className="text-gold font-bold text-lg">Tap & Earn</h2>
        <p className="text-2xl my-4">{score} pts</p>

        <button
          className="btn-gold w-full"
          onClick={() => setScore(score + 1)}
        >
          TAP
        </button>

        <p className="text-xs text-gray-400 mt-3">
          Earn points daily (Demo)
        </p>
      </div>
    </Layout>
  );
    }
