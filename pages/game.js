import Home from "../components/Home";

export default function Game() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-red-200 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-700">🎮 Game</h1>
      <p className="text-center text-gray-700">This is the Game page. Play fun games and earn rewards!</p>
      <Home />
    </div>
  );
    }
