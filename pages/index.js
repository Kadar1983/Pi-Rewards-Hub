import Navbar from "../components/Navbar";
import { useApp } from "../components/AppContext";

export default function Home() {
  const { user, points } = useApp();

  return (
    <div style={{ padding: 20 }}>
      <Navbar />
      <h1>Pi Rewards Hub</h1>
      <p>مرحبا {user?.username}</p>
      <p>النقاط: {points}</p>
      <p>اختر أي قسم من الأعلى للبدء</p>
    </div>
  );
  }
