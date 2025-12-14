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
    if (!window.Pi) return alert("❌ Pi SDK غير محمّل");
    try {
      const result = await window.Pi.testPay({
        amount: 0.1,
        currency: "PI",
        memo: "Sandbox Test",
      });
      console.log("Payment result:", result);
      alert("✅ تم الدفع تجريبيًا");
    } catch (err) {
      console.error(err);
      alert("❌ فشل الدفع التجريبي");
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
