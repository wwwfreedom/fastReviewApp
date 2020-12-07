import { Heading, Text, Flex } from "@chakra-ui/react";

export default function FeedbackEmptyState() {
  return (
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius={4}
      p={16}
      direction="column"
      align="center"
    >
      <Heading size="lg" mb={2}>
        There isn't any feedback.
      </Heading>
      <Text mb={4}>Share your site!</Text>
    </Flex>
  );
}
