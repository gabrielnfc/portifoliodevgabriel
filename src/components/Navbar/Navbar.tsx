'use client';
import React from 'react';
import { Link } from 'react-scroll/modules';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.div`
  display: flex;
  position: fixed;
  inline-size: 100%;
  block-size: 4rem;
  align-items: center;
  margin: -0.5rem;
  background-color: ${({ theme }) => theme.bodyBackgroundColor};
  box-shadow: 0 0.5px 5px 0 rgba(0, 0, 0, 0.37);
  z-index: 10;
  a {
    font-size: 16px;
    font-family: 'Centra', sans-serif !important;
    align-items: stretch;
    color: ${({ theme }) => theme.bodyTextColor};
  }
`;

const Button = styled.button`
  display: flex;
  font-family: 'Centra', sans-serif !important;
  position: relative;
  inset-inline-start: 75rem;
  border: 0;
  margin-inline-end: 1rem;
  background: transparent;
  cursor: pointer;
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

export default function Navbar() {
  return (
    <>
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
              <img src="/images/logob.png" />
            </Link>
          </ButtonIcon>
        </motion.div>

        <Button>
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
        </Button>

        <Button>
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
        </Button>

        <Button>
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
        </Button>

        <Button>
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
        </Button>
      </Nav>
    </>
  );
}

