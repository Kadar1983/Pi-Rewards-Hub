import React from "react";
import { motion } from "framer-motion";

const ListingCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md mb-4"
    >
      <h3 className="font-bold text-lg">{item.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-1">Price: {item.price} π</p>
      <p className="text-gray-500 text-sm">Seller: {item.seller || "Unknown"}</p>
      <button className="mt-3 bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform">
        Buy
      </button>
    </motion.div>
  );
};

export default ListingCard;
