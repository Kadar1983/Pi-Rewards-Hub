import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  const router = useRouter();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Rewards", path: "/rewards" },
    { name: "Game", path: "/game" },
    { name: "Withdraw", path: "/withdraw" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
      
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 dark:bg-black/20 shadow-lg border-b border-white/20 p-4 flex justify-between items-center"
      >
        <h1 className="text-xl font-bold drop-shadow-md">Pi Rewards Hub</h1>
      </motion.nav>

      {/* CONTENT */}
      <main className="p-5 pb-24">
        {children}
      </main>

      {/* BOTTOM NAVIGATION */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-0 left-0 right-0 bg-white/40 dark:bg-black/40 backdrop-blur-xl border-t border-white/20 shadow-xl p-3 flex justify-around"
      >
        {menu.map((item, i) => (
          <Link key={i} href={item.path}>
            <div
              className={`text-center px-3 py-2 rounded-xl cursor-pointer ${
                router.pathname === item.path
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
