export default function PiAuth() {
  const login = async () => {
    if (!window.Pi) return alert("Open in Pi Browser");
    try {
      const user = await window.Pi.authenticate(["username"], () => {});
      alert("Welcome " + user.user.username);
    } catch {
      alert("Login failed");
    }
  };

  return (
    <button onClick={login} className="btn-gold w-full mt-3">
      Login with Pi
    </button>
  );
}
