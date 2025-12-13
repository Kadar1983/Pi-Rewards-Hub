import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="card">
        <h2 className="text-gold text-lg font-bold">Balance</h2>
        <p className="text-2xl mt-2">78.00441 π</p>
        <button className="btn-gold mt-4 w-full">Connect Wallet</button>
      </div>

      <div className="card mt-6">
        <h2 className="text-gold font-bold">Marketplace</h2>
        <p className="text-gray-400 text-sm mt-2">
          Buy & sell services with Pi
        </p>
      </div>
    </Layout>
  );
}
