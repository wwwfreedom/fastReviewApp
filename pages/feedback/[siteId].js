import useSWR from "swr";
import HasPlanEmptyState from "@/components/HasPlanEmptyState";
import FeedbackTableSkeleton from "@/components/skeletons/FeedbackTable";
import DashboardShell from "@/components/DashboardShell";
import getRestApi from "@/utils/getRestApi";
import FeedbackTable from "@/components/FeedbackTable";
import { useAuth } from "@/lib/auth";
import Page from "@/components/Page";
import { useRouter } from "next/router";
import SiteFeedbackTableHeader from "@/components/SiteFeedbackTableHeader";

export function SiteFeedback() {
  const { user } = useAuth();
  const { query } = useRouter();
  const { data } = useSWR(
    user ? [`/api/feedback/${query.siteId}`, user.token] : null,
    getRestApi
  );

  if (!data) {
    return (
      <DashboardShell>
        <SiteFeedbackTableHeader />
        <FeedbackTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <SiteFeedbackTableHeader siteName={data.site.name} />
      {data.feedback.length ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <HasPlanEmptyState />
      )}
    </DashboardShell>
  );
}

export default function SiteFeedbackPage() {
  return (
    <Page name="Name of site Feedback" path="/feedback">
      <SiteFeedback />
    </Page>
  );
}
