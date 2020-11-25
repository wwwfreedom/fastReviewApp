import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  Button,
  Text
} from "@chakra-ui/react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
const { useDisclosure } = require("@chakra-ui/react");

export default function AddSiteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const { register, handleSubmit, errors } = useForm();

  const createSite = (value) => {
    console.log(value);
  };

  return (
    <>
      <Button onClick={onOpen} maxW="200px" fontWeight="medium">
        Add Your First Site
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(createSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                name="site"
                ref={initialRef}
                placeholder="Name"
                ref={register({ required: true })}
              />
              {errors.site && (
                <Text mt={1} fontSize="xs" color="red.500">
                  Name field is required
                </Text>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://website.com"
                ref={register({ required: true })}
                name="url"
              />
              {errors.url && (
                <Text mt={1} fontSize="xs" color="red.500">
                  Link field is required
                </Text>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button
              background="#99FFFE"
              color="#194D4C"
              fontWeight="medium"
              type="submit"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
