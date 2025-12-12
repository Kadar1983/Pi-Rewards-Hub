import React from "react";

export default function ListingCard({ item, onBuy }) {
  return (
    <div className="card flex items-center justify-between">
      <div>
        <div className="font-bold">{item.name}</div>
        <div className="text-sm text-muted">Seller: {item.seller}</div>
      </div>
      <div className="text-right">
        <div className="text-purple-400 font-bold">{item.price} π</div>
        <button onClick={() => onBuy && onBuy(item)} className="mt-2 btn-primary text-sm px-3 py-1">Buy</button>
      </div>
    </div>
  );
    }
