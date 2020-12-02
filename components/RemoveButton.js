import { useRef, useState } from "react";
import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  IconButton
} from "@chakra-ui/react";
import { RiDeleteBinLine } from "react-icons/ri";
import { mutate } from "swr";

import { deleteFeedback } from "@/lib/firestoreDb";
import { useAuth } from "@/lib/auth";

export default function RemoveButtonAlert({ feedbackId }) {
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef();
  const auth = useAuth();

  const onClose = () => setIsOpen(false);
  const onDeleteFeedback = async () => {
    // TODO: handle delete error
    mutate(
      ["/api/feedback", auth.user.token],
      async (data) => {
        const filteredFeedback = data.feedback.filter(
          (feedback) => feedback.id !== feedbackId
        );
        return { feedback: filteredFeedback };
      },
      false
    );

    onClose();

    await deleteFeedback(feedbackId);
    mutate(["/api/feedback", auth.user.token]);
  };

  return (
    <>
      <IconButton
        variant="ghost"
        aria-label="Delete feedback"
        icon={<RiDeleteBinLine />}
        onClick={() => setIsOpen(true)}
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Feedback
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onDeleteFeedback} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
