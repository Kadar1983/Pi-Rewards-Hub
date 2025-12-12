// pages/api/rewards.js
export default function handler(req, res) {
  if (req.method === "GET") {
    // بيانات تجريبية للمكافآت
    const rewards = [
      { name: "Daily Login", points: 5 },
      { name: "Mini-Game Win", points: 10 },
      { name: "Referral Bonus", points: 20 }
    ];

    return res.status(200).json(rewards);
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
