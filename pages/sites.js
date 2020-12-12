import useSWR from 'swr'

import DashboardShell from '@/components/DashboardShell'
import FreePlanEmptyState from '@/components/FreePlanEmptyState'
import HasPlanEmptyState from '@/components/HasPlanEmptyState'
import Page from '@/components/Page'
import SiteTable from '@/components/SiteTable'
import SiteTableHeader from '@/components/SiteTableHeader'
import SiteTableSkeleton from '@/components/skeletons/SiteTable'
import { useAuth } from '@/lib/auth'
import getRestApi from '@/utils/getRestApi'

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
