export default function Card({ title, children }) {
  return (
    <div className="bg-white/10 p-4 rounded-2xl">
      <h2 className="font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}
