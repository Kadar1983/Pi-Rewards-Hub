import Layout from "../components/Layout";
import Card from "../components/Card";
import ListingCard from "../components/ListingCard";

export default function Home() {
  return (
    <Layout>
      <div className="grid gap-4">
        <Card title="Daily Rewards">
          <p>Claim your daily reward and keep your streak alive.</p>
        </Card>

        <Card title="Marketplace">
          <div className="grid grid-cols-2 gap-3">
            <ListingCard title="Custom Avatar" price={1.2} />
            <ListingCard title="Banner Design" price={2.5} />
          </div>
        </Card>
      </div>
    </Layout>
  );
}
