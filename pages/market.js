import Layout from '../components/Layout';
import ListingCard from '../components/ListingCard';
import { useEffect, useState } from 'react';

export default function Market() {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    fetch('/api/listings').then(r=>r.json()).then(setListings);
  }, []);

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {listings.map(item=> (
          <ListingCard key={item.id} {...item} />
        ))}
        {listings.length===0 && <div className='text-sm text-white/70'>No listings yet.</div>}
      </div>
    </Layout>
  )
}
