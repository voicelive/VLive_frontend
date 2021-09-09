import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< Updated upstream
=======
import '../public/global.css';
import '../src/config/firebase-config';

>>>>>>> Stashed changes
import { ThemeProvider } from '@emotion/react';
import theme from '../src/styles/theme';
import '../src/config/firebase-config';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};
