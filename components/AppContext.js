import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.Pi) return;

    Pi.init({ version: "2.0" });

    const savedUser = localStorage.getItem("pi_user");
    if (savedUser) {
      setUser(savedUser);
      loadRewards(savedUser);
    }
  }, []);

  // 🔐 LOGIN
  const login = () => {
    Pi.authenticate(
      ["username", "payments"],
      async (auth) => {
        const username = auth.user.username;
        setUser(username);
        localStorage.setItem("pi_user", username);
        await loadRewards(username);
      },
      (err) => console.error(err)
    );
  };

  // ⭐ LOAD REWARDS
  const loadRewards = async (username) => {
    const res = await fetch(
      `https://YOUR_BACKEND_URL/rewards/${username}`
    );
    const data = await res.json();
    setPoints(data.points || 0);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        points,
        login,
        loadRewards,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
