import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'next-auth/client';
import NextNprogress from 'nextjs-progressbar';
import { CartProvider } from '@contexts/Cart';
import { ThemeProvider } from 'styled-components';

import BaseTemplate from '@templates/Base';

import GlobalStyle from '@styles/global';
import theme from '@styles/theme';

function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Mychine</title>
      </Head>
      <NextNprogress
        color="linear-gradient(
            to right,
                #fdd017,
                #FF8520,
                #EB6A00,
                #e84049
                )"
        startPosition={0.35}
        stopDelayMs={150}
        height={3}
        options={{ showSpinner: false }}
      />
      <Provider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CartProvider>
            <BaseTemplate>
              <Component {...pageProps} key={router.route} />
            </BaseTemplate>
          </CartProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}
export default App;
