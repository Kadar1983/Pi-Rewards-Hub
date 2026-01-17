import { useApp } from "../components/AppContext";

export default function Profile() {
  const { points } = useApp();

  return (
    <div style={{ padding: 20 }}>
      <h2>🧑‍💻 Profile</h2>
      <p>النقاط الحالية: {points}</p>
    </div>
  );
}
