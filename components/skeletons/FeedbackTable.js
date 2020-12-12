import { Box, Skeleton } from '@chakra-ui/react'

import { Table, Td, Th, Tr } from '../Table'

const SkeletonRow = () => (
  <Box as="tr">
    <Td>
      <Skeleton height="10px" my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" my={4} />
    </Td>
  </Box>
)

const SiteTableSkeleton = () => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
        </Tr>
      </thead>
      <tbody>
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
      </tbody>
    </Table>
  )
}

export default SiteTableSkeleton
