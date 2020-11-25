import { Box, Button, Code, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";
import { Logo } from "@/icons/logo";

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
      <Logo color="#000" boxSize="32px" />
      {auth.user ? (
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
      ) : (
        <Button mt={4} size="sm" onClick={(e) => auth.signinWithGitHub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
}
