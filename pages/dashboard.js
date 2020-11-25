import { useAuth } from "@/lib/auth";
import HasPlanEmptyState from "@/components/HasPlanEmptyState";

export default function Dashboard() {
  const auth = useAuth();
  if (!auth.user) {
    return "Loading...";
  }
  return <HasPlanEmptyState />;
}
