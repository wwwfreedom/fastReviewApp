import useSWR from 'swr'
import HasPlanEmptyState from '@/components/HasPlanEmptyState'
import SiteTableSkeleton from '@/components/skeletons/SiteTable'
import DashboardShell from '@/components/DashboardShell'
import getRestApi from '@/utils/getRestApi'
import SiteTable from '@/components/SiteTable'
import { useAuth } from '@/lib/auth'
import SiteTableHeader from '@/components/SiteTableHeader'
import FreePlanEmptyState from '@/components/FreePlanEmptyState'
import Page from '@/components/Page'

function Sites() {
  const { user } = useAuth()
  const isPaidAccount = user?.stripeRole
  const { data } = useSWR(user ? ['/api/sites', user.token] : null, getRestApi)
  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    )
  }

  if (data.sites.length) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTable sites={data.sites} />
      </DashboardShell>
    )
  }

  return (
    <DashboardShell>
      <SiteTableHeader isPaidAccount={isPaidAccount} />
      {isPaidAccount ? <HasPlanEmptyState /> : <FreePlanEmptyState />}
    </DashboardShell>
  )
}

export default function DashboardPage() {
  return (
    <Page name="Dashboard" path="/sites">
      <Sites />
    </Page>
  )
}
