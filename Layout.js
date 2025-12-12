import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-piGradientStart to-piGradientEnd text-gray-100 font-sans p-4">
      <div className='max-w-3xl mx-auto'>
        <Navbar />
        <main className='mt-6'>{children}</main>
        <footer className='mt-10 text-center text-sm text-white/60'>Pi Rewards Hub — Built for Pi Browser • RTL ready</footer>
      </div>
    </div>
  );
}
