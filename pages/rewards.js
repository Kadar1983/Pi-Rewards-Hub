import Home from "../components/Home";

export default function Rewards() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">🏆 Rewards</h1>
      <p className="text-center text-gray-700">This is the Rewards page. Claim and view your rewards here!</p>
      <Home />
    </div>
  );
    }
