import DashboardShell from "@/components/DashboardShell";
import { useAuth } from "@/lib/auth";
import { Box, Button } from "@chakra-ui/react";
import { createCheckoutSession } from "@/lib/firestoreDb";

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
      <Box>
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
      </Box>
    </DashboardShell>
  );
}
