'use client';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const { Container, Slogan } = StyledHero();

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <section id="Home">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <Container>
              <h1>Olá! Meu nome é Gabriel</h1>
              <Slogan>
                <p>
                  {' '}
                  Desenvolvedor Front-end apaixonado por criar interfaces incríveis{' '}
                </p>
              </Slogan>
            </Container>
          </motion.div>
        </section>
      </motion.div>
    </>
  );
};

export default Hero;
function StyledHero() {
  const Container = styled.div`
    display: flex;
    block-size: 100vh;
    flex-direction: column;
    font-family: 'Arial Black', sans-serif;
    font-size: 2rem;
    text-align: center;
    padding: 1rem;
    justify-content: center;
  `;

  const Slogan = styled.h2`
    font-size: 1.5rem;
    margin-block-start: 2rem;
  `;
  return { Container, Slogan };
}
