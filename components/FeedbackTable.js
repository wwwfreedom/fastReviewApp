import { Box, Code, Switch } from "@chakra-ui/react";
import { Table, Tr, Th, Td } from "./Table";
import RemoveButtonAlert from "./RemoveButton";

export default function FeedbackTable({ allFeedback }) {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th>{""}</Th>
        </Tr>
      </thead>
      <tbody>
        {allFeedback.map((feedback) => {
          return (
            <Box as="tr" key={feedback.id}>
              <Td fontWeight="medium">{feedback.name}</Td>
              <Td>{feedback.text}</Td>
              <Td>
                <Code>{"/"}</Code>
              </Td>
              <Td>
                <Switch
                  colorScheme="green"
                  defaultIsChecked={feedback.status === "active"}
                />
              </Td>
              <Td>
                <RemoveButtonAlert feedbackId={feedback.id} />
              </Td>
            </Box>
          );
        })}
      </tbody>
    </Table>
  );
}
