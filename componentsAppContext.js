import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [points, setPoints] = useState(0);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const p = localStorage.getItem("points");
    const d = localStorage.getItem("dark");
    if (p) setPoints(Number(p));
    if (d) setDark(d === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("points", points);
    localStorage.setItem("dark", dark);
  }, [points, dark]);

  const addPoints = (n) => setPoints(v => v + n);
  const toggleDark = () => setDark(v => !v);

  return (
    <AppContext.Provider value={{ points, addPoints, dark, toggleDark }}>
      <div className={dark ? "dark" : ""}>{children}</div>
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);