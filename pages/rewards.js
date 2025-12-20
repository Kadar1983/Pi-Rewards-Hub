export default function Rewards() {
  const rewardsList = [
    { id: 1, title: "Daily Bonus", amount: "10 π" },
    { id: 2, title: "Weekly Challenge", amount: "50 π" },
    { id: 3, title: "Referral Reward", amount: "20 π" },
  ];

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-3xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">🏆 Rewards</h1>
      <div className="space-y-4">
        {rewardsList.map(reward => (
          <div
            key={reward.id}
            className="p-4 rounded-xl shadow hover:shadow-lg transition flex justify-between items-center bg-gradient-to-r from-purple-100 to-blue-100"
          >
            <span className="font-semibold">{reward.title}</span>
            <span className="font-bold">{reward.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
