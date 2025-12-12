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
      <BalanceCard balance={78.00441} />

      {/* Daily Rewards */}
      <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-bold mb-2">Daily Rewards</h2>
        <p>Claim your daily reward and keep your streak alive!</p>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          Claim Now
        </button>
      </div>

      {/* Marketplace */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Marketplace</h2>
        {marketplaceItems.map((item, index) => (
          <ListingCard key={index} item={item} />
        ))}
      </div>
    </Layout>
  );
}
