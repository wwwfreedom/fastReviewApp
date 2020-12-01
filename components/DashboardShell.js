import { useAuth } from "@/lib/auth";
import { Logo } from "@/icons/logo";
import { Flex, Link, Stack, Avatar } from "@chakra-ui/react";
import NextLink from "next/link";

const DashboardShell = ({ children }) => {
  const { user } = useAuth();
  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="white"
        justifyContent="space-between"
        alignItems="center"
        p={4}
        px={8}
      >
        <Stack isInline spacing={4} alignItems="center">
          <NextLink href="/" passHref>
            <Link>
              <Logo color="#000" boxSize="32px" />
            </Link>
          </NextLink>
          <NextLink href="/dashboard" passHref>
            <Link>Sites</Link>
          </NextLink>
          <NextLink href="/feedback" passHref>
            <Link>Feedback</Link>
          </NextLink>
        </Stack>
        <Flex alignItems="center">
          {user && <Link mr={4}>Account</Link>}
          <Avatar size="sm" src={user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height="100vh">
        <Flex direction="column" maxWidth={800} mx="auto" w="100%">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
