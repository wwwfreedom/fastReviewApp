// return static generate page
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Feedback from "@/components/Feedback";
import { useAuth } from "@/lib/auth";
import { createFeedback } from "@/lib/firestoreDb";
import { getAllFeedback, getAllSites } from "@/lib/firestoreDb_admin";
import formatDate from "@/utils/formatDate";

export default function SiteFeedback({ initialFeedback }) {
  const { user } = useAuth();
  const router = useRouter();
  const [feedbacks, setFeebacks] = useState(initialFeedback);
  const { register, handleSubmit, reset } = useForm();

  const onCommentSubmit = ({ comment }) => {
    const newFeedback = {
      author: user.name,
      authorId: user.uid,
      siteId: router.query.siteId,
      text: comment,
      provider: user.provider,
      status: "pending"
    };

    // TODO: handle createFeedback error
    createFeedback(newFeedback);

    // optimistically set the feedback list
    setFeebacks([
      { ...newFeedback, createdAt: formatDate(new Date()) },
      ...initialFeedback
    ]);

    // reset the form
    reset();
  };

  return (
    <Flex direction="column" w="full" maxW="700px" margin="0 auto">
      <Box as="form" onSubmit={handleSubmit(onCommentSubmit)}>
        <FormControl my={8}>
          <FormLabel>Comment</FormLabel>
          <Input ref={register({ required: true })} name="comment" />
          <Button type="submit" mt={4}>
            Add Comment
          </Button>
        </FormControl>
      </Box>
      {feedbacks.map((feedback) => (
        <Feedback key={feedback.id} {...feedback} />
      ))}
    </Flex>
  );
}

export async function getStaticProps(context) {
  const feedback = await getAllFeedback(context.params.siteId);

  return { props: { initialFeedback: feedback } };
}

// generate static site base on all the results from getAllSites
export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString()
    }
  }));

  return {
    paths,
    fallback: false // will 404 with no valid id
  };
}
