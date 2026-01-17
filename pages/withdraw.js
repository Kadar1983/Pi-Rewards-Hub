import { useApp } from "../components/AppContext";
export default function Withdraw() {
  const { user, points } = useApp();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>💰 Withdraw</h2>
      {user ? (
        <>
          <p>النقاط المتاحة: {points}</p>
          <p>ميزة السحب ستضاف لاحقًا</p>
        </>
      ) : <p>يرجى تسجيل الدخول أولًا</p>}
    </div>
  );
        }
