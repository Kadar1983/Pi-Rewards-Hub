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
    <div className="min-h-screen bg-darkbg text-white relative">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10 p-4">
        <h1 className="text-xl font-bold text-gold">Pi Rewards Hub</h1>
      </div>

      {/* Main content */}
      <main className="p-4 pb-28 max-w-md mx-auto">{children}</main>

      {/* Bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur border-t border-white/10 flex justify-around p-3">
        {menu.map((m) => (
          <Link key={m.path} href={m.path}>
            <div
              className={`px-4 py-2 rounded-xl text-sm ${
                router.pathname === m.path
                  ? "bg-gradient-to-r from-gold to-violet text-black font-bold"
                  : "text-gray-400"
              }`}
            >
              {m.name}
            </div>
          </Link>
        ))}
      </div>

      {/* Pi SDK */}
      <script src="https://sdk.minepi.com/pi-sdk.js"></script>
    </div>
  );
    }
