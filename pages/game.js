import React, { useState } from "react";
import Layout from "../components/Layout";

export default function Game() {
  const [score, setScore] = useState(0);

  return (
    <Layout>
      <div className="card">
        <h2 className="text-2xl font-bold mb-2">لعبة سريعة</h2>
        <p className="text-sm text-muted mb-4">اضغط لتكسب نقاط — 5 نقاط = 0.1 π</p>
        <div className="flex items-center gap-6">
          <div onClick={() => setScore(s => s+1)} className="w-28 h-28 rounded-full flex items-center justify-center text-white" style={{background: "linear-gradient(90deg,#f97316,#fb7185)", cursor: "pointer", fontSize: 28}}>⚽</div>
          <div>
            <div className="text-xl font-bold">Score: {score}</div>
            <div className="mt-3 flex gap-2">
              <button onClick={() => {
                if (score < 5) { alert("تحتاج 5 نقاط للتحويل"); return; }
                const sets = Math.floor(score/5);
                const reward = +(sets * 0.1).toFixed(6);
                const s = localStorage.getItem("pi_rewards_v1");
                const state = s ? JSON.parse(s) : { balance: 78.00441, gameScore: 0, activity: [] };
                state.balance = +(state.balance + reward).toFixed(6);
                state.gameScore = score - sets*5;
                state.activity = [(new Date()).toLocaleString() + ` — converted ${sets*5} pts to ${reward} π`, ... (state.activity || [])].slice(0,50);
                localStorage.setItem("pi_rewards_v1", JSON.stringify(state));
                alert(`Converted ${sets*5} pts → ${reward} π (saved)`);
              }} className="btn-primary">Convert</button>
              <button onClick={() => setScore(0)} className="btn-ghost">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
