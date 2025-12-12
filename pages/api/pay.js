export default function handler(req, res) {
  // In production: verify signature, validate transaction, record it in DB, broadcast to Pi mainnet.
  // This endpoint demonstrates expected shape.
  if (req.method === 'POST') {
    const { from, to, amount, txHash } = req.body || {};
    // Validate inputs...
    return res.status(200).json({ status: 'ok', message: 'Payment recorded (demo)', txHash: txHash || null });
  }
  res.status(400).json({ error: 'Invalid method' });
}
