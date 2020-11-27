import useSWR from "swr";
import HasPlanEmptyState from "@/components/HasPlanEmptyState";
import SiteTableSkeleton from "@/components/skeletons/SiteTable";
import DashboardShell from "@/components/DashboardShell";
import getRestApi from "@/utils/getRestApi";
import SiteTable from "@/components/SiteTable";

export default function Dashboard() {
  const { data } = useSWR("/api/sites", getRestApi);
  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} /> : <HasPlanEmptyState />}
    </DashboardShell>
  );
}
