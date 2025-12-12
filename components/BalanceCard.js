import React from "react";

const BalanceCard = ({ balance }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-lg font-semibold">Balance</h2>
      <p className="text-2xl mt-2">{balance} π</p>
    </div>
  );
};

export default BalanceCard;
