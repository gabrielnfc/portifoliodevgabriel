'use client'
import React from 'react';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import styled from 'styled-components';

const Container = styled.div `
  display: flex;
  inline-size: 100vw;
  block-size: 100vh;
  background-color: yellow;
`;


export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}
