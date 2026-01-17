import { useApp } from "./AppContext";

// داخل اللعبة
const { user, addPoints } = useApp();

// عند الضغط على كائن
if (!user) return alert("يرجى تسجيل الدخول أولًا");
addPoints(1); // النقاط ستضاف لحساب المستخدم
