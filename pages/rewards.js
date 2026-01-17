import { useApp } from "@/components/AppContext";

export default function Rewards() {
  const { user, points } = useApp();

  return (
    <div style={{ padding: 20 }}>
      <h2>🎁 Rewards</h2>
      {user ? (
        <>
          <p>المستخدم: {user}</p>
          <p>النقاط: {points}</p>
          <p>100 نقطة = 1 Pi</p>
        </>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}
