import React, { useEffect } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  useEffect(() => {
    // ensure RTL for Arabic
    if (typeof document !== "undefined") document.documentElement.setAttribute("dir", "rtl");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
      <Navbar />
      <main className="container mx-auto p-4">
        {children}
      </main>
      <footer className="fixed left-0 right-0 bottom-0 p-3 bg-black/20 backdrop-blur-md text-sm text-slate-300 flex justify-between items-center px-6">
        <div>© Pi Rewards Hub</div>
        <div className="flex gap-4">
          <a href="/privacy" className="text-muted">Privacy</a>
          <a href="/terms" className="text-muted">Terms</a>
        </div>
      </footer>
    </div>
  );
}
