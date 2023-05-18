import Head from 'next/head';
import '../styles/main.scss';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true);
  const theme = createTheme();

  theme.typography = {
    fontFamily: `'Space Grotesk', sans-serif`,
  };

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Abdalrhman Atef</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
