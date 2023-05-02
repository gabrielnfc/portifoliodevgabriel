'use client';
import { Button } from '@mui/material';
import { Lexend } from '@next/font/google';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400'],
});

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <section id="Home">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Container>
              <h1 className={lexend.className}>
                {' '}
                OLÁ, MEU NOME É <span> GABRIEL </span>{' '}
              </h1>
              <Slogan className={lexend.className}>
                <p>
                  {' '}
                  Desenvolvedor Frontend apaixonado por criar interfaces
                  incríveis,
                  <br /> elevando o nível do seu produto ou negócio!{' '}
                </p>
              </Slogan>
              <Social>
                <Button
                  className="btn"
                  href="https://github.com/gabrielnfc"
                  target="_black"
                >
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={() => {}}
                    onHoverEnd={() => {}}
                  >
                    <img src="https://i.imgur.com/QzrfM2S.png" alt="Github" />
                  </motion.a>
                </Button>
                <Button
                  className="btn"
                  href="https://www.linkedin.com/in/gabrielnfc/"
                  target="_black"
                >
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={() => {}}
                    onHoverEnd={() => {}}
                  >
                    <img src="https://i.imgur.com/yfA5Xw1.png" alt="Linkedin" />
                  </motion.a>
                </Button>
                <Button
                  className="btn"
                  href="https://www.instagram.com/gabrielnfc/"
                  target="_black"
                >
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={() => {}}
                    onHoverEnd={() => {}}
                  >
                    <img
                      src="https://i.imgur.com/3F0QjnG.png"
                      alt="Instagram"
                    />
                  </motion.a>
                </Button>
                <Button
                  className="btn"
                  href="https://twitter.com/gabrielnfc"
                  target="_black"
                >
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={() => {}}
                    onHoverEnd={() => {}}
                  >
                    <img src="https://i.imgur.com/UxEYKD8.png" alt="Twitter" />
                  </motion.a>
                </Button>
                <Button
                  className="btn"
                  href="https://api.whatsapp.com/qr/GFEOWFFQFLEZI1?autoload=1&app_absent=0"
                  target="_black"
                >
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={() => {}}
                    onHoverEnd={() => {}}
                  >
                    <img src="https://i.imgur.com/RwKLCHS.png" alt="Whatsapp" />
                  </motion.a>
                </Button>
              </Social>
              <Down>
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <div className="container">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <span className="text"></span>
                    <a className="text" href="https://naegele.it">
                      Saiba mais
                    </a>
                  </div>
                </Link>
              </Down>
            </Container>
          </motion.div>
        </section>
      </motion.div>
    </>
  );
};

export default Hero;

const Container = styled.div`
  display: flex;
  position: relative;
  block-size: 100vh;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-image: url('https://i.imgur.com/1Td9VOt.png');
  background-attachment: fixed;
  margin: -0.5rem;
  padding: 0.2rem;
  h1 {
    font-size: 6rem;
    position: relative;
    padding: 2rem;
    inset-block-start: 4rem;
    font-weight: bold;
    text-shadow: 1px 2px 2px black;
    -webkit-animation: tracking-in-expand 2.3s
      cubic-bezier(0.215, 0.61, 0.355, 1) both;
    animation: tracking-in-expand 2.3s cubic-bezier(0.215, 0.61, 0.355, 1) both;
    @-webkit-keyframes tracking-in-expand {
      0% {
        letter-spacing: -0.5em;
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes tracking-in-expand {
      0% {
        letter-spacing: -0.5em;
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        opacity: 1;
      }
    }
  }
  span {
    color: #e8314f;
  }
`;

const Slogan = styled.h2`
  display: flex;
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem;
  inset-block-start: -4rem;
  -webkit-animation: tracking-in-expand 2.3s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  animation: tracking-in-expand 2.3s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  @-webkit-keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Down = styled.div`
  display: flex;
  position: relative;
  inset-block-start: 4rem;
  cursor: pointer;
  a {
    text-decoration: none;
  }

  .container {
    position: relative;
    inline-size: 24px;
    block-size: 24px;
  }

  .chevron {
    position: absolute;
    inline-size: 50px;
    block-size: 8px;
    inset-block-start: 1rem;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;
  }

  .chevron:first-child {
    animation: move 3s ease-out 1s infinite;
  }

  .chevron:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }

  .chevron:before,
  .chevron:after {
    content: ' ';
    position: absolute;
    inset-block-start: 0;
    block-size: 100%;
    inline-size: 51%;
    background: #e8314f;
  }

  .chevron:before {
    inset-inline-start: 0;
    transform: skew(0deg, 30deg);
  }

  .chevron:after {
    inset-inline-end: 0;
    inline-size: 50%;
    transform: skew(0deg, -30deg);
  }

  @keyframes move {
    25% {
      opacity: 1;
    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
  }

  .text {
    display: block;
    margin-block-start: 80px;
    margin-inline-start: -10px;
    font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
    font-size: 12px;
    color: ${({ theme }) => theme.bodyTextColor};
    text-transform: uppercase;
    white-space: nowrap;
    opacity: 0.25;
    animation: pulse 2s linear alternate infinite;
  }

  @keyframes pulse {
    to {
      opacity: 1;
    }
  }
`;

const Social = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  inset-block-start: -5rem;
  padding: 1rem;
  img {
    inline-size: 50px;
    block-size: 50px;
    border-radius: 50%;
  }
  .btn {
    &:hover {
      background-color: transparent;
    }
  }
  -webkit-animation: scale-in-hor-center 1.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: scale-in-hor-center 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @-webkit-keyframes scale-in-hor-center {
    0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      opacity: 1;
    }
  }
  @keyframes scale-in-hor-center {
    0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      opacity: 1;
    }
  }
`;
