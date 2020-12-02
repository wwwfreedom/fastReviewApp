import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading
} from "@chakra-ui/react";

export default function FeedbackTableHeader() {
  return (
    <Flex direction="column">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink color="gray.700" fontSize="sm">
            Feedback
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justify="space-between" mb={4}>
        <Heading>My Feedback</Heading>
      </Flex>
    </Flex>
  );
}
