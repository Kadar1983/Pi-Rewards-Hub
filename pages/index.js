import Layout from "../components/Layout";
import PiAuth from "../components/PiAuth";
import WalletConnect from "../components/WalletConnect";
import { useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState(78.00441);

  // دالة الدفع خطوة 10
  const payPi = () => {
    if (!window.Pi) {
      alert("Pi SDK غير جاهز بعد. حاول مرة أخرى.");
      return;
    }

    window.Pi.createPayment({
      amount: 0.01,
      memo: "Test Payment - Rewards Hub Pi",
      metadata: { app: "Rewards Hub Pi" }
    }, {
      onReadyForServerApproval(paymentId) {
        console.log("Approval:", paymentId);
      },
      onReadyForServerCompletion(paymentId) {
        alert("Payment Success ✅");
      },
      onCancel() {
        alert("Payment Cancelled");
      },
      onError(err) {
        alert("Payment Error");
        console.error(err);
      }
    });
  };

  return (
    <Layout>
      {/* Balance Card */}
      <div className="card mb-4">
        <h2 className="text-gold font-bold text-lg">Balance</h2>
        <p className="text-2xl mt-2">{balance.toFixed(5)} π</p>
        <WalletConnect />
        <PiAuth />
      </div>

      {/* Daily Rewards Card */}
      <div className="card mb-4">
        <h2 className="text-gold font-bold text-lg">Daily Rewards</h2>
        <p className="text-gray-400 mt-1">
          Claim your daily reward and keep your streak alive!
        </p>
        <button className="btn-gold w-full mt-3">Claim Now</button>
      </div>

      {/* Test Payment Card خطوة 10 */}
      <div className="card">
        <h2 className="text-gold font-bold text-lg">Test Payment</h2>
        <p className="text-gray-400 mt-1">
          اضغط الزر لتأكيد أن التطبيق جاهز لاستقبال المدفوعات.
        </p>
        <button
          className="btn-gold w-full mt-3"
          onClick={payPi}
        >
          Pay 0.01 Pi
        </button>
      </div>
    </Layout>
  );
        }
