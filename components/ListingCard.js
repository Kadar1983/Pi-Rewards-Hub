import React from "react";

const ListingCard = ({ item }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
      <h3 className="font-bold text-lg">{item.name}</h3>
      <p className="text-gray-600 dark:text-gray-300">Price: {item.price} π</p>
      <p className="text-gray-500 text-sm">Seller: {item.seller || "Unknown"}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Buy
      </button>
    </div>
  );
};

export default ListingCard;
