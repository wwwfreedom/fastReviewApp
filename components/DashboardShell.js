import { useAuth } from "@/lib/auth";
import { Logo } from "@/icons/logo";
import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Button
} from "@chakra-ui/react";
import AddSiteModal from "./AddSiteModal";

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
          <Logo color="#000" boxSize="32px" />
          <Link>Reviews</Link>
          <Link>Site</Link>
        </Stack>
        <Flex alignItems="center">
          {user && <Link mr={4}>Account</Link>}
          <Avatar size="sm" src={user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height="100vh">
        <Flex maxWidth={800} ml="auto" mr="auto" direction="column" w="100%">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink color="gray.700" fontSize="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex justify="space-between" mb={4}>
            <Heading>Sites</Heading>
            <AddSiteModal
              TriggerComponent={({ onClick }) => (
                <Button
                  backgroundColor="black"
                  color="white"
                  fontWeight="medium"
                  onClick={onClick}
                >
                  + Add Site
                </Button>
              )}
            />
          </Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
