import React from "react";
import Layout from "../components/Layout";
import BalanceCard from "../components/BalanceCard";
import ListingCard from "../components/ListingCard";

const marketplaceItems = [
  { name: "Custom Avatar", price: 1.2, seller: "Alice" },
  { name: "Banner Design", price: 2.5, seller: "Bob" }
];

export default function Home() {
  return (
    <Layout>
      {/* Balance */}
      <BalanceCard balance={78.00441} />

      {/* Daily Rewards */}
      <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-xl shadow-lg mb-6">
        <h2 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-300">Daily Rewards</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          Claim your daily reward and keep your streak alive!
        </p>
        <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform">
          Claim Now
        </button>
      </div>

      {/* Marketplace */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
        {marketplaceItems.map((item, index) => (
          <ListingCard key={index} item={item} />
        ))}
      </div>
    </Layout>
  );
    }
