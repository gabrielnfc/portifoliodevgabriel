import type { NextPage } from 'next';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};
export default Home;
