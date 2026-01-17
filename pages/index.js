import { useApp } from "../components/AppContext";

export default function Home() {
  const { user, points } = useApp();

  return (
    <div style={{ padding: 20 }}>
      <h1>Pi Rewards Hub</h1>
      <p>مرحبا {user ? user.username : "جارٍ تسجيل الدخول..."}</p>
      <p>النقاط: {points}</p>

      <nav>
        <ul style={{ display: "flex", gap: 10 }}>
          <li>🎮 العب اللعبة</li>
          <li>🎁 المكافآت</li>
          <li>💰 سحب</li>
          <li>🧑‍💻 الملف الشخصي</li>
        </ul>
      </nav>

      <footer>
        <p>Pi Rewards Hub</p>
      </footer>
    </div>
  );
}
