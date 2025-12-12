import Layout from "../components/Layout";

export default function Rewards() {
  return (
    <Layout>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold">Rewards Center</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Unlock rewards by completing tasks and daily missions.
        </p>

        <div className="mt-6 space-y-4">
          <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-xl shadow">
            <h3 className="font-bold text-purple-700 dark:text-purple-300">Daily Login</h3>
            <button className="mt-2 bg-purple-600 text-white py-1 px-4 rounded-xl">
              Claim Reward
            </button>
          </div>

          <div className="p-4 bg-indigo-100 dark:bg-indigo-900 rounded-xl shadow">
            <h3 className="font-bold text-indigo-700 dark:text-indigo-300">Watch Ads</h3>
            <button className="mt-2 bg-indigo-600 text-white py-1 px-4 rounded-xl">
              Earn 0.02π
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
    }
