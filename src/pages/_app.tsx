import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import { defaultTheme } from '../components/themes/defaultTheme';
import { GlobalStyle } from '../components/themes/globalStyle';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import PreLoader from '@/components/PreLoader/Loader';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [] = useLocalStorage('theme', defaultTheme);
  const [isPreLoader, setIsPreLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPreLoader(false);
    }, 5800);
  });

  return (
    <>
      {isPreLoader ? (
        <PreLoader />
      ) : (
        <>
          <Head>
            <title> Portifólio | Gabriel Nascimento </title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </>
      )}
    </>
  );
}
export default MyApp;
