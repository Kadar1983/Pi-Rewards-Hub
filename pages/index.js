import Layout from "../components/Layout";
import BalanceCard from "../components/BalanceCard";
import ListingCard from "../components/ListingCard";

export default function Home() {
  const listings = [
    { name: "Custom Avatar", price: 1.2, seller: "Alice" },
    { name: "Banner Design", price: 2.5, seller: "Bob" }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <BalanceCard balance="78.00441" />

        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-2">Daily Rewards</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Claim your daily reward and keep your streak alive!
          </p>
          <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-xl shadow hover:scale-105">
            Claim Now
          </button>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3">Marketplace</h2>
          {listings.map((item, i) => (
            <ListingCard key={i} item={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
    }    
