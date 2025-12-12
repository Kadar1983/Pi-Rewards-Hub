import React from "react";
import WalletConnect from "./WalletConnect";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">Pi Rewards Hub</h1>
      <WalletConnect />
    </nav>
  );
};

export default Navbar;
