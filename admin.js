import Layout from '../components/Layout';
import Card from '../components/Card';

export default function Admin() {
  return (
    <Layout>
      <Card title="Admin Panel">
        <p>Protected admin actions (seed DB, payouts...)</p>
      </Card>
    </Layout>
  )
}
