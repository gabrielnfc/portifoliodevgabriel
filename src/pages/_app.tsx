import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../style/themes/globalStyle';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import PreLoader from '@/components/PreLoader/Loader';
import { LightTheme, DarkTheme } from '@/style/themes';
import React from 'react';
import { motion } from 'framer-motion';

export function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [isPreLoader, setIsPreLoader] = useState(true);
  const [isOn, setIsOn] = useState(false);
  const [theme, setTheme] = React.useState(DarkTheme);

  const toggleTheme = () => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme);
    setIsOn(!isOn);
    const handle = document.querySelector(".handle");
    if (theme === LightTheme) {
      handle.style.backgroundImage = "url('images/sun-moon.svg')";
    } else {
      handle.style.backgroundImage = "url('images/moon.svg')";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsPreLoader(false);
    }, 5800);
  });

  return (
    <>
      <Head>
        <title> Portifólio | Gabriel Nascimento </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isPreLoader ? (
          <PreLoader />
        ) : (
          <>
            <Navbar logo={theme.logo} />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <Button>
                <div className="switch" onClick={toggleTheme} data-isOn={isOn}>
                  <motion.div className="handle" layout transition={spring} />
                </div>
              </Button>
            </motion.div>
            <Component {...pageProps} />
            <Footer />
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default MyApp;

const Button = styled.div`
  position: fixed;
  inset-block-start: 1.2%;
  inset-inline-start: 93.5%;
  z-index: 11;

  .switch {
    inline-size: 3rem;
    block-size: 1.5rem;
    background-color: rgba(146, 144, 144, 0.753);
    display: flex;
    justify-content: flex-start;
    border-radius: 50px;
    padding: 6px;
    cursor: pointer;
  }

  .switch[data-isOn="true"] {
    justify-content: flex-end;
  }

  .handle {
    inline-size: 25px;
    block-size: 25px;
    background-color: white;
    border-radius: 40px;
    background-image: url('images/sun-moon.svg');
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
