import { useApp } from "../components/AppContext";

export default function Home() {
  const { user, points } = useApp();

  return (
    <div style={{ padding: 20 }}>
      <h1>Pi Rewards Hub</h1>
      <p>مرحبا {user?.username}</p>
      <p>النقاط: {points}</p>
      <ul>
        <li>🎮 <a href="/game">العب اللعبة</a></li>
        <li>🎁 <a href="/rewards">المكافآت</a></li>
        <li>💰 <a href="/withdraw">سحب</a></li>
        <li>🧑‍💻 <a href="/profile">الملف الشخصي</a></li>
      </ul>
    </div>
  );
  }
