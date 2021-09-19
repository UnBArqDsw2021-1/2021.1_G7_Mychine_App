import Head from "next/head";
import { PageTransition } from "next-page-transitions";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global";
import PageTransitionStyle, { TIMEOUT } from "@UI/animations/pageTransitions";
import theme from "styles/theme";
import BaseTemplate from "templates/Base";
import type { AppProps } from "next/app";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Mychine</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageTransitionStyle />
        <BaseTemplate>
          <PageTransition
            timeout={TIMEOUT}
            classNames="page-transition"
            loadingComponent={<div>CARREGANDO...</div>}
            loadingDelay={0}
            loadingTimeout={0}
            skipInitialTransition
          >
            <Component {...pageProps} key={router.route} />
          </PageTransition>
        </BaseTemplate>
      </ThemeProvider>
    </>
  );
}
export default App;
