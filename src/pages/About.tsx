'use client';
import React from 'react';
import styled from 'styled-components';

const { AboutContainer, Title, Content } = StyledAbout();

function About() {
  return (
    <>
      <AboutContainer>
        <Title>Sobre mim</Title>
        <Content>
          <p>
            Olá! Meu nome é [seu nome] e sou um desenvolvedor front-end. Eu sempre
            fui apaixonado por tecnologia e, em particular, pela web. Comecei a
            programar há [x] anos e nunca mais parei.
          </p>
          <p>
            Durante minha carreira, já trabalhei com várias tecnologias e
            frameworks, como React, Angular, Vue.js, entre outros. Adoro aprender
            coisas novas e sempre estou procurando me aprimorar.
          </p>
          <p>
            Além disso, sou uma pessoa muito dedicada e comprometida com meus
            projetos. Sempre busco entender as necessidades do cliente e entregar
            um trabalho de qualidade.
          </p>
        </Content>
      </AboutContainer>
    </>
  );
}

export default About;

function StyledAbout() {
  const AboutContainer = styled.div`
  display: flex;
  block-size: 98vh;
  flex-direction: column;
  background-color: #f1f1f1;
  padding: 20px;
  justify-content: center;
`;

  const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  font-family: 'Black', sans-serif;
  margin-block-end: 10px;
  text-align: center;
`;

  const Content = styled.div`
  font-size: 18px;
  line-height: 1.5;
  font-family: 'Black', sans-serif;
  text-align: center;

  p {
    margin-block-end: 10px;
  }
`;
  return { AboutContainer, Title, Content };
}

