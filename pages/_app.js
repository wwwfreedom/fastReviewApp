import Head from "next/head";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AuthProvider } from "../lib/auth";
import themeOverride from "../styles/theme";

const theme = extendTheme(themeOverride);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fast Review App</title>
      </Head>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
