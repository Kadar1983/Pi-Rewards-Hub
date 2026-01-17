import { useApp } from "../components/AppContext";
export default function Profile() {
  const { points, user } = useApp();
  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h2>🧑‍💻 الملف الشخصي</h2>
      {user ? (
        <>
          <p>المستخدم: {user}</p>
          <p>النقاط: {points}</p>
        </>
      ) : (
        <p>يرجى تسجيل الدخول أولًا</p>
      )}
    </div>
  );
}
