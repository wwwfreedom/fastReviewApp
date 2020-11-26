import { useAuth } from "@/lib/auth";
import HasPlanEmptyState from "@/components/HasPlanEmptyState";
import SiteTableSkeleton from "@/components/skeletons/SiteTable";
import DashboardShell from "@/components/DashboardShell";

export default function Dashboard() {
  const { user } = useAuth();
  if (!user) {
    return (
      <DashboardShell user={user}>
        <SiteTableSkeleton />;
      </DashboardShell>
    );
  }

  return (
    <DashboardShell user={user}>
      <HasPlanEmptyState />;
    </DashboardShell>
  );
}
