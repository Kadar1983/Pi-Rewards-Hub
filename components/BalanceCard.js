export default function BalanceCard({ balance }) {
  return (
    <div className="bg-white/10 px-3 py-2 rounded-xl text-center">
      <div className="text-xs">Balance</div>
      <div className="text-lg font-bold">{balance} π</div>
    </div>
  );
}
