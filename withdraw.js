export default function handler(req, res) {
  if (req.method === 'POST') {
    const { amount } = req.body || {};
    // In live app: verify KYC, check balance, create withdraw record and schedule payout.
    return res.status(200).json({ status: 'pending', message: `تم تسجيل طلب سحب ${amount} π` });
  }
  return res.status(200).json({ status: 'ready' });
}
