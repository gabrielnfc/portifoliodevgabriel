import { Lexend } from '@next/font/google';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400'],
});

const Nav = styled.div`
  display: flex;
  position: fixed;
  inline-size: 100%;
  block-size: 5.5rem;
  align-items: center;
  margin: -0.5rem;
  padding: 0.2rem;
  background-color: ${({ theme }) => theme.bodyBackgroundColor};
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.37);
  z-index: 99;
  a {
    font-size: 20px;
    font-weight: bold;
    align-items: stretch;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.bodyTextColor};
    &:hover {
      color: #e8314f;
    }
  }
`;

const Button = styled.button`
  display: flex;
  position: relative;
  inset-inline-start: 68rem;
  border: 0;
  margin-inline-end: 1rem;
  background: transparent;
  cursor: pointer;
  -webkit-animation: slide-in-top 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @-webkit-keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ButtonIcon = styled(Button)`
  display: flex;
  position: relative;
  inset-inline-start: 0rem;
  z-index: 99;
  border: 0;
  img {
    inline-size: 12rem;
    background: transparent;
    cursor: pointer;
  }
`;

//@ts-ignore
export default function Navbar({ logo }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Nav className={lexend.className}>
          <ButtonIcon>
            <Link
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <img src={logo} alt="logo" />
              </motion.div>
            </Link>
          </ButtonIcon>

          <Button>
            <motion.a
              whileHover={{ scale: 1.2 }}
              onHoverStart={() => {}}
              onHoverEnd={() => {}}
            >
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <p> Home </p>
              </Link>
            </motion.a>
          </Button>

          <Button>
            <motion.a
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <Link
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <p> Sobre </p>
              </Link>
            </motion.a>
          </Button>

          <Button>
            <motion.a
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <Link
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <p> Projetos </p>
              </Link>
            </motion.a>
          </Button>

          <Button>
            <motion.a
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <p> Contato </p>
              </Link>
            </motion.a>
          </Button>
        </Nav>
      </motion.div>
    </>
  );
}
