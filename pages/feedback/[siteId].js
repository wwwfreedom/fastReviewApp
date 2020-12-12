import { useRouter } from 'next/router'
import useSWR from 'swr'

import DashboardShell from '@/components/DashboardShell'
import FeedbackEmptyState from '@/components/FeedbackEmptyState'
import FeedbackTable from '@/components/FeedbackTable'
import Page from '@/components/Page'
import SiteFeedbackTableHeader from '@/components/SiteFeedbackTableHeader'
import FeedbackTableSkeleton from '@/components/skeletons/FeedbackTable'
import { useAuth } from '@/lib/auth'
import getRestApi from '@/utils/getRestApi'

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
