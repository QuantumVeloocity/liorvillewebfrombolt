import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Process from '../components/Process';

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Services />
      <Team />
      <Process />
    </div>
  );
}
