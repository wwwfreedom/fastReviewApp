import useSWR from "swr";
import HasPlanEmptyState from "@/components/HasPlanEmptyState";
import SiteTableSkeleton from "@/components/skeletons/SiteTable";
import DashboardShell from "@/components/DashboardShell";
import getRestApi from "@/utils/getRestApi";
import SiteTable from "@/components/SiteTable";
import { useAuth } from "@/lib/auth";
import SiteTableHeader from "@/components/SiteTableHeader";

export default function Dashboard() {
  const { user } = useAuth();
  const { data } = useSWR(user ? ["/api/sites", user.token] : null, getRestApi);
  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <SiteTableHeader />
      {data.sites ? <SiteTable sites={data.sites} /> : <HasPlanEmptyState />}
    </DashboardShell>
  );
}
