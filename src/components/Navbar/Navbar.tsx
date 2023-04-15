'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { NAV_ITEMS } from './NAV_ITEMS';

const Nav = styled.nav`
  display: flex;
  position: fixed;
  inline-size: 100%;
  height: 4rem;
  align-items: center;
  margin: -0.5rem;
  background-color: #fff;
  box-shadow: 0 0.5px 5px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  h1 {
    font-family: 'Centra', sans-serif !important;
    position: relative;
    inset-inline-start: 2rem;
  }
  a {
    font-size: 18px;
    font-family: 'Centra', sans-serif !important;
    align-items: stretch;
    color: #000;
    text-decoration: none;
  }
  ul {
  position: relative;
  inset-inline-start:65rem;
  justify-content: space-around;
  }
`;

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <Nav>
        <Link href="/">
          <h1>Gabriel Nascimento</h1>
        </Link>
        {NAV_ITEMS.map((item, idx) => {
          return (
            <Link key={idx} href={item.page} onClick={() => setNavbar(!navbar)}>
              <ul>
              {item.label}
              </ul>
            </Link>
          );
        })}
      </Nav>
    </>
  );
}
