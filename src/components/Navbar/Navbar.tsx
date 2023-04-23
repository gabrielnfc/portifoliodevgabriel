import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Nav = styled.div`
  display: flex;
  position: fixed;
  inline-size: 100%;
  block-size: 4rem;
  align-items: center;
  margin: -0.5rem;
  background-color: ${({ theme }) => theme.bodyBackgroundColor};
  box-shadow: 0 0.5px 5px 0 rgba(0, 0, 0, 0.37);
  z-index: 99;
  a {
    font-size: 16px;
    align-items: stretch;
    color: ${({ theme }) => theme.bodyTextColor};
  }
`;

const Button = styled.button`
  display: flex;
  position: relative;
  inset-inline-start: 75rem;
  border: 0;
  margin-inline-end: 1rem;
  background: transparent;
  cursor: pointer;
  -webkit-animation: slide-in-top 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-top 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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
  inset-inline-start: 1rem;
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
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <Nav>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <ButtonIcon>
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <img src={logo} alt="logo" />
              </Link>
            </ButtonIcon>
          </motion.div>

          <Button>
            <motion.a
              whileHover={{ scale: 1.2 }}
              onHoverStart={() => { }}
              onHoverEnd={() => { }}
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
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
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
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
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
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
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
        </Nav >
      </motion.div>
    </>
  );
}
