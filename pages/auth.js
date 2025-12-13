export default function PiAuth() {
  const login = async () => {
    if (!window.Pi) {
      alert("Open in Pi Browser");
      return;
    }

    try {
      const user = await window.Pi.authenticate(
        ["username", "payments"],
        () => {}
      );
      alert("Welcome " + user.user.username);
    } catch (e) {
      alert("Auth failed");
    }
  };

  return (
    <button onClick={login} className="btn-gold w-full">
      Login with Pi
    </button>
  );
}
