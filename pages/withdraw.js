import Layout from "../components/Layout";

export default function Withdraw() {
  return (
    <Layout>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold">Withdraw π</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Enter your Pi Wallet address to withdraw your earnings.
        </p>

        <input
          placeholder="Enter wallet address"
          className="w-full mt-4 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 outline-none"
        />

        <input
          placeholder="Amount"
          className="w-full mt-3 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 outline-none"
        />

        <button className="mt-4 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-xl shadow hover:scale-105">
          Request Withdraw
        </button>
      </div>
    </Layout>
  );
    }
