import { Button, Code, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <Heading>Fast Review App</Heading>
      <Text>
        Current user: <Code>{auth?.user?.email}</Code>
      </Text>
      {auth.user ? (
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
      ) : (
        <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
      )}
    </div>
  );
}
