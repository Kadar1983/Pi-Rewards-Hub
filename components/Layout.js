import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white p-4">
      <Navbar />
      <div className="max-w-2xl mx-auto mt-6">{children}</div>
    </div>
  );
}
