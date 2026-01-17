import { useState, useEffect } from "react";
import { useApp } from "./AppContext";

export default function Game() {
  const { user, loadRewards } = useApp();
  const [time, setTime] = useState(15);
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;

    if (time === 0) {
      setPlaying(false);
      saveScore(score);
      return;
    }

    const t = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(t);
  }, [time, playing]);

  const startGame = () => {
    if (!user) return alert("Login first");
    setScore(0);
    setTime(15);
    setPlaying(true);
  };

  const tap = () => {
    if (!playing) return;
    setScore((s) => s + 1);
  };

  const saveScore = async (points) => {
    await fetch("https://YOUR_BACKEND_URL/game/score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user,
        points,
      }),
    });

    await loadRewards(user);
    alert(`ربحت ${points} نقاط`);
  };

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>🎮 Tap Game</h2>

      {!playing ? (
        <button onClick={startGame}>Start Game</button>
      ) : (
        <>
          <p>⏱️ الوقت: {time}</p>
          <p>⭐ النقاط: {score}</p>
          <button
            onClick={tap}
            style={{
              marginTop: 20,
              padding: 30,
              borderRadius: "50%",
              fontSize: 18,
            }}
          >
            TAP
          </button>
        </>
      )}
    </div>
  );
}