import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [points, setPoints] = useState(0);

  // محاكاة Pi SDK للـ Desktop
  useEffect(() => {
    if (typeof window !== "undefined" && !window.Pi) {
      window.Pi = {
        init: () => console.log("Pi init mock"),
        authenticate: (scopes, success, error) => {
          const username = "TestUser"; // اسم وهمي
          success({ user: { username } });
        },
      };
    }
  }, []);

  const login = () => {
    if (!window.Pi) return alert("Pi SDK غير متاح");

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

  const loadRewards = async (username) => {
    const mockPoints = parseInt(localStorage.getItem("pi_points")) || 0;
    setPoints(mockPoints);
  };

  const addPoints = (p) => {
    const newPoints = points + p;
    setPoints(newPoints);
    localStorage.setItem("pi_points", newPoints);
  };

  return (
    <AppContext.Provider value={{ user, points, login, loadRewards, addPoints }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
