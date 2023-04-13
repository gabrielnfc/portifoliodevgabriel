'use client';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Nav = StyledNav();

function StyledNav() {
  return styled.nav`
  ul {
    background: black;
    display: flex;
    padding: 0.5rem;
    inline-size: 100%;
    position: fixed;
  }
  li {
    color: white;
    padding: 1rem;
    text-decoration: none;
    position: relative;
    inset-inline-start: 72rem;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
  }
}
`;
}

function Navbar(): JSX.Element {
  return (
    <>
      <Nav>
        <ul>
          <li>
            <Link href="/"> Home </Link>
          </li>
          <li>
            <Link href="/About"> About Us </Link>
          </li>
          <li>
            <Link href="Projects"> Projects </Link>
          </li>
          <li>
            <Link href="Contacts"> Contact </Link>
          </li>
        </ul>
      </Nav>
    </>
  );
}
export default Navbar;
