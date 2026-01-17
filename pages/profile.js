import Navbar from "../components/Navbar";
import { useApp } from "../components/AppContext";

export default function Profile() {
  const { user, points, toggleDark, dark } = useApp();

  return (
    <div style={{ padding: 20 }}>
      <Navbar />
      <h1>الملف الشخصي</h1>
      <p>👤 المستخدم: {user?.username}</p>
      <p>⭐ النقاط: {points}</p>
      <p>الوضع: {dark ? "🌙 Dark" : "☀️ Light"}</p>
      <button onClick={toggleDark}>تبديل الوضع</button>
    </div>
  );
}
