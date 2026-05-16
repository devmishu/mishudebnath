import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import TechStack from '@/components/TechStack';
import Qualification from '@/components/Qualification';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <TechStack />
      <Skills />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
