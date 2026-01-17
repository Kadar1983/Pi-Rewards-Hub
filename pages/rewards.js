import { useApp } from "../components/AppContext";
import { useEffect } from "react";

export default function Rewards() {
  const { user, points, loadRewards } = useApp();

  useEffect(() => { if (user) loadRewards(user); }, [user]);

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>🎁 Rewards</h2>
      {user ? (
        <>
          <p>المستخدم: {user}</p>
          <p>النقاط: {points}</p>
          <p>100 نقطة = 1 Pi</p>
        </>
      ) : <p>يرجى تسجيل الدخول أولًا</p>}
    </div>
  );
        }
