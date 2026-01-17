import { useState, useEffect } from "react";
import { useApp } from "./AppContext";

export default function Game() {
  const { user, addPoints } = useApp();
  const [time, setTime] = useState(15);
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    if (time === 0) {
      setPlaying(false);
      addPoints(score); // إضافة النقاط مباشرة
      alert(`ربحت ${score} نقاط 🎉`);
      return;
    }
    const timer = setTimeout(() => setTime((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [time, playing]);

  const startGame = () => {
    if (!user) return alert("يرجى تسجيل الدخول أولًا");
    setScore(0);
    setTime(15);
    setPlaying(true);
  };

  const tap = () => {
    if (!playing) return;
    setScore((s) => s + 1);
  };

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>🎮 Tap Game</h2>
      {!playing ? (
        <button onClick={startGame} style={{ padding: 10, fontSize: 18 }}>
          Start Game
        </button>
      ) : (
        <>
          <p>⏱️ الوقت: {time} ثانية</p>
          <p>⭐ النقاط: {score}</p>
          <button
            onClick={tap}
            style={{ padding: 30, marginTop: 20, fontSize: 20, borderRadius: "50%" }}
          >
            TAP
          </button>
        </>
      )}
    </div>
  );
  }
