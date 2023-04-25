import Button from '@mui/material/Button';
import styled from 'styled-components';

const { StyledFooter, FooterText, FooterLink, Social } = Estilo();

function Estilo() {
  const StyledFooter = styled.footer`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    block-size: 6rem;
    img {
      inline-size: 100%;
      block-size: 100%;
      opacity: 0.5;
    }
  `;

  const FooterText = styled.p`
    font-size: smaller;
    text-align: center;
    justify-content: center;
    margin-block-start: 0.5rem;
  `;

  const FooterLink = styled.a`
    text-decoration: underline;
    color: ${({ theme }) => theme.bodyTextColor};
    &:hover {
      color: #e8314f !important;
    }
  `;

  const Social = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    inset-inline-end: 4rem;
    justify-content: space-around;
    img {
      inline-size: 50px;
      block-size: 50px;
      border-radius: 50%;
      margin-block-start: 1.3rem;
    }
    .btn {
      &:hover {
        background-color: transparent;
      }
    }
  `;

  return { StyledFooter, FooterText, FooterLink, Social };
}

function Footer() {
  return (
    <>
      <StyledFooter>
        <div>
          <img src="/images/line.png" />
        </div>
        <Social>
          <Button
            className="btn"
            href="https://github.com/gabrielnfc"
            target="_black"
          >
            <img src="/images/github.ico" alt="Github" />
          </Button>
          <Button
            className="btn"
            href="https://www.linkedin.com/in/gabrielnfc/"
            target="_black"
          >
            <img src="/images/Linkedin.ico" alt="Linkedin" />
          </Button>
          <Button
            className="btn"
            href="https://www.instagram.com/gabrielnfc/"
            target="_black"
          >
            <img src="/images/instagram.ico" alt="Instagram" />
          </Button>
          <Button
            className="btn"
            href="https://twitter.com/gabrielnfc"
            target="_black"
          >
            <img src="/images/twitter.ico" alt="Twitter" />
          </Button>
          <Button
            className="btn"
            href="https://api.whatsapp.com/qr/GFEOWFFQFLEZI1?autoload=1&app_absent=0"
            target="_black"
          >
            <img src="/images/whatsapp.ico" alt="Whatsapp" />
          </Button>
        </Social>
        <FooterText>
          © {new Date().getFullYear()} Gabriel Nascimento. All rights reserved.
          <br />
          Made with ❤️ by
          <FooterLink href="https://www.mycompany.com"> DevGabriel </FooterLink>
        </FooterText>
      </StyledFooter>
    </>
  );
}

export default Footer;
