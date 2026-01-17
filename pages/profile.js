import { useApp } from "../components/AppContext";
export default function Profile() {
  const { user, points } = useApp();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>🧑‍💻 الملف الشخصي</h2>
      {user ? (
        <>
          <p>المستخدم: {user}</p>
          <p>النقاط: {points}</p>
        </>
      ) : <p>يرجى تسجيل الدخول أولًا</p>}
    </div>
  );
        }
