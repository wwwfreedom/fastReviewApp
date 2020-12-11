import useSWR from 'swr'
import FeedbackTableSkeleton from '@/components/skeletons/FeedbackTable'
import DashboardShell from '@/components/DashboardShell'
import getRestApi from '@/utils/getRestApi'
import FeedbackTable from '@/components/FeedbackTable'
import { useAuth } from '@/lib/auth'
import Page from '@/components/Page'
import { useRouter } from 'next/router'
import SiteFeedbackTableHeader from '@/components/SiteFeedbackTableHeader'
import FeedbackEmptyState from '@/components/FeedbackEmptyState'

export function SiteFeedback() {
  const { user } = useAuth()
  const { query } = useRouter()
  const { data } = useSWR(
    user ? [`/api/feedback/${query.siteId}`, user.token] : null,
    getRestApi
  )

  if (!data) {
    return (
      <DashboardShell>
        <SiteFeedbackTableHeader />
        <FeedbackTableSkeleton />
      </DashboardShell>
    )
  }

  return (
    <DashboardShell>
      <SiteFeedbackTableHeader siteName={data.site.name} />
      {data.feedback.length ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <FeedbackEmptyState />
      )}
    </DashboardShell>
  )
}

export default function SiteFeedbackPage() {
  return (
    <Page name="Name of site Feedback" path="/feedback">
      <SiteFeedback />
    </Page>
  )
}
