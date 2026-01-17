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
      addPoints(score);
      alert(`🎉 ربحت ${score} نقاط`);
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
        <button
          onClick={startGame}
          style={{
            padding: "10px 20px",
            fontSize: 18,
            borderRadius: 15,
            background: "linear-gradient(90deg, #42a5f5, #1e88e5)",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Start Game
        </button>
      ) : (
        <>
          <p>⏱️ الوقت: {time} ثانية</p>
          <p>⭐ النقاط: {score}</p>
          <button
            onClick={tap}
            style={{
              padding: 40,
              marginTop: 20,
              fontSize: 22,
              borderRadius: "50%",
              background: "linear-gradient(90deg, #fdd835, #ffca28)",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}
          >
            TAP
          </button>
        </>
      )}
    </div>
  );
  }
