import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function SiteFeedbackTableHeader({ siteName = "-" }) {
  return (
    <Flex direction="column">
      <Breadcrumb>
        <BreadcrumbItem>
          <NextLink href="/feedback" passHref>
            <BreadcrumbLink color="gray.700" fontSize="sm">
              Feedback
            </BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink color="gray.700" fontSize="sm">
            {siteName}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justify="space-between" mb={4}>
        <Heading>{siteName}</Heading>
      </Flex>
    </Flex>
  );
}
