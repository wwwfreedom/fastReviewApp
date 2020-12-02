import { Button, Flex, Stack, Text } from "@chakra-ui/react";
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
      h="100vh"
      margin="0 auto"
      maxWidth="700px"
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
      <Logo color="#000" boxSize="64px" />
      <Text mb={4} fontSize="lg" py={4}>
        <Text as="span" fontWeight="bold" display="inline">
          Fast Feedback
        </Text>
        It's the easiest way to add comments or reviews to your static site.
        It's still a work-in-progress, but you can try it out by leaving a
        comment below.
      </Text>
      {auth.user ? (
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
      ) : (
        <Stack spacing={4}>
          <Button
            size="md"
            leftIcon={<GithubLogo />}
            onClick={(e) => auth.signinWithGitHub()}
            backgroundColor="gray.900"
            color="white"
            fontWeight="medium"
            _hover={{ bg: "gray.700" }}
            _active={{
              bg: "gray.800",
              transform: "scale(0.95)"
            }}
          >
            Sign In with Github
          </Button>
          <Button
            leftIcon={<GoogleLogo />}
            size="md"
            onClick={(e) => ""}
            backgroundColor="white"
            color="gray.900"
            fontWeight="medium"
            variant="outline"
            _hover={{ bg: "gray.100" }}
            _active={{
              bg: "gray.100",
              transform: "scale(0.95)"
            }}
          >
            Sign In with Google
          </Button>
        </Stack>
      )}
    </Flex>
  );
}
