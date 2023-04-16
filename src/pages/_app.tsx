import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import { defaultTheme } from '../components/themes/defaultTheme';
import { GlobalStyle } from '../components/themes/globalStyle';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [] = useLocalStorage('theme', defaultTheme);
  return (
    <>
      <Head>
        <title> Portifólio | Gabriel Nascimento </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
