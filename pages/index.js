import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    if (window.Pi) {
      console.log("Pi SDK جاهز ✅");
    }
  }, []);

  const loginWithPi = async () => {
    if (!window.Pi) return alert("❌ Pi SDK غير محمّل");
    try {
      const user = await window.Pi.login();
      console.log("User logged in:", user);
      alert("✅ تم تسجيل الدخول");
    } catch (err) {
      console.error(err);
      alert("❌ فشل تسجيل الدخول");
    }
  };

  const connectWallet = async () => {
    if (!window.Pi) return alert("❌ Pi SDK غير محمّل");
    try {
      const wallet = await window.Pi.connectWallet();
      console.log("Wallet connected:", wallet);
      alert("✅ تم الاتصال بالمحفظة");
    } catch (err) {
      console.error(err);
      alert("❌ فشل الاتصال بالمحفظة");
    }
  };

  const testPay = async () => {
    if (!window.Pi) {
      alert("❌ Pi SDK غير محمّل! افتح التطبيق من Pi Browser فقط.");
      return;
    }
    try {
      const result = await window.Pi.requestPayment({
        amount: 0.01,           // قيمة صغيرة للتجربة
        currency: "PI",
        memo: "Sandbox Test Updated",
        sandbox: true,           // مهم لتفعيل Sandbox
      });
      console.log("Payment result:", result);
      alert("✅ تم الدفع تجريبيًا");
    } catch (err) {
      console.error("Payment failed:", err);
      alert("❌ فشل الدفع التجريبي: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎉 Rewards Hub Pi</h1>
      <button onClick={loginWithPi} style={{ margin: "10px" }}>
        Login with Pi
      </button>
      <button onClick={connectWallet} style={{ margin: "10px" }}>
        Connect Wallet
      </button>
      <button onClick={testPay} style={{ margin: "10px" }}>
        Test Pay (Sandbox)
      </button>
    </div>
  );
        }
