import { motion } from "framer-motion";
import Link from "next/link";

export default function Auth() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-indigo-700 p-6">
      <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="w-full max-w-md bg-white/5 backdrop-blur-md p-8 rounded-2xl">
        <h1 className="text-3xl font-bold text-white mb-2">مرحباً بـ Pi Rewards</h1>
        <p className="text-slate-200 mb-6">سجل دخولك عبر Pi Browser أو استعرض التجربة الآن.</p>
        <button className="btn-primary w-full mb-3">Login with Pi</button>
        <Link href="/"><a className="text-sm text-muted">تخطي الآن →</a></Link>
      </motion.div>
    </div>
  );
}
