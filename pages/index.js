import { Box, Button, Code, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";
import { Logo } from "@/icons/logo";
import GoogleLogo from "@/icons/google";
import Head from "next/head";
import GithubLogo from "@/icons/github";

export default function Home() {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      w="100%"
      h="100vh"
    >
      <Head>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/dashboard"
          }
        `
          }}
        /> */}
        <title>Fast feedback</title>
      </Head>
      <Logo color="#000" boxSize="32px" />
      {auth.user ? (
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
      ) : (
        <Flex>
          <Button
            mt={4}
            size="sm"
            mr={4}
            leftIcon={<GithubLogo />}
            onClick={(e) => auth.signinWithGitHub()}
          >
            Sign In with Github
          </Button>
          <Button
            leftIcon={<GoogleLogo />}
            mt={4}
            size="sm"
            onClick={(e) => auth.signinWithGitHub()}
          >
            Sign In with Google
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
