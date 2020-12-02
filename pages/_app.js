import Head from "next/head";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AuthProvider } from "@/lib/auth";
import themeOverride from "@/styles/theme";
import { css, Global } from "@emotion/react";

const theme = extendTheme(themeOverride);

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Fast Review App</title>
      </Head>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            background-color: #edf2f7;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

// TODO: create global error boundary to catch unhandled error
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
