import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Expertise from '@/components/sections/Expertise';
import Achievements from '@/components/sections/Achievements';
import Brands from '@/components/sections/Brands';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Achievements />
        <Brands />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
