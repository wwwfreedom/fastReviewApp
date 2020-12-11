import { useAuth } from '@/lib/auth'
import { createSite } from '@/lib/firestoreDb'
import formatDate from '@/utils/formatDate'
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
  Text,
  useToast,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { mutate } from 'swr'
const { useDisclosure } = require('@chakra-ui/react')

const DefaultTriggerComponent = ({ ...props }) => (
  <Button {...props}>Open</Button>
)

export default function AddSiteModal({
  TriggerComponent = DefaultTriggerComponent,
}) {
  const initialRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, handleSubmit, errors } = useForm()
  const toast = useToast()
  const auth = useAuth()

  const onAddSiteSubmit = async ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      name,
      url,
    }

    // get id back from createsite
    const { id } = createSite(newSite)

    // optimistically update the cache and ui
    mutate(
      ['/api/sites', auth.user.token],
      async (data) => ({
        sites: [
          { ...newSite, createdAt: formatDate(new Date()), id },
          ...data.sites,
        ],
      }),
      false
    )

    onClose()

    // trigger a revalidation (refetch) to make sure our local data is correct
    // mutate(["/api/sites", auth.user.token]);

    //TODO: handle unhappy path where the createSite error out

    toast({
      title: 'Success 🙌 ',
      description: "We've added your site",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  }

  return (
    <>
      <TriggerComponent onClick={onOpen} />

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onAddSiteSubmit)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                placeholder="Name"
                ref={(ref) => {
                  initialRef.current = ref
                  register(ref, { required: true })
                }}
              />
              {errors.name && (
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
  )
}
