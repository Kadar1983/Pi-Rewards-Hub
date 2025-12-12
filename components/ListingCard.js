export default function ListingCard({ title, price, seller }) {
  const buy = async ()=>{
    // Call API to create a payment intent, then sign tx with wallet.
    const res = await fetch('/api/pay', {method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify({to: seller, amount: price})});
    const j = await res.json();
    alert(j.message || 'تم الطلب');
  }
  return (
    <div className='bg-white/5 p-4 rounded-2xl'>
      <div className='font-semibold mb-1'>{title}</div>
      <div className='text-sm text-white/70'>Price: {price} π</div>
      <div className='text-xs text-white/60 mb-2'>Seller: {seller}</div>
      <button onClick={buy} className='px-3 py-2 rounded-lg bg-accent text-black font-semibold'>Buy</button>
    </div>
  )
}
