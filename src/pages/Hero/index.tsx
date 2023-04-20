'use client';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Lexend } from '@next/font/google'

const { Container, Slogan } = StyledHero();
const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400']
})

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
              <h1 className={lexend.className}> OLÁ, MEU NOME É  <span> GABRIEL </span> </h1>
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
    text-align: center;
    padding: 0.5rem;
    justify-content: center;    
    h1 {
      font-size: 6rem;
      padding: 0rem;
      font-weight: bold;
    }
    span {
      color: yellow;
      text-shadow: 1px 2px 5px black;
      font-weight: bold;
    }
  `;

  const Slogan = styled.h2`
    font-size: 1.5rem;
    margin: 0.5rem;
    position: relative;
    inset-block-start: -5rem;
  `;
  return { Container, Slogan };
}
