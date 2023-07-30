'use client';

import '../styles/main.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const RootLayout = ({ children }) => {
  const theme = createTheme();

  theme.typography = {
    fontFamily: `'Space Grotesk', sans-serif`,
  };

  return (
    <html lang="en">
      <head>
        <title>Abdalrhman Atef</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
