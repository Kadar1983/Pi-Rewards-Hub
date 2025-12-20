import Home from "../components/Home";

export default function Withdraw() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">💰 Withdraw</h1>
      <p className="text-center text-gray-700">This is the Withdraw page. You can withdraw your rewards here!</p>
      <Home />
    </div>
  );
}
