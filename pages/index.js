import { Button, Flex, Text } from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";
import { Logo } from "@/icons/logo";
import Head from "next/head";
import SignInButtons from "@/components/SignInButtons";

export default function Home() {
  const { user } = useAuth();
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/dashboard"
          }
        `
          }}
        />
        <title>Fast feedback</title>
      </Head>
      <Logo color="#000" boxSize="64px" />
      <Text mb={4} fontSize="lg" p={6}>
        <Text as="span" fontWeight="bold" display="inline">
          Fast Feedback
        </Text>
        It's the easiest way to add comments or reviews to your static site.
        It's still a work-in-progress, but you can try it out by leaving a
        comment below.
      </Text>
      {user ? (
        <Button
          as="a"
          href="/dashboard"
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          mt={4}
          maxW="200px"
          _hover={{ bg: "gray.700" }}
          _active={{
            bg: "gray.800",
            transform: "scale(0.95)"
          }}
        >
          View Dashboard
        </Button>
      ) : (
        <SignInButtons />
      )}
    </Flex>
  );
}
