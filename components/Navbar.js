import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Pi Rewards Hub</h1>
      <button className="bg-white text-blue-500 px-3 py-1 rounded">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
