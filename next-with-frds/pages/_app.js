import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import Page from '../components/Page';

const theme = {
  colors: {
    primary: '#0070f3',
  },
  spaces: {
    one: '0.8rem', // 8px
    two: '1.6rem', // 16px
    three: '2.4rem', // 24px
    four: '3.2rem', // 32px
    five: '4rem', // 40px
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    );
  }
}
