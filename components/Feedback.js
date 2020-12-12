import { Box, Divider, Heading, Text } from '@chakra-ui/react'

export default function Feedback({ author, text, createdAt }) {
  return (
    <Box borderRadius={4} maxWidth="700px" w="full">
      <Heading size="sm" as="h3" mb={0} color="gray.700">
        {author}
      </Heading>
      <Text color="gray.500" fontSize="xs" mb={4}>
        {createdAt}
      </Text>
      <Text color="gray.800">{text}</Text>
      <Divider borderColor="gray.200" mb={6} />
    </Box>
  )
}
