import { ThemeProvider } from "styled-components";
import Head from "next/head";
import GlobalStyle from "styles/global";
import theme from "styles/theme";
import BaseTemplate from "templates/Base";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mychine</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BaseTemplate>
          <Component {...pageProps} />
        </BaseTemplate>
      </ThemeProvider>
    </>
  );
}
export default App;
