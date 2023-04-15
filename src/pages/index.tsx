import type { NextPage } from 'next';
import { useLocalStorage } from 'usehooks-ts';
import { defaultTheme } from '../components/themes/defaultTheme';
import Hero from '@/pages/Hero';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Projects from '@/pages/Projects';


const Home: NextPage = () => {
  const [] = useLocalStorage('theme', defaultTheme);
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
