import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PiAuth from "../components/PiAuth";
import WalletConnect from "../components/WalletConnect";

export default function Home() {
  const [balance, setBalance] = useState(78.00441);
  const [piReady, setPiReady] = useState(false);

  // تهيئة Pi SDK (Sandbox)
  useEffect(() => {
    if (typeof window !== "undefined" && window.Pi) {
      try {
        window.Pi.init({
          version: "2.0",
          sandbox: true, // ✅ مهم جدًا
        });
        setPiReady(true);
      } catch (e) {
        console.error("Pi init error:", e);
      }
    }
  }, []);

  // Test Payment (Step 10)
  const payPi = () => {
    if (!window.Pi) {
      alert("❌ افتح التطبيق من Pi Browser");
      return;
    }

    window.Pi.createPayment(
      {
        amount: 1,
        memo: "Sandbox Test Payment",
        metadata: {
          app: "Rewards Hub Pi",
          test: true,
        },
      },
      {
        onReadyForServerApproval(paymentId) {
          console.log("Approval needed:", paymentId);
        },

        onReadyForServerCompletion(paymentId) {
          console.log("Completed:", paymentId);
          alert("✅ Test Payment Successful");
        },

        onCancel() {
          alert("❌ Payment Cancelled");
        },

        onError(error) {
          console.error(error);
          alert("❌ Payment Error");
        },
      }
    );
  };

  return (
    <Layout>
      {/* Balance */}
      <div className="card mb-4">
        <h2 className="text-gold font-bold text-lg">Balance</h2>
        <p className="text-2xl mt-2">{balance.toFixed(5)} π</p>

        <WalletConnect />
        <PiAuth />

        {!piReady && (
          <p className="text-red-400 text-sm mt-2">
            ❌ افتح التطبيق من Pi Browser
          </p>
        )}
      </div>

      {/* Daily Rewards */}
      <div className="card mb-4">
        <h2 className="text-gold font-bold text-lg">Daily Rewards</h2>
        <p className="text-gray-400 mt-1">
          Claim your daily reward and keep your streak alive!
        </p>
        <button className="btn-gold w-full mt-3">
          Claim Now
        </button>
      </div>

      {/* Step 10 */}
      <div className="card">
        <h2 className="text-gold font-bold text-lg">Test Payment</h2>
        <p className="text-gray-400 mt-1">
          هذا دفع تجريبي (Sandbox) لإكمال خطوة 10.
        </p>

        <button
          className="btn-gold w-full mt-3"
          onClick={payPi}
          disabled={!piReady}
        >
          Test Pay (Sandbox)
        </button>
      </div>
    </Layout>
  );
        }
