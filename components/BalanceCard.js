export default function BalanceCard({ balance }) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-xl mb-6">
      <h2 className="text-xl font-bold">Balance</h2>
      <p className="text-3xl font-extrabold mt-2">{balance} π</p>
      <button className="mt-4 bg-white text-indigo-600 font-bold px-4 py-2 rounded-xl shadow hover:scale-105 transition">
        Connect Wallet
      </button>
    </div>
  );
    }
