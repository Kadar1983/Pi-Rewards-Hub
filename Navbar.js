import BalanceCard from './BalanceCard';
import WalletConnect from './WalletConnect';

export default function Navbar() {
  return (
    <div className='flex items-center justify-between gap-3'>
      <h1 className='text-2xl font-bold'>Pi Rewards Hub</h1>
      <div className='flex items-center gap-3'>
        <BalanceCard balance={78.00441} />
        <WalletConnect />
      </div>
    </div>
  )
}
