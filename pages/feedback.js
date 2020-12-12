import useSWR from 'swr'

import DashboardShell from '@/components/DashboardShell'
import FeedbackTable from '@/components/FeedbackTable'
import FeedbackTableHeader from '@/components/FeedbackTableHeader'
import FeedbackTableSkeleton from '@/components/skeletons/FeedbackTable'
import { useAuth } from '@/lib/auth'
import getRestApi from '@/utils/getRestApi'

import FeedbackEmptyState from '../components/FeedbackEmptyState'

export default function MyFeedback() {
  const { user } = useAuth()
  const { data } = useSWR(
    user ? ['/api/feedback', user.token] : null,
    getRestApi
  )
  if (!data) {
    return (
      <DashboardShell>
        <FeedbackTableHeader />
        <FeedbackTableSkeleton />
      </DashboardShell>
    )
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
  )
}
