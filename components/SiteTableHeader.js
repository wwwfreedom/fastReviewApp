import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading
} from "@chakra-ui/react";
import AddSiteModal from "./AddSiteModal";

export default function SiteTableHeader() {
  return (
    <Flex direction="column">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink color="gray.700" fontSize="sm">
            Sites
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justify="space-between" mb={4}>
        <Heading>Sites</Heading>
        <AddSiteModal
          TriggerComponent={({ onClick }) => (
            <Button
              backgroundColor="gray.900"
              color="white"
              fontWeight="medium"
              onClick={onClick}
              _hover={{ bg: "gray.700" }}
              _active={{ bg: "gray.800", transform: "scale(0.95)" }}
            >
              + Add Site
            </Button>
          )}
        />
      </Flex>
    </Flex>
  );
}
