import { Logo } from "@/icons/logo";
import { Heading, Box, Text, Button } from "@chakra-ui/react";
import DashboardShell from "./DashboardShell";

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box width="100%" backgroundColor="white" borderRadius={4} p={8}>
      <Heading size="lg">Get review on your site instantly.</Heading>
      <Text>Start today, then grow with us. 🌱</Text>
      <Button>Upgrade to Starter</Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;
