import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

export default function Withdraw() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async () => {
    const val = parseFloat(amount);
    if (!address || isNaN(val) || val <= 0) { setMsg("أدخل عنوانًا صالحًا ومبلغًا."); return; }
    try {
      const res = await axios.post("/api/withdraw", { address, amount: val });
      setMsg(res.data.message || "Requested");
    } catch (e) {
      setMsg("خطأ أثناء إرسال الطلب");
    }
  };

  return (
    <Layout>
      <div className="card">
        <h2 className="text-2xl font-bold mb-3">سحب π</h2>
        <input placeholder="عنوان المحفظة" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full p-3 rounded-lg mb-3 bg-white/5" />
        <input placeholder="المبلغ (π)" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-3 rounded-lg mb-3 bg-white/5" />
        <div className="flex gap-2">
          <button onClick={submit} className="btn-primary">طلب سحب</button>
          <button onClick={() => { setAddress(""); setAmount(""); }} className="btn-ghost">إلغاء</button>
        </div>
        {msg && <div className="mt-3 text-sm text-muted">{msg}</div>}
      </div>
    </Layout>
  );
}
