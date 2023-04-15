import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import { defaultTheme } from '../components/themes/defaultTheme';
import { GlobalStyle } from '../components/themes/globalStyle';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [] = useLocalStorage('theme', defaultTheme);
  return (
    <>
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
