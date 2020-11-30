import { Heading, Text, Button, Flex } from "@chakra-ui/react";
import AddSiteModal from "./AddSiteModal";

const HasPlanEmptyState = () => (
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
    <AddSiteModal
      TriggerComponent={({ onClick }) => (
        <Button fontWeight="medium" onClick={onClick}>
          Add Your First Site
        </Button>
      )}
    />
  </Flex>
);

export default HasPlanEmptyState;
