import { useApp } from "../components/AppContext";
import { useState } from "react";

export default function Game() {
  const { user, addPoints } = useApp();
  const [score, setScore] = useState(0);

  const handleClick = () => {
    if (!user) {
      alert("يرجى تسجيل الدخول أولًا");
      return;
    }
    addPoints(1);
    setScore(score + 1);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>لعبتك هنا</h1>
      <p>النقاط في اللعبة: {score}</p>
      <button onClick={handleClick}>اضغط على الكائن 🎯</button>
    </div>
  );
}
