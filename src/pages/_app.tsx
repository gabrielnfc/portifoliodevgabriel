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
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700']
})

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
        <link rel="icon" href="/images/icon1.ico" />
        <title> Gabriel Nascimento | Frontend Web Developer </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={roboto.className}>
        <ThemeProvider theme={theme} >
          <GlobalStyle />
          {isPreLoader ? (
            <PreLoader />
          ) : (
            <>
              <Navbar logo={theme.logo} />
              <Button>
                <div className="switch" onClick={toggleTheme} data-isOn={isOn}>
                  <motion.div className="handle" layout transition={spring} />
                </div>
              </Button>
              <Component {...pageProps} />
              <Footer />
            </>
          )}
        </ThemeProvider>
      </main>
    </>
  );
}

export default MyApp;

const Button = styled.div`
  position: fixed;
  inset-block-start: 1.2%;
  inset-inline-start: 93.5%;
  z-index: 11;
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
