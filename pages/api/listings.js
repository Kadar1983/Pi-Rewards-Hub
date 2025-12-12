export default function handler(req, res) {
  // Simple in-memory listings for demo. Replace with DB in production.
  const listings = [
    { id: 1, title: 'Custom Avatar', price: 1.2, seller: 'user_12' },
    { id: 2, title: 'Profile Audit', price: 2.5, seller: 'user_5' },
    { id: 3, title: 'Banner Design', price: 3.0, seller: 'user_8' },
  ];
  res.status(200).json(listings);
}
