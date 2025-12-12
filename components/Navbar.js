import Link from "next/link";
import WalletConnect from "./WalletConnect";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const s = localStorage.getItem("pi_theme");
    if (s) setTheme(s);
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("light");
    localStorage.setItem("pi_theme", isDark ? "light" : "dark");
    setTheme(isDark ? "light" : "dark");
  };

  const items = [
    { name: "Dashboard", path: "/" },
    { name: "Rewards", path: "/rewards" },
    { name: "Game", path: "/game" },
    { name: "Withdraw", path: "/withdraw" }
  ];

  return (
    <div className="navbar mx-4 my-4 rounded-xl2">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold">π</div>
        <div>
          <div className="font-bold text-lg">Pi Rewards Hub</div>
          <div className="text-xs text-muted">Built for Pi Browser</div>
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-3">
        {items.map(i => (
          <Link key={i.path} href={i.path}>
            <a className={`px-3 py-2 rounded-lg ${router.pathname === i.path ? 'bg-violet-700 text-white' : 'text-slate-200'}`}>{i.name}</a>
          </Link>
        ))}
        <button onClick={toggleTheme} className="btn-ghost">Theme</button>
        <WalletConnect />
      </div>

      {/* mobile actions */}
      <div className="sm:hidden flex items-center gap-2">
        <WalletConnect />
      </div>
    </div>
  );
}
