import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-2xl flex justify-between items-center">
      <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Pi Rewards Hub
      </h1>

      <div className="flex gap-4 text-sm font-medium">
        <Link href="/">Dashboard</Link>
        <Link href="/rewards">Rewards</Link>
        <Link href="/withdraw">Withdraw</Link>
      </div>
    </nav>
  );
}
