import { useState, useEffect } from "react";
import { useApp } from "./AppContext";

export default function Game() {
  const { user, addPoints } = useApp();
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [objects, setObjects] = useState([]);
  const [tapAudio, setTapAudio] = useState(null);
  const [gameOverAudio, setGameOverAudio] = useState(null);
  const [dailyClaimed, setDailyClaimed] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);

  // تحميل الأصوات
  useEffect(() => {
    setTapAudio(new Audio("/sounds/tap.mp3"));
    setGameOverAudio(new Audio("/sounds/gameover.mp3"));
  }, []);

  // إنشاء كائن جديد
  const createObject = () => {
    const id = Date.now() + Math.random();
    setObjects((objs) => [
      ...objs,
      {
        id,
        x: Math.random() * 90,
        y: 0,
        speed: 2 + Math.random() * level, // سرعة أكبر مع المستوى
        scale: 1,
      },
    ]);
  };

  const startGame = () => {
    if (!user) return alert("يرجى تسجيل الدخول أولًا");
    setScore(0);
    setLevel(1);
    setGameOver(false);
    setObjects([]);
    for (let i = 0; i < 3; i++) createObject();
    loadLeaderboard();
    checkDaily();
  };

  const handleClick = (id) => {
    tapAudio?.play();
    setScore((s) => {
      const newScore = s + 1;
      addPoints(1);

      // مستوى أعلى كل 10 نقاط
      if (newScore % 10 === 0) setLevel((lvl) => lvl + 1);

      return newScore;
    });

    // تأثير حركة الكائن
    setObjects((objs) =>
      objs.map((o) => (o.id === id ? { ...o, scale: 1.3 } : o))
    );
    setTimeout(() => {
      setObjects((objs) =>
        objs.map((o) => (o.id === id ? { ...o, scale: 1 } : o))
      );
    }, 100);

    setObjects((objs) => objs.filter((o) => o.id !== id));
    createObject();
  };

  // تحريك الكائنات
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setObjects((objs) =>
        objs.map((obj) => {
          const newY = obj.y + obj.speed + score / 20;
          if (newY > 100) {
            setGameOver(true);
            gameOverAudio?.play();
            saveLeaderboard(score);
          }
          return { ...obj, y: newY };
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, [score, gameOver, level, gameOverAudio]);

  // Daily Reward
  const claimDaily = () => {
    if (dailyClaimed) return alert("تم استلام المكافأة اليوم!");
    const reward = 5; // 5 نقاط يوميًا
    addPoints(reward);
    setDailyClaimed(true);
    alert(`🎉 حصلت على ${reward} نقاط مكافأة يومية!`);
  };

  const checkDaily = () => {
    const lastClaim = localStorage.getItem("daily_reward");
    const today = new Date().toDateString();
    if (lastClaim === today) {
      setDailyClaimed(true);
    } else {
      setDailyClaimed(false);
      localStorage.setItem("daily_reward", today);
    }
  };

  // Leaderboard محلي
  const loadLeaderboard = () => {
    const lb = JSON.parse(localStorage.getItem("leaderboard")) || [];
    setLeaderboard(lb);
  };

  const saveLeaderboard = (finalScore) => {
    const lb = JSON.parse(localStorage.getItem("leaderboard")) || [];
    lb.push({ user, score: finalScore });
    lb.sort((a, b) => b.score - a.score);
    if (lb.length > 5) lb.pop(); // أعلى 5 لاعبين
    localStorage.setItem("leaderboard", JSON.stringify(lb));
    setLeaderboard(lb);
  };

  return (
    <div
      style={{
        position: "relative",
        height: "450px",
        margin: "0 auto",
        background: "#e0f7fa",
        borderRadius: 15,
        overflow: "hidden",
        textAlign: "center",
        paddingTop: 20,
      }}
    >
      <h2>🎯 Catch the Objects</h2>
      <p>⭐ النقاط: {score} | 🔺 المستوى: {level}</p>

      {!score && !gameOver && (
        <>
          <button
            onClick={startGame}
            style={{
              padding: "10px 20px",
              fontSize: 18,
              borderRadius: 15,
              background: "linear-gradient(90deg,#4caf50,#81c784)",
              color: "white",
              border: "none",
              cursor: "pointer",
              marginBottom: 10,
            }}
          >
            بدء اللعبة
          </button>
          <br />
          <button
            onClick={claimDaily}
            style={{
              padding: "8px 15px",
              fontSize: 16,
              borderRadius: 12,
              background: "#ff9800",
              color: "white",
              border: "none",
              cursor: "pointer",
              marginTop: 5,
            }}
          >
            🎁 مكافأة اليوم
          </button>
        </>
      )}

      {gameOver && (
        <>
          <p>💀 انتهت اللعبة!</p>
          <button
            onClick={startGame}
            style={{
              padding: "10px 20px",
              fontSize: 18,
              borderRadius: 15,
              background: "linear-gradient(90deg,#f44336,#e91e63)",
              color: "white",
              border: "none",
              cursor: "pointer",
              marginBottom: 10,
            }}
          >
            إعادة اللعب
          </button>
        </>
      )}

      {/* عرض الكائنات */}
      {objects.map((obj) => (
        <div
          key={obj.id}
          onClick={() => handleClick(obj.id)}
          style={{
            position: "absolute",
            top: `${obj.y}%`,
            left: `${obj.x}%`,
            width: 50,
            height: 50,
            borderRadius: "50%",
            background: "linear-gradient(90deg,#ffeb3b,#ffc107)",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
            transition: "top 0.02s linear, transform 0.1s",
            transform: `scale(${obj.scale})`,
          }}
        ></div>
      ))}

      {/* Leaderboard */}
      <div style={{ marginTop: 10, fontSize: 14, textAlign: "left" }}>
        <h3>🏆 Leaderboard</h3>
        {leaderboard.map((p, idx) => (
          <p key={idx}>
            {idx + 1}. {p.user}: {p.score} نقاط
          </p>
        ))}
      </div>
    </div>
  );
    }
