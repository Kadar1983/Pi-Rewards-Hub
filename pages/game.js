import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

export default function Game() {
  const [score, setScore] = useState(0);

  return (
    <Layout>
      <div className="flex flex-col items-center text-center gap-6 p-4">
        <h1 className="text-2xl font-bold">Mini Game</h1>
        <p className="text-gray-500 dark:text-gray-300">
          اضغط على الكرة كلما ظهرت لتحصل على نقاط!
        </p>

        <motion.div
          key={score}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-32 h-32 bg-gradient-to-br from-pink-500 to-red-600 rounded-full shadow-xl flex items-center justify-center text-white text-3xl font-bold cursor-pointer"
          onClick={() => setScore(score + 1)}
        >
          +
        </motion.div>

        <p className="text-xl font-semibold">Score: {score}</p>
      </div>
    </Layout>
  );
                   }
