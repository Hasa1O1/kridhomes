import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Story />
      <Services />
      <Benefits />
      <Team />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
