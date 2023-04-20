import type { NextPage } from 'next';
import Hero from '@/pages/Hero';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Projects from '@/pages/Projects';
import React from 'react';

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
