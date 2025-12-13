import { useState } from "react";
import Layout from "../components/Layout";

export default function Game() {
  const [score, setScore] = useState(0);
  return (
    <Layout>
      <div className="card text-center">
        <h2 className="text-gold font-bold">Tap & Earn</h2>
        <p className="text-2xl my-4">{score}</p>
        <button className="btn-gold w-full" onClick={() => setScore(score + 1)}>
          TAP
        </button>
      </div>
    </Layout>
  );
}
