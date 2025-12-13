import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Rewards", path: "/rewards" },
    { name: "Game", path: "/game" },
    { name: "Withdraw", path: "/withdraw" },
  ];

  return (
    <div className="min-h-screen bg-darkbg text-white">
      
      {/* TOP BAR */}
      <div className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 p-4">
        <h1 className="text-xl font-bold text-gold">Pi Rewards Hub</h1>
      </div>

      {/* CONTENT */}
      <main className="p-4 pb-28 max-w-md mx-auto">
        {children}
      </main>

      {/* BOTTOM NAV */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/70 backdrop-blur-xl border-t border-white/10 flex justify-around p-3">
        {menu.map((item, i) => (
          <Link key={i} href={item.path}>
            <div
              className={`px-4 py-2 rounded-xl text-sm ${
                router.pathname === item.path
                  ? "bg-gradient-to-r from-gold to-violet text-black font-bold"
                  : "text-gray-400"
              }`}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
