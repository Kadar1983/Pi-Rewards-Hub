import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import BalanceCard from "../components/BalanceCard";
import ListingCard from "../components/ListingCard";

const MARKET = [
  { id: "m1", name: "Custom Avatar", price: 1.2, seller: "Alice" },
  { id: "m2", name: "Banner Design", price: 2.5, seller: "Bob" }
];

export default function Home() {
  const [balance, setBalance] = useState(78.00441);
  const [activity, setActivity] = useState([]);
  const [gameScore, setGameScore] = useState(0);

  useEffect(() => {
    const s = typeof window !== "undefined" && localStorage.getItem("pi_rewards_v1");
    if (s) {
      const parsed = JSON.parse(s);
      setBalance(parsed.balance ?? 78.00441);
      setActivity(parsed.activity ?? []);
      setGameScore(parsed.gameScore ?? 0);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("pi_rewards_v1", JSON.stringify({ balance, activity, gameScore }));
    }
  }, [balance, activity, gameScore]);

  const pushActivity = (text) => setActivity(prev => [ `${new Date().toLocaleString()} — ${text}`, ...prev ].slice(0,50));

  const handleClaimDaily = () => {
    const last = typeof window !== "undefined" && localStorage.getItem("pi_last_daily");
    if (last) {
      const diff = Date.now() - new Date(last).getTime();
      if (diff < 24*60*60*1000) {
        alert("لقد قمت بالمطالبة اليوم. حاول لاحقاً.");
        return;
      }
    }
    const reward = 0.05;
    setBalance(prev => +(prev + reward).toFixed(6));
    localStorage.setItem("pi_last_daily", new Date().toISOString());
    pushActivity(`مطالبة يومية +${reward} π`);
  };

  const handleBuy = (item) => {
    if (balance < item.price) { alert("الرصيد غير كافٍ."); return; }
    setBalance(prev => +(prev - item.price).toFixed(6));
    pushActivity(`تم شراء ${item.name} - ${item.price} π`);
  };

  const handleConvertGame = () => {
    if (gameScore < 5) { alert("تحتاج 5 نقاط لتحويل."); return; }
    const sets = Math.floor(gameScore / 5);
    const pointsUsed = sets * 5;
    const reward = +(sets * 0.1).toFixed(6);
    setGameScore(prev => prev - pointsUsed);
    setBalance(prev => +(prev + reward).toFixed(6));
    pushActivity(`حوّلت ${pointsUsed} نقاط إلى ${reward} π`);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <BalanceCard balance={balance} />

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">المكافأة اليومية</h3>
              <p className="text-muted">احصل على مكافأتك اليومية وابقى بالسلسلة.</p>
            </div>
            <div className="flex gap-2">
              <button onClick={handleClaimDaily} className="btn-primary">Claim Now</button>
              <button onClick={() => { const a = prompt("مقدار السحب (π)"); if (a) alert("استخدم صفحة Withdraw"); }} className="btn-ghost">Withdraw</button>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold">Marketplace</h3>
          {MARKET.map(it => <ListingCard key={it.id} item={it} onBuy={handleBuy} />)}
        </div>

        <div className="card">
          <h3 className="text-lg font-bold mb-2">Mini Game</h3>
          <p className="text-sm text-muted mb-3">اضغط على الدائرة لكسب نقاط، 5 نقاط = 0.1 π</p>
          <div className="flex items-center gap-4">
            <div onClick={() => setGameScore(s => s+1)} className="w-16 h-16 rounded-full flex items-center justify-center text-white" style={{background: "linear-gradient(90deg,#ff7ab6,#7c3aed)", cursor: "pointer", fontSize: 22}}>+</div>
            <div>
              <div className="font-bold">Score: {gameScore}</div>
              <div className="flex gap-2 mt-2">
                <button onClick={handleConvertGame} className="btn-primary text-sm">Convert</button>
                <button onClick={() => setGameScore(0)} className="btn-ghost">Reset</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-bold mb-2">النشاط الأخير</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted">
            {activity.length === 0 ? <li className="text-slate-400">لا نشاط بعد</li> : activity.map((a,i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
