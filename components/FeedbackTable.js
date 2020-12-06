import { Table, Tr, Th } from "./Table";
import FeedbackRow from "./FeedbackRow";

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
          return <FeedbackRow key={feedback.id} feedback={feedback} />;
        })}
      </tbody>
    </Table>
  );
}
