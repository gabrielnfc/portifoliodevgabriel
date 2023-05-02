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
  margin: -0.3rem;
  justify-items: center;
  align-items: center;
  background-image: url('https://i.imgur.com/1Td9VOt.png');
  background-attachment: fixed;
  background-size: 100% 100%;
`;

const TitleTitle = styled.div`
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  position: relative;
  inset-block-start: 6.5rem;
  justify-content: center;
  z-index: 1;
  font-weight: bold;
  transition-delay: 20ms;
  text-shadow: 1px 1px 0px #0000008d;
  ${({ isBlurActive }) => isBlurActive && 'filter: blur(50px);'}
  span {
    color: #e8314f;
  }
`;

const Item = styled(motion.div)`
  display: grid;
  position: relative;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition-delay: 1ms;
  z-index: ${({ isSelected }) => (isSelected ? '1' : '-1')};
  inline-size: ${({ isSelected }) =>
    isSelected ? '50%' : 'calc(100% - 2rem)'};
  block-size: ${({ isSelected }) =>
    isSelected ? '79%' : 'calc(20rem - 1rem)'};
  max-inline-size: ${({ isSelected }) => (isSelected ? '100vw' : '100vw')};
  position: ${({ isSelected }) => (isSelected ? 'fixed' : 'relative')};
  inset-block-start: ${({ isSelected }) => (isSelected ? '8%' : '5rem')};
  margin: ${({ isSelected }) => (isSelected ? '2rem' : '0')};
  padding: ${({ isSelected }) => (isSelected ? '2rem' : '0')};
  background-image: ${({ isSelected, Imageselect }) =>
    isSelected ? `url(${Imageselect})` : 'none'};
  background-size: 940px 580px;
  background-repeat: no-repeat;
  background-position: center;

  .imgnoselect {
    display: flex;
    position: relative;
    inline-size: 400px;
    inset-block-end: 18rem;
    border-radius: 50px;
    z-index: 20;
    &:hover {
      transform: scaleX(102%);
      transform: scaleY(102%);
    }
  }

  .imgselect {
    display: flex;
    position: relative;
    inline-size: 1200px;
    inset-block-end: 7rem;
    z-index: 20;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  inline-size: 85vw;
  block-size: 86vh;
  max-inline-size: 90vw;
  max-block-size: 86vh;
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 2fr 2fr 2fr;
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(5px);
  transition-delay: 2ms;
  ${({ isBlurActive }) => isBlurActive && 'filter: blur(50px);'}
`;

const Title = styled(motion.h2)`
  font-size: 30px;
  text-align: center;
  position: relative;
  inset-block-start: -5rem;
`;

const Subtitle = styled(motion.h5)`
  margin: 0;
  font-size: 14px;
  text-align: center;
  position: relative;
`;

const Projectimg = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;
  inset-block-end: 4rem;
  z-index: -1;

  img {
    inline-size: 300px;
    block-size: 192px;
  }
`;

const Button = styled(motion.button)`
  position: absolute;
  inset-block-start: 3%;
  inset-inline-end: 2%;
  font-size: larger;
  border: 2px;
  border-radius: 5px;
  margin-block-end: 10px;
  color: #fff;
  background-color: #e8314f;
  cursor: pointer;
`;

const items = [
  {
    id: 1,
    title: 'Diamante do Mar',
    subtitle: 'moda praia',
    image: '/images/diamantedomar.png',
    Imageselect: '/images/diamantedomar.png',
  },
  {
    id: 2,
    title: 'Em desenvolvimento',
    subtitle: ' - ',
    image: 'https://i.imgur.com/kznZ188.png',
    Imageselect: 'https://i.imgur.com/A8y4Hg5.png',
  },
  {
    id: 3,
    title: 'Em desenvolvimento',
    subtitle: ' - ',
    image: 'https://i.imgur.com/kznZ188.png',
    Imageselect: 'https://i.imgur.com/A8y4Hg5.png',
  },
  {
    id: 4,
    title: 'Em desenvolvimento',
    subtitle: ' - ',
    image: 'https://i.imgur.com/kznZ188.png',
    Imageselect: 'https://i.imgur.com/A8y4Hg5.png',
  },
  {
    id: 5,
    title: 'Em desenvolvimento',
    subtitle: ' - ',
    image: 'https://i.imgur.com/kznZ188.png',
    Imageselect: 'https://i.imgur.com/A8y4Hg5.png',
  },
  {
    id: 6,
    title: 'Em desenvolvimento',
    subtitle: ' - ',
    image: 'https://i.imgur.com/kznZ188.png',
    Imageselect: 'https://i.imgur.com/A8y4Hg5.png',
  },
];

const Project = () => {
  const [selectedId, setSelectedId] = useState(null);
  const isBlurActive = selectedId !== null;

  return (
    <>
      <section id="Projects" className={lexend.className}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <Container>
            <TitleTitle isBlurActive={isBlurActive}>
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
                  <Subtitle>{item.subtitle}</Subtitle>
                  <Title>{item.title}</Title>
                  <Projectimg>
                    <img src={item.image} />
                  </Projectimg>
                  <img className="imgnoselect" src="/images/macbook.png" />
                </Item>
              ))}
            </ProjectContainer>
            <AnimatePresence>
              {selectedId && (
                <Item
                  key={selectedId}
                  layoutId={selectedId}
                  isSelected={true}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 1200, damping: 100 }}
                  onClick={() => setSelectedId(null)}
                  Imageselect={items[selectedId - 1].Imageselect}
                >
                  <Subtitle>{items[selectedId - 1].subtitle}</Subtitle>
                  <Title>{items[selectedId - 1].title}</Title>
                  <img className="imgselect" src="/images/macbook.png" />
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
