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

  // ========== أدوات اللعبة ==========
  const createObject = () => {
    setObjects((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        x: Math.random() * 90,
        y: 0,
        speed: 1.5 + level * 0.5,
        scale: 1,
      },
    ]);
  };

  const startGame = () => {
    if (!user) {
      alert("يرجى تسجيل الدخول عبر Pi Browser");
      return;
    }

    setScore(0);
    setLevel(1);
    setGameOver(false);
    setObjects([]);
    loadLeaderboard();
    checkDaily();

    for (let i = 0; i < 3; i++) createObject();
  };

  // ========== حركة الكائنات ==========
  useEffect(() => {
    if (gameOver) return;

    const timer = setInterval(() => {
      setObjects((prev) =>
        prev.map((obj) => {
          const newY = obj.y + obj.speed;
          if (newY > 100) {
            setGameOver(true);
            saveLeaderboard(score);
          }
          return { ...obj, y: newY };
        })
      );
    }, 20);

    return () => clearInterval(timer);
  }, [gameOver, score, level]);

  // ========== عند الضغط على كائن ==========
  const hitObject = (id) => {
    setScore((prev) => {
      const newScore = prev + 1;
      addPoints(1);

      if (newScore % 10 === 0) {
        setLevel((l) => l + 1);
        createObject(); // صعوبة أعلى
      }

      return newScore;
    });

    setObjects((prev) =>
      prev
        .filter((o) => o.id !== id)
        .map((o) => ({ ...o, scale: 1 }))
    );

    createObject();
  };

  // ========== Daily Reward ==========
  const checkDaily = () => {
    const last = localStorage.getItem("daily_reward");
    const today = new Date().toDateString();
    setDailyClaimed(last === today);
  };

  const claimDaily = () => {
    if (dailyClaimed) {
      alert("تم استلام مكافأة اليوم");
      return;
    }
    addPoints(5);
    localStorage.setItem("daily_reward", new Date().toDateString());
    setDailyClaimed(true);
    alert("🎁 حصلت على 5 نقاط يومية");
  };

  // ========== Leaderboard ==========
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

  // ========== واجهة ==========
  return (
    <div style={styles.container}>
      <h2>🎮 Catch the Objects</h2>
      <p>👤 {user?.username}</p>
      <p>⭐ النقاط: {score} | 🔺 المستوى: {level}</p>

      {!score && !gameOver && (
        <>
          <button style={styles.btnGreen} onClick={startGame}>
            ▶️ بدء اللعبة
          </button>
          <button style={styles.btnOrange} onClick={claimDaily}>
            🎁 مكافأة اليوم
          </button>
        </>
      )}

      {gameOver && (
        <>
          <p>💀 انتهت اللعبة</p>
          <button style={styles.btnRed} onClick={startGame}>
            🔄 إعادة اللعب
          </button>
        </>
      )}

      {objects.map((o) => (
        <div
          key={o.id}
          onClick={() => hitObject(o.id)}
          style={{
            ...styles.object,
            top: `${o.y}%`,
            left: `${o.x}%`,
          }}
        />
      ))}

      <div style={styles.leaderboard}>
        <h3>🏆 Leaderboard</h3>
        {leaderboard.map((p, i) => (
          <p key={i}>
            {i + 1}. {p.user} — {p.score}
          </p>
        ))}
      </div>
    </div>
  );
}

// ========== Styles ==========
const styles = {
  container: {
    position: "relative",
    height: 450,
    padding: 15,
    background: "#e0f7fa",
    borderRadius: 16,
    overflow: "hidden",
    textAlign: "center",
  },
  object: {
    position: "absolute",
    width: 45,
    height: 45,
    borderRadius: "50%",
    background: "linear-gradient(135deg,#ffeb3b,#ffc107)",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0,0,0,.3)",
  },
  btnGreen: {
    padding: 10,
    margin: 5,
    borderRadius: 12,
    border: "none",
    background: "#4caf50",
    color: "#fff",
    fontSize: 16,
  },
  btnOrange: {
    padding: 8,
    margin: 5,
    borderRadius: 12,
    border: "none",
    background: "#ff9800",
    color: "#fff",
  },
  btnRed: {
    padding: 10,
    borderRadius: 12,
    border: "none",
    background: "#f44336",
    color: "#fff",
  },
  leaderboard: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "left",
  },
};
