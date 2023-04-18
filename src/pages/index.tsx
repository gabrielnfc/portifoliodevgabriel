import type { NextPage } from 'next';
import { useLocalStorage } from 'usehooks-ts';
import { defaultTheme } from '../components/themes/defaultTheme';
import Hero from '@/pages/Hero';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Projects from '@/pages/Projects';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

const Home: NextPage = () => {
  const [] = useLocalStorage('theme', defaultTheme);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
