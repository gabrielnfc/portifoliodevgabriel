"use client"
import React from 'react';
import styled from 'styled-components';

const { Container, Slogan } = StyledHero();

const Hero = () => {
  return (
    <>
      <Container>
        <h1>Olá! Meu nome é Gabriel</h1>
        <Slogan>
          <p>
            {' '}
            Desenvolvedor Front-end apaixonado por criar interfaces incríveis{' '}
          </p>
        </Slogan>
      </Container>
    </>
  );
};

export default Hero;
function StyledHero() {
  const Container = styled.div`
    display: flex;
    block-size: 100vh;
    flex-direction: column;
    background-color: white;
    color: black;
    font-family: 'Arial Black', sans-serif;
    font-size: 2rem;
    text-align: center;
    padding: 2rem;
    justify-content: center;
  `;

  const Slogan = styled.h2`
    font-size: 1.5rem;
    margin-block-start: 2rem;
  `;
  return { Container, Slogan };
}
