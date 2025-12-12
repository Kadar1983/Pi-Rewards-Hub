export default function handler(req, res) {
  if (req.method === "GET") {
    const rewards = [
      { name: "Daily Login", points: 5, description: "Claim daily login bonus" },
      { name: "Mini-Game Win", points: 10, description: "Win the mini game" },
      { name: "Referral Bonus", points: 20, description: "Invite a friend" }
    ];
    return res.status(200).json(rewards);
  }
  res.setHeader("Allow", ["GET"]);
  return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}
