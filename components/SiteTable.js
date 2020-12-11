import { Box, Link } from '@chakra-ui/react'
import { Table, Tr, Th, Td } from './Table'
import NextLink from 'next/link'

const SiteTable = ({ sites }) => {
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
        {sites.map((site) => {
          return (
            <Box as="tr" key={site.url + site.name}>
              <Td>
                <NextLink
                  href="/site/[siteId]"
                  as={`/site/${site.id}`}
                  passHref
                >
                  <Link fontWeight="medium">{site.name}</Link>
                </NextLink>
              </Td>

              <Td>{site.url}</Td>
              <Td>
                <NextLink
                  href="/feedback/[siteId]"
                  as={`/feedback/${site.id}`}
                  passHref
                >
                  <Link color="blue.500" fontWeight="medium">
                    View Feedback
                  </Link>
                </NextLink>
              </Td>
              <Td>{site.createdAt}</Td>
            </Box>
          )
        })}
      </tbody>
    </Table>
  )
}

export default SiteTable
