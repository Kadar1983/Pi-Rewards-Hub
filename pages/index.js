import Layout from "../components/Layout";
import PiAuth from "../components/PiAuth";
import WalletConnect from "../components/WalletConnect";

export default function Home() {
  return (
    <Layout>
      <div className="card">
        <h2 className="text-gold font-bold">Balance</h2>
        <p className="text-2xl mt-2">78.00441 π</p>
        <WalletConnect />
        <PiAuth />
      </div>
    </Layout>
  );
}
