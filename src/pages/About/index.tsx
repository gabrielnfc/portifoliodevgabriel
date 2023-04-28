'use client';
import { Button } from '@mui/material';
import { Lexend } from '@next/font/google';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400'],
});

const AboutContainer = styled.div`
  display: flex;
  block-size: 100vh;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem;
  padding: 3rem;

  div.btncv {
    display: flex;
    position: relative;
    inline-size: 11rem;
    inset-block-end: 8rem;
  }

  .btn {
    position: relative;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #e8314f;
    border: 2px solid ${({ theme }) => theme.bodyTextColor};
    padding: 0.2rem 1.5rem 0.2rem 1.5rem;
    margin: 0rem;
    border-radius: 1rem;
    text-decoration: none;
    p {
      color: ${({ theme }) => theme.bodyTextColor};
    }
    cursor: pointer;
    &:hover {
      background-color: #f7f70c;
      p {
        color: #000;
      }
    }
  }

  .hoverfoto {
    inline-size: 380px;
    block-size: 475px;
    position: relative;
    background-color: #e8314f;
    inset-inline-start: 5rem;
    inset-block-end: 0rem;
    z-index: 10;
    border: 5px solid ${({ theme }) => theme.bodyTextColor};
    opacity: 0.3;
    border-radius: 1rem;
    transition-delay: 8ms;
    cursor: pointer;
    &:hover {
      background-color: #f7f70c;
      opacity: 0;
    }
  }
  .bgfoto {
    inline-size: 400px;
    position: relative;
    background-color: #e8314f;
    inset-inline-start: -30rem;
    inset-block-end: 2rem;
    z-index: 0;
    border: 5px solid ${({ theme }) => theme.bodyTextColor};
    border-radius: 1rem;
    transition-delay: 8ms;
    cursor: pointer;

    &:hover {
      background-color: #f7f70c;
    }
  }
`;

const Photography = styled.div`
  .foto {
    border: 5px solid ${({ theme }) => theme.bodyTextColor};
    position: relative;
    margin: 0;
    inline-size: 380px;
    inset-inline-start: 5rem;
    z-index: 5;
    border-radius: 1rem;
  }
`;

const Title = styled.h2`
  position: relative;
  inset-block-start: 0.5rem;
  font-size: 55px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;

  img {
    display: flex;
    position: relative;
    inline-size: 200px;
    block-size: 5px;
    border-radius: 55%;
    inset-block-start: 0.5rem;
    inset-inline-start: 48rem;
  }
`;

const Subtitle1 = styled.div`
  position: fixed;
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  position: relative;
  inset-block-start: -1rem;
`;

const Subtitle2 = styled.div`
  position: relative;
  font-size: 20px;
  inset-block-start: 1rem;
  padding: 0rem 0rem 0rem 0rem;
`;

const Content = styled.div`
  display: grid;
  position: relative;
  justify-content: center;
  grid-template-columns: 1fr 1px 1fr 1px 1fr;
  font-size: 18px;
  padding: 1rem 0rem 0rem 0rem;
  inset-block-start: -1rem;

  p {
    margin-block-end: 10px;
    line-height: 1.5;
    text-align: justify;
  }

  span {
    color: #e8314f;
    font-weight: bold;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  inset-block-start: -3.5rem;

  h1 {
    font-size: 35px;
    position: relative;
    text-align: center;
  }

  .gridskills {
    display: grid;
    grid-template-columns: 3fr 3fr 3fr;
    grid-gap: 15px;
    text-align: center;
  }

  .skillsbuttons {
    text-transform: uppercase;
    font-weight: bold;
    background-color: #e8314f;
    border: 2px solid ${({ theme }) => theme.bodyTextColor};
    padding: 1.8rem;
    border-radius: 1rem;
    cursor: pointer;
    &:hover {
      color: #000;
      background-color: #f7f70c;
    }
  }
`;

function About() {
  return (
    <>
      <section id="About" className={lexend.className}>
        <AboutContainer>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Title>
              Sobre mim
              <img src="/images/line2.png" />
            </Title>
            <Subtitle1>
              <p>
                Aqui você encontrará mais informações sobre mim, o que faço e
                minhas habilidades atuais <br /> principalmente em termos de
                programação e tecnologia.
              </p>
            </Subtitle1>
            <Subtitle2>
              <h2> Então chega de enrolação!</h2>
            </Subtitle2>
            <Content>
              <p>
                Sou um <span>Desenvolvedor Frontend</span> e contruo interfaces
                de Sites e Aplicações Web que leva ao sucesso do produto ou
                negócio como um todo. Confira alguns dos meus trabalhos na seção{' '}
                <span>Projetos</span>
                . <br />
                <br />
                Também gosto de compartilhar conteúdo relacionado ao que aprendi
                ao longo do tempo em <span>Desenvolvimento Web</span> para que
                possa ajudar outras pessoas da Comunidade Dev. Sinta-se à
                vontade para se conectar ou me seguir no meu{' '}
                <span>Linkedin</span>, onde posto conteúdo útil relacionado ao
                desenvolvimento e programação da Web.
                <br />
                <br />
                Estou aberto a <span>oportunidades de trabalho</span> onde eu
                possa contribuir, aprender e crescer. Se você tiver uma boa
                oportunidade que corresponda às minhas habilidades e
                experiências, não hesite em entrar em <span>contato</span>{' '}
                comigo.
              </p>
              <Photography>
                <img className="foto" src="/images/eu.png" alt="Eu" />
              </Photography>
              <div className="hoverfoto" />
              <div className="bgfoto" />
              <Skills>
                <h1>Minhas habilidades</h1>
                <div className="gridskills">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="skillsbuttons">html</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="skillsbuttons">CSS</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="skillsbuttons">JavaScript</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="skillsbuttons">React</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="skillsbuttons">Typescript</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="skillsbuttons">Tailwind</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="skillsbuttons">NextJs</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="skillsbuttons">Vite</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="skillsbuttons">VueJs</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="skillsbuttons">Git</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="skillsbuttons">GitHub</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="skillsbuttons">Vercel</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="skillsbuttons">Figma</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="skillsbuttons">Responsividade</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="skillsbuttons">Photoshop</div>
                  </motion.div>
                </div>
              </Skills>
            </Content>

            <div className="btncv">
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Button
                  className="btn"
                  href="https://drive.google.com/file/d/1umwlPviC3iWh29g4YtGv52oCcMnb5Nkm/view?usp=sharing"
                  target="_black"
                >
                  <p>Download CV</p>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AboutContainer>
      </section>
    </>
  );
}

export default About;
