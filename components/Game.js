import { useState, useEffect } from "react";
import { useApp } from "./AppContext";

export default function Game() {
  const { user, addPoints } = useApp();
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [objects, setObjects] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [dailyClaimed, setDailyClaimed] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);

  const tapSound = new Audio("/assets/tap.mp3");
  const gameOverSound = new Audio("/assets/gameover.mp3");

  const createObject = () => {
    setObjects((prev) => [
      ...prev,
      { id: Date.now() + Math.random(), x: Math.random() * 90, y: 0, speed: 1.5 + level * 0.5 },
    ]);
  };

  const startGame = () => {
    if (!user) return alert("يرجى تسجيل الدخول عبر Pi Browser");
    setScore(0);
    setLevel(1);
    setGameOver(false);
    setObjects([]);
    loadLeaderboard();
    checkDaily();
    for (let i = 0; i < 3; i++) createObject();
  };

  useEffect(() => {
    if (gameOver) return;
    const timer = setInterval(() => {
      setObjects((prev) =>
        prev.map((obj) => {
          const newY = obj.y + obj.speed;
          if (newY > 100) {
            setGameOver(true);
            saveLeaderboard(score);
            gameOverSound.play();
          }
          return { ...obj, y: newY };
        })
      );
    }, 20);
    return () => clearInterval(timer);
  }, [gameOver, score, level]);

  const hitObject = (id) => {
    if (!user) return alert("يرجى تسجيل الدخول عبر Pi Browser");
    setScore((prev) => {
      const newScore = prev + 1;
      addPoints(1);
      if (newScore % 10 === 0) {
        setLevel((l) => l + 1);
        createObject();
      }
      return newScore;
    });
    tapSound.play();
    setObjects((prev) => prev.filter((o) => o.id !== id));
    createObject();
  };

  const checkDaily = () => {
    const last = localStorage.getItem("daily_reward");
    setDailyClaimed(last === new Date().toDateString());
  };

  const claimDaily = () => {
    if (!user) return alert("يرجى تسجيل الدخول عبر Pi Browser");
    if (dailyClaimed) return alert("تم استلام مكافأة اليوم");
    addPoints(5);
    localStorage.setItem("daily_reward", new Date().toDateString());
    setDailyClaimed(true);
    alert("🎁 حصلت على 5 نقاط يومية");
  };

  const loadLeaderboard = () => {
    const lb = JSON.parse(localStorage.getItem("leaderboard")) || [];
    setLeaderboard(lb);
  };

  const saveLeaderboard = (finalScore) => {
    const lb = JSON.parse(localStorage.getItem("leaderboard")) || [];
    lb.push({ user: user.username, score: finalScore });
    lb.sort((a, b) => b.score - a.score);
    localStorage.setItem("leaderboard", JSON.stringify(lb.slice(0, 5)));
  };

  return (
    <div style={styles.container}>
      <h2>🎮 Catch the Objects</h2>
      <p>👤 {user?.username}</p>
      <p>⭐ النقاط: {score} | 🔺 المستوى: {level}</p>

      {!score && !gameOver && (
        <>
          <button style={styles.btnGreen} onClick={startGame}>▶️ بدء اللعبة</button>
          <button style={styles.btnOrange} onClick={claimDaily}>🎁 مكافأة اليوم</button>
        </>
      )}

      {gameOver && (
        <>
          <p>💀 انتهت اللعبة</p>
          <button style={styles.btnRed} onClick={startGame}>🔄 إعادة اللعب</button>
        </>
      )}

      {objects.map((o) => (
        <img
          key={o.id}
          onClick={() => hitObject(o.id)}
          src="/assets/object.png"
          style={{ ...styles.object, top: `${o.y}%`, left: `${o.x}%` }}
        />
      ))}

      <div style={styles.leaderboard}>
        <h3>🏆 Leaderboard</h3>
        {leaderboard.map((p, i) => (
          <p key={i}>{i + 1}. {p.user} — {p.score}</p>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { position: "relative", height: 450, padding: 15, background: "#e0f7fa", borderRadius: 16, overflow: "hidden", textAlign: "center" },
  object: { position: "absolute", width: 50, height: 50, cursor: "pointer" },
  btnGreen: { padding: 10, margin: 5, borderRadius: 12, border: "none", background: "#4caf50", color: "#fff", fontSize: 16 },
  btnOrange: { padding: 8, margin: 5, borderRadius: 12, border: "none", background: "#ff9800", color: "#fff" },
  btnRed: { padding: 10, borderRadius: 12, border: "none", background: "#f44336", color: "#fff" },
  leaderboard: { marginTop: 10, fontSize: 14, textAlign: "left" },
};
