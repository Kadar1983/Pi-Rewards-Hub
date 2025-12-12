import React from "react";
import { motion } from "framer-motion";

const BalanceCard = ({ balance }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6"
    >
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Balance</h2>
      <p className="text-3xl font-bold mt-2 text-blue-600 dark:text-blue-400">{balance} π</p>
    </motion.div>
  );
};

export default BalanceCard;
