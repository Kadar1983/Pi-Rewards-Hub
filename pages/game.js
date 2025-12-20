export default function Game() {
  const playGame = () => {
    alert("Game placeholder — feature coming soon!");
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-3xl shadow-lg text-center">
      <h1 className="text-2xl font-bold mb-6">🎮 Game</h1>
      <p className="mb-6">Play mini-games to earn Pi rewards! (Coming soon)</p>
      <button
        onClick={playGame}
        className="w-full py-3 bg-purple-500 text-white rounded-xl font-semibold shadow hover:bg-purple-600 transition"
      >
        Play Game
      </button>
    </div>
  );
}
