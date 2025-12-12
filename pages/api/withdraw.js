export default function handler(req, res) {
  if (req.method === "POST") {
    const { amount } = req.body;

    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    return res.status(200).json({
      message: `Withdrawal request for ${amount} Pi has been received!`,
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
