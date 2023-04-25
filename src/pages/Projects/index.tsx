// @ts-nocheck
'use client';
import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Lexend } from '@next/font/google';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400'],
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  inline-size: 98.8vw;
  block-size: 105vh;
  margin: -0.5rem;
  padding: 0.2rem;
  justify-items: center;
  align-items: center;
  background-image: url('/images/bgpattern1.png');
  background-attachment: fixed;
  background-size: 100% 100%;
`;

const TitleTitle = styled.div`
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  position: relative;
  inset-block-start: 8rem;
  justify-content: center;
  z-index: 1;
  font-weight: bold;
  text-shadow: 1px 1px 0px #0000008d;
  ${({ isBlurActive }) => isBlurActive && 'filter: blur(5px);'}
  span {
    color: #e8314f;
  }
`;

const Item = styled(motion.div)`
  inline-size: calc(95% - 2rem);
  block-size: calc(95% - 2rem);
  position: relative;
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0.2px 0.2px 2px;
  background-color: #e8314fce;
  z-index: ${({ isSelected }) => (isSelected ? '1' : '-1')};
  inline-size: ${({ isSelected }) => (isSelected ? '70%' : 'calc(80% - 1rem)')};
  block-size: ${({ isSelected }) => (isSelected ? '70%' : 'calc(80% - 1rem)')};
  position: ${({ isSelected }) => (isSelected ? 'fixed' : 'relative')};
  inset-block-start: ${({ isSelected }) => (isSelected ? '10%' : '50px')};
  inset-inline-start: ${({ isSelected }) => (isSelected ? '9%' : 'auto')};
  margin: ${({ isSelected }) => (isSelected ? '3%' : 'none')};
  &:hover {
    box-shadow: 0.2px 0.2px 5px;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  position: relative;
  display: grid;
  inset-block-start: 4rem;
  align-items: center;
  justify-items: center;
  inline-size: 100%;
  block-size: 70%;
  grid-template-columns: 2fr 2fr 2fr;
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(5px);
  ${({ isBlurActive }) => isBlurActive && 'filter: blur(5px);'}
`;

const Subtitle = styled(motion.h5)`
  margin: 0;
  font-size: 14px;
`;

const Title = styled(motion.h2)`
  margin: 5px 0 0;
  font-size: 24px;
`;

const Button = styled(motion.button)`
  position: absolute;
  inset-block-start: 3%;
  inset-inline-end: 2%;
  font-size: larger;
  border: 2px;
  border-radius: 5px;
  margin-block-end: 10px;
  color: ${({ theme }) => theme.bodyTextColor};
  background-color: ${({ theme }) => theme.bodyBackgroundColor};
  cursor: pointer;
`;

const items = [
  { id: 1, subtitle: 'Project subtitle 1', title: 'Project title 1' },
  { id: 2, subtitle: 'Project subtitle 2', title: 'Project title 2' },
  { id: 3, subtitle: 'Project subtitle 3', title: 'Project title 3' },
  { id: 4, subtitle: 'Project subtitle 4', title: 'Project title 4' },
  { id: 5, subtitle: 'Project subtitle 5', title: 'Project title 5' },
  { id: 6, subtitle: 'Project subtitle 6', title: 'Project title 6' },
];

const Project = () => {
  const [selectedId, setSelectedId] = useState(null);
  const isBlurActive = selectedId !== null;

  return (
    <>
      <section id="Projects">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <Container>
            <TitleTitle
              isBlurActive={isBlurActive}
              className={lexend.className}
            >
              {' '}
              <p>
                {' '}
                Últimos projetos <span>realizados</span> ou em{' '}
                <span>desenvolvimento</span>{' '}
              </p>{' '}
            </TitleTitle>
            <ProjectContainer isBlurActive={isBlurActive}>
              {items.map((item) => (
                <Item
                  key={item.id}
                  layoutId={item.id}
                  isSelected={selectedId === item.id}
                  onClick={() => setSelectedId(item.id)}
                >
                  <Subtitle className={lexend.className}>
                    {item.subtitle}
                  </Subtitle>
                  <Title className={lexend.className}>{item.title}</Title>
                </Item>
              ))}
            </ProjectContainer>
            <AnimatePresence>
              {selectedId && (
                <Item
                  key={selectedId}
                  layoutId={selectedId}
                  isSelected={true}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 60, damping: 10 }}
                  onClick={() => setSelectedId(null)}
                >
                  <Subtitle className={lexend.className}>
                    {items[selectedId - 1].subtitle}
                  </Subtitle>
                  <Title className={lexend.className}>
                    {items[selectedId - 1].title}
                  </Title>
                  <Button onClick={() => setSelectedId(null)}>x</Button>
                </Item>
              )}
            </AnimatePresence>
          </Container>
        </motion.div>
      </section>
    </>
  );
};

export default Project;
