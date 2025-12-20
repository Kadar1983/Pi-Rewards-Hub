export default function Home() {
  const login = () => {
    if (!window.Pi) {
      alert("Pi SDK not available");
      return;
    }

    window.Pi.authenticate(
      ["username"],
      (auth) => {
        alert("Welcome " + auth.user.username);
      },
      (error) => {
        alert("Error: " + error);
      }
    );
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>🎁 Rewards Hub Pi</h2>
      <button onClick={login}>Login with Pi</button>
    </div>
  );
}
