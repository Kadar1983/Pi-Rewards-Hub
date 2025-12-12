import Layout from '../components/Layout';
import WalletConnect from '../components/WalletConnect';

export default function Auth() {
  return (
    <Layout>
      <h2 className="text-lg font-semibold mb-3">Connect your Pi Wallet</h2>
      <WalletConnect />
    </Layout>
  )
}
