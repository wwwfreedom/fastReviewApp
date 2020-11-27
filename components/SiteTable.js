import { Box, Link } from "@chakra-ui/react";
import { Table, Tr, Th, Td } from "./Table";

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
            <Box as="tr" key={site.id}>
              <Td fontWeight="medium">{site.name}</Td>
              <Td>{site.url}</Td>
              <Td>
                <Link>View Feedback</Link>
              </Td>
              <Td>{site.createdAt}</Td>
            </Box>
          );
        })}
      </tbody>
    </Table>
  );
};

export default SiteTable;
