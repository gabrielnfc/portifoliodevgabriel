import React from 'react';
import styled from 'styled-components';

const { StyledFooter, FooterText, FooterLink } = Estilo();

function Estilo() {
  const StyledFooter = styled.footer`
  padding: 1rem;
  margin: -0.5rem;
  text-align: center;
`;

  const FooterText = styled.p`
  margin: 0;
`;

  const FooterLink = styled.a`
  text-decoration: none;
  color: #b871fc;
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
        © {new Date().getFullYear()} Gabriel Nascimento. All rights reserved.
      </FooterText>
      <FooterText>
        Made with ❤️ by{' '}
        <FooterLink href="https://www.mycompany.com">Dev Gabriel</FooterLink>
      </FooterText>
    </StyledFooter>
  );
}

export default Footer;
