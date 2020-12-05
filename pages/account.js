import { useState } from "react";
import { Button, Stack } from "@chakra-ui/react";
import DashboardShell from "@/components/DashboardShell";
import { createCheckoutSession, goToBillingPortal } from "@/lib/firestoreDb";
import { useAuth } from "@/lib/auth";

export default function Account() {
  const { user, signout } = useAuth();
  const [isSubscriptionLoading, setIsSubscriptionLoading] = useState(false);
  const [isBillingLoading, setIsBillingLoading] = useState(false);

  return (
    <DashboardShell>
      <Stack direction="row">
        <Button
          size="md"
          onClick={() => {
            setIsSubscriptionLoading(true);
            createCheckoutSession(user.uid);
          }}
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          _hover={{ bg: "gray.700" }}
          _active={{
            bg: "gray.800",
            transform: "scale(0.95)"
          }}
          isLoading={isSubscriptionLoading}
          disabled={isBillingLoading}
        >
          Upgrade to starter
        </Button>
        <Button
          size="md"
          onClick={() => {
            setIsBillingLoading(true);
            goToBillingPortal();
          }}
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          _hover={{ bg: "gray.700" }}
          _active={{
            bg: "gray.800",
            transform: "scale(0.95)"
          }}
          isLoading={isBillingLoading}
          disabled={isSubscriptionLoading}
        >
          View billing portal
        </Button>
        <Button onClick={() => signout()}>Log Out</Button>
      </Stack>
    </DashboardShell>
  );
}
