import useSWR from "swr";
import FeedbackTableSkeleton from "@/components/skeletons/FeedbackTable";
import DashboardShell from "@/components/DashboardShell";
import getRestApi from "@/utils/getRestApi";
import FeedbackTable from "@/components/FeedbackTable";
import { useAuth } from "@/lib/auth";
import FeedbackTableHeader from "@/components/FeedbackTableHeader";
import FeedbackEmptyState from "../components/FeedbackEmptyState";

export default function MyFeedback() {
  const { user } = useAuth();
  const { data } = useSWR(
    user ? ["/api/feedback", user.token] : null,
    getRestApi
  );
  if (!data) {
    return (
      <DashboardShell>
        <FeedbackTableHeader />
        <FeedbackTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <FeedbackTableHeader />
      {data.feedback.length ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <FeedbackEmptyState />
      )}
    </DashboardShell>
  );
}
