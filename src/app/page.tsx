import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Timeline from '@/components/Timeline';
import Certificates from '@/components/Certificates';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Timeline />
      <Certificates />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
