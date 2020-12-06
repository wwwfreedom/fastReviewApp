import { useAuth } from "@/lib/auth";
import { updateFeedback } from "@/lib/firestoreDb";
import { Box, Code, Switch } from "@chakra-ui/react";
import { mutate } from "swr";
import RemoveButtonAlert from "./RemoveButton";
import { Td } from "./Table";

export default function FeedbackRow({ feedback }) {
  const { status, author, text, id } = feedback;
  const auth = useAuth();
  const toggleFeedback = async () => {
    const updatedStatus = status === "active" ? "pending" : "active";
    await updateFeedback(id, { status: updatedStatus });
    mutate(["/api/feedback", auth.user.token]);
  };

  return (
    <Box as="tr">
      <Td fontWeight="medium">{author}</Td>
      <Td>{text}</Td>
      <Td>
        <Code>{"/"}</Code>
      </Td>
      <Td>
        <Switch
          colorScheme="green"
          onChange={toggleFeedback}
          isChecked={status === "active"}
        />
      </Td>
      <Td>
        <RemoveButtonAlert feedbackId={id} />
      </Td>
    </Box>
  );
}
