import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Clients from '../components/Clients';
import PageLayout from '../components/PageLayout';

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <Benefits />
      <Testimonials />
      <Clients />
    </PageLayout>
  );
}
