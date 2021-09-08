import PropTypes from 'prop-types';
import '../src/config/firebase-config';

import { ThemeProvider } from '@emotion/react';
import theme from '../src/styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};
