import type { AppProps } from "next/app";
import Head from "next/head";
import NextNprogress from "nextjs-progressbar";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global";
import theme from "styles/theme";
import BaseTemplate from "templates/Base";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Mychine</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BaseTemplate>
          <NextNprogress
            color="linear-gradient(
              to right,
              #fdd017,
              #FF8520,
              #EB6A00,
              #e84049
            )"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow
            options={{ showSpinner: false }}
          />
          <Component {...pageProps} key={router.route} />
        </BaseTemplate>
      </ThemeProvider>
    </>
  );
}
export default App;
