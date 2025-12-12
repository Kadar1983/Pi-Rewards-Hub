import { useState } from 'react';

export default function WalletConnect() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState(null);

  const connect = async ()=>{
    if (typeof window !== 'undefined' && window.Pi) {
      try {
        // Example placeholder: official Pi connect flow should be used here.
        const resp = await window.Pi.request({ method: 'connect' }).catch(()=>null);
        // resp example: { address: 'pi_abc...' }
        if (resp && resp.address) {
          setAddress(resp.address);
          setConnected(true);
        } else {
          setConnected(true); // demo fallback
          setAddress('pi_demo_address');
        }
      } catch(e){ console.error(e); setConnected(false); }
    } else {
      // Not in Pi Browser — simulate connect for testing
      setAddress('pi_demo_local');
      setConnected(true);
    }
  }

  return (
    <div className='flex items-center gap-2'>
      <button onClick={connect} className='px-3 py-2 rounded-xl bg-white/10'>
        {connected ? `${address}` : 'Connect Wallet'}
      </button>
    </div>
  )
}
