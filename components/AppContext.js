import { createContext, useContext, useState, useEffect } from "react";

// إنشاء Context
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // بيانات المستخدم من Pi
  const [points, setPoints] = useState(0);

  // تسجيل الدخول عبر Pi Browser
  useEffect(() => {
    const login = async () => {
      if (window.Pi) {
        try {
          const userData = await window.Pi.authenticate({ scope: "username" });
          setUser({
            username: userData.username,
            id: userData.id
          });

          // هنا يمكنك جلب النقاط من قاعدة بياناتك أو محفظة Pi
          setPoints(0); // مؤقتًا يمكن أن تبدأ بصفر
        } catch (err) {
          console.error("Pi Login failed:", err);
        }
      }
    };

    login();
  }, []);

  const addPoints = (n) => {
    setPoints((prev) => prev + n);
  };

  return (
    <AppContext.Provider value={{ user, points, addPoints }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook للاستخدام داخل أي مكون
export const useApp = () => useContext(AppContext);
