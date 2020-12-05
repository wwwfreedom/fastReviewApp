import DashboardShell from "@/components/DashboardShell";
import { useAuth } from "@/lib/auth";
import { Box, Button, Stack } from "@chakra-ui/react";
import { createCheckoutSession, goToBillingPortal } from "@/lib/firestoreDb";

export default function Account() {
  const { user } = useAuth();
  // if (!data) {
  //   return (
  //     <DashboardShell>
  //       <SiteTableHeader />
  //       <SiteTableSkeleton />
  //     </DashboardShell>
  //   );
  // }

  return (
    <DashboardShell>
      <Stack direction="row">
        <Button
          size="md"
          onClick={() => createCheckoutSession(user.uid)}
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          _hover={{ bg: "gray.700" }}
          _active={{
            bg: "gray.800",
            transform: "scale(0.95)"
          }}
        >
          Upgrade to starter
        </Button>
        <Button
          size="md"
          onClick={() => goToBillingPortal()}
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          _hover={{ bg: "gray.700" }}
          _active={{
            bg: "gray.800",
            transform: "scale(0.95)"
          }}
        >
          View billing portal
        </Button>
      </Stack>
    </DashboardShell>
  );
}
