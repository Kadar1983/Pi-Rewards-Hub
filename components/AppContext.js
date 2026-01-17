import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "TestUser" });
  const [points, setPoints] = useState(0);
  const [dark, setDark] = useState(false);

  const addPoints = (n) => setPoints((p) => p + n);
  const toggleDark = () => setDark((d) => !d);

  return (
    <AppContext.Provider value={{ user, points, addPoints, dark, toggleDark }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
