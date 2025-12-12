export default function ListingCard({ item }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg mb-4">
      <h3 className="text-lg font-bold">{item.name}</h3>
      <p className="text-purple-600 dark:text-purple-300 font-bold mt-1">
        Price: {item.price} π
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Seller: {item.seller}
      </p>
      <button className="mt-3 w-full bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-2 rounded-xl hover:scale-105 transition">
        Buy
      </button>
    </div>
  );
    }
