import { Heading, Text, Button, Flex } from "@chakra-ui/react";
import DashboardShell from "./DashboardShell";

const HasPlanEmptyState = () => (
  <DashboardShell>
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius={4}
      p={16}
      direction="column"
      align="center"
    >
      <Heading size="lg" mb={2}>
        You haven't added any sites.
      </Heading>
      <Text mb={4}>Welcome 👋 Let's get started.</Text>
      <Button maxW="200px" fontWeight="medium">
        Add Your First Site
      </Button>
    </Flex>
  </DashboardShell>
);

export default HasPlanEmptyState;
