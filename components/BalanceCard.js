import React from "react";

export default function BalanceCard({ balance }) {
  return (
    <div className="card flex items-center justify-between">
      <div>
        <div className="text-sm text-muted">الرصيد</div>
        <div className="text-3xl font-extrabold mt-1">{Number(balance).toFixed(5)} <span className="text-lg">π</span></div>
      </div>
      <div className="flex flex-col gap-2">
        <button className="btn-primary">Connect Wallet</button>
        <div className="text-xs text-muted">KYC required for withdrawals</div>
      </div>
    </div>
  );
    }
