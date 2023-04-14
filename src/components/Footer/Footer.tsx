import React from 'react';
import styled from 'styled-components';

const { StyledFooter, FooterText, FooterLink } = Estilo();

function Estilo() {
  const StyledFooter = styled.footer`
  background-color: #f2f2f2;
  padding: 15px;
  text-align: center;
`;

  const FooterText = styled.p`
  margin: 0;
`;

  const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
  return { StyledFooter, FooterText, FooterLink };
}

function Footer() {
  return (
    <StyledFooter>
      <FooterText>
        © {new Date().getFullYear()} My Company. All rights reserved.
      </FooterText>
      <FooterText>
        Made with ❤️ by{' '}
        <FooterLink href="https://www.mycompany.com">My Company</FooterLink>
      </FooterText>
    </StyledFooter>
  );
}

export default Footer;