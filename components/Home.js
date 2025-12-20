export default function Home() {
  const login = async () => {
    if (!window.Pi) {
      alert("Pi SDK not loaded. Open this app in Pi Browser.");
      return;
    }

    try {
      const auth = await new Promise((resolve, reject) => {
        window.Pi.authenticate(
          ["username"],
          (auth) => resolve(auth),
          (err) => reject(err)
        );
      });
      alert("Welcome " + auth.user.username);
    } catch (err) {
      alert("Login error: " + err);
    }
  };

  return (
    <div style={{
      maxWidth: 420,
      margin: "50px auto",
      padding: 20,
      background: "#fff",
      borderRadius: 12,
      textAlign: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <h2>🎁 Pi Rewards Hub</h2>
      <p>Not logged in</p>
      <button onClick={login} style={{
        width: "100%",
        padding: 12,
        borderRadius: 8,
        background: "#f5a623",
        color: "#fff",
        fontSize: 16,
        border: "none",
        cursor: "pointer",
        marginTop: 10
      }}>
        Login with Pi
      </button>
    </div>
  );
}
