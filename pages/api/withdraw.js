export default function handler(req, res) {
  if (req.method === "POST") {
    const { address, amount } = req.body;
    if (!address || !amount || isNaN(amount) || Number(amount) <= 0) {
      return res.status(400).json({ message: "Invalid request" });
    }
    // Demo only
    return res.status(200).json({ message: `Withdrawal request for ${amount} π registered (demo).` });
  }
  res.setHeader("Allow", ["POST"]);
  return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}
