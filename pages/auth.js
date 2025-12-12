import { motion } from "framer-motion";
import Link from "next/link";

export default function Auth() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl text-center border border-white/20"
      >
        <h1 className="text-3xl font-bold text-white mb-4">Pi Rewards Hub</h1>
        <p className="text-white/80 mb-6">
          Login using your Pi Browser account
        </p>

        <button className="w-full py-3 rounded-xl bg-yellow-400 text-black font-bold text-lg shadow-lg hover:scale-105 transition">
          Login with Pi
        </button>

        <Link href="/">
          <p className="text-white/80 mt-6 underline cursor-pointer">
            Skip Login →
          </p>
        </Link>
      </motion.div>
    </div>
  );
}
