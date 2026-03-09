import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Clients from '../components/Clients';
import PageLayout from '../components/PageLayout';

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <Benefits />
      <Clients />
    </PageLayout>
  );
}
