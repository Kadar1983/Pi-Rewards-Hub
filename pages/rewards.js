export default function handler(req, res) {
  return res.status(200).json({ reward: 0.02, message: "Reward claimed" });
}
