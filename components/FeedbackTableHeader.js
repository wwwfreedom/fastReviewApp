import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
} from '@chakra-ui/react'
import NextLink from 'next/link'

export default function FeedbackTableHeader() {
  return (
    <Flex direction="column">
      <Breadcrumb>
        <BreadcrumbItem>
          <NextLink href="/feedback" passHref>
            <BreadcrumbLink color="gray.700" fontSize="sm">
              Feedback
            </BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justify="space-between" mb={4}>
        <Heading>All Feedback</Heading>
      </Flex>
    </Flex>
  )
}
