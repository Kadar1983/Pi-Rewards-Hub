export default function TestPayPage() {
  const testPay = async () => {
    if (!window.Pi) {
      alert("❌ Pi SDK غير محمّل! افتح التطبيق من Pi Browser فقط.");
      return;
    }
    try {
      const result = await window.Pi.testPay({
        amount: 0.01, // قيمة صغيرة جدًا للتجربة
        currency: "PI",
        memo: "Sandbox Test Minimal",
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
      <h1>🧪 Pi Test Pay Sandbox</h1>
      <button onClick={testPay} style={{ marginTop: "20px" }}>
        Test Pay (Sandbox)
      </button>
    </div>
  );
}
